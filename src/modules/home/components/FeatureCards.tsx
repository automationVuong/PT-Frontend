const cards = [
  {
    title: "Hướng dẫn tài sản",
    description: "Những gợi ý hữu ích để bạn dễ dàng lựa chọn ngôi nhà phù hợp.",
    icon: "🏠",
  },
  {
    title: "Giải thích thuật ngữ",
    description: "Hiểu rõ các thuật ngữ chuyên ngành mới nhất trong thị trường bất động sản.",
    icon: "📘",
  },
  {
    title: "Hiệu quả năng lượng",
    description: "Xem cách xếp hạng năng lượng và cải thiện xanh ảnh hưởng đến giá trị nhà.",
    icon: "⚡",
  },
];

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-8 lg:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="flex items-center gap-3 rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.02)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dff8f5] text-xl">
              {card.icon}
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-slate-900">{card.title}</h3>
              <p className="mt-1 text-[12px] leading-5 text-slate-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
