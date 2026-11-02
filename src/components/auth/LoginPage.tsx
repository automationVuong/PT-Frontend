import Link from "next/link";
import { ArrowRight, Building2, KeyRound, ShieldCheck } from "lucide-react";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
  return (
    <section className="bg-slate-50 py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Về trang chủ
          </Link>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 p-8 text-white shadow-[0_25px_60px_rgba(15,23,42,0.35)] sm:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              <KeyRound className="h-3.5 w-3.5" />
              Tài khoản cá nhân
            </div>

            <h1 className="max-w-md text-4xl font-black leading-tight sm:text-5xl">
              Quản lý tìm nhà của bạn mọi lúc, mọi nơi.
            </h1>

            <p className="mt-4 max-w-md text-base text-slate-200">
              Theo dõi danh sách yêu thích, nhận thông báo mới và kết nối với môi giới chuyên nghiệp nhanh chóng hơn.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  title: "Lưu tin yêu thích",
                  text: "Ghi lại những căn nhà bạn thích để dễ so sánh sau này.",
                  icon: Building2,
                },
                {
                  title: "Bảo mật tối ưu",
                  text: "Tài khoản của bạn được bảo vệ bằng xác thực và mã hóa cơ bản.",
                  icon: ShieldCheck,
                },
              ].map(({ title, text, icon: Icon }) => (
                <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="rounded-xl bg-white/10 p-2.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="mt-1 text-sm text-slate-200">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <LoginForm />
        </div>
      </div>
    </section>
  );
}
