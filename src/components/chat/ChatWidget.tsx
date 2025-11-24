import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Loader2, Minimize2 } from "lucide-react";
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
  const [isMinimized, setIsMinimized] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const savedSession = localStorage.getItem('chatSessionId');
    const savedMessages = localStorage.getItem('chatMessages');
    const savedName = localStorage.getItem('chatVisitorName');
    const savedEmail = localStorage.getItem('chatVisitorEmail');

    if (savedSession && savedMessages && savedName) {
      setSessionId(savedSession);
      setMessages(JSON.parse(savedMessages));
      setVisitorName(savedName);
      setVisitorEmail(savedEmail || '');
      setIsStarted(true);
    }
  }, []);

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
          setMessages((prev) => {
            const updated = [...prev, payload.new];
            localStorage.setItem('chatMessages', JSON.stringify(updated));
            return updated;
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [sessionId]);

  const getAiResponse = async (userMessage: string) => {
    setIsAiTyping(true);
    try {
      const conversationHistory = messages.map(msg => ({
        role: msg.sender_type === 'visitor' ? 'user' : 'assistant',
        content: msg.content
      }));
      
      conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      const { data, error } = await supabase.functions.invoke('chat-ai-response', {
        body: { 
          messages: conversationHistory,
          sessionId 
        }
      });

      if (error) throw error;

      const aiMessage = data.message;
      
      const { error: insertError } = await supabase
        .from('chat_messages')
        .insert({
          session_id: sessionId,
          content: aiMessage,
          sender_type: 'support',
          sender_name: 'AI Assistant'
        });

      if (insertError) throw insertError;

    } catch (error) {
      console.error('AI response error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get AI response"
      });
    } finally {
      setIsAiTyping(false);
    }
  };

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
      
      const initialMessage = {
        content: validation.message,
        sender_type: 'visitor',
        sender_name: validation.name,
        created_at: new Date().toISOString()
      };
      
      setMessages([initialMessage]);
      setNewMessage("");
      
      localStorage.setItem('chatSessionId', session.id);
      localStorage.setItem('chatMessages', JSON.stringify([initialMessage]));
      localStorage.setItem('chatVisitorName', validation.name);
      localStorage.setItem('chatVisitorEmail', validation.email);
      
      toast({
        title: "Chat started",
        description: "Our AI assistant will respond shortly"
      });

      await getAiResponse(validation.message);
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
    if (!newMessage.trim() || !sessionId || isAiTyping) return;

    const messageToSend = newMessage;
    setNewMessage("");

    try {
      const validation = z.string().trim().min(1).max(1000).parse(messageToSend);

      const { error } = await supabase
        .from('chat_messages')
        .insert({
          session_id: sessionId,
          content: validation,
          sender_type: 'visitor',
          sender_name: visitorName
        });

      if (error) throw error;

      await getAiResponse(validation);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message"
      });
    }
  };

  const clearChat = () => {
    localStorage.removeItem('chatSessionId');
    localStorage.removeItem('chatMessages');
    localStorage.removeItem('chatVisitorName');
    localStorage.removeItem('chatVisitorEmail');
    setSessionId(null);
    setMessages([]);
    setIsStarted(false);
    setVisitorName("");
    setVisitorEmail("");
    toast({
      title: "Chat cleared",
      description: "Starting a fresh conversation"
    });
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl z-50 bg-gradient-to-br from-primary to-primary/80 hover:shadow-primary/20 hover:scale-110 transition-all duration-300"
          size="icon"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      )}

      {isOpen && (
        <Card className={`fixed bottom-6 right-6 w-96 shadow-2xl z-50 flex flex-col transition-all duration-300 ${
          isMinimized ? 'h-14' : 'h-[550px]'
        }`}>
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
              <h3 className="font-semibold">Chat Support</h3>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-primary-foreground hover:bg-primary/90 h-8 w-8"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary/90 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && !isStarted ? (
            <div className="flex-1 p-5 space-y-4 overflow-auto bg-gradient-to-b from-background to-muted/20">
              <div className="text-center space-y-2 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg">Welcome! 👋</h4>
                <p className="text-sm text-muted-foreground">
                  Chat with our AI assistant for instant help
                </p>
              </div>
              <Input
                placeholder="Your Name *"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                maxLength={100}
                className="border-primary/20 focus:border-primary"
              />
              <Input
                type="email"
                placeholder="Your Email *"
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
                maxLength={255}
                className="border-primary/20 focus:border-primary"
              />
              <Textarea
                placeholder="What can we help you with today? *"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                rows={4}
                maxLength={1000}
                className="border-primary/20 focus:border-primary resize-none"
              />
              <Button 
                onClick={startChat} 
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Starting...
                  </>
                ) : (
                  "Start Chat"
                )}
              </Button>
            </div>
          ) : !isMinimized ? (
            <>
              <div className="flex-1 p-4 space-y-3 overflow-auto bg-gradient-to-b from-background to-muted/10">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.sender_type === 'visitor' ? 'justify-end' : 'justify-start'
                    } animate-in fade-in slide-in-from-bottom-2`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-sm ${
                        msg.sender_type === 'visitor'
                          ? 'bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-br-sm'
                          : 'bg-card border border-border rounded-bl-sm'
                      }`}
                    >
                      <p className="text-xs font-semibold mb-1 opacity-80">
                        {msg.sender_name}
                      </p>
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isAiTyping && (
                  <div className="flex justify-start animate-in fade-in">
                    <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-sm">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t bg-background/50 backdrop-blur-sm">
                <div className="flex gap-2 mb-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearChat}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    New Chat
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                    maxLength={1000}
                    disabled={isAiTyping}
                    className="border-primary/20 focus:border-primary"
                  />
                  <Button 
                    onClick={sendMessage} 
                    size="icon"
                    disabled={isAiTyping || !newMessage.trim()}
                    className="bg-gradient-to-br from-primary to-primary/90 hover:shadow-lg transition-all"
                  >
                    {isAiTyping ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </>
          ) : null}
        </Card>
      )}
    </>
  );
};
