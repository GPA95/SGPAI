import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import StudentGuide from './pages/StudentGuide';
import TeacherGuide from './pages/TeacherGuide';
import StudentRAG from './pages/StudentRAG';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student-dashboard" element={<StudentGuide />} />
        <Route path="/teacher-dashboard" element={<TeacherGuide />} />
        <Route path="/student-rag" element={<StudentRAG />} />
      </Routes>
    </Router>
  );
}

export default App;
