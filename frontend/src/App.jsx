import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import StudentHome from './pages/StudentHome';
import RAGChat from './components/rag/RAGChat';  // Import your component
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Existing routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentHome />} />

        {/* NEW: Route to test RAG Chat */}
        <Route path="/test/rag-chat" element={<RAGChat />} />

        {/* Future routes */}
        {/* <Route path="/student/rag-chat" element={<RAGChat />} /> */}
      </Routes>
    </Router>
  );
}

export default App;