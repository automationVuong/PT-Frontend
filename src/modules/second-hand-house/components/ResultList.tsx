import Link from "next/link";

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

const featured = {
  title: "Glenmore Road, Belsize Park, NW3",
  price: "£1,050,000",
  location: "A Perfect Project - Requiring complete modernisation throughout, a unique, quirky and vast, 3/4 bedroom apartment of 1583 sq ft set on the top 2 floors of a period turn of the century house.",
  image:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  secondaryImage:
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  agent: "Heywoods",
  agentPhone: "020 3866 6772",
  tag: "FEATURED PROPERTY",
  summary: ["Flat", "3 bed", "1 bath"],
};

const listings = [
  {
    title: "Greenaway Gardens, Hampstead, London, NW3",
    price: "£1.9M",
    location: "A detached family home with gardens and a lovely outlook.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    tags: ["Detached", "7", "8"],
  },
  {
    title: "Brixton Road, London, SW9",
    price: "£1.3M",
    location: "Two-bedroom apartment with modern kitchen and large terrace.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    tags: ["Apartment", "2", "2"],
  },
  {
    title: "Crescent Road, Primrose Hill, NW1",
    price: "£2.3M",
    location: "Spacious period home with sunny garden and bright interiors.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    tags: ["House", "4", "3"],
  },
];

export function ResultList({ viewMode }: ResultListProps) {
  const isListMode = viewMode === "list";

  return (
    <section className="w-full pb-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-center justify-between px-2 pb-3 text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-medium text-slate-500">775 results</span>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-700">
              Prioritise properties with...
            </button>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-700">
              Add keyword
            </button>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-[12px] text-slate-500">Sort:</span>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] text-slate-700">
              Highest Price
            </button>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] text-slate-700">
              Map view
            </button>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1fr_300px]">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.02)]">
              <div className="flex items-center gap-2 bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-slate-700">
                  ⊞
                </span>
                <span>1/10</span>
                <span className="text-slate-400">FEATURED PROPERTY</span>
              </div>

              <div className="grid gap-0 md:grid-cols-[1.2fr_1.1fr]">
                <div className="grid grid-cols-2 gap-0">
                  <div className="col-span-2 h-[300px] overflow-hidden">
                    <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="h-[120px] overflow-hidden border-t border-white/60">
                    <img src={featured.secondaryImage} alt={featured.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex items-end justify-end border-l border-white/60 bg-[#1b8b9c] p-4 text-white">
                    <div className="text-right">
                      <div className="text-[28px] font-bold leading-none">{featured.price}</div>
                      <div className="mt-2 text-[12px] text-white/80">Offers in Excess of</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <h3 className="text-[20px] font-bold text-slate-800">{featured.title}</h3>
                      <div className="flex items-center gap-3 text-[12px] text-slate-600">
                        <span className="flex items-center gap-1">🏠 Flat</span>
                        <span className="flex items-center gap-1">🛏 3</span>
                        <span className="flex items-center gap-1">🛁 1</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-[14px] leading-6 text-slate-600">{featured.location}</p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-700">
                        H
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold text-slate-800">{featured.agent}</div>
                        <div className="text-[11px] text-slate-500">{featured.agentPhone}</div>
                      </div>
                    </div>
                    <button type="button" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] text-slate-700">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {listings.map((item) => {
              const href = `/vi/home/second-hand-house/${slugify(item.title)}`;

              return (
                <div key={item.title} className="overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.02)]">
                  <div className="grid gap-0 md:grid-cols-[1.2fr_1.3fr]">
                    <div className="h-[220px] overflow-hidden">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-[17px] font-bold text-slate-800">{item.title}</h3>
                          <div className="mt-2 flex items-center gap-3 text-[12px] text-slate-500">
                            <span>Detached</span>
                            <span>🏡 {item.tags[1]}</span>
                            <span>🛏 {item.tags[2]}</span>
                          </div>
                        </div>
                        <button type="button" className="text-lg text-slate-400">✕</button>
                      </div>

                      <p className="mt-3 text-[14px] leading-6 text-slate-600">{item.location}</p>

                      <div className="mt-4 flex flex-wrap gap-3 text-[12px] text-slate-600">
                        <span className="inline-flex items-center gap-1">✓ Approximate 14,501 sq ft detached ...</span>
                        <span className="inline-flex items-center gap-1">✓ Architecturally designed by ...</span>
                        <span className="inline-flex items-center gap-1">✓ Extensive redevelopment ...</span>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
                        <div className="text-[14px] font-semibold text-slate-800">{item.price}</div>
                        <Link href={href} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] font-medium text-slate-700">
                          View details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="hidden xl:block">
            <div className="rounded-[12px] border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
              <div className="h-[260px] overflow-hidden rounded-[10px] border border-slate-200 bg-[radial-gradient(circle_at_30%_20%,#d3e9d4,#b7d5c0_30%,#a8becd_50%,#dfe7e8_100%)]">
                <div className="flex h-full items-center justify-center text-[12px] text-slate-600">
                  Approximate location
                </div>
              </div>

              <button type="button" className="mt-4 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                See properties to rent in NW3
              </button>
            </div>

            <div className="mt-5 rounded-[12px] border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
              <h3 className="text-[20px] font-bold text-slate-800">Get ready with a Mortgage in Principle</h3>
              <div className="mt-4 flex h-28 items-center justify-center rounded-[12px] border border-dashed border-slate-200 bg-slate-50 text-4xl">
                🏠
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
