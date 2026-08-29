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
