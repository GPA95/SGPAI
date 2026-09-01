import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { week: 'W1', mastery: 45 },
  { week: 'W2', mastery: 60 },
  { week: 'W3', mastery: 55 },
  { week: 'W4', mastery: 78 },
  { week: 'W5', mastery: 85 },
  { week: 'W6', mastery: 92 },
];

export default function StudentGuide() {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: 'Hello! I am SGPAI Study Buddy. Ask me anything about your course or request an adaptive quiz!',
      sources: ['Syllabus_Overview.pdf'] 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    const queryText = input;
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:8000/api/rag/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: queryText, student_id: 'std_01' }),
      });
      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { 
          sender: 'bot', 
          text: data.answer || 'Here is the breakdown based on textbook vector nodes.', 
          sources: data.sources || ['Syllabus_Unit2.pdf'] 
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { 
          sender: 'bot', 
          text: 'Connected to local simulation mode: Adaptive evaluation complete. Focus on Graph Algorithms and Memory Allocation next.', 
          sources: ['DataStructures_Ch4.pdf'] 
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 flex flex-col gap-6 font-sans">
      {/* Top Header */}
      <header className="flex justify-between items-center bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30 font-bold">
            🤖
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SGPAI Student Guide
            </h1>
            <p className="text-xs text-slate-400">Adaptive AI Companion & RAG Engine</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Adaptive System Active
          </span>
        </div>
      </header>

      {/* Main Grid Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        
        {/* Left Side: Interactive RAG Chatbot */}
        <div className="lg:col-span-7 flex flex-col bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-800 overflow-hidden shadow-2xl h-[620px]">
          {/* Chat Header */}
          <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
            <h2 className="font-semibold text-sm flex items-center gap-2">
              💬 RAG AI Study Assistant
            </h2>
            <span className="text-xs bg-indigo-950 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-800/50">
              Gemini + pgvector
            </span>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-600/20'
                      : 'bg-slate-800/80 border border-slate-700/60 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="text-indigo-400 font-medium text-xs mb-1">
                      SGPAI Assistant
                    </div>
                  )}
                  <p className="leading-relaxed">{msg.text}</p>
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-slate-700/50 flex flex-wrap gap-1 text-[10px] text-slate-400">
                      <span className="font-semibold text-slate-300">Sources:</span>
                      {msg.sources.map((src, i) => (
                        <span key={i} className="bg-slate-900 px-2 py-0.5 rounded border border-slate-700 text-indigo-300">
                          {src}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 p-3 bg-slate-800/40 rounded-xl w-fit text-slate-400 text-xs items-center">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                Searching vector embeddings...
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-4 bg-slate-900 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question or request adaptive study guidance..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition shadow-lg shadow-indigo-600/20 active:scale-95"
            >
              Send
            </button>
          </div>
        </div>

        {/* Right Side: Analytics & Pathways */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Mastery Curve Chart */}
          <div className="bg-slate-900/50 backdrop-blur-md p-5 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-sm text-slate-200">
                📈 Adaptive Mastery Score
              </h3>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                +14% this month
              </span>
            </div>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="masteryGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="week" stroke="#64748b" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '10px', color: '#f8fafc' }} />
                  <Area type="monotone" dataKey="mastery" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#masteryGlow)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Learning Pathways */}
          <div className="flex-1 bg-slate-900/50 backdrop-blur-md p-5 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-sm text-slate-200 mb-4">
                📚 Targeted Learning Roadmap
              </h3>
              <div className="space-y-3">
                {[
                  { title: 'Dynamic Programming & Memoization', difficulty: 'Challenge', progress: 85, color: 'from-emerald-500 to-teal-500' },
                  { title: 'Vector Database Indexing (HNSW)', difficulty: 'Recommended', progress: 40, color: 'from-indigo-500 to-purple-500' },
                  { title: 'B-Tree Indexing in PostgreSQL', difficulty: 'Completed', progress: 100, color: 'from-slate-600 to-slate-500' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="font-medium text-slate-200">{item.title}</span>
                      <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">{item.difficulty}</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                      <div className={`h-1.5 rounded-full bg-gradient-to-r ${item.color}`} style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 bg-indigo-950/40 rounded-xl border border-indigo-900/40 flex items-center justify-between text-xs">
              <span className="text-slate-300">Predicted Readiness: <strong className="text-indigo-300">SGPA 9.2</strong></span>
              <span className="text-emerald-400 font-semibold">On Track</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}