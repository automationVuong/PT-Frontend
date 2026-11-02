type ProductSummaryProps = {
  title: string;
  location: string;
  price: string;
  status: string;
  productId: string;
  notes: Array<{ label: string; value: string }>;
  tags: string[];
};

export function ProductSummary({
  title,
  location,
  price,
  status,
  productId,
  notes,
  tags,
}: ProductSummaryProps) {
  return (
    <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.05)] xl:sticky xl:top-6 xl:self-start">
      <div className="mb-4 flex items-center justify-between gap-2">
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-700">
          {status}
        </span>
        <span className="text-xs font-medium text-slate-500">Mã tin: {productId}</span>
      </div>

      <h1 className="text-[2rem] font-black leading-tight tracking-[-0.06em] text-slate-900">
        {title}
      </h1>
      <p className="mt-3 text-base text-slate-600">{location}</p>

      <div className="mt-5 rounded-[20px] border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Giá đề nghị</div>
        <div className="mt-2 text-4xl font-black tracking-[-0.06em] text-blue-700">{price}</div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {notes.map((item) => (
          <div key={item.label} className="rounded-[18px] border border-slate-200 bg-slate-50 p-3.5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
              {item.label}
            </div>
            <div className="mt-2 text-lg font-bold text-slate-900">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        <button
          type="button"
          className="w-full rounded-[16px] bg-blue-600 px-4 py-3.5 text-base font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.25)] transition hover:bg-blue-700"
        >
          Liên hệ tư vấn
        </button>
        <button
          type="button"
          className="w-full rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Lưu bất động sản
        </button>
      </div>
    </aside>
  );
}
