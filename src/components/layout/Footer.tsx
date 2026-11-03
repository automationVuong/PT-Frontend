import Link from "next/link";
import { ArrowRight, Settings2 } from "lucide-react";

const groups = [
  {
    title: "Tải ứng dụng",
    items: ["App Store", "Google Play"],
  },
  {
    title: "Tài nguyên",
    items: [
      "Máy tính lệ phí trước bạ",
      "Chỉ số giá nhà",
      "Hướng dẫn bất động sản",
      "Hướng dẫn vay vốn",
    ],
  },
  {
    title: "Tìm kiếm",
    items: [
      "Tìm nhà để mua",
      "Tìm nhà để thuê",
      "Bất động sản thương mại",
      "Tìm môi giới",
    ],
  },
  {
    title: "Khu vực",
    items: [
      "Hà Nội",
      "Đà Nẵng",
      "Hồ Chí Minh",
      "Nha Trang",
      "Đà Lạt",
      "Phú Quốc",
      "Hội An",
    ],
  },
  {
    title: "Công ty",
    items: [
      "Về chúng tôi",
      "Trung tâm báo chí",
      "Quan hệ nhà đầu tư",
      "Tuyển dụng",
      "Đăng nhập hoặc tạo tài khoản",
    ],
  },
  {
    title: "Chuyên nghiệp",
    items: [
      "Rightmove Plus",
      "Dịch vụ dữ liệu",
      "Quảng cáo trên Rightmove",
      "Đại lý và nhà phát triển quốc tế",
      "Dịch vụ nhà ở và bất động sản",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-slate-200 bg-[#f7f5f3] text-slate-700">
      <div className="mx-auto max-w-[1280px] px-4 py-10 lg:px-6">
        {/* Các nhóm liên kết theo layout mới */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[13px] font-bold text-slate-800">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2 text-[12px] text-slate-600">
                {group.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="transition-colors hover:text-slate-900 hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Phần thông tin công ty, thương hiệu và điều khoản ở phía dưới */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-yellow-400 bg-white text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-yellow-400 shadow-sm">
                Q
              </div>

              <div>
                <div className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-500">
                  BROKER
                </div>
                <div className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Hệ sinh thái BĐS toàn diện
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-600">
              Website được phát triển bởi công ty AUTOMATION LAND Việt Nam
            </div>

            <div className="flex items-center gap-4 self-start lg:self-auto">
              <span className="text-xs text-slate-600 hover:underline cursor-pointer">
                Điều khoản
              </span>
              <span className="text-xs text-slate-600 hover:underline cursor-pointer">
                Bảo mật
              </span>
              <span className="text-xs text-slate-600 hover:underline cursor-pointer">
                Quy tắc nhà ở
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Các nút nổi (Floating buttons) giữ nguyên từ bản cũ */}
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