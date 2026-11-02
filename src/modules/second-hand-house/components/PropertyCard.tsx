import Link from "next/link";

type PropertyCardProps = {
  image: string;
  title: string;
  location: string;
  price: string;
  priceLabel?: string;
  tags?: string[];
  featured?: boolean;
  href?: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function PropertyCard({
  image,
  title,
  location,
  price,
  priceLabel = "giá",
  tags = [],
  featured = false,
  href,
}: PropertyCardProps) {
  const cardHref = href ?? `/vi/home/second-hand-house/${slugify(title)}`;

  return (
    <Link href={cardHref} className="block w-full cursor-pointer">
      <article className="overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.02)] ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative">
          <img src={image} alt={title} className="h-60 w-full object-cover" />
          {featured ? (
            <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-2 py-1 text-[10px] font-bold uppercase text-white shadow-sm">
              Nổi bật
            </span>
          ) : null}
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
              <p className="mt-1 text-sm text-slate-500">{location}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-blue-700">{price}</div>
              <div className="text-[11px] text-slate-500">{priceLabel}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
