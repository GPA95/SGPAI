import React from 'react';
import RAGChat from '../components/rag/RAGChat';
import StudentTools from '../components/rag/tools/StudentTools';

function StudentRAG() {
  return (
    <RAGChat
      userType="student"
      toolsPanel={<StudentTools />}
      initialDocuments={[]}
    />
  );
}

export default StudentRAG;
