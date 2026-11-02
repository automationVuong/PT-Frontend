import { PropertyCard } from "./PropertyCard";

type ListingItem = {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  href?: string;
  badge?: string;
  badgeColor?: "red" | "blue" | "yellow";
};

type ListingGridProps = {
  items: ListingItem[];
  title: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  columns?: 2 | 3 | 4;
};

export function ListingGrid({
  items,
  title,
  subtitle,
  actionText,
  actionHref = "/",
  columns = 4,
}: ListingGridProps) {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h2>
          {subtitle ? <p className="mt-2 text-sm text-slate-500">{subtitle}</p> : null}
        </div>

        {actionText ? (
          <a
            href={actionHref}
            className="rounded-md border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            {actionText}
          </a>
        ) : null}
      </div>

      <div className={`grid gap-5 ${gridClass}`}>
        {items.map((item) => (
          <PropertyCard key={`${item.title}-${item.price}`} {...item} />
        ))}
      </div>
    </section>
  );
}
