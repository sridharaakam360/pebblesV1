import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, MessageSquarePlus } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Message } from '../types';
import RevealOnScroll from './RevealOnScroll';

const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: "Hi! I'm the Pebbles AI Assistant. Ask me about our services, how we build apps, or just say hello!",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent, promptText?: string) => {
    if (e) e.preventDefault();
    const textToSend = promptText || input;
    
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY;
      
      if (!apiKey) {
        // Fallback demo mode if no key is present in environment
        setTimeout(() => {
             const demoResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: "I see you're interested! Since this is a demo environment without a live API key, I can tell you that Pebbles Tech Studio specializes in integrating real AI models like this into your business applications. Contact us to build your own!",
                timestamp: new Date()
              };
              setMessages(prev => [...prev, demoResponse]);
              setIsLoading(false);
        }, 1000);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `
          System: You are a helpful, professional, and slightly witty AI assistant for 'Pebbles Tech Studio'. 
          Your company provides Web Dev, Mobile Apps, and Gen AI solutions.
          Keep answers concise (under 80 words) and helpful. 
          Use clear formatting.
          The user says: ${textToSend}
        `,
      });

      const text = response.text || "I'm pondering that thought... (AI response empty)";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: text,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("GenAI Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I seem to be having trouble connecting to the neural network. Please try again later.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "What services do you offer?",
    "How much does a website cost?",
    "Can you build a mobile app?",
    "Explain your Gen AI solutions"
  ];

  return (
    <section id="gen-ai" className="py-24 bg-pebble-900 text-white overflow-hidden relative scroll-mt-16">
       {/* Decorative BG */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent-600 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[100px]"></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pebble-800 text-accent-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              Gen AI Powerhouse
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Experience the Future <br/> of <span className="text-accent-500">Interaction</span>.
            </h2>
            <p className="text-pebble-200 text-lg mb-8 leading-relaxed">
              We don't just build websites; we build intelligent systems. 
              Our Gen AI solutions can automate support, generate content, and analyze data in real-time.
              Try our demo assistant right here.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-pebble-800/50 p-4 rounded-xl border border-pebble-700 backdrop-blur-sm">
                    <h4 className="font-bold text-white mb-2">LLM Integration</h4>
                    <p className="text-sm text-pebble-300">Seamlessly connect Gemini, GPT, or Claude into your existing workflow.</p>
                </div>
                <div className="bg-pebble-800/50 p-4 rounded-xl border border-pebble-700 backdrop-blur-sm">
                    <h4 className="font-bold text-white mb-2">Smart Agents</h4>
                    <p className="text-sm text-pebble-300">Autonomous agents that perform tasks, schedule meetings, and more.</p>
                </div>
            </div>
          </RevealOnScroll>

          {/* Chat Interface */}
          <RevealOnScroll delay={200} className="bg-slate-900 rounded-2xl border border-pebble-700 shadow-2xl overflow-hidden flex flex-col h-[600px]">
            <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-2 text-sm text-slate-400 font-mono">pebbles-ai-agent.exe</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/90 scrollbar-thin scrollbar-thumb-pebble-700 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[85%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-accent-600' : 'bg-pebble-700'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user' 
                        ? 'bg-accent-600 text-white rounded-tr-none' 
                        : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="flex max-w-[80%] gap-3">
                        <div className="w-8 h-8 rounded-full bg-pebble-700 flex items-center justify-center flex-shrink-0">
                            <Bot size={16} />
                        </div>
                        <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700 flex items-center gap-2">
                             <Loader2 size={16} className="animate-spin text-accent-500" />
                             <span className="text-xs text-slate-400">Thinking...</span>
                        </div>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-slate-800 border-t border-slate-700">
               {/* Suggestion Chips */}
               <div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar">
                  {suggestions.map((s, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSend(undefined, s)}
                      disabled={isLoading}
                      className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-700 text-xs text-slate-300 hover:bg-accent-600 hover:text-white transition-colors border border-slate-600 flex-shrink-0"
                    >
                      {s}
                    </button>
                  ))}
               </div>

               <form onSubmit={(e) => handleSend(e)} className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Pebbles AI something..."
                  className="w-full bg-slate-900 text-white pl-4 pr-12 py-3 rounded-xl border border-slate-700 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 placeholder-slate-500"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-2 p-1.5 bg-accent-600 text-white rounded-lg hover:bg-accent-500 disabled:opacity-50 disabled:hover:bg-accent-600 transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;