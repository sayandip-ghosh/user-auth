import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored authentication tokens or data (if any)
    // For example: localStorage.removeItem('authToken');
    // Then navigate to login page
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">Welcome!</h1>
      <p className="mt-4 text-lg text-gray-600">We’re glad to have you here.</p>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="px-6 py-2 mt-8 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
