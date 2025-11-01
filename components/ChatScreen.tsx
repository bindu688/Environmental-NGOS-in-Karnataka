import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { BackArrowIcon, SendIcon } from './Icons';
import type { ChatMessage } from '../types';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';
import type { Language } from '../App';

interface ChatScreenProps {
    onNavigateToHome: () => void;
    language: Language;
    onLanguageChange: (language: Language) => void;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ onNavigateToHome, language, onLanguageChange }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chatRef = useRef<Chat | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  useEffect(() => {
    const initChat = () => {
        try {
            if (!process.env.API_KEY) {
                throw new Error(t.chat.api_key_error);
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: t.chat.system_instruction,
                },
            });
            // Reset state for new session
            setMessages([]);
            setError(null);
            setIsLoading(false);
        } catch (err) {
            console.error('Failed to initialize chat:', err);
            const errorMessage = err instanceof Error ? err.message : t.chat.unknown_error;
            setError(errorMessage);
        }
    };
    initChat();
  }, [language, t.chat.system_instruction, t.chat.api_key_error, t.chat.unknown_error]);
  
  useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const messageText = inputText.trim();
    if (!messageText || isLoading || !chatRef.current) return;

    setIsLoading(true);
    setInputText('');
    setMessages(prev => [...prev, { id: Date.now(), author: 'user', text: messageText }]);

    try {
        const response = await chatRef.current.sendMessage({ message: messageText });
        const modelResponse = response.text;
        setMessages(prev => [...prev, { id: Date.now() + 1, author: 'model', text: modelResponse }]);
    } catch (err) {
        console.error('Failed to send message:', err);
        setError(t.chat.session_error);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-emerald-50">
      <header className="flex items-center justify-between p-4 bg-emerald-600 text-white shadow-md">
        <button onClick={onNavigateToHome} className="p-2 rounded-full hover:bg-emerald-700" aria-label={t.chat.back_button_aria}>
          <BackArrowIcon className="h-6 w-6" />
        </button>
        <h2 className="text-xl font-bold text-center flex-1 mx-4">{t.chat.title}</h2>
        <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
      </header>
      
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="p-4 bg-white rounded-xl shadow-sm text-center text-gray-700">
          <p>{t.chat.welcome_message}</p>
        </div>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.author === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${msg.author === 'user' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-800 shadow-sm'}`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
                <div className="max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl bg-white text-gray-800 shadow-sm">
                    <div className="flex items-center space-x-2">
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
                    </div>
                </div>
            </div>
        )}
         {error && (
            <div className="p-4 bg-red-100 rounded-xl shadow-sm text-center text-red-700">
                <p>{error}</p>
            </div>
        )}
      </div>
      
      <footer className="p-2 bg-white border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(e);
                    }
                }}
                placeholder={t.chat.input_placeholder}
                className="flex-1 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                rows={1}
                disabled={isLoading}
            />
            <button
                type="submit"
                className="p-3 bg-emerald-500 text-white rounded-full disabled:bg-gray-400 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                disabled={isLoading || !inputText.trim()}
                aria-label={t.chat.send_button_aria}
            >
                <SendIcon className="h-6 w-6" />
            </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatScreen;