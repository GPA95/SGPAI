import React, { useState } from 'react';

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

const QuestionPaperModal = ({ onClose }) => {
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
    <Modal title="Create Question Paper" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Documents</label>
          <select multiple className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border">
            <option>Physics Chapter 5.pdf</option>
            <option>Chemistry Notes.pdf</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Total Questions</label>
          <input type="number" min="1" max="100" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" defaultValue="20" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Difficulty Mix</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border">
            <option>Standard (30% Easy, 50% Med, 20% Hard)</option>
            <option>Easy</option>
            <option>Hard</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time Limit (mins)</label>
          <input type="number" min="10" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" defaultValue="60" required />
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:opacity-50">
          {isLoading ? 'Generating...' : 'Generate Paper'}
        </button>
      </form>
    </Modal>
  );
};

const LessonPlannerModal = ({ onClose }) => {
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
    <Modal title="Lesson Planner" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Topic</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration (mins)</label>
          <input type="number" min="15" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" defaultValue="45" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Class/Grade</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Learning Objectives</label>
          <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" rows="3" required></textarea>
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 disabled:opacity-50">
          {isLoading ? 'Planning...' : 'Generate Lesson Plan'}
        </button>
      </form>
    </Modal>
  );
};

const AssignModal = ({ onClose }) => {
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
    <Modal title="Assign to Class" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Item</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border">
            <option>Physics Quiz 1</option>
            <option>Midterm Exam Paper</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Class</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border">
            <option>Class 10-A</option>
            <option>Class 10-B</option>
          </select>
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 disabled:opacity-50">
          {isLoading ? 'Assigning...' : 'Assign'}
        </button>
      </form>
    </Modal>
  );
};

const TeacherTools = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="flex flex-col space-y-3">
      <h3 className="font-semibold text-gray-700 mb-4">Teacher Tools</h3>
      <button onClick={() => setActiveModal('paper')} className="bg-blue-100 text-blue-700 p-3 rounded-lg text-left hover:bg-blue-200 transition font-medium">📝 Create Question Paper</button>
      <button onClick={() => setActiveModal('planner')} className="bg-teal-100 text-teal-700 p-3 rounded-lg text-left hover:bg-teal-200 transition font-medium">📚 Lesson Planner</button>
      <button onClick={() => window.location.href = '/teacher/study-guide'} className="bg-purple-100 text-purple-700 p-3 rounded-lg text-left hover:bg-purple-200 transition font-medium">📊 Class Analytics</button>
      <button onClick={() => setActiveModal('assign')} className="bg-indigo-100 text-indigo-700 p-3 rounded-lg text-left hover:bg-indigo-200 transition font-medium">👥 Assign to Class</button>

      {activeModal === 'paper' && <QuestionPaperModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'planner' && <LessonPlannerModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'assign' && <AssignModal onClose={() => setActiveModal(null)} />}
    </div>
  );
};

export default TeacherTools;
