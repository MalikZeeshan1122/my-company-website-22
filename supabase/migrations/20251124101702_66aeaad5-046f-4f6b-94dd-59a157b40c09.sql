-- Create storage bucket for contact form attachments
INSERT INTO storage.buckets (id, name, public)
VALUES ('contact-attachments', 'contact-attachments', false);

-- Create storage policies for contact attachments
CREATE POLICY "Anyone can upload contact attachments"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'contact-attachments');

CREATE POLICY "Service role can access all contact attachments"
ON storage.objects
FOR SELECT
USING (bucket_id = 'contact-attachments');

-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  project_type TEXT NOT NULL,
  budget TEXT NOT NULL,
  message TEXT NOT NULL,
  attachments JSONB DEFAULT '[]'::jsonb,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'contacted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy allowing service role to insert
CREATE POLICY "Service role can insert contact submissions"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Create policy allowing service role to read
CREATE POLICY "Service role can read contact submissions"
ON public.contact_submissions
FOR SELECT
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_contact_submissions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_contact_submissions_updated_at();