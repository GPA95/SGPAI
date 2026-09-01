import React from 'react';
import RAGChat from '../components/rag/RAGChat';
import TeacherTools from '../components/rag/tools/TeacherTools';

function TeacherRAG() {
  return (
    <RAGChat
      userType="teacher"
      toolsPanel={<TeacherTools />}
      initialDocuments={[]}
    />
  );
}

export default TeacherRAG;
