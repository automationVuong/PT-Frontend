'use client';
import React, { useState } from 'react';
import { Property } from '../types';
import { Phone, Mail, Calendar, Building } from 'lucide-react';

interface SidebarCardProps {
  property: Property;
}

export const SidebarCard: React.FC<SidebarCardProps> = ({ property }) => {
  const [tab, setTab] = useState<'email' | 'call' | 'tour'>('email');

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 sticky top-6">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
        <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
          <Building className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">{property.branch.name}</h3>
          <p className="text-xs text-slate-500">{property.branch.address}</p>
        </div>
      </div>

      {/* Các tab chuyển đổi */}
      <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-lg mb-6 text-xs font-semibold">
        <button 
          onClick={() => setTab('email')}
          className={`py-2 rounded-md transition ${tab === 'email' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
        >
          Gửi Email
        </button>
        <button 
          onClick={() => setTab('call')}
          className={`py-2 rounded-md transition ${tab === 'call' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
        >
          Gọi điện
        </button>
        <button 
          onClick={() => setTab('tour')}
          className={`py-2 rounded-md transition ${tab === 'tour' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
        >
          Đặt lịch xem
        </button>
      </div>

      {tab === 'email' && (
        <form onSubmit={(e) => { e.preventDefault(); alert('Đã gửi yêu cầu tư vấn thành công!'); }} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Họ và tên của bạn</label>
            <input type="text" required placeholder="Nguyễn Văn A" className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Địa chỉ Email</label>
            <input type="email" required placeholder="nguyenvana@example.com" className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Số điện thoại</label>
            <input type="tel" required placeholder="0901 234 567" className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Lời nhắn</label>
            <textarea rows={3} defaultValue={`Tôi muốn biết thêm thông tin chi tiết về ${property.title}.`} className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"></textarea>
          </div>
          <button type="submit" className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2.5 rounded-lg transition text-sm flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" /> Yêu cầu thông tin
          </button>
        </form>
      )}

      {tab === 'call' && (
        <div className="text-center py-6 space-y-4">
          <p className="text-xs text-slate-600">Gọi trực tiếp cho văn phòng môi giới và đọc mã số tham chiếu</p>
          <div className="text-xl font-bold text-slate-900 bg-slate-50 py-3 rounded-lg border border-slate-200">
            {property.branch.phone}
          </div>
          <a href={`tel:${property.branch.phone}`} className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2.5 rounded-lg transition text-sm flex items-center justify-center gap-2 block">
            <Phone className="w-4 h-4" /> Gọi cho môi giới ngay
          </a>
        </div>
      )}

      {tab === 'tour' && (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Chọn ngày xem nhà</label>
            <input type="date" className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Khung giờ ưu tiên</label>
            <select className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600">
              <option>Buổi sáng (09:00 - 12:00)</option>
              <option>Buổi chiều (12:00 - 17:00)</option>
              <option>Buổi tối (17:00 - 19:00)</option>
            </select>
          </div>
          <button onClick={() => alert('Đã đặt lịch xem nhà thành công!')} className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2.5 rounded-lg transition text-sm flex items-center justify-center gap-2 mt-4">
            <Calendar className="w-4 h-4" /> Xác nhận đặt lịch xem
          </button>
        </div>
      )}
    </div>
  );
};