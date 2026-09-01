import React, { useState, useEffect } from 'react';

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl font-bold">&times;</button>
      </div>
      {children}
    </div>
  </div>
);

const QuizModal = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1000);
  };
  return (
    <Modal title="Generate Quiz" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Topic</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Questions</label>
          <input type="number" min="1" max="50" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" defaultValue="10" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Question Type</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border">
            <option>Multiple Choice</option>
            <option>Short Answer</option>
          </select>
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:opacity-50">
          {isLoading ? 'Generating...' : 'Generate Quiz'}
        </button>
      </form>
    </Modal>
  );
};

const SummaryModal = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1000);
  };
  return (
    <Modal title="Summarize Document" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Document</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border">
            <option>Physics Chapter 5.pdf</option>
            <option>Chemistry Notes.pdf</option>
          </select>
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 disabled:opacity-50">
          {isLoading ? 'Summarizing...' : 'Generate 5-Bullet Summary'}
        </button>
      </form>
    </Modal>
  );
};

const TimerModal = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => setSeconds(s => s + 1), 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (totalSeconds) => {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <Modal title="Study Timer" onClose={onClose}>
      <div className="text-center space-y-6">
        <div className="text-6xl font-mono">{formatTime(seconds)}</div>
        <div className="space-x-4">
          <button onClick={() => setIsActive(!isActive)} className={`px-6 py-2 rounded-md text-white ${isActive ? 'bg-orange-500 hover:bg-orange-600' : 'bg-green-500 hover:bg-green-600'}`}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={() => { setIsActive(false); setSeconds(0); }} className="px-6 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white">
            Reset
          </button>
        </div>
      </div>
    </Modal>
  );
};

const StudentTools = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="flex flex-col space-y-3">
      <h3 className="font-semibold text-gray-700 mb-4">Student Tools</h3>
      <button onClick={() => setActiveModal('quiz')} className="bg-blue-100 text-blue-700 p-3 rounded-lg text-left hover:bg-blue-200 transition font-medium">📝 Generate Quiz</button>
      <button onClick={() => setActiveModal('summary')} className="bg-green-100 text-green-700 p-3 rounded-lg text-left hover:bg-green-200 transition font-medium">📄 Summarize Document</button>
      <button onClick={() => window.location.href = '/student/study-guide'} className="bg-purple-100 text-purple-700 p-3 rounded-lg text-left hover:bg-purple-200 transition font-medium">📊 My Progress</button>
      <button onClick={() => setActiveModal('timer')} className="bg-orange-100 text-orange-700 p-3 rounded-lg text-left hover:bg-orange-200 transition font-medium">⏱️ Study Timer</button>

      {activeModal === 'quiz' && <QuizModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'summary' && <SummaryModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'timer' && <TimerModal onClose={() => setActiveModal(null)} />}
    </div>
  );
};

export default StudentTools;
