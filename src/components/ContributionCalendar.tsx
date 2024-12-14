import React from 'react';
import GitHubCalendar from 'react-github-calendar';

interface ContributionCalendarProps {
  username: string;
}

export const ContributionCalendar: React.FC<ContributionCalendarProps> = ({ username }) => {
  const theme = {
    light: ['#f0f0f0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 w-full max-w-2xl mx-auto
                    border-2 border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Contribution Calendar
      </h3>
      <div className="flex justify-center">
        <GitHubCalendar 
          username={username} 
          theme={theme}
          colorScheme="light"
        />
      </div>
    </div>
  );
};