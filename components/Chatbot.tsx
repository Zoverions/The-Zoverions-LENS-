
import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import type { ChatMessage } from '../types';
import { askAI } from '../services/geminiService';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: "Hello! I am the System 2 AI of this Cognitive Symbiote. How can I help you understand the Zoverions Framework?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = useCallback(async () => {
        if (inputValue.trim() === '' || isLoading) return;

        const newMessages: ChatMessage[] = [...messages, { role: 'user', text: inputValue }];
        setMessages(newMessages);
        setInputValue('');
        setIsLoading(true);

        const responseText = await askAI(inputValue);
        
        setMessages(prevMessages => [...prevMessages, { role: 'model', text: responseText }]);
        setIsLoading(false);
    }, [inputValue, isLoading, messages]);


    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg text-white flex items-center justify-center transform hover:scale-110 transition-transform duration-200 animate-pulse-subtle"
                aria-label="Toggle Chatbot"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5c0 2.28 1.51 4.2 3.61 4.86"/><path d="M21 12c0 4.42-3.58 8-8 8-2.93 0-5.5-1.58-6.95-3.95"/><path d="M12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5c0-2.28-1.51-4.2-3.61-4.86"/><path d="M3 12c0-4.42 3.58-8 8-8 2.93 0 5.5 1.58 6.95 3.95"/></svg>
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 z-30 w-[calc(100%-3rem)] max-w-sm h-[60vh] max-h-[500px] bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-lg shadow-2xl flex flex-col animate-slide-in-up">
                    <header className="p-4 border-b border-gray-700 flex justify-between items-center">
                        <h3 className="font-bold text-white">Zoverions AI Assistant</h3>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </header>
                    
                    <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                                {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 flex-shrink-0"></div>}
                                <div className={`max-w-[80%] rounded-lg p-3 text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}>
                                    <div className="prose prose-invert prose-sm max-w-none">
                                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 flex-shrink-0"></div>
                                <div className="max-w-[80%] rounded-lg p-3 text-sm bg-gray-800 text-gray-300 flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0s'}}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <footer className="p-4 border-t border-gray-700">
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about the framework..."
                                className="flex-1 bg-gray-800 border border-gray-600 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                disabled={isLoading}
                            />
                            <button onClick={handleSendMessage} disabled={isLoading || inputValue.trim() === ''} className="w-10 h-10 bg-cyan-600 rounded-full text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                            </button>
                        </div>
                    </footer>
                </div>
            )}
        </>
    );
};

export default Chatbot;
