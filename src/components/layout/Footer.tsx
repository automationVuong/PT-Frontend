import Link from "next/link";
import { ArrowRight, Settings2 } from "lucide-react";

const FOOTER_GROUPS = [
  {
    title: "Đào tạo",
    links: [
      { label: "Khóa học môi giới", href: "/khoa-hoc" },
      { label: "Luyện thi chứng chỉ", href: "/khoa-hoc" },
      { label: "Chuyển đề pháp lý", href: "/khoa-hoc" },
      { label: "Webinar & hội thảo", href: "/live" },
      { label: "Tài liệu miễn phí", href: "/tin-tuc" },
    ],
  },
  {
    title: "Chia sẻ giới hàng",
    links: [
      { label: "Giỏ hàng chung", href: "/profile" },
      { label: "Đăng sản phẩm", href: "/dang-tin-nha-dat" },
      { label: "Hợp tác phân phối", href: "/about-us" },
      { label: "Chính sách hoa hồng", href: "/about-us" },
      { label: "Quản lý gió hàng", href: "/wallet" },
    ],
  },
  {
    title: "Cần thuê - Mua",
    links: [
      { label: "Đăng nhu cầu thuê", href: "/chat" },
      { label: "Đăng nhu cầu mua", href: "/chat" },
      { label: "Tìm nhà cho thuê", href: "/mua-nha" },
      { label: "Kết nối môi giới", href: "/chat" },
      { label: "Định giá tài sản", href: "/bat-dong-san-ban-do" },
    ],
  },
  {
    title: "Công ty",
    links: [
      { label: "Về chúng tôi", href: "/about-us" },
      { label: "Tuyển dụng", href: "/khoa-hoc" },
      { label: "Tin tức báo chí", href: "/tin-tuc" },
      { label: "Quảng cáo", href: "/live" },
      { label: "Liên hệ", href: "/chat" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-slate-200 bg-[#f3f5f7] text-slate-700">
      <div className="mx-auto max-w-[1500px] px-5 py-8 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-[1.05rem] font-semibold text-slate-800">
                {group.title}
              </h3>

              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={typeof link === "string" ? link : link.label}>
                    <Link
                      href={typeof link === "string" ? "#" : link.href}
                      className="text-[0.95rem] text-slate-700 transition-colors hover:text-blue-700"
                    >
                      {typeof link === "string" ? link : link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-400 bg-white text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-yellow-400 shadow-sm">
                Q
              </div>

              <div>
                <div className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-500">
                  BROKER
                </div>
                <div className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Hệ sinh thái BĐS toàn diện
                </div>
              </div>
            </div>

            <div className="text-sm text-slate-600">
              Website được phát triển bởi công ty AUTOMATION LAND Việt Nam
            </div>

            <div className="flex items-center gap-3 self-end lg:self-auto">
              <div className="text-sm text-slate-600">
                Điều khoản
              </div>
              <div className="text-sm text-slate-600">
                Bảo mật
              </div>
              <div className="text-sm text-slate-600">
                Quy tắc nhà ở
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg transition-transform hover:scale-105"
          aria-label="Settings"
        >
          <Settings2 className="h-6 w-6" />
        </button>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg transition-opacity hover:opacity-90"
        >
          <ArrowRight className="h-4 w-4" />
          Về demo Q-Broker
        </button>
      </div>
    </footer>
  );
}
