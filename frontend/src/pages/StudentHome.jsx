import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function StudentHome() {
  const stats = [
    { label: 'Overall Mastery', value: '84%', color: 'text-emerald-400' },
    { label: 'Study Streak', value: '5 Days 🔥', color: 'text-amber-400' },
    { label: 'Topics Completed', value: '18/22', color: 'text-indigo-400' },
    { label: 'Weakest Concept', value: 'Graph Algorithms', color: 'text-rose-400' },
  ];

  const quickActions = [
    {
      title: 'AI RAG Chat Assistant',
      desc: 'Ask questions about your uploaded study notes, syllabus, and course PDFs.',
      link: '/student/rag-chat',
      icon: '💬',
      badge: 'Interactive',
      btnText: 'Open Chat',
      bgColor: 'from-indigo-950/50 to-slate-900',
      borderColor: 'border-indigo-500/30',
    },
    {
      title: 'Study Plan Generator',
      desc: 'Generate a personalized day-by-day exam prep schedule powered by Gemini API.',
      link: '/student/rag-chat',
      icon: '🗓️',
      badge: 'AI Powered',
      btnText: 'Create Plan',
      bgColor: 'from-purple-950/50 to-slate-900',
      borderColor: 'border-purple-500/30',
    },
    {
      title: 'Gap Analyzer & Recommender',
      desc: 'Identify core concept gaps and get immediate remediation resources.',
      link: '/student/rag-chat',
      icon: '🔍',
      badge: 'Analytics',
      btnText: 'Analyze Gaps',
      bgColor: 'from-blue-950/50 to-slate-900',
      borderColor: 'border-blue-500/30',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Welcome Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              SGPAI Student Portal
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Student</span> 👋
            </h1>
            <p className="text-slate-400 mt-2 text-sm md:text-base">
              Track your learning path, analyze knowledge gaps, and study smarter with live AI.
            </p>
          </div>
          
          <Link
            to="/student/rag-chat"
            className="mt-4 md:mt-0 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition duration-200 flex items-center gap-2"
          >
            <span>Launch AI Tutor</span>
            <span>→</span>
          </Link>
        </motion.div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between"
            >
              <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
              <span className={`text-2xl md:text-3xl font-extrabold mt-2 ${stat.color}`}>
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-200 tracking-wide">
            Core Learning Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={`bg-gradient-to-b ${action.bgColor} border ${action.borderColor} rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition group shadow-lg`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl">{action.icon}</span>
                    <span className="text-xs bg-slate-800/80 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-full font-mono">
                      {action.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition">
                    {action.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {action.desc}
                  </p>
                </div>

                <Link
                  to={action.link}
                  className="mt-6 w-full py-2.5 bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white font-medium text-sm rounded-xl text-center border border-slate-700 hover:border-indigo-500 transition duration-200 block"
                >
                  {action.btnText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Activity / Subject Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4"
        >
          <h3 className="text-lg font-bold text-white">Active Subjects</h3>
          <div className="space-y-3">
            {[
              { name: 'Data Structures & Algorithms', progress: 85, color: 'bg-indigo-500' },
              { name: 'Database Management Systems', progress: 70, color: 'bg-purple-500' },
              { name: 'Computer Networks', progress: 55, color: 'bg-amber-500' },
            ].map((subject) => (
              <div key={subject.name} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">{subject.name}</span>
                  <span className="text-slate-400 font-mono">{subject.progress}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${subject.color} rounded-full transition-all duration-500`} 
                    style={{ width: `${subject.progress}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
