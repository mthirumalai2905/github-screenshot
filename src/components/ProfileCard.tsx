import React from 'react';
import { Users, GitFork, Star } from 'lucide-react';
import { GithubUser } from '../types/github';

interface ProfileCardProps {
  user: GithubUser;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 w-full max-w-2xl mx-auto
                    border-2 border-gray-100">
      <div className="flex flex-col items-center text-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
        />
        <div className="mt-4">
          <h2 className="text-3xl font-bold text-gray-800">{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            @{user.login}
          </a>
          {user.bio && (
            <p className="text-gray-600 mt-2 max-w-lg mx-auto">{user.bio}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <StatCard icon={<GitFork />} label="Repositories" value={user.public_repos} />
        <StatCard icon={<Users />} label="Followers" value={user.followers} />
        <StatCard icon={<Star />} label="Following" value={user.following} />
      </div>
    </div>
  );
};

const StatCard: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: number;
}> = ({ icon, label, value }) => (
  <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200
                  hover:shadow-lg transition-all duration-300 group">
    <div className="flex flex-col items-center space-y-2">
      <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);