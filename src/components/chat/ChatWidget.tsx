import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const chatSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000)
});

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!sessionId) return;

    const channel = supabase
      .channel(`chat_${sessionId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${sessionId}`
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [sessionId]);

  const startChat = async () => {
    try {
      const validation = chatSchema.parse({
        name: visitorName,
        email: visitorEmail,
        message: newMessage
      });

      setIsLoading(true);

      const { data: session, error: sessionError } = await supabase
        .from('chat_sessions')
        .insert({
          visitor_name: validation.name,
          visitor_email: validation.email
        })
        .select()
        .single();

      if (sessionError) throw sessionError;

      const { error: messageError } = await supabase
        .from('chat_messages')
        .insert({
          session_id: session.id,
          content: validation.message,
          sender_type: 'visitor',
          sender_name: validation.name
        });

      if (messageError) throw messageError;

      setSessionId(session.id);
      setIsStarted(true);
      setMessages([{
        content: validation.message,
        sender_type: 'visitor',
        sender_name: validation.name,
        created_at: new Date().toISOString()
      }]);
      setNewMessage("");
      
      toast({
        title: "Chat started",
        description: "A support agent will be with you shortly"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation error",
          description: error.errors[0].message
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to start chat"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !sessionId) return;

    try {
      const validation = z.string().trim().min(1).max(1000).parse(newMessage);

      const { error } = await supabase
        .from('chat_messages')
        .insert({
          session_id: sessionId,
          content: validation,
          sender_type: 'visitor',
          sender_name: visitorName
        });

      if (error) throw error;

      setNewMessage("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message"
      });
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground">
            <h3 className="font-semibold">Live Chat Support</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary/90"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {!isStarted ? (
            <div className="flex-1 p-4 space-y-4 overflow-auto">
              <p className="text-sm text-muted-foreground">
                Please provide your details to start chatting with our support team.
              </p>
              <Input
                placeholder="Your Name"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                maxLength={100}
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
                maxLength={255}
              />
              <Textarea
                placeholder="How can we help you?"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                rows={4}
                maxLength={1000}
              />
              <Button 
                onClick={startChat} 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Starting..." : "Start Chat"}
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 p-4 space-y-4 overflow-auto">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.sender_type === 'visitor' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        msg.sender_type === 'visitor'
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

              <div className="p-4 border-t flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  maxLength={1000}
                />
                <Button onClick={sendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  );
};
