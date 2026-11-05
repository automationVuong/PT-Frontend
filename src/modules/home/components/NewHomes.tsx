'use client';
import React, { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';

interface NewHomeTab {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mockupImages: string[];
}

const NEW_HOME_TABS: NewHomeTab[] = [
  {
    id: '1',
    title: 'Bảng xếp hạng chung cư mới',
    subtitle: 'Cập nhật bảng hàng & bảng giá thời gian thực',
    description: 'Tổng hợp danh sách các dự án căn hộ mới ra mắt với dữ liệu giá bán, tiến độ xây dựng và quỹ căn cập nhật liên tục từng giờ.',
    mockupImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: '2',
    title: 'Trải nghiệm VR & Xem nhà 360°',
    subtitle: 'Khám phá từng căn hộ không cần đi xa',
    description: 'Công nghệ thực tế ảo VR giúp bạn bước chân vào từng căn phòng, đo đạc không gian và ngắm nhìn hướng nhà thực tế ngay trên màn hình điện thoại.',
    mockupImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: '3',
    title: 'Ưu đãi độc quyền & Quỹ căn ngoại giao',
    subtitle: 'Săn nhà giá tốt, giỏ hàng độc quyền',
    description: 'Nắm bắt ngay các suất ngoại giao, chiết khấu trực tiếp và gói quà tặng ưu đãi khủng từ chủ đầu tư dành riêng cho khách hàng.',
    mockupImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80'
    ]
  }
];

export const NewHomesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('1');
  const [isFading, setIsFading] = useState<boolean>(false);

  const handleSelectTab = (id: string) => {
    if (id === activeTabId) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveTabId(id);
      setIsFading(false);
    }, 300);
  };

  // Auto-rotate tabs every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = NEW_HOME_TABS.findIndex((t) => t.id === activeTabId);
      const nextIndex = (currentIndex + 1) % NEW_HOME_TABS.length;
      handleSelectTab(NEW_HOME_TABS[nextIndex].id);
    }, 6000);

    return () => clearInterval(timer);
  }, [activeTabId]);

  const activeTab = NEW_HOME_TABS.find((t) => t.id === activeTabId) || NEW_HOME_TABS[0];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Header Content */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          Cuộc sống mới <br />
          <span className="text-slate-900">Bắt đầu từ lựa chọn thấu hiểu bạn hơn</span>
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Cập nhật bảng hàng dự án mới liên tục, xem nhà VR trực tuyến, săn nhà giá tốt và nắm bắt ưu đãi độc quyền trong một chạm.
        </p>

        {/* Download Button */}
        <div className="mt-6">
          <button className="inline-flex items-center gap-2 bg-black hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
            <Smartphone className="w-4 h-4" />
            <span>Tải ứng dụng ngay</span>
          </button>
        </div>
      </div>

      {/* Interactive Tabs Row */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 max-w-4xl">
        {NEW_HOME_TABS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              onClick={() => handleSelectTab(tab.id)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-500 ease-in-out border ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                  : 'bg-slate-100 text-slate-600 border-transparent hover:bg-slate-200 scale-95 opacity-80'
              }`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      {/* 3 Triple Phone Mockup Showcase matching the reference layout */}
      <div className="w-full max-w-5xl flex justify-center items-center">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center transition-all duration-500 ease-in-out ${
            isFading ? 'opacity-0 scale-[0.98] blur-[2px]' : 'opacity-100 scale-100 blur-0'
          }`}
        >
          {activeTab.mockupImages.map((imgUrl, index) => {
            const isCenter = index === 1; // Center phone stands out slightly larger
            return (
              <div
                key={index}
                className={`relative bg-slate-900 rounded-[45px] p-2.5 shadow-2xl border-4 border-slate-800 ring-1 ring-black/5 transition-all duration-700 ${
                  isCenter
                    ? 'w-[300px] sm:w-[330px] h-[580px] sm:h-[620px] z-20 md:-translate-y-4 shadow-3xl'
                    : 'w-[280px] sm:w-[310px] h-[540px] sm:h-[580px] z-10 opacity-90 hidden md:block'
                }`}
              >
                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-800 rounded-full z-40" />

                {/* Inner Screen */}
                <div className="w-full h-full bg-white rounded-[38px] overflow-hidden relative flex flex-col pt-8">
                  {/* Screen Header Bar */}
                  <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-600 bg-slate-50/80">
                    <span className="text-blue-600 border-b-2 border-blue-600 pb-0.5">Bảng xếp hạng</span>
                    <span>VR 360°</span>
                    <span>Ưu đãi</span>
                  </div>

                  {/* Screen View Content */}
                  <div className="flex-1 bg-slate-100 relative overflow-hidden flex flex-col">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                      style={{ backgroundImage: `url('${imgUrl}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                      <span className="text-[10px] bg-blue-600 px-2 py-0.5 rounded-md w-fit font-bold mb-1">
                        {activeTab.title}
                      </span>
                      <h4 className="text-xs font-bold leading-snug">
                        {activeTab.subtitle}
                      </h4>
                      <p className="text-[10px] text-slate-200 mt-1 line-clamp-2">
                        {activeTab.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Navigation Bar inside phone */}
                  <div className="p-3 bg-white border-t border-slate-100 flex justify-around text-[9px] text-slate-600 font-medium">
                    <span className="text-blue-600 font-bold">Trang chủ</span>
                    <span>Khám phá</span>
                    <span>Tin tức</span>
                    <span>Hồ sơ</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewHomesSection;