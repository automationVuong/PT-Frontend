import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Camera,
  Clock3,
  Eye,
  Heart,
  MessageSquareText,
  Play,
  Search,
  Send,
  ShieldCheck,
  Star,
  TrendingUp,
  Tv,
  Users,
  Video,
} from "lucide-react";

const liveChannels = [
  {
    name: "Q-Broker Live",
    host: "Khang Tran",
    topic: "Luxury penthouse walkthrough",
    viewers: "2.4k",
    tag: "Live now",
    accent: "from-blue-600 to-cyan-500",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "House Hunt Studio",
    host: "Lan Nguyen",
    topic: "3-bedroom family home tour",
    viewers: "1.1k",
    tag: "Hot",
    accent: "from-emerald-500 to-teal-500",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Urban Capital",
    host: "Duy Pham",
    topic: "Investor briefing: new launches",
    viewers: "860",
    tag: "New",
    accent: "from-violet-500 to-purple-500",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
];

const chatMessages = [
  { user: "Lan N.", text: "The view is amazing. Is there a panoramic balcony?", tone: "bg-blue-50 text-blue-700" },
  { user: "Huy P.", text: "Can we get the floor plan and HOA information?", tone: "bg-emerald-50 text-emerald-700" },
  { user: "Tram A.", text: "I love the location near the metro. How many units remain?", tone: "bg-amber-50 text-amber-700" },
  { user: "Duy T.", text: "What is the payment schedule for this apartment?", tone: "bg-violet-50 text-violet-700" },
  { user: "Mai C.", text: "Can you share the legal docs after the stream?", tone: "bg-rose-50 text-rose-700" },
];

const categories = ["All", "Luxury", "Investor", "Townhouse", "Villa", "Condotel", "New launch"];

export function LivePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-lg font-black text-white shadow-lg shadow-orange-500/20">
              Q
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Q-Broker</div>
              <div className="text-lg font-black tracking-tight text-slate-900">Live & property</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <a href="/" className="text-slate-700 hover:text-blue-600">Discover</a>
            <a href="/mua-nha" className="hover:text-blue-600">Categories</a>
            <a href="/live" className="hover:text-blue-600">Live now</a>
            <a href="/chat" className="hover:text-blue-600">Broker</a>
            <a href="/tin-tuc" className="hover:text-blue-600">Events</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                defaultValue="Search property"
                className="w-40 rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none lg:w-52"
              />
            </div>
            <button className="rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-700">
              <Bell className="h-4 w-4" />
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25">
              Host live
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-4 py-6 lg:px-6">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                index === 0
                  ? "border-blue-200 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_0.67fr]">
          <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
            <div className="relative">
              <div className="relative h-[560px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1400&q=80"
                  alt="Live property showcase"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.14),rgba(15,23,42,0.68))]" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-2 backdrop-blur-sm">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-100">Live</span>
                </div>

                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-sm text-white backdrop-blur-sm">
                  <Eye className="h-4 w-4 text-cyan-300" />
                  2.4k watching
                </div>

                <div className="absolute left-5 right-5 bottom-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-xl rounded-[28px] border border-white/15 bg-slate-950/30 p-4 backdrop-blur-sm">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-100">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Featured property
                    </div>
                    <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                      The Sapphire Residences
                    </h1>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-200">
                      A luxury 4-bedroom apartment with panoramic city views, a smart-home system, and direct access to the city’s best lifestyle amenities.
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-slate-950/35 p-3 text-white backdrop-blur-sm">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">Starting from</div>
                    <div className="mt-1 text-2xl font-black text-cyan-300">4.9 tỷ</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 border-t border-slate-200 bg-slate-50 px-4 py-4">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2">
                  <div className="rounded-xl bg-blue-100 p-2 text-blue-700">
                    <Tv className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Host</div>
                    <div className="text-sm font-semibold text-slate-900">Khang Tran</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2">
                  <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Audience</div>
                    <div className="text-sm font-semibold text-slate-900">2,400+ viewers</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2">
                  <div className="rounded-xl bg-amber-100 p-2 text-amber-700">
                    <Clock3 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Stream</div>
                    <div className="text-sm font-semibold text-slate-900">18 min ongoing</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <MessageSquareText className="h-4 w-4 text-cyan-600" />
                Live chat
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">
                324 new
              </div>
            </div>

            <div className="space-y-3">
              {chatMessages.map((message) => (
                <div key={message.user} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-slate-900">{message.user}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${message.tone}`}>
                      live
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{message.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  defaultValue="Ask the broker"
                  className="w-full bg-transparent py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                />
                <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-5 rounded-[22px] border border-emerald-200 bg-emerald-50 p-4">
              <div className="mb-2 flex items-center gap-3 text-emerald-700">
                <ShieldCheck className="h-4 w-4" />
                Verification
              </div>
              <p className="text-sm leading-6 text-emerald-800">
                Property documents, legal status, and sales terms are verified before each live session.
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600">Live channels</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Trending broadcasts</h2>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              Explore more
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {liveChannels.map((channel) => (
              <article key={channel.name} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-blue-200">
                <div className="relative">
                  <img src={channel.image} alt={channel.name} className="h-52 w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.55))]" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    {channel.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-2.5 py-1.5 text-xs text-white backdrop-blur-sm">
                    <Eye className="h-3.5 w-3.5 text-cyan-300" />
                    {channel.viewers}
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xl font-bold text-slate-900">{channel.name}</div>
                      <div className="text-sm text-slate-500">by {channel.host}</div>
                    </div>
                    <button className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="text-sm leading-6 text-slate-600">{channel.topic}</p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                    <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                      <Star className="h-4 w-4 fill-current text-amber-400" />
                      4.9 rating
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-400 px-4 py-2 text-sm font-semibold text-white">
                      Join
                      <Play className="h-3.5 w-3.5 fill-current" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600">Broker insight</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Why buyers tune in live</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-5">
              <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-blue-700">
                <Video className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Live walkthroughs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">See the exact layout, finishes, and neighborhood feel in real time.</p>
            </div>

            <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-5">
              <div className="mb-3 inline-flex rounded-xl bg-emerald-100 p-2 text-emerald-700">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Instant market updates</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Get pricing insights, developer offers, and valuation context immediately.</p>
            </div>

            <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-5">
              <div className="mb-3 inline-flex rounded-xl bg-violet-100 p-2 text-violet-700">
                <Camera className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Direct broker answers</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Ask about financing, legal checks, and payment terms in the chat.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
