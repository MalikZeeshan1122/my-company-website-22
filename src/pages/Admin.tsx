import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Send } from "lucide-react";

export default function Admin() {
  const [sessions, setSessions] = useState<any[]>([]);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/admin-login");
        return;
      }

      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user?.email) {
        setUserName(userData.user.email.split('@')[0]);
      }
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/admin-login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    fetchSessions();

    const channel = supabase
      .channel('admin_sessions')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'chat_sessions'
        },
        () => {
          fetchSessions();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    if (!selectedSession) return;

    fetchMessages(selectedSession);

    const channel = supabase
      .channel(`admin_messages_${selectedSession}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${selectedSession}`
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedSession]);

  const fetchSessions = async () => {
    const { data, error } = await supabase
      .from('chat_sessions')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setSessions(data);
    }
  };

  const fetchMessages = async (sessionId: string) => {
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true });

    if (!error && data) {
      setMessages(data);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedSession) return;

    try {
      const { error } = await supabase
        .from('chat_messages')
        .insert({
          session_id: selectedSession,
          content: newMessage,
          sender_type: 'support',
          sender_name: userName || 'Support'
        });

      if (error) throw error;

      await supabase
        .from('chat_sessions')
        .update({ status: 'in_progress' })
        .eq('id', selectedSession);

      setNewMessage("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message"
      });
    }
  };

  const closeSession = async () => {
    if (!selectedSession) return;

    const { error } = await supabase
      .from('chat_sessions')
      .update({ status: 'closed' })
      .eq('id', selectedSession);

    if (!error) {
      setSelectedSession(null);
      fetchSessions();
      toast({
        title: "Success",
        description: "Chat session closed"
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  const selectedSessionData = sessions.find(s => s.id === selectedSession);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Support Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Active Chats</CardTitle>
              <CardDescription>Select a conversation to respond</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  onClick={() => setSelectedSession(session.id)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedSession === session.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-semibold">{session.visitor_name}</p>
                    <Badge variant={session.status === 'open' ? 'default' : 'secondary'}>
                      {session.status}
                    </Badge>
                  </div>
                  <p className="text-sm opacity-80">{session.visitor_email}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>
                {selectedSessionData
                  ? `Chat with ${selectedSessionData.visitor_name}`
                  : 'Select a chat'}
              </CardTitle>
              {selectedSessionData && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={closeSession}>
                    Close Chat
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {selectedSession ? (
                <div className="flex flex-col h-[500px]">
                  <div className="flex-1 overflow-auto space-y-4 mb-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${
                          msg.sender_type === 'support' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            msg.sender_type === 'support'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          <p className="text-xs font-semibold mb-1">{msg.sender_name}</p>
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your response..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <Button onClick={sendMessage} size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="h-[500px] flex items-center justify-center text-muted-foreground">
                  Select a chat to start responding
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
