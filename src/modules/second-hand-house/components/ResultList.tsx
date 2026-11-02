import Link from "next/link";
import { PropertyCard } from "./PropertyCard";

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

type ResultListProps = {
  viewMode: "grid" | "list";
};

const properties = [
  {
    title: "Biệt thự gần trung tâm",
    location: "Quận 7, TP. Hồ Chí Minh",
    price: "3,8 tỷ",
    beds: "4 PN",
    baths: "3 WC",
    area: "180 m²",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    tags: ["Hot", "Mới"],
  },
  {
    title: "Chung cư cao cấp",
    location: "Quận 2, TP. Hồ Chí Minh",
    price: "2,4 tỷ",
    beds: "3 PN",
    baths: "2 WC",
    area: "105 m²",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    tags: ["Sắp mở bán"],
  },
  {
    title: "Nhà phố rộng",
    location: "Quận 9, TP. Hồ Chí Minh",
    price: "4,9 tỷ",
    beds: "5 PN",
    baths: "4 WC",
    area: "220 m²",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nổi bật"],
  },
  {
    title: "Căn hộ hiện đại",
    location: "Bình Thạnh, TP. Hồ Chí Minh",
    price: "1,9 tỷ",
    beds: "2 PN",
    baths: "2 WC",
    area: "92 m²",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    tags: ["Lựa chọn"],
  },
  {
    title: "Nhà nghỉ dưỡng",
    location: "Vũng Tàu",
    price: "6,3 tỷ",
    beds: "4 PN",
    baths: "3 WC",
    area: "260 m²",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mới"],
  },
  {
    title: "Căn hộ gia đình",
    location: "Thủ Đức, TP. Hồ Chí Minh",
    price: "2,7 tỷ",
    beds: "3 PN",
    baths: "2 WC",
    area: "118 m²",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    tags: ["Hot"],
  },
];

export function ResultList({ viewMode }: ResultListProps) {
  const isListMode = viewMode === "list";

  return (
    <section className="w-full pb-12">
      <div className="border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3 text-sm text-slate-600">
          <span className="font-medium text-slate-700">3,543 kết quả</span>
          <span className="text-slate-500">Cập nhật mới nhất</span>
        </div>

        <div
          className={
            isListMode
              ? "space-y-4 p-4"
              : "grid gap-4 p-4 md:grid-cols-2 xl:grid-cols-3"
          }
        >
          {properties.map((property) => {
            const href = `/vi/home/second-hand-house/${slugify(property.title)}`;

            return (
              <div
                key={property.title}
                className={isListMode ? "overflow-hidden border border-slate-200 bg-white" : ""}
              >
                {isListMode ? (
                  <Link href={href} className="block w-full cursor-pointer text-inherit no-underline">
                    <div className="flex gap-4 p-2">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="h-40 w-56 object-cover"
                      />
                      <div className="flex flex-1 items-center justify-between gap-6 px-2 py-3">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xl font-semibold text-slate-800">{property.title}</h3>
                          <p className="mt-2 text-sm text-slate-500">{property.location}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {property.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-700">{property.price}</div>
                          <div className="mt-1 text-[11px] text-slate-500">giá</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <PropertyCard {...property} href={href} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
