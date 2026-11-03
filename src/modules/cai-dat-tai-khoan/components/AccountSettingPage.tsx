import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { AccountSidebar } from "@/modules/cai-dat-tai-khoan/components/AccountSidebar";
import { PersonalDetailsContent } from "@/modules/cai-dat-tai-khoan/components/PersonalDetailsContent";

export default function AccountSettingsPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-16">
      <div className="mx-auto max-w-[1280px] px-4 py-6 lg:px-6 space-y-6">
        
        {/* Nút quay lại trang chủ My Rightmove */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:underline"
          >
            <ChevronLeft className="w-4 h-4" /> Quay lại trang chủ Q-Broker
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 mt-2">Cài đặt tài khoản</h1>
        </div>

        {/* Bố cục Grid gồm Sidebar bên trái và Nội dung chính bên phải */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <AccountSidebar />
          <PersonalDetailsContent />
        </div>

      </div>
    </div>
  );
}