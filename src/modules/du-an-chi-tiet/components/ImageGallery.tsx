'use client';
import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="mb-6">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-lg overflow-hidden relative">
        {/* Main large image */}
        <div 
          className="md:col-span-2 h-[320px] md:h-[420px] cursor-pointer relative group"
          onClick={() => handleOpen(0)}
        >
          <img src={images[0]} alt={title} className="w-full h-full object-cover transition duration-300 group-hover:opacity-95" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition" />
        </div>

        {/* Middle stack */}
        <div className="hidden md:grid grid-cols-1 gap-2 h-[420px]">
          <div className="h-[206px] cursor-pointer relative group" onClick={() => handleOpen(1)}>
            <img src={images[1] || images[0]} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="h-[206px] cursor-pointer relative group" onClick={() => handleOpen(2)}>
            <img src={images[2] || images[0]} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right stack with view all button */}
        <div className="hidden md:grid grid-cols-1 gap-2 h-[420px]">
          <div className="h-[206px] cursor-pointer relative group" onClick={() => handleOpen(3)}>
            <img src={images[3] || images[0]} alt={title} className="w-full h-full object-cover" />
          </div>
          <div 
            className="h-[206px] cursor-pointer relative bg-slate-900 flex flex-col items-center justify-center text-white hover:bg-slate-800 transition"
            onClick={() => handleOpen(4)}
          >
            <Camera className="w-6 h-6 mb-1" />
            <span className="font-semibold text-sm">Xem tất cả ({images.length})</span>
          </div>
        </div>

        {/* Mobile View All Button */}
        <button 
          onClick={() => handleOpen(0)}
          className="md:hidden absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur text-white px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 shadow"
        >
          <Camera className="w-4 h-4" /> {images.length} Photos
        </button>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4">
          <div className="flex justify-between items-center text-white max-w-7xl mx-auto w-full">
            <span className="text-sm font-medium">{currentIndex + 1} of {images.length}</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative max-w-5xl mx-auto flex-1 flex items-center justify-center px-12">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-0 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img 
              src={images[currentIndex]} 
              alt="Expanded view" 
              className="max-h-[75vh] max-w-full object-contain rounded shadow-2xl" 
            />

            <button 
              onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center text-slate-400 text-xs pb-2">
            {title}
          </div>
        </div>
      )}
    </div>
  );
};