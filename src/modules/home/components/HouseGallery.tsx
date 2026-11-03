

type HouseItem = {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  badge?: string;
  badgeColor?: "red" | "blue" | "yellow";
};

type HouseGalleryProps = {
  title: string;
  subtitle?: string;
  actionText?: string;
  items: HouseItem[];
};

export function HouseGallery({
  title,
  subtitle,
  actionText,
  items,
}: HouseGalleryProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.price}`}
            className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              {item.badge ? (
                <span className="absolute left-3 top-3 rounded-md bg-red-500 px-2 py-1 text-[10px] font-bold uppercase text-white">
                  {item.badge}
                </span>
              ) : null}
            </div>

            <div className="space-y-2 p-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[0.95rem] font-semibold text-slate-800">
                  {item.title}
                </h3>
                <span className="whitespace-nowrap text-sm font-bold text-blue-700">
                  {item.price}
                </span>
              </div>
              <p className="text-xs text-slate-500">{item.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
