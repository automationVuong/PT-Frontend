'use client';
import React, { useState } from 'react';
import { MapPin, Navigation, Compass } from 'lucide-react';

interface MapSectionProps {
  address: string;
}

export const MapSection: React.FC<MapSectionProps> = ({ address }) => {
  const [activeTab, setActiveTab] = useState<'map' | 'schools' | 'transport'>('map');

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Location & Transport</h2>
      
      <div className="flex gap-2 mb-4">
        <button 
          onClick={() => setActiveTab('map')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${activeTab === 'map' ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Map View
        </button>
        <button 
          onClick={() => setActiveTab('schools')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${activeTab === 'schools' ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Schools & Education
        </button>
        <button 
          onClick={() => setActiveTab('transport')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${activeTab === 'transport' ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Stations
        </button>
      </div>

      <div className="h-64 bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" />
        <MapPin className="w-10 h-10 text-teal-700 animate-bounce mb-2" />
        <span className="font-semibold text-slate-800 text-sm">{address}</span>
        <span className="text-xs text-slate-500 mt-1">Interactive map integration area</span>
      </div>

      {activeTab === 'schools' && (
        <div className="mt-4 space-y-2 text-xs text-slate-700">
          <div className="flex justify-between p-2 bg-slate-50 rounded">
            <span>St. Mary’s Primary School</span>
            <span className="font-semibold text-teal-700">0.3 miles - Outstanding</span>
          </div>
          <div className="flex justify-between p-2 bg-slate-50 rounded">
            <span>Central High Academy</span>
            <span className="font-semibold text-teal-700">0.8 miles - Good</span>
          </div>
        </div>
      )}

      {activeTab === 'transport' && (
        <div className="mt-4 space-y-2 text-xs text-slate-700">
          <div className="flex justify-between p-2 bg-slate-50 rounded">
            <span>Central Underground Station</span>
            <span className="font-semibold text-teal-700">0.4 miles</span>
          </div>
          <div className="flex justify-between p-2 bg-slate-50 rounded">
            <span>Mainline Rail Station</span>
            <span className="font-semibold text-teal-700">1.1 miles</span>
          </div>
        </div>
      )}
    </div>
  );
};