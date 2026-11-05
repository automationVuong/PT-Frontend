'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Smartphone } from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  screenContent: {
    category: string;
    question: string;
    detail: string;
    tagLocation: string;
    mapBg: string;
    houseBg: string;
    accentBadge: string;
  };
}

const FEATURES: FeatureItem[] = [
  {
    id: '1',
    title: 'Dịch vụ quản gia riêng hỗ trợ 24/7',
    description:
      'Đội ngũ quản gia và chuyên gia đồng hành riêng, giải đáp thắc mắc và gợi ý bất động sản phù hợp suốt 24/7. Mọi nhu cầu của bạn đều được ghi nhận và phản hồi nhanh chóng.',
    screenContent: {
      category: 'Quản gia 24/7',
      question: 'Người xem dự án Vinhomes thường chọn mua ở khu vực nào?',
      detail:
        'Các lịch sử giao dịch gần đây tập trung chủ yếu tại khu vực Nam Từ Liêm, Hà Đông...',
      tagLocation: 'Khu đô thị Vinhomes Smart City',
      mapBg:
        'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
      houseBg:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      accentBadge: 'Hỗ trợ 24/7',
    },
  },
  {
    id: '2',
    title: 'Phân tích & tư vấn quyết định chuyên sâu',
    description:
      'Dựa trên dữ liệu giao dịch và xem nhà thực tế, thiết lập chiến lược so sánh giá và lựa chọn căn hộ tối ưu, giúp giảm thiểu tối đa rủi ro pháp lý và tài chính.',
    screenContent: {
      category: 'Phân tích AI & Định giá',
      question: 'So sánh biến động giá khu vực trong 6 tháng qua?',
      detail:
        'Giá trung bình dao động từ 45-55 triệu/m². Căn hộ 2PN có mức thanh khoản cao nhất.',
      tagLocation: 'Biểu đồ định giá thị trường',
      mapBg:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
      houseBg:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      accentBadge: 'Dữ liệu chuyên sâu',
    },
  },
  {
    id: '3',
    title: 'Quản lý toàn bộ quy trình mua nhà',
    description:
      'Từ khâu tìm kiếm, xem nhà, kiểm tra pháp lý, đặt cọc cho đến thủ tục vay ngân hàng và sang tên sổ đỏ, mọi công đoạn đều minh bạch và dễ dàng theo dõi.',
    screenContent: {
      category: 'Quản lý quy trình',
      question: 'Tiến độ hồ sơ đặt cọc & sang tên sổ đỏ của tôi đến đâu rồi?',
      detail:
        'Đã hoàn thành xác minh pháp lý 100%. Hồ sơ ngân hàng đang chờ duyệt giải ngân.',
      tagLocation: 'Trạng thái: Đang xử lý hồ sơ',
      mapBg:
        'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
      houseBg:
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80',
      accentBadge: 'Minh bạch 100%',
    },
  },
];

export const FeatureSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('1');
  const [displayedId, setDisplayedId] = useState<string>('1');
  const [isFading, setIsFading] = useState<boolean>(false);
  const isTransitioningRef = useRef<boolean>(false);

  // Trigger smooth crossfade for the entire phone container & accordion resizing
  const switchFeature = (nextId: string) => {
    if (nextId === activeId || isTransitioningRef.current) return;
    
    isTransitioningRef.current = true;
    setActiveId(nextId);
    setIsFading(true); // Fade out start

    // Halfway through the 600ms transition (at 300ms), switch the content and fade back in
    setTimeout(() => {
      setDisplayedId(nextId);
      setIsFading(false); // Fade in start
    }, 300);

    // Release lock after full transition completes (600ms total)
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 600);
  };

  // Auto-play interval rotation every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = FEATURES.findIndex((f) => f.id === activeId);
      const nextIndex = (currentIndex + 1) % FEATURES.length;
      switchFeature(FEATURES[nextIndex].id);
    }, 6000);

    return () => clearInterval(timer);
  }, [activeId]);

  const activeFeature =
    FEATURES.find((f) => f.id === displayedId) || FEATURES[0];

  return (
    <section className="w-full bg-slate-50 py-16 md:py-24 px-6 md:px-12 flex justify-center items-center overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Accordion List with smooth scale/size transitions */}
        <div className="flex flex-col space-y-4">
          <span className="text-blue-600 font-bold text-sm tracking-wide mb-2">
            Bất động sản mua bán
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
            Ngôi nhà mơ ước <br />
            <span className="text-slate-900">Luôn có người đồng hành cùng bạn</span>
          </h2>

          <div className="space-y-3 pt-2">
            {FEATURES.map((item) => {
              const isOpen = activeId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => switchFeature(item.id)}
                  style={{ transformOrigin: 'left center' }}
                  className={`cursor-pointer rounded-2xl transition-all duration-700 ease-in-out border ${
                    isOpen
                      ? 'bg-white border-blue-200 shadow-lg p-6 scale-[1.03] opacity-100'
                      : 'bg-white/50 border-transparent hover:bg-white/80 p-4 scale-[0.97] opacity-75 hover:opacity-90'
                  }`}
                >
                  <div className="w-full flex items-center justify-between text-left focus:outline-none">
                    <span
                      className={`font-bold transition-all duration-500 ${
                        isOpen ? 'text-blue-600 text-lg md:text-xl' : 'text-slate-700 text-base'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="text-slate-500 transition-transform duration-300">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-400" />
                      )}
                    </span>
                  </div>

                  {/* Smooth collapsible description container */}
                  <div
                    className={`grid transition-all duration-700 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <button className="inline-flex items-center gap-2 bg-black hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
              <Smartphone className="w-4 h-4" />
              <span>Tải ứng dụng ngay</span>
            </button>
          </div>
        </div>

        {/* Right Column: Entire Phone Mockup Frame Fading In/Out */}
        <div className="flex justify-center items-center">
          <div
            className={`relative w-[300px] sm:w-[340px] h-[600px] sm:h-[640px] bg-slate-900 rounded-[50px] p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-black/5 transition-all duration-500 ease-in-out transform ${
              isFading
                ? 'opacity-0 scale-[0.96] blur-[2px] translate-y-3'
                : 'opacity-100 scale-100 blur-0 translate-y-0'
            }`}
          >
            {/* Dynamic Island / Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30" />
            <div className="absolute top-7 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-800 rounded-full z-40" />

            {/* Inner Phone Screen */}
            <div className="w-full h-full bg-white rounded-[40px] overflow-hidden relative flex flex-col pt-10">
              {/* Header */}
              <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-600">
                <span className={`transition-colors duration-500 ${activeId === '1' ? 'text-blue-600 border-b-2 border-blue-600 pb-0.5' : ''}`}>
                  Hỗ trợ 24/7
                </span>
                <span className={`transition-colors duration-500 ${activeId === '2' ? 'text-blue-600 border-b-2 border-blue-600 pb-0.5' : ''}`}>
                  Tư vấn AI
                </span>
                <span className={`transition-colors duration-500 ${activeId === '3' ? 'text-blue-600 border-b-2 border-blue-600 pb-0.5' : ''}`}>
                  Quy trình
                </span>
              </div>

              {/* Screen Inner Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/55">
                {/* Badge */}
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {activeFeature.screenContent.accentBadge}
                  </span>
                  <span className="text-[10px] text-slate-400">Cập nhật mới</span>
                </div>

                {/* Primary Card */}
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div className="font-bold text-slate-900 flex justify-between items-center text-[11px]">
                    <span>{activeFeature.screenContent.category}</span>
                    <span className="text-blue-500 font-normal text-[10px]">Đã xác thực</span>
                  </div>
                  <p className="text-[11px] font-semibold text-slate-800">
                    {activeFeature.screenContent.question}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {activeFeature.screenContent.detail}
                  </p>

                  {/* Map & Image Preview */}
                  <div className="w-full h-24 bg-blue-50/80 rounded-xl relative overflow-hidden flex items-center justify-center mt-2 border border-blue-100">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
                      style={{ backgroundImage: `url('${activeFeature.screenContent.mapBg}')` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-bold text-slate-800 shadow-md">
                      {activeFeature.screenContent.tagLocation}
                    </div>
                  </div>
                </div>

                {/* Secondary Image Card */}
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-xs text-slate-700 space-y-2">
                  <div className="font-bold text-slate-900 flex justify-between items-center text-[11px]">
                    <span>Gợi ý dành cho bạn</span>
                    <span className="text-slate-400 font-normal text-[10px]">Xem thêm</span>
                  </div>

                  <div className="w-full h-20 bg-slate-200 rounded-xl overflow-hidden relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
                      style={{ backgroundImage: `url('${activeFeature.screenContent.houseBg}')` }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="p-3 bg-white border-t border-slate-100 grid grid-cols-4 gap-1 text-[8px] text-center text-slate-600 font-medium">
                <div className={`py-1.5 rounded-full transition-all duration-500 ${activeId === '1' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100'}`}>
                  Đăng ký
                </div>
                <div className={`py-1.5 rounded-full transition-all duration-500 ${activeId === '2' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100'}`}>
                  So sánh giá
                </div>
                <div className={`py-1.5 rounded-full transition-all duration-500 ${activeId === '3' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100'}`}>
                  Tiến độ
                </div>
                <div className="bg-slate-100 py-1.5 rounded-full">Tóm tắt</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;