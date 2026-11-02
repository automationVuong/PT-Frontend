type RelatedItem = {
  title: string;
  location: string;
  price: string;
  image: string;
};

type RelatedPropertiesProps = {
  items: RelatedItem[];
};

export function RelatedProperties({ items }: RelatedPropertiesProps) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-10 lg:px-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Khám phá thêm</div>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.06em] text-slate-900">Tin tương tự</h2>
        </div>
        <button type="button" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Xem thêm
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.07)]"
          >
            <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
            <div className="space-y-3 p-4">
              <h3 className="text-xl font-black tracking-[-0.04em] text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.location}</p>
              <div className="text-2xl font-black tracking-[-0.05em] text-blue-700">{item.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
