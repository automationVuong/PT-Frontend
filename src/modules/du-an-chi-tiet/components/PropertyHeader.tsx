import React from 'react';
import { Share2, Heart, Printer, MapPin } from 'lucide-react';


export const PropertyHeader: React.FC<{ property: any }> = ({ property }) => {
  return (
    <div className="bg-white border-b border-slate-200 pb-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">
            <span>{property.propertyType}</span>
            <span>•</span>
            <span>{property.tenure}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{property.title}</h1>
          <p className="text-slate-600 flex items-center gap-1 text-sm">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            {property.address}
          </p>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
          <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
            £{property.price.toLocaleString()}
            {property.priceQualifier && <span className="text-sm font-normal text-slate-500 ml-1">({property.priceQualifier})</span>}
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition text-slate-700" title="Save">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition text-slate-700" title="Share">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition text-slate-700" title="Print">
              <Printer className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick summary strip */}
      <div className="grid grid-cols-4 gap-2 mt-6 pt-6 border-t border-slate-100 text-center md:text-left">
        <div className="bg-slate-50 p-3 rounded-lg">
          <span className="block text-xs text-slate-500">Bedrooms</span>
          <span className="text-lg font-bold text-slate-900">{property.bedrooms}</span>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg">
          <span className="block text-xs text-slate-500">Bathrooms</span>
          <span className="text-lg font-bold text-slate-900">{property.bathrooms}</span>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg">
          <span className="block text-xs text-slate-500">Property Type</span>
          <span className="text-sm font-bold text-slate-900 truncate block">{property.propertyType}</span>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg">
          <span className="block text-xs text-slate-500">Tenure</span>
          <span className="text-sm font-bold text-slate-900 truncate block">{property.tenure}</span>
        </div>
      </div>
    </div>
  );
};