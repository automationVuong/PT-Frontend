'use client';
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface MapSectionProps {
  address: string;
}

export const MapSection: React.FC<MapSectionProps> = ({ address }) => {
  const [activeTab, setActiveTab] = useState<'map' | 'schools' | 'transport'>('map');

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Vị trí & Giao thông</h2>
      
      <div className="flex gap-2 mb-4">
        <button 
          type="button"
          onClick={() => setActiveTab('map')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${activeTab === 'map' ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Xem bản đồ
        </button>
        <button 
          type="button"
          onClick={() => setActiveTab('schools')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${activeTab === 'schools' ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Trường học & Giáo dục
        </button>
        <button 
          type="button"
          onClick={() => setActiveTab('transport')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${activeTab === 'transport' ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Trạm phương tiện
        </button>
      </div>

      <div className="h-64 bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" />
        <MapPin className="w-10 h-10 text-teal-700 animate-bounce mb-2" />
        <span className="font-semibold text-slate-800 text-sm">{address}</span>
        <span className="text-xs text-slate-500 mt-1">Khu vực tích hợp bản đồ tương tác</span>
      </div>

      {activeTab === 'schools' && (
        <div className="mt-4 space-y-2 text-xs text-slate-700">
          <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
            <div>
              <span className="font-bold text-slate-800 block">Trường tiểu học St. Mary’s</span>
              <span className="text-[11px] text-slate-500">Cách 0.3 dặm - Học phí tham khảo: ~25.000.000 VNĐ/tháng</span>
            </div>
            <span className="font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded">Xuất sắc</span>
          </div>
          <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
            <div>
              <span className="font-bold text-slate-800 block">Học viện Trung tâm (Central High Academy)</span>
              <span className="text-[11px] text-slate-500">Cách 0.8 dặm - Học phí tham khảo: ~35.000.000 VNĐ/tháng</span>
            </div>
            <span className="font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded">Tốt</span>
          </div>
        </div>
      )}

      {activeTab === 'transport' && (
        <div className="mt-4 space-y-2 text-xs text-slate-700">
          <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
            <div>
              <span className="font-bold text-slate-800 block">Ga tàu điện ngầm trung tâm</span>
              <span className="text-[11px] text-slate-500">Cách 0.4 dặm - Giá vé tháng tham khảo: ~1.500.000 VNĐ</span>
            </div>
            <span className="font-semibold text-teal-700">5 phút đi bộ</span>
          </div>
          <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
            <div>
              <span className="font-bold text-slate-800 block">Ga tàu điện chính (Mainline Rail)</span>
              <span className="text-[11px] text-slate-500">Cách 1.1 dặm - Phù hợp di chuyển liên tỉnh</span>
            </div>
            <span className="font-semibold text-teal-700">12 phút đi xe</span>
          </div>
        </div>
      )}
    </div>
  );
};