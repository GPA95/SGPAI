import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  BrainCircuit, 
  BarChart3, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  UserCheck 
} from 'lucide-react';

const techStackData = [
  {
    category: 'Frontend',
    techs: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'Recharts'],
    description: 'High-performance user interface built for fluid, real-time interactive learning analytics.'
  },
  {
    category: 'Backend & APIs',
    techs: ['FastAPI', 'Python 3.11', 'LangChain', 'RESTful Services'],
    description: 'Scalable microservices engine processing semantic document parsing and active query pipelines.'
  },
  {
    category: 'AI & RAG Architecture',
    techs: ['Gemini API', 'pgvector', 'Embedding Pipelines', 'Context Retrieval'],
    description: 'Grounds responses strictly in primary course literature to prevent hallucinations and supply exact source citations.'
  },
  {
    category: 'Data & Database',
    techs: ['Supabase', 'PostgreSQL', 'Vector Storage', 'User Analytics Engine'],
    description: 'Encrypted storage management for structured student logs, embedding indexes, and progress tracking.'
  }
];

const features = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
    title: 'Closed-Loop RAG Engine',
    description: 'Grounds AI answers directly in your uploaded textbooks and notes to deliver exact, hallucination-free guidance.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
    title: 'Adaptive Learning Analytics',
    description: 'Continuously logs comprehension, speed, and mastery metrics to dynamically tailor customized study pathways.'
  },
  {
    icon: <UserCheck className="w-6 h-6 text-purple-400" />,
    title: 'Educator Analytics Dashboard',
    description: 'Provides instructors with real-time class performance metrics, module drop-offs, and early at-risk alerts.'
  },
  {
    icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
    title: 'Active Recall Generator',
    description: 'Automatically converts course materials into active recall flashcards, study summaries, and evaluation quizzes.'
  }
];

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleSimulatedUpload = () => {
    setIsUploading(true);
    setUploadSuccess(false);
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background Glowing Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Navigation */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10 border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
            SG
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            SGPAI
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="#how-it-works" 
            className="text-sm text-slate-400 hover:text-white transition-colors hidden sm:block font-medium"
          >
            How It Works
          </a>
          <a 
            href="#features" 
            className="text-sm text-slate-400 hover:text-white transition-colors hidden sm:block font-medium"
          >
            Features
          </a>
          <a 
            href="#tech-stack" 
            className="text-sm text-slate-400 hover:text-white transition-colors hidden sm:block font-medium"
          >
            Architecture
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 relative z-10 text-center">
        {/* Product Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span>Next-Generation Adaptive Learning Engine</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-tight"
        >
          Student Guidance & <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Performance Adaptive Intelligence
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          An intelligent platform connecting students and educators. Transform study documents into interactive RAG query engines, personalized pathways, and cohort analytics.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#interactive-demo"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2"
          >
            Try Workspace Simulator <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#tech-stack"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 font-semibold text-slate-300 transition-all"
          >
            Explore Tech Stack
          </motion.a>
        </motion.div>

        {/* Interactive Upload Card Demo */}
        <motion.div 
          id="interactive-demo"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-2xl relative text-left"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs text-slate-500 font-mono">SGPAI RAG Workspace Simulator</span>
          </div>

          <div 
            className="p-8 border-2 border-dashed border-slate-700/80 rounded-xl bg-slate-950/40 hover:border-indigo-500/50 transition-colors text-center cursor-pointer" 
            onClick={handleSimulatedUpload}
          >
            {isUploading ? (
              <div className="flex flex-col items-center py-4">
                <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-3" />
                <p className="text-sm text-indigo-300 font-medium">Extracting text & indexing vectors via pgvector...</p>
              </div>
            ) : uploadSuccess ? (
              <div className="flex flex-col items-center py-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mb-2" />
                <p className="text-sm text-emerald-300 font-semibold">Material Ready for Contextual Q&A!</p>
                <p className="text-xs text-slate-400 mt-1">Generated adaptive recall quizzes and dynamic summary context.</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Upload className="w-10 h-10 text-slate-400 mb-3" />
                <p className="text-sm text-slate-300 font-medium">Click to simulate document upload (PDF, PPTX, TXT)</p>
                <p className="text-xs text-slate-500 mt-1">Parses syllabus files, lecture notes, and textbook chapters</p>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">System Methodology</h2>
          <p className="text-slate-400 mt-2 text-sm">How SGPAI processes raw learning materials into actionable insights</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Upload & Parse', desc: 'Syllabus and lecture documents are uploaded and parsed into clean text chunks.' },
            { step: '02', title: 'Vector Indexing', desc: 'Chunks are converted to high-dimensional embeddings and stored in Supabase pgvector.' },
            { step: '03', title: 'RAG Pipeline', desc: 'LLM retrieves relevant contextual nodes to provide accurate, cited student responses.' },
            { step: '04', title: 'Adaptive Insights', desc: 'Student interaction data updates individual mastery scores and cohort teacher alerts.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 relative hover:border-slate-700 transition-all"
            >
              <div className="text-xs font-mono font-semibold text-indigo-400 mb-3">STEP {item.step}</div>
              <h3 className="font-semibold text-lg text-slate-100 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Core Features</h2>
          <p className="text-slate-400 mt-2 text-sm">A closed-loop platform designed for students and educators alike</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/30 border border-slate-800/80 hover:border-indigo-500/40 transition-all"
            >
              <div className="p-3 rounded-xl bg-slate-800/60 w-fit mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Interactive Showcase */}
      <section id="tech-stack" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Technology Stack</h2>
          <p className="text-slate-400 mt-2 text-sm">Engineered with modern, performant open-source technology</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
            {techStackData.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === idx ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-indigo-600 rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{tab.category}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md"
            >
              <p className="text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">
                {techStackData[activeTab].description}
              </p>
              <div className="flex flex-wrap gap-3">
                {techStackData[activeTab].techs.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-12 relative z-10 text-center text-xs text-slate-500">
        <p>SGPAI • Student Guidance & Performance Adaptive Intelligence</p>
        <p className="mt-2">Empowering personalized learning through intelligent context awareness.</p>
      </footer>
    </div>
  );
}