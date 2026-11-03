import React from 'react';

export const SimilarProperties: React.FC<{ properties: any[] }> = ({ properties }) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Similar properties nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {properties.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-40 relative">
              <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur text-white px-2 py-0.5 rounded text-xs font-bold">
                £{item.price.toLocaleString()}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900 text-sm truncate mb-1">{item.title}</h3>
              <p className="text-xs text-slate-500 truncate mb-3">{item.address}</p>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <span>{item.bedrooms} beds</span>
                <span>•</span>
                <span>{item.bathrooms} baths</span>
                <span>•</span>
                <span>{item.propertyType}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};