'use client';
import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface DescriptionSectionProps {
  description: string;
  keyFeatures: string[];
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({ description, keyFeatures }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Property description</h2>
      
      <div className={`relative text-slate-700 text-sm leading-relaxed space-y-4 ${!expanded ? 'max-h-40 overflow-hidden' : ''}`}>
        <p>{description}</p>
        <p>
          Situated in a prime residential enclave, the property enjoys excellent connectivity, local amenities, scenic green spaces, and top-rated local educational institutions. Early viewing is highly recommended.
        </p>
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      <button 
        onClick={() => setExpanded(!expanded)} 
        className="mt-4 text-teal-700 font-semibold text-sm flex items-center gap-1 hover:underline"
      >
        {expanded ? <>Show less <ChevronUp className="w-4 h-4" /></> : <>Read full description <ChevronDown className="w-4 h-4" /></>}
      </button>

      <div className="mt-8 pt-6 border-t border-slate-100">
        <h3 className="font-bold text-slate-900 mb-4">Key features</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {keyFeatures.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};