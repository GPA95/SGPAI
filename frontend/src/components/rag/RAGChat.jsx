import React, { useState } from 'react';

const RAGChat = () => {
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Hello! I am your Study Buddy. Ask me anything about your documents.' }]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    
    setTimeout(() => {
       setMessages(prev => [...prev, { role: 'assistant', text: 'This is a mock response from the Gemini API. [Source: Mock Document, Page 1]' }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto mb-4 border p-4 rounded bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 p-2 rounded max-w-[80%] ${msg.role === 'user' ? 'bg-blue-100 self-end ml-auto' : 'bg-gray-200 self-start'}`}>
            <p className="text-sm">{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask a question..."
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </div>
    </div>
  );
};

export default RAGChat;
