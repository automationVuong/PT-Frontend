"use client";

import Link from "next/link";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: true,
  });
  const [showPassword, setShowPassword] = useState(false);

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
    console.log("Login form submitted", formData);
  };

  return (
    <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Đăng nhập
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Chào mừng quay lại</h2>
        <p className="mt-2 text-sm text-slate-500">
          Đăng nhập để tiếp tục theo dõi căn nhà yêu thích và nhận tin mới nhất.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <div className="relative mt-1.5">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </div>
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Mật khẩu
          <div className="relative mt-1.5">
            <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-10 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-700"
              aria-label="Hiện mật khẩu"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            Ghi nhớ đăng nhập
          </label>

          <Link href="/quen-mat-khau" className="font-semibold text-blue-600 hover:text-blue-700">
            Quên mật khẩu?
          </Link>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:brightness-105"
        >
          Đăng nhập
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 ring-1 ring-slate-200">
        <p className="font-medium text-slate-700">Hoặc tiếp tục với</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
          >
            Google
          </button>
          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
          >
            Facebook
          </button>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-slate-600">
        Chưa có tài khoản?{" "}
        <Link href="/dang-ky" className="font-semibold text-blue-600 hover:text-blue-700">
          Tạo tài khoản mới
        </Link>
      </div>
    </div>
  );
}
