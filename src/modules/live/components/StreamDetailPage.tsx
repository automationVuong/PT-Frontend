import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bell,
  Camera,
  Clock3,
  Eye,
  Heart,
  MapPin,
  MessageSquareText,
  Play,
  Send,
  ShieldCheck,
  Star,
  Users,
  Video,
} from "lucide-react";

const listing = {
  title: "The Sapphire Residences",
  location: "District 9, Ho Chi Minh City",
  price: "4.9 tỷ",
  tag: "Featured property",
  image:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  broker: "Khang Tran",
  viewers: "2.4k watching",
  duration: "18 min ongoing",
};

const chatMessages = [
  { user: "Lan N.", text: "This apartment has a beautiful view. Can you show the balcony area again?", tone: "bg-blue-50 text-blue-700" },
  { user: "Huy P.", text: "What is the deposit and payment schedule?", tone: "bg-emerald-50 text-emerald-700" },
  { user: "Tram A.", text: "Is there a nearby metro station and school district?", tone: "bg-amber-50 text-amber-700" },
  { user: "Duy T.", text: "Can I see the legal status and paperwork before I decide?", tone: "bg-violet-50 text-violet-700" },
  { user: "Mai C.", text: "Does this include parking and gym access?", tone: "bg-rose-50 text-rose-700" },
];

const features = [
  "4 bedrooms, 3 bathrooms, 187 m²",
  "Panoramic city view and rooftop garden",
  "Smart home system and covered parking",
  "2-minute access to central commercial zone",
  "Verified ownership and legal documentation",
];

const schedule = [
  "9:00 PM — Welcome and property overview",
  "9:06 PM — Room-by-room walkthrough",
  "9:15 PM — Legal checks and pricing",
  "9:22 PM — Q&A with the broker",
];

export function StreamDetailPage() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-slate-100">
      <header className="border-b border-white/10 bg-[#0d1425]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <Link href="/live" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-lg font-black text-white shadow-lg shadow-orange-500/20">
                Q
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Q-Broker</div>
                <div className="text-lg font-black tracking-tight text-white">Live property</div>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            <a href="#">Home</a>
            <a href="#">Streams</a>
            <a href="#">Properties</a>
            <a href="#">Events</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200">
              <Bell className="h-4 w-4" />
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25">
              Follow stream
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-4 py-6 lg:px-6">
        <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/live" className="inline-flex items-center gap-2 font-medium text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to live hub
          </Link>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">
          <section className="overflow-hidden rounded-[30px] border border-white/10 bg-[#111a2a] shadow-[0_18px_55px_rgba(15,23,42,0.25)]">
            <div className="relative">
              <div className="relative h-[620px] overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18),rgba(15,23,42,0.72))]" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-2 backdrop-blur-sm">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-200">Live</span>
                </div>

                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-sm text-white backdrop-blur-sm">
                  <Eye className="h-4 w-4 text-cyan-300" />
                  {listing.viewers}
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-xl rounded-[28px] border border-white/10 bg-slate-950/30 p-4 backdrop-blur-sm">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-200">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      {listing.tag}
                    </div>
                    <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{listing.title}</h1>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-200">
                      <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> {listing.location}</span>
                      <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-cyan-300" /> {listing.duration}</span>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-slate-950/35 px-4 py-3 text-white backdrop-blur-sm">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">Price</div>
                    <div className="mt-1 text-2xl font-black text-cyan-300">{listing.price}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#0f1729] px-4 py-5">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-400">Host</div>
                  <div className="mt-2 text-lg font-bold text-white">{listing.broker}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-400">Property type</div>
                  <div className="mt-2 text-lg font-bold text-white">Luxury apartment</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-400">Status</div>
                  <div className="mt-2 text-lg font-bold text-white">Ready to move in</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-400">Rating</div>
                  <div className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-white">
                    <Star className="h-4 w-4 fill-current text-amber-400" />
                    4.9/5
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-[30px] border border-white/10 bg-[#101827] p-4 shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <MessageSquareText className="h-4 w-4 text-cyan-300" />
                Live chat
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-300">
                324 new
              </div>
            </div>

            <div className="space-y-3">
              {chatMessages.map((message) => (
                <div key={message.user} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-white">{message.user}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${message.tone}`}>
                      new
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{message.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
              <input
                type="text"
                defaultValue="Ask the broker"
                className="w-full bg-transparent py-2 text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none"
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <Send className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 rounded-[22px] border border-emerald-500/20 bg-emerald-500/10 p-4">
              <div className="mb-2 flex items-center gap-2 text-emerald-200">
                <ShieldCheck className="h-4 w-4" />
                Verified property
              </div>
              <p className="text-sm leading-6 text-emerald-100">
                Legal documents, ownership records, and sales terms are verified before the stream begins.
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-white/10 bg-[#111a2a] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/15 p-2 text-blue-200">
                <Camera className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Property overview</h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#111a2a] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-amber-500/15 p-2 text-amber-200">
                <Clock3 className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Stream agenda</h2>
            </div>

            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-200">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">Next streams</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Brokers to watch</h2>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
              View all
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Green Valley Villas", subtitle: "Investor briefing", viewers: "1.1k" },
              { title: "Harborview Apartments", subtitle: "New launch walk-through", viewers: "860" },
              { title: "Skyline Residences", subtitle: "Luxury family homes", viewers: "1.7k" },
            ].map((stream) => (
              <div key={stream.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-[#101827]">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
                    alt={stream.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    Live
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-full bg-black/30 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {stream.viewers}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{stream.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{stream.subtitle}</p>
                  <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-400 px-4 py-2.5 text-sm font-semibold text-white">
                    Watch now
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
