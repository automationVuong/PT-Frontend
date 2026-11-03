const groups = [
  {
    title: "Tải ứng dụng",
    items: ["App Store", "Google Play"],
  },
  {
    title: "Tài nguyên",
    items: ["Máy tính lệ phí trước bạ", "Chỉ số giá nhà", "Hướng dẫn bất động sản", "Hướng dẫn vay vốn"],
  },
  {
    title: "Tìm kiếm",
    items: ["Tìm nhà để mua", "Tìm nhà để thuê", "Bất động sản thương mại", "Tìm môi giới"],
  },
  {
    title: "Khu vực",
    items: ["Hà Nội", "Đà Nẵng", "Hồ Chí Minh", "Nha Trang", "Đà Lạt", "Phú Quốc", "Hội An"],
  },
  {
    title: "Công ty",
    items: ["Về chúng tôi", "Trung tâm báo chí", "Quan hệ nhà đầu tư", "Tuyển dụng", "Đăng nhập hoặc tạo tài khoản"],
  },
  {
    title: "Chuyên nghiệp",
    items: ["Rightmove Plus", "Dịch vụ dữ liệu", "Quảng cáo trên Rightmove", "Đại lý và nhà phát triển quốc tế", "Dịch vụ nhà ở và bất động sản"],
  },
];

export function FooterLinks() {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f5f3]">
      <div className="mx-auto max-w-[1280px] px-4 py-10 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[13px] font-bold text-slate-800">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-[12px] text-slate-600">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
