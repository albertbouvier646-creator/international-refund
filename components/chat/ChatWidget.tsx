
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MessageCircle, X, Send, Minimize2, Sparkles } from "lucide-react";
import { GoogleGenAI, Chat } from "@google/genai";
import { motion, AnimatePresence } from "framer-motion";
import MessageBubble from "./MessageBubble";
import { useLanguage } from "../../LanguageContext";
import { getTranslation } from "../../translations";

export default function ChatWidget() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [proactiveMessage, setProactiveMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Use a ref to hold the Chat session so it persists across renders without triggering re-renders
  const chatSessionRef = useRef<Chat | null>(null);

  const quickReplies = [
    t('quick_reply_1'),
    t('quick_reply_2'),
    t('quick_reply_3'),
    t('quick_reply_4'),
    t('quick_reply_5'),
    t('quick_reply_6')
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Proactive message timer
  useEffect(() => {
    if (isOpen) {
      setProactiveMessage("");
      return;
    }

    const timer = setTimeout(() => {
        // Pick a random question from quick replies to tempt the user
        const randomQuestion = quickReplies[Math.floor(Math.random() * quickReplies.length)];
        setProactiveMessage(randomQuestion);
    }, 15000); // 15 seconds of inactivity

    return () => clearTimeout(timer);
  }, [isOpen, language, t]);

  // Initialize chat when widget opens
  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            chatSessionRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: `You are a helpful, professional, and empathetic support assistant for the International Refund Agency. 
                    Your goal is to assist users with questions about fund recovery services, including cryptocurrency recovery, investment fraud, insurance claims, and more.
                    The user is currently browsing the website in ${language} language. Respond in the same language as the user.
                    Be concise but informative. Do not ask for sensitive personal financial information like passwords or private keys directly in the chat.`
                },
                history: [
                    { role: 'model', parts: [{ text: t('chat_welcome') }] }
                ]
            });
            setMessages([{ role: 'assistant', content: t('chat_welcome') }]);
        } catch (e) {
            console.error("Failed to initialize chat", e);
        }
    }
  }, [isOpen, language, t]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || !chatSessionRef.current) return;

    const currentInput = message;
    setInputMessage("");
    setShowQuickReplies(false);
    setIsLoading(true);

    // Add user message to UI immediately
    setMessages(prev => [...prev, { role: "user", content: currentInput }]);

    try {
      const result = await chatSessionRef.current.sendMessage({ message: currentInput });
      const responseText = result.text;
      
      if (responseText) {
          setMessages(prev => [...prev, { role: "assistant", content: responseText }]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "I apologize, but I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputMessage);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl group relative"
            >
              <MessageCircle className="h-7 w-7 text-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
            </Button>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-3 w-48 border border-slate-200"
            >
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  {proactiveMessage || t('chat_need_help')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "auto" : "600px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden z-50"
            style={{ maxHeight: isMinimized ? "70px" : "600px" }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-700"></span>
                </div>
                <div>
                  <h3 className="font-semibold">{t('chat_support_assistant')}</h3>
                  <div className="flex items-center gap-1 text-xs text-blue-100">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    {t('chat_online')}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-8 w-8 text-white hover:bg-white/20"
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                  {messages.map((message, idx) => (
                    <MessageBubble key={idx} message={message} />
                  ))}
                  
                  {isLoading && (
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      </div>
                      <span>{t('chat_typing')}</span>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {showQuickReplies && messages.length <= 1 && (
                  <div className="px-4 py-3 bg-white border-t border-slate-200">
                    <p className="text-xs text-slate-500 mb-2">{t('chat_quick_questions')}</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.slice(0, 3).map((reply, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickReply(reply)}
                          className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors border border-blue-200"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4 bg-white border-t border-slate-200">
                  <div className="flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={t('chat_placeholder')}
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={() => handleSendMessage(inputMessage)}
                      disabled={!inputMessage.trim() || isLoading}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 text-center">
                    {t('chat_powered')}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
