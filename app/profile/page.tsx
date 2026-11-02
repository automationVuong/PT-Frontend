import type { Metadata } from "next";
import { ProfilePage } from "@/modules/profile";

export const metadata: Metadata = {
  title: "Hồ sơ cá nhân",
  description: "Trang hồ sơ cá nhân để quản lý thông tin, danh sách yêu thích và hoạt động bất động sản",
};

export default function Page() {
  return <ProfilePage />;
}
