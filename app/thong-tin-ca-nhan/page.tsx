import type { Metadata } from "next";
import ProfilePage from "@/modules/thong-tin-ca-nhan/components/ProfilePage";

export const metadata: Metadata = {
  title: "Bất động sản",
};

export default function Page() {
  return (
      <main className="bg-[#f3f1ee] text-slate-900">
        <ProfilePage />
      </main>
    );
}
