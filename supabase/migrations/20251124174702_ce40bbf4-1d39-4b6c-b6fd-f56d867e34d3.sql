-- Create enum for chat status
CREATE TYPE public.chat_status AS ENUM ('open', 'in_progress', 'closed');

-- Create enum for message sender type
CREATE TYPE public.message_sender_type AS ENUM ('visitor', 'support');

-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'support', 'user');

-- Create chat_sessions table
CREATE TABLE public.chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_name TEXT NOT NULL,
  visitor_email TEXT NOT NULL,
  status chat_status NOT NULL DEFAULT 'open',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat_messages table
CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES public.chat_sessions(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  sender_type message_sender_type NOT NULL,
  sender_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_roles table for admin access
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE(user_id, role)
);

-- Create function to update chat_sessions updated_at
CREATE OR REPLACE FUNCTION public.update_chat_sessions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for chat_sessions
CREATE TRIGGER update_chat_sessions_updated_at
  BEFORE UPDATE ON public.chat_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_chat_sessions_updated_at();

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Enable RLS
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- RLS policies for chat_sessions
-- Anyone can create a new chat session
CREATE POLICY "Anyone can create chat sessions"
  ON public.chat_sessions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Anyone can view chat sessions (needed for visitors to see their own chat)
CREATE POLICY "Anyone can view chat sessions"
  ON public.chat_sessions
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only support/admin can update chat sessions
CREATE POLICY "Support can update chat sessions"
  ON public.chat_sessions
  FOR UPDATE
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'support') OR 
    public.has_role(auth.uid(), 'admin')
  );

-- RLS policies for chat_messages
-- Anyone can insert messages
CREATE POLICY "Anyone can create messages"
  ON public.chat_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Anyone can view messages
CREATE POLICY "Anyone can view messages"
  ON public.chat_messages
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS policies for user_roles
-- Only admins can manage roles
CREATE POLICY "Admins can manage roles"
  ON public.user_roles
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Users can view their own roles
CREATE POLICY "Users can view own roles"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Enable realtime for chat tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_sessions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_messages;