import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (username: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [username, setUsername] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="relative group">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
          className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-gray-200 
                   bg-white/80 backdrop-blur-sm focus:outline-none focus:border-blue-500 
                   focus:ring-2 focus:ring-blue-500/20 transition-all duration-300
                   shadow-lg shadow-gray-200/50"
        />
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 
                         group-hover:text-blue-500 transition-colors duration-300" 
                size={20} />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2
                   bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl
                   hover:from-blue-700 hover:to-indigo-700 transition-all duration-300
                   shadow-lg shadow-blue-500/30"
        >
          Search
        </button>
      </div>
    </form>
  );
};