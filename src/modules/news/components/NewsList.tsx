import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

const articles = [
  {
    category: "Market",
    title: "Property prices continue to rise in urban fringe districts",
    summary: "Developers are seeing growing demand for mid-market homes near commuter routes and shopping corridors.",
    date: "Nov 01, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Finance",
    title: "Mortgage interest rates slow but refinancing opportunities remain favorable",
    summary: "Borrowers are reviewing fixed-rate and hybrid products as lenders adjust pricing and closing terms.",
    date: "Oct 29, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Policy",
    title: "New regulation aims to improve transparency in off-plan sales",
    summary: "Industry groups say clearer disclosure rules could reduce buyer uncertainty and strengthen market trust.",
    date: "Oct 24, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Investment",
    title: "Investors focus on rental yield and neighborhood infrastructure growth",
    summary: "A growing number of investors are prioritizing access to schools, transit, and convenience retail over pure square footage.",
    date: "Oct 20, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Lifestyle",
    title: "Homebuyers are prioritizing flexible spaces for remote work and family life",
    summary: "Design features like home offices, storage, and private outdoor areas are becoming key decision factors.",
    date: "Oct 18, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Development",
    title: "Mixed-use projects reshape demand around transit hubs",
    summary: "Developers are combining residential and retail components to appeal to modern buyers seeking convenience.",
    date: "Oct 12, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
];

export function NewsList() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Latest coverage</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Real-estate news and market updates</h2>
        </div>
        <button className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 sm:inline-flex">
          View all articles
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(37,99,235,0.08)]">
            <img src={article.image} alt={article.title} className="h-52 w-full object-cover" />

            <div className="p-5">
              <span className="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">
                {article.category}
              </span>

              <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{article.summary}</p>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 className="h-3.5 w-3.5" />
                  {article.readTime}
                </div>
              </div>

              <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                Read more
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
