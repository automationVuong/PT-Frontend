import type { Metadata } from "next";
import { RegisterPage } from "@/modules/auth";

export const metadata: Metadata = {
  title: "Đăng ký tài khoản",
  description: "Tạo tài khoản để tìm nhà, lưu tin và nhận thông báo mới nhất",
};

export default function Page() {
  return <RegisterPage />;
}
