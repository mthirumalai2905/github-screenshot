import React from 'react';
import { Github } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center space-x-3">
        <Github size={40} className="text-blue-600" />
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          GitHub Profile Viewer
        </h1>
      </div>
      <p className="text-gray-600 text-lg">
        Explore GitHub profiles and their contributions
      </p>
    </div>
  );
};