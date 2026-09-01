import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import StudentHome from './pages/StudentHome';
import TeacherHome from './pages/TeacherHome';
import RAGChat from './components/rag/RAGChat';
import StudentRAG from './pages/StudentRAG';
import TeacherRAG from './pages/TeacherRAG';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentHome />} />
           <Route path="/teacher" element={<TeacherHome />} />

        
        {/* RAG Chat Routes */}
        <Route path="/student/rag-chat" element={<StudentRAG />} />
        <Route path="/teacher/rag-chat" element={<TeacherRAG />} />
     
        
        {/* Legacy route for backwards compatibility if needed */}
        <Route path="/test/rag-chat" element={<RAGChat userType="student" toolsPanel={<div>Testing</div>} />} />
      </Routes>
    </Router>
  );
}

export default App;