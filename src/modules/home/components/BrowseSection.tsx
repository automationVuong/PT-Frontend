'use client';

import React from 'react';
import { CategoryCard } from './CategoryCard';

const CATEGORIES = [
  {
    id: '1',
    title: 'New listings',
    count: '350',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    title: 'Price reduced',
    count: '131',
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    title: 'Open houses',
    count: '111',
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '4',
    title: 'Recently sold',
    count: '3,767',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '5',
    title: 'New construction',
    count: '20',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '6',
    title: 'New home communities',
    count: '1',
    customContent: (
      <div className="absolute inset-0 bg-[#e0ceb1] flex flex-col justify-center items-center text-center p-4">
        <span className="text-black font-extrabold text-2xl tracking-tighter">BLACK</span>
        <span className="text-black font-extrabold text-2xl tracking-tighter -mt-2">FRIDAY</span>
        <span className="text-xs text-gray-800 mt-2 font-medium">Limited-Time Deals on New Homes</span>
      </div>
    ),
  },
  {
    id: '7',
    title: 'Land',
    count: '22',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '8',
    title: 'From first question to closing day',
    customContent: (
      <div className="absolute inset-0 bg-pink-50 p-4 flex flex-col justify-between">
        <div className="text-gray-900 font-bold text-sm leading-tight max-w-[120px]">
          From first question to closing day
        </div>
        <div className="bg-red-500 text-white text-[10px] px-2 py-1 rounded-full w-max font-bold">
          realtor.com
        </div>
      </div>
    ),
  },
];

export const BrowseSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Browse homes in San Francisco, CA</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            count={category.count}
            imageUrl={category.imageUrl}
            customContent={category.customContent}
          />
        ))}
      </div>
    </section>
  );
};