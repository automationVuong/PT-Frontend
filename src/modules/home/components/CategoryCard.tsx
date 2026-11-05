'use client';
import React from 'react';

export interface CategoryCardProps {
  title: string;
  count?: string | number;
  imageUrl?: string;
  customContent?: React.ReactNode;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ title, count, imageUrl, customContent }) => {
  return (
    <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-gray-100 transition-transform duration-200 hover:-translate-y-1">
      {/* Background Image / Render Custom Content */}
      {imageUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
      ) : (
        customContent
      )}

      {/* Gradient Overlay for Text Readability */}
      {imageUrl && <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />}

      {/* Top Bar (Title + Badge) */}
      <div className="relative z-10 p-4 flex justify-between items-start text-white">
        <span className="font-semibold text-sm drop-shadow">{title}</span>
        {count !== undefined && (
          <span className="bg-white/30 backdrop-blur-md text-white text-xs px-2 py-0.5 rounded-full font-medium">
            {count}
          </span>
        )}
      </div>
    </div>
  );
};