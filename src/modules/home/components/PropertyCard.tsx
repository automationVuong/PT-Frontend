type PropertyCardProps = {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  href?: string;
  badge?: string;
  badgeColor?: "red" | "blue" | "yellow";
};

const badgeStyles = {
  red: "bg-red-500 text-white",
  blue: "bg-blue-600 text-white",
  yellow: "bg-yellow-400 text-blue-900",
};

export function PropertyCard({
  title,
  subtitle,
  price,
  image,
  href = "#",
  badge,
  badgeColor = "red",
}: PropertyCardProps) {
  return (
    <a
      href={href}
      className="group block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />

        {badge ? (
          <span
            className={`absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-bold uppercase ${badgeStyles[badgeColor]}`}
          >
            {badge}
          </span>
        ) : null}
      </div>

      <div className="space-y-2 p-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[0.95rem] font-semibold text-slate-800">{title}</h3>
          <span className="whitespace-nowrap text-sm font-bold text-blue-700">
            {price}
          </span>
        </div>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
    </a>
  );
}
