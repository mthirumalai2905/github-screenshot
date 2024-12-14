import React from 'react';
import { Star, Code, GitFork } from 'lucide-react';
import { Repository } from '../types/github';

interface RepositoryListProps {
  repositories: Repository[];
}

export const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Top Repositories
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repositories.slice(0, 6).map((repo) => (
          <div key={repo.id} 
               className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200
                          hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-600 hover:text-blue-700
                           transition-colors duration-300"
                >
                  {repo.name}
                </a>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-500" />
                    <span className="text-sm text-gray-600">
                      {repo.stargazers_count}
                    </span>
                  </div>
                </div>
              </div>
              {repo.description && (
                <p className="text-gray-600 text-sm line-clamp-2">{repo.description}</p>
              )}
              <div className="flex items-center space-x-4 pt-2">
                {repo.language && (
                  <div className="flex items-center space-x-1">
                    <Code size={14} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{repo.language}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};