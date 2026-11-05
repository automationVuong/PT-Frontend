'use client';
import React from 'react';
import NewsInsigntsSection  from './NewsInsightsSection';
import { HomePage } from '@/modules/home/components/HomePage';
export const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-gray-900">
      {/* Navigation Header with Canvas Dropdowns */}

      {/* Hero Banner with Search and Sticky Header */}
      <NewsInsigntsSection/>

      {/* Main Browse Content Grid */}
      <main className="flex-1">
      </main>
    </div>
  );
};

export default NewsPage;