import React, { useState, useRef, useEffect } from 'react';
import KnowledgeBase from './KnowledgeBase';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import QuizGenerator from './QuizGenerator';
import Navbar from '../Navbar';

const RAGChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hi! I\'m your AI study assistant. Ask me anything about your study materials!',
      citations: []
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Physics Chapter 5.pdf', status: 'indexed' },
    { id: 2, name: 'Chemistry Notes.pdf', status: 'indexed' }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message) => {
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: message
    };
    setMessages([...messages, userMessage]);
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/rag/chat', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ message, documents })
      // });
      // const data = await response.json();

      // Mock response for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: 'Newton\'s Second Law states that Force equals mass times acceleration (F=ma). This means the acceleration of an object depends on the net force acting upon it and its mass.',
        citations: [
          { doc: 'Physics Chapter 5.pdf', page: 3 }
        ]
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDocumentUpload = (file) => {
    // TODO: Replace with actual API call
    const newDoc = {
      id: documents.length + 1,
      name: file.name,
      status: 'uploading'
    };
    setDocuments([...documents, newDoc]);

    // Mock upload completion
    setTimeout(() => {
      setDocuments(prev => prev.map(doc =>
        doc.id === newDoc.id ? { ...doc, status: 'indexed' } : doc
      ));
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Navbar at top */}
      <Navbar />

      {/* Rest of the UI */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel: Knowledge Base */}
        <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <KnowledgeBase
            documents={documents}
            onUpload={handleDocumentUpload}
          />
        </div>

        {/* Center Panel: Chat */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                <span>AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          </div>
        </div>

        {/* Right Panel: Tools */}
        <div className="w-72 bg-white border-l border-gray-200 overflow-y-auto p-4">
          <h3 className="font-semibold text-gray-700 mb-4">Study Tools</h3>
          <QuizGenerator />
          {/* Add more tools: Summarizer, Lesson Planner, etc. */}
        </div>
      </div>
    </div>
  );
};

export default RAGChat;