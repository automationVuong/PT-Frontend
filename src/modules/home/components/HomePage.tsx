'use client';
import React from 'react';
import { HeroSection } from './HeroSection';
import { BrowseSection } from './BrowseSection';
import { FeatureSection } from './FeatureSection';
import NewHomes from './NewHomes';
export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-gray-900">
      {/* Navigation Header with Canvas Dropdowns */}

      {/* Hero Banner with Search and Sticky Header */}
      <HeroSection />

      {/* Main Browse Content Grid */}
      <main className="flex-1">
        <BrowseSection />
        
        {/* Interactive Feature & Mobile App Showcase Section */}
        <FeatureSection />
        <NewHomes />
      </main>
    </div>
  );
};

export default HomePage;