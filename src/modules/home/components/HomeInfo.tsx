const infoCards = [
  {
    title: "Tìm môi giới địa phương để định giá nhà",
    description: "Đội ngũ chuyên gia sẽ định giá nhà của bạn một cách minh bạch và nhanh chóng.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
    action: "Yêu cầu định giá miễn phí",
  },
  {
    title: "Hướng dẫn vay vốn",
    description: "Tìm hiểu các bước quan trọng khi mua hoặc bán nhà để ra quyết định đúng đắn.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
    action: "Xem hướng dẫn vay vốn",
  },
  {
    title: "Giá nhà đã bán",
    description: "Xem giá giao dịch thực tế, hình ảnh, sơ đồ tầng và thông tin khu vực chi tiết.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    action: "Tra cứu giá nhà",
  },
];

export function HomeInfo() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 lg:px-6">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-[12px] font-black uppercase tracking-[0.18em] text-slate-500">Mua và bán dễ dàng</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {infoCards.map((card) => (
          <article key={card.title} className="overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.03)]">
            <div className="h-48 overflow-hidden">
              <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-[18px] font-bold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">{card.description}</p>
              <button type="button" className="mt-4 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] font-medium text-slate-700">
                {card.action}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
