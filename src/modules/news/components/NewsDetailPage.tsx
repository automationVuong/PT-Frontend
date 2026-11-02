import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  MessageSquareText,
  Share2,
  Sparkles,
  TrendingUp,
  UserRound,
} from "lucide-react";

type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  image: string;
  content: string[];
  highlights: string[];
};

const articles: Record<string, NewsArticle> = {
  "property-prices-continue-rise": {
    slug: "property-prices-continue-rise",
    title: "Property prices continue to rise in urban fringe districts",
    category: "Market",
    date: "Nov 01, 2026",
    readTime: "5 min read",
    author: "Nguyễn Minh Anh",
    summary:
      "Developers are seeing a steady increase in demand as commuter infrastructure and lifestyle amenities strengthen value in emerging residential zones.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Transaction volume expanded in areas connected by metro and ring roads.",
      "Buyers are prioritizing neighborhood convenience and long-term value over simple square footage.",
      "Mid-market projects are outperforming speculative developments in slower-moving areas.",
    ],
    content: [
      "Residential activity in urban fringe districts has remained resilient even as lenders adjust their pricing frameworks. Developers and brokers are reporting stronger buyer confidence in areas with access to schools, healthcare, retail centers, and major transport corridors.",
      "Market analysts say the shift is partly driven by a more selective home-buying strategy. Rather than chasing large units in the traditional city core, many buyers are looking for secure value in communities that offer a better balance of affordability, commute time, and everyday amenities.",
      "The result is a more stable, less speculative market. In practice, this means projects near Metro lines, major roads, and mixed-use community hubs are outperforming older inventory and locations with weaker infrastructure visibility.",
      "For investors, the lesson is simple: neighborhood quality matters as much as headline price. Strong projects are increasingly defined by access, livability, and long-term rental appeal rather than only land value or short-term hype.",
    ],
  },
  "mortgage-rates-remain-favorable": {
    slug: "mortgage-rates-remain-favorable",
    title: "Mortgage interest rates slow but refinancing opportunities remain favorable",
    category: "Finance",
    date: "Oct 29, 2026",
    readTime: "7 min read",
    author: "Lê Quốc Huy",
    summary:
      "Borrowers are revisiting product options as lenders adjust fixed-rate and hybrid loan strategies for the next period of market movement.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Fixed-rate products remain attractive for budget certainty.",
      "Shorter-term financing can help buyers improve monthly flexibility.",
      "Refinancing remains viable when lenders offer better spreads and lower fees.",
    ],
    content: [
      "Mortgage pricing has cooled from recent peaks, but financing conditions remain far from uniform across lenders. Buyers who are comparing product structures are finding more room to negotiate terms, particularly when they have stable income, strong savings, or a larger down payment.",
      "Real-estate consultants note that the market is rewarding preparation. Buyers who review borrowing capacity early are in a stronger position to lock in a plan that fits both short-term affordability and long-term portfolio strategy.",
      "For existing owners, refinancing is still worth evaluating if the spread improvement is meaningful. A smaller rate difference can still translate into significant savings over a full loan cycle when combined with lower fees and a better amortization profile.",
      "In many cases, a successful financing plan is less about chasing the lowest headline rate and more about matching the product to the buyer's timeline, cash flow, and risk tolerance.",
    ],
  },
  "new-regulation-transparency": {
    slug: "new-regulation-transparency",
    title: "New regulation aims to improve transparency in off-plan sales",
    category: "Policy",
    date: "Oct 24, 2026",
    readTime: "6 min read",
    author: "Phạm Thị Lan",
    summary:
      "Industry groups say stronger disclosure standards may reduce uncertainty and improve trust in pre-construction transactions.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Disclosure rules encourage clearer project timelines and financial reporting.",
      "Buyers gain more visibility into permits, responsibilities, and risk factors.",
      "Stronger standards may reduce delays and disputes in pre-sale projects.",
    ],
    content: [
      "The proposed regulatory reforms aim to improve the way developers communicate project status, financial commitments, and completion schedules. For buyers, this could mean fewer surprises and a cleaner path to decision-making in off-plan transactions.",
      "Real-estate professionals have welcomed the focus on transparency, arguing that the market becomes healthier when projects disclose timelines, legal responsibilities, and risk information early. Greater accountability can also help lenders and investors assess projects with more confidence.",
      "A more transparent system also benefits developers by reducing friction at the sales stage. When buyers understand exactly what is included, when delivery is expected, and what conditions may change, the quality of the pipeline improves for everyone involved.",
      "The broader takeaway is that strong regulation should not be seen as a barrier to growth. In a competitive market, trust is often the difference between a well-received launch and a stalled campaign.",
    ],
  },
};

const related = Object.values(articles).filter((item) => item.slug !== "property-prices-continue-rise");

export function NewsDetailPage({ slug }: { slug: string }) {
  const article = articles[slug] ?? articles["property-prices-continue-rise"];

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Link
          href="/tin-tuc"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại tin tức
        </Link>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <article className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-slate-500" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-slate-500" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              {article.title}
            </h1>

            <div className="mt-5 flex items-center justify-between gap-4 rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <UserRound className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{article.author}</div>
                  <div className="text-xs text-slate-500">Real-estate market editor</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-600">
                <button className="rounded-full border border-slate-200 bg-slate-50 p-2.5 hover:bg-slate-100" aria-label="Share on social">
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="rounded-full border border-slate-200 bg-slate-50 p-2.5 hover:bg-slate-100" aria-label="Share article">
                  <MessageSquareText className="h-4 w-4" />
                </button>
                <button className="rounded-full border border-slate-200 bg-slate-50 p-2.5 hover:bg-slate-100" aria-label="Share article link">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <img
              src={article.image}
              alt={article.title}
              className="mt-8 h-[420px] w-full rounded-[28px] object-cover shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            />

            <p className="mt-8 text-lg leading-8 text-slate-700">{article.summary}</p>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-cyan-100 p-2 text-cyan-700">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Key takeaways</h2>
              </div>

              <ul className="space-y-3">
                {article.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-700">
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="space-y-6 xl:pt-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-amber-100 p-2 text-amber-700">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Related articles</h3>
              </div>

              <div className="space-y-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/tin-tuc/${item.slug}`}
                    className="block rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <div className="mb-2 inline-flex rounded-full bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">
                      {item.category}
                    </div>
                    <h4 className="text-sm font-bold leading-6 text-slate-800">{item.title}</h4>
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {item.date}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 p-6 text-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2 text-cyan-200">
                  <MessageSquareText className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Join the discussion</h3>
              </div>
              <p className="text-sm leading-6 text-sky-100">
                Follow the latest property analysis and stay updated on pricing, financing, and emerging neighborhood trends.
              </p>

              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-900">
                Explore more updates
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </aside>
        </article>
      </main>
    </div>
  );
}
