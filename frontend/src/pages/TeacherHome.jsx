import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function TeacherHome() {
  const classOverviewStats = [
    { label: 'Active Students', value: '48', detail: 'Class 3-B (CS)', color: 'text-indigo-400' },
    { label: 'Avg Class Mastery', value: '78%', detail: '+3% from last week', color: 'text-emerald-400' },
    { label: 'At-Risk Students', value: '4', detail: 'Needs remediation', color: 'text-rose-400' },
    { label: 'Pending Reviews', value: '12', detail: '3 assignments', color: 'text-amber-400' },
  ];

  const atRiskStudents = [
    { name: 'Alex Johnson', id: 'CS2026-012', topic: 'Graph Traversal (DFS/BFS)', score: '42%', severity: 'High' },
    { name: 'Priya Sharma', id: 'CS2026-034', topic: 'Dynamic Programming', score: '48%', severity: 'High' },
    { name: 'Michael Chen', id: 'CS2026-019', topic: 'Binary Search Trees', score: '55%', severity: 'Medium' },
    { name: 'Sophia Miller', id: 'CS2026-041', topic: 'B-Trees & Indexing', score: '58%', severity: 'Medium' },
  ];

  const teacherActions = [
    {
      title: 'Teacher RAG Assistant',
      desc: 'Upload class syllabi, problem sets, and generate instant quiz keys or lecture notes.',
      link: '/teacher/rag-chat',
      icon: '📚',
      badge: 'AI Workspace',
      btnText: 'Open Teacher AI',
      bgColor: 'from-indigo-950/50 to-slate-900',
      borderColor: 'border-indigo-500/30',
    },
    {
      title: 'Curriculum & Adaptive Content',
      desc: 'Adjust target mastery thresholds and generate customized practice modules.',
      link: '/teacher/rag-chat',
      icon: '🎯',
      badge: 'Adaptive',
      btnText: 'Manage Curriculum',
      bgColor: 'from-purple-950/50 to-slate-900',
      borderColor: 'border-purple-500/30',
    },
    {
      title: 'Class Analytics & Reports',
      desc: 'View concept gap analysis across all students and export performance summaries.',
      link: '/teacher/rag-chat',
      icon: '📊',
      badge: 'Insights',
      btnText: 'View Insights',
      bgColor: 'from-blue-950/50 to-slate-900',
      borderColor: 'border-blue-500/30',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              SGPAI Faculty Portal
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
              Instructor Dashboard <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">overview</span>
            </h1>
            <p className="text-slate-400 mt-2 text-sm md:text-base">
              Monitor student engagement, identify concept gaps, and generate AI-driven course materials.
            </p>
          </div>
          
          <Link
            to="/teacher/rag-chat"
            className="mt-4 md:mt-0 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-600/30 transition duration-200 flex items-center gap-2"
          >
            <span>Launch Teacher RAG</span>
            <span>→</span>
          </Link>
        </motion.div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {classOverviewStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
                <span className={`text-2xl md:text-3xl font-extrabold block mt-2 ${stat.color}`}>
                  {stat.value}
                </span>
              </div>
              <span className="text-xs text-slate-500 mt-3">{stat.detail}</span>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions / Core Tools */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-200 tracking-wide">
            Faculty AI Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teacherActions.map((action, index) => (
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
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition">
                    {action.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {action.desc}
                  </p>
                </div>

                <Link
                  to={action.link}
                  className="mt-6 w-full py-2.5 bg-slate-800/80 hover:bg-purple-600 text-slate-200 hover:text-white font-medium text-sm rounded-xl text-center border border-slate-700 hover:border-purple-500 transition duration-200 block"
                >
                  {action.btnText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* At-Risk Students & Remediation Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white">Students Needing Support</h3>
              <p className="text-xs text-slate-400">Flagged based on recent assessment and quiz gap analysis</p>
            </div>
            <span className="text-xs font-mono bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full">
              4 Alerts
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-3 rounded-l-lg">Student</th>
                  <th className="p-3">ID</th>
                  <th className="p-3">Weakest Concept</th>
                  <th className="p-3">Mastery</th>
                  <th className="p-3">Severity</th>
                  <th className="p-3 rounded-r-lg text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {atRiskStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-800/30 transition">
                    <td className="p-3 font-semibold text-white">{student.name}</td>
                    <td className="p-3 font-mono text-xs text-slate-400">{student.id}</td>
                    <td className="p-3 text-slate-300">{student.topic}</td>
                    <td className="p-3 font-mono text-rose-400 font-bold">{student.score}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                        student.severity === 'High' 
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}>
                        {student.severity}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <Link
                        to="/teacher/rag-chat"
                        className="text-xs bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white px-3 py-1.5 rounded-lg border border-purple-500/30 transition inline-block"
                      >
                        Generate Study Guide
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
}