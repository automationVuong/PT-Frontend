'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface DropdownNavItem {
  name: string;
  href: string;
}

export interface DropdownProps {
  label: string;
  items: DropdownNavItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  return (
    <div className="relative group py-1">
      {/* Category Button with Slide-in Underline */}
      <button className="flex items-center gap-1 text-slate-700 font-bold uppercase tracking-wider text-xs hover:text-black transition py-1 focus:outline-none">
        <span>{label}</span>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-black transition-transform duration-200 group-hover:rotate-180" />
        
        {/* Underline Slide-in Effect */}
        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </button>

      {/* Standard CSS Hover Dropdown Menu */}
      <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-30 min-w-[200px]">
        <ul className="bg-white border border-slate-200 rounded-xl shadow-lg p-2 space-y-1 normal-case text-left">
          {items.map((subItem, idx) => (
            <li key={idx}>
              <a
                href={subItem.href}
                className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition"
              >
                {subItem.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;