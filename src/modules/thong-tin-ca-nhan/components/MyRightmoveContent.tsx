"use client";

import React from "react";
import { Send, Heart, Home, MapPin, PenTool } from "lucide-react";
import { WelcomeBanner } from "./WelcomeBanner";
import { DashboardCard } from "./DashboardCard";
import { SearchesAndAlertsSidebar } from "./SearchesAndAlertsSidebar";

export function MyRightmoveContent() {
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-slate-900 pb-16">
      {/* 1. Header Banner */}
      <WelcomeBanner userName="Vuong" />

      {/* 2. Main Content Layout */}
      <div className="mx-auto max-w-[1280px] px-4 pt-8 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          
          {/* Cột trái: Các danh mục cá nhân */}
          <div className="space-y-6">
            <DashboardCard
              title="Yêu cầu tư vấn (Enquiries)"
              icon={<Send className="w-5 h-5" />}
              emptyTitle="Bạn chưa gửi yêu cầu tư vấn nào"
              emptyDescription="Nếu bạn gửi yêu cầu qua Q-Broker, chúng sẽ hiển thị tại đây."
              actionText="Tìm kiếm bất động sản"
              actionHref="/du-an"
            />

            <DashboardCard
              title="Bất động sản đã lưu"
              icon={<Heart className="w-5 h-5" />}
              emptyTitle="Bạn chưa lưu bất động sản nào"
              emptyDescription="Bấm vào biểu tượng trái tim trên nhà bất kỳ để lưu vào đây."
              actionText="Khám phá nhà đất"
              actionHref="/du-an"
            />

            <DashboardCard
              title="Bất động sản theo dõi"
              icon={<Home className="w-5 h-5" />}
              emptyTitle="Bạn chưa theo dõi bất động sản nào"
              emptyDescription="Tìm hiểu giá trị ước tính của ngôi nhà bạn đang quan tâm."
              actionText="Theo dõi lịch sử giá nhà"
              actionHref="/dinh-gia"
            />

            <DashboardCard
              title="Địa điểm của tôi"
              icon={<MapPin className="w-5 h-5" />}
              emptyTitle="Bạn chưa lưu địa điểm quan trọng nào"
              emptyDescription="Thêm địa điểm quan trọng để xem mất bao lâu để di chuyển từ đó đến các danh sách bất động sản."
              actionText="Thêm địa điểm"
              onActionClick={() => alert("Mở form thêm địa điểm")}
            />

            <DashboardCard
              title="Khu vực đã khoanh vùng"
              icon={<PenTool className="w-5 h-5" />}
              emptyTitle="Bạn chưa khoanh vùng khu vực nào"
              emptyDescription="Kết hợp nhiều vị trí trên bản đồ để tạo tìm kiếm tùy chỉnh."
              actionText="Khoanh vùng tìm kiếm mới"
              actionHref="/bat-dong-san-ban-do"
            />
          </div>

          {/* Cột phải: Tìm kiếm & Thông báo */}
          <div className="space-y-6">
            <SearchesAndAlertsSidebar />
          </div>

        </div>
      </div>
    </div>
  );
}