import os

def create_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f"Created {path}")

# ==========================================
# 1. Root Files
# ==========================================

README_MD = """
# SGPAI (Student Guidance & Performance Adaptive Intelligence)

A Smart India Hackathon 2026 Project. 
SGPAI is a full-stack platform with RAG + Adaptive Learning capabilities, building upon the original SGPA (Study Buddy chatbot) project.

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS, Recharts, React Router
- **Backend**: Python 3.11, FastAPI, LangChain, Gemini API
- **Database**: Supabase (PostgreSQL, Auth, Storage, pgvector)

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- Python 3.11+

### Backend Setup
1. Navigate to the backend folder: `cd backend`
2. Install dependencies: `pip install -r requirements.txt`
3. Copy `.env.example` to `.env` and fill in your API keys
4. Run the server: `uvicorn main:app --reload`

### Frontend Setup
1. Navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

### Database Setup
1. Setup your Supabase project.
2. Run `scripts/setup_supabase.py` or execute the SQL in `backend/database/schema.sql` directly in Supabase.
3. Run `scripts/seed_mock_data.py` to seed the database with mock data.
"""

GITIGNORE = """
node_modules/
dist/
.env
__pycache__/
*.py[cod]
*$py.class
.venv/
venv/
"""

ENV_EXAMPLE = """
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
GEMINI_API_KEY=your_gemini_api_key
BACKEND_URL=http://localhost:8000
FRONTEND_URL=http://localhost:5173
"""

PACKAGE_JSON_ROOT = """
{
  "name": "sgpai-root",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev:frontend": "cd frontend && npm run dev",
    "dev:backend": "cd backend && uvicorn main:app --reload"
  }
}
"""

FRONTEND_PACKAGE_JSON = """
{
  "name": "sgpai-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "recharts": "^2.12.3",
    "lucide-react": "^0.359.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^5.2.0"
  }
}
"""

FRONTEND_VITE_CONFIG = """
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
"""

FRONTEND_TAILWIND_CONFIG = """
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
"""

FRONTEND_POSTCSS_CONFIG = """
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
"""

FRONTEND_INDEX_HTML = """
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SGPAI</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
"""

FRONTEND_INDEX_CSS = """
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-50 text-gray-900;
  }
}
"""

FRONTEND_MAIN_JSX = """
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
"""

FRONTEND_APP_JSX = """
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
"""

FRONTEND_LANDING_PAGE = """
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">SGPAI</h1>
      <p className="text-xl text-gray-600 mb-8">Student Guidance & Performance Adaptive Intelligence</p>
      <div className="flex gap-4">
        <Link to="/login">
          <Button variant="primary">Login / Signup</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
"""

FRONTEND_COMMON_BUTTON = """
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "px-4 py-2 rounded-md font-semibold transition-colors";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
"""

FRONTEND_RAG_PAGE = """
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
"""

FRONTEND_RAG_CHAT = """
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
"""

BACKEND_REQUIREMENTS = """
fastapi==0.110.0
uvicorn==0.28.0
pydantic==2.6.4
supabase==2.3.4
langchain==0.1.13
google-generativeai==0.4.1
python-dotenv==1.0.1
python-multipart==0.0.9
"""

BACKEND_MAIN = """
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import auth, rag, dashboard, tools, adaptive
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="SGPAI Backend API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", os.getenv("FRONTEND_URL", "*")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(rag.router, prefix="/api/rag", tags=["rag"])
app.include_router(dashboard.router, prefix="/api/dashboard", tags=["dashboard"])
app.include_router(tools.router, prefix="/api/tools", tags=["tools"])
app.include_router(adaptive.router, prefix="/api/adaptive", tags=["adaptive"])

@app.get("/")
async def root():
    return {"message": "Welcome to SGPAI API"}
"""

BACKEND_RAG_ROUTE = """
from fastapi import APIRouter, UploadFile, File
from pydantic import BaseModel

router = APIRouter()

class ChatRequest(BaseModel):
    query: str
    user_id: str

@router.post("/chat")
async def chat_with_documents(request: ChatRequest):
    return {
        "response": "This is a mock RAG response.",
        "citations": ["[Physics_Notes.pdf, Page 12]"]
    }

@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    return {"status": "success", "filename": file.filename}
"""

BACKEND_ADAPTIVE_ROUTE = """
from fastapi import APIRouter

router = APIRouter()

@router.get("/study-plan/{user_id}")
async def generate_study_plan(user_id: str):
    return {
        "user_id": user_id,
        "plan": [
            {"day": "Monday", "focus": "Thermodynamics", "reason": "Weak topic (45% accuracy)"}
        ]
    }
"""

BACKEND_DATABASE_SCHEMA = """
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('student', 'teacher', 'admin')),
    course TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    title TEXT NOT NULL,
    file_path TEXT NOT NULL,
    subject TEXT,
    topic TEXT,
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
"""

def run_scaffold():
    base_dir = r"c:\Users\ammaa\Computer Programs\CS_Projects\SGPAI"
    
    files_to_create = {
        'README.md': README_MD,
        '.gitignore': GITIGNORE,
        '.env.example': ENV_EXAMPLE,
        'package.json': PACKAGE_JSON_ROOT,
        
        'frontend/package.json': FRONTEND_PACKAGE_JSON,
        'frontend/vite.config.js': FRONTEND_VITE_CONFIG,
        'frontend/tailwind.config.js': FRONTEND_TAILWIND_CONFIG,
        'frontend/postcss.config.js': FRONTEND_POSTCSS_CONFIG,
        'frontend/index.html': FRONTEND_INDEX_HTML,
        'frontend/src/index.css': FRONTEND_INDEX_CSS,
        'frontend/src/main.jsx': FRONTEND_MAIN_JSX,
        'frontend/src/App.jsx': FRONTEND_APP_JSX,
        'frontend/src/pages/LandingPage.jsx': FRONTEND_LANDING_PAGE,
        'frontend/src/pages/StudentRAG.jsx': FRONTEND_RAG_PAGE,
        'frontend/src/components/common/Button.jsx': FRONTEND_COMMON_BUTTON,
        'frontend/src/components/rag/RAGChat.jsx': FRONTEND_RAG_CHAT,
        'frontend/src/pages/LoginPage.jsx': "import React from 'react';\n\nconst LoginPage = () => <div>Login Page</div>;\nexport default LoginPage;",
        'frontend/src/pages/StudentGuide.jsx': "import React from 'react';\n\nconst StudentGuide = () => <div>Student Dashboard</div>;\nexport default StudentGuide;",
        'frontend/src/pages/TeacherGuide.jsx': "import React from 'react';\n\nconst TeacherGuide = () => <div>Teacher Dashboard</div>;\nexport default TeacherGuide;",
        
        'backend/requirements.txt': BACKEND_REQUIREMENTS,
        'backend/main.py': BACKEND_MAIN,
        'backend/api/__init__.py': "",
        'backend/api/routes/__init__.py': "",
        'backend/api/routes/auth.py': "from fastapi import APIRouter\nrouter = APIRouter()",
        'backend/api/routes/rag.py': BACKEND_RAG_ROUTE,
        'backend/api/routes/dashboard.py': "from fastapi import APIRouter\nrouter = APIRouter()",
        'backend/api/routes/tools.py': "from fastapi import APIRouter\nrouter = APIRouter()",
        'backend/api/routes/adaptive.py': BACKEND_ADAPTIVE_ROUTE,
        'backend/api/models/__init__.py': "",
        'backend/rag/__init__.py': "",
        'backend/adaptive/__init__.py': "",
        'backend/database/__init__.py': "",
        'backend/database/schema.sql': BACKEND_DATABASE_SCHEMA,
        'backend/utils/__init__.py': "",
        
        'docs/PPT_Draft.md': "# PPT Draft",
        'docs/API_Documentation.md': "# API Documentation",
        'docs/Database_Schema.md': "# Database Schema",
        'docs/Demo_Script.md': "# Demo Script",
        'docs/SIH_Submission_Checklist.md': "# SIH Submission Checklist",
        
        'scripts/setup_supabase.py': "# Setup script",
        'scripts/seed_mock_data.py': "# Seed data script",
        'scripts/test_rag.py': "# Test RAG",
        'scripts/test_adaptive.py': "# Test Adaptive",
    }
    
    empty_files = [
        'frontend/src/components/Navbar.jsx', 'frontend/src/components/Footer.jsx',
        'frontend/src/components/LoadingSpinner.jsx', 'frontend/src/components/ProtectedRoute.jsx',
        'frontend/src/components/auth/LoginForm.jsx', 'frontend/src/components/auth/SignupForm.jsx',
        'frontend/src/components/dashboard/StudentDashboard.jsx', 'frontend/src/components/dashboard/TeacherDashboard.jsx',
        'frontend/src/components/dashboard/StatsCard.jsx', 'frontend/src/components/dashboard/WeakTopicsPanel.jsx',
        'frontend/src/components/dashboard/StudyPlanPanel.jsx', 'frontend/src/components/dashboard/PerformanceChart.jsx',
        'frontend/src/components/dashboard/ActivityTimeline.jsx',
        'frontend/src/components/rag/KnowledgeBase.jsx', 'frontend/src/components/rag/ChatMessage.jsx',
        'frontend/src/components/rag/ChatInput.jsx', 'frontend/src/components/rag/QuizGenerator.jsx',
        'frontend/src/components/rag/QuizModal.jsx',
        'frontend/src/components/common/Card.jsx', 'frontend/src/components/common/Modal.jsx',
        'frontend/src/pages/SignupPage.jsx', 'frontend/src/pages/StudentHome.jsx',
        'frontend/src/pages/TeacherHome.jsx', 'frontend/src/pages/TeacherRAG.jsx',
        'frontend/src/services/api.js', 'frontend/src/services/auth.js', 'frontend/src/services/supabase.js',
        'frontend/src/utils/constants.js', 'frontend/src/utils/helpers.js',
        'frontend/src/context/AuthContext.jsx',
        'backend/api/models/user.py', 'backend/api/models/document.py', 'backend/api/models/quiz.py',
        'backend/api/models/study_log.py', 'backend/api/models/study_plan.py',
        'backend/rag/pipeline.py', 'backend/rag/chunking.py', 'backend/rag/embeddings.py', 'backend/rag/retrieval.py',
        'backend/adaptive/analyzer.py', 'backend/adaptive/study_plan_generator.py', 'backend/adaptive/recommendations.py',
        'backend/adaptive/mock_data.py', 'backend/database/supabase_client.py', 'backend/utils/config.py', 'backend/utils/helpers.py'
    ]
    
    for f in empty_files:
        if f not in files_to_create:
            if f.endswith('.jsx'):
                files_to_create[f] = f"import React from 'react';\n\nconst {f.split('/')[-1].split('.')[0]} = () => <div>{f.split('/')[-1].split('.')[0]}</div>;\nexport default {f.split('/')[-1].split('.')[0]};"
            elif f.endswith('.py'):
                files_to_create[f] = "# Placeholder for " + f.split('/')[-1]
            else:
                files_to_create[f] = "// Placeholder for " + f.split('/')[-1]

    for path, content in files_to_create.items():
        full_path = os.path.join(base_dir, path)
        create_file(full_path, content)
        
    print("Scaffolding complete.")

if __name__ == '__main__':
    run_scaffold()
