"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const benefits = [
  "Tìm kiếm nhà theo vị trí, diện tích và ngân sách",
  "Lưu lại tin yêu thích và nhận thông báo mới nhất",
  "Theo dõi lịch xem nhà và nhận hỗ trợ từ chuyên gia",
];

export function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for real registration flow
    console.log("Register form submitted", formData);
  };

  return (
    <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Đăng ký
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Tạo tài khoản mới</h2>
        <p className="mt-2 text-sm text-slate-500">
          Đăng ký để lưu tin, theo dõi dự án và nhận tư vấn nhanh hơn.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
            Họ và tên
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nguyễn Văn A"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Số điện thoại
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0987 654 321"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="relative block text-sm font-medium text-slate-700">
            Mật khẩu
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ít nhất 8 ký tự"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 pr-10 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="absolute right-3 top-[42px] text-slate-500 transition hover:text-slate-700"
              aria-label="Hiện mật khẩu"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </label>

          <label className="relative block text-sm font-medium text-slate-700">
            Xác nhận mật khẩu
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Nhập lại mật khẩu"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 pr-10 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((current) => !current)}
              className="absolute right-3 top-[42px] text-slate-500 transition hover:text-slate-700"
              aria-label="Hiện xác nhận mật khẩu"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </label>
        </div>

        <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-600">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            required
          />
          <span>
            Tôi đồng ý với <Link href="/dieu-khoan" className="font-semibold text-blue-600 hover:text-blue-700">Điều khoản sử dụng</Link> và <Link href="/chinh-sach-bao-mat" className="font-semibold text-blue-600 hover:text-blue-700">Chính sách bảo mật</Link>.
          </span>
        </label>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:brightness-105"
        >
          Tạo tài khoản
          <ArrowRight className="h-4 w-4" />
        </button>

        <div className="rounded-2xl bg-blue-50 p-4 text-sm text-slate-600 ring-1 ring-blue-100">
          <p className="mb-3 font-semibold text-slate-800">Lợi ích khi đăng ký</p>
          <ul className="space-y-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-slate-600">
        Đã có tài khoản?{" "}
        <Link href="/dang-nhap" className="font-semibold text-blue-600 hover:text-blue-700">
          Đăng nhập ngay
        </Link>
      </div>
    </div>
  );
}
