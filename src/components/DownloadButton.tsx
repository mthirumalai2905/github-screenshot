import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  onClick: () => void;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600
                 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all
                 duration-300 shadow-lg shadow-blue-500/30 group"
    >
      <Download size={20} className="group-hover:scale-110 transition-transform duration-300" />
      <span>Download Profile</span>
    </button>
  );
};