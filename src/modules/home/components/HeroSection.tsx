'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

const TABS = ['Buy', 'Rent', 'Sell', 'Pre-approval', 'Just sold', 'Home value'];

const PLACEHOLDERS = [
  "Single-story home under 750k, Nashville",
  "3-bed condo in downtown Austin",
  "Waterfront property in Miami, FL",
  "Townhouse with garage in Chicago, IL",
  "Luxury penthouse in New York, NY"
];

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [searchQuery, setSearchQuery] = useState('');
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const heroSearchRef = useRef<HTMLDivElement>(null);

  // Typing animation states
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Auto-typing animation effect
  useEffect(() => {
    const fullText = PLACEHOLDERS[loopNum % PLACEHOLDERS.length];

    const handleTyping = () => {
      setCurrentPlaceholder(
        isDeleting 
          ? fullText.substring(0, currentPlaceholder.length - 1) 
          : fullText.substring(0, currentPlaceholder.length + 1)
      );

      if (!isDeleting && currentPlaceholder === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(75);
      } else if (isDeleting && currentPlaceholder === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentPlaceholder, isDeleting, loopNum, typingSpeed]);

  // Intersection Observer to track when the main search bar leaves the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar when main search goes out of sight above the screen
        setIsStickyVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    if (heroSearchRef.current) {
      observer.observe(heroSearchRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="relative w-full h-[520px] bg-gray-900 overflow-hidden flex flex-col items-center justify-center text-white">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-3xl px-4 w-full flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 drop-shadow-md">
            #1 real estate site<br />
            <span className="font-bold">REALTOR® agents recommend</span>
          </h1>

          {/* Tab Navigation with Underline Effect */}
          <div className="flex space-x-6 mb-4 text-sm font-semibold tracking-wide border-b border-white/30 pb-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-1 transition-all group ${
                  activeTab === tab
                    ? 'text-white font-bold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab ? (
                  <span className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-white" />
                ) : (
                  <span className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                )}
              </button>
            ))}
          </div>

          {/* Primary Search Bar */}
          <div ref={heroSearchRef} className="relative w-full max-w-2xl mt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentPlaceholder}
              className="w-full pl-6 pr-14 py-4 rounded-full text-gray-900 bg-white shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-medium placeholder:text-gray-400"
            />
            <button 
              aria-label="Search"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Sticky Search Bar (Appears when scrolling past the main search bar) */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl transition-all duration-300 ease-in-out ${
          isStickyVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative shadow-2xl rounded-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={currentPlaceholder}
            className="w-full pl-6 pr-14 py-3 rounded-full text-gray-900 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-medium shadow-md placeholder:text-gray-400"
          />
          <button 
            aria-label="Search"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-full transition"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};