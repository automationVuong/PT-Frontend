import type { Metadata } from "next";
import  AccountSettingsPage  from "@/modules/cai-dat-tai-khoan/components/AccountSettingPage";

export const metadata: Metadata = {
  title: "Cài đặt tài khoản",
};

export default function Page() {
  return (
      <main className="bg-[#f3f1ee] text-slate-900">
        <AccountSettingsPage />
      </main>
    );
}
