import React, { useState, useRef } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { ProfileCard } from './components/ProfileCard';
import { ContributionCalendar } from './components/ContributionCalendar';
import { RepositoryList } from './components/RepositoryList';
import { DownloadButton } from './components/DownloadButton';
import { GithubUser, Repository } from './types/github';

function App() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (username: string) => {
    setLoading(true);
    setError('');
    try {
      const [userResponse, reposResponse] = await Promise.all([
        axios.get(`https://api.github.com/users/${username}`),
        axios.get(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`)
      ]);
      setUser(userResponse.data);
      setRepos(reposResponse.data);
    } catch (err) {
      setError('User not found or API rate limit exceeded');
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (profileRef.current) {
      const canvas = await html2canvas(profileRef.current);
      const link = document.createElement('a');
      link.download = `${user?.login}-github-profile.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <Header />
        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-2 border-red-200 text-red-600 px-6 py-4 rounded-xl
                         text-center max-w-2xl mx-auto">
            {error}
          </div>
        )}

        {user && (
          <div ref={profileRef} className="space-y-8">
            <ProfileCard user={user} />
            <ContributionCalendar username={user.login} />
            <RepositoryList repositories={repos} />
            <div className="flex justify-center">
              <DownloadButton onClick={handleDownload} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;