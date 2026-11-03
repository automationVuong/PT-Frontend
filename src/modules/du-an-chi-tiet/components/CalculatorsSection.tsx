'use client';
import React, { useState } from 'react';

interface CalculatorsSectionProps {
  price: number;
}

export const CalculatorsSection: React.FC<CalculatorsSectionProps> = ({ price }) => {
  const [deposit, setDeposit] = useState(Math.round(price * 0.2));
  const [term, setTerm] = useState(25);
  const [rate, setRate] = useState(4.5);

  const loanAmount = price - deposit;
  const monthlyInterestRate = rate / 100 / 12;
  const numberOfPayments = term * 12;
  const monthlyPayment = 
    (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) || 0;

  // Ước tính phí trước bạ / thuế nhà đất
  const stampDuty = price > 250000 ? (price - 250000) * 0.05 : 0;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-2">Công cụ tính toán tài chính</h2>
      <p className="text-xs text-slate-500 mb-6">Ước tính khoản trả góp ngân hàng hàng tháng và các khoản thuế lệ phí dự kiến.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Máy tính trả góp khoản vay */}
        <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-900 text-sm">Ước tính khoản vay mua nhà</h3>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Giá trị BĐS: £{price.toLocaleString()}</label>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Số tiền trả trước (£): {deposit.toLocaleString()}</label>
            <input 
              type="range" min={0} max={price} step={5000} value={deposit} 
              onChange={(e) => setDeposit(Number(e.target.value))}
              className="w-full accent-teal-600"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Thời hạn (Năm)</label>
              <input 
                type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full text-sm border border-slate-300 rounded-lg px-3 py-1.5 bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Lãi suất (%/năm)</label>
              <input 
                type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))}
                className="w-full text-sm border border-slate-300 rounded-lg px-3 py-1.5 bg-white"
              />
            </div>
          </div>
          <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-600">Trả góp hàng tháng:</span>
            <span className="text-lg font-bold text-teal-700">£{Math.round(monthlyPayment).toLocaleString()} /tháng</span>
          </div>
        </div>

        {/* Thuế trước bạ / Lệ phí */}
        <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Thuế trước bạ & Lệ phí</h3>
            <p className="text-xs text-slate-500 mb-4">Ước tính mức thuế áp dụng theo khung chuẩn tiêu chuẩn.</p>
            <div className="bg-white p-3 rounded-lg border border-slate-200 mb-4">
              <span className="block text-xs text-slate-500">Ước tính thuế trước bạ</span>
              <span className="text-xl font-bold text-slate-900">£{Math.round(stampDuty).toLocaleString()}</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-400">Lưu ý: Các con số trên chỉ mang tính chất tham khảo. Vui lòng tham vấn chuyên gia tài chính độc lập để có báo giá khoản vay chính xác.</p>
        </div>
      </div>
    </div>
  );
};