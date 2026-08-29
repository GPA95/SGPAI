import React from 'react';
import RAGChat from '../components/rag/RAGChat';

const StudentRAG = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Study Buddy RAG Chat</h1>
      <div className="bg-white rounded-lg shadow-md p-6 h-[600px]">
        <RAGChat />
      </div>
    </div>
  );
};

export default StudentRAG;
