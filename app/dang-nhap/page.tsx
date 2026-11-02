import type { Metadata } from "next";
import { LoginPage } from "@/modules/auth";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập tài khoản để lưu tin, theo dõi và nhận thông báo bất động sản",
};

export default function Page() {
  return <LoginPage />;
}
