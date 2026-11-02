import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Compass,
  HeartHandshake,
  Landmark,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const stats = [
  { value: "12K+", label: "properties sold" },
  { value: "4.9/5", label: "client satisfaction" },
  { value: "28 cities", label: "market coverage" },
  { value: "1,200+", label: "expert advisors" },
];

const valuePillars = [
  {
    icon: Landmark,
    title: "Trusted guidance",
    description:
      "We combine market intelligence, local expertise, and transparent advice to help every client make confident property decisions.",
  },
  {
    icon: Compass,
    title: "Right-fit homes",
    description:
      "From family villas to city condos and investment assets, we match buyers to opportunities aligned with their goals and lifestyle.",
  },
  {
    icon: ShieldCheck,
    title: "Secure transactions",
    description:
      "Every step is supported by professional legal review, mortgage support, and risk-conscious transaction management.",
  },
  {
    icon: TrendingUp,
    title: "Growth mindset",
    description:
      "We continuously explore emerging neighborhoods, new developments, and smart urban strategies to unlock long-term value.",
  },
];

const strengths = [
  "End-to-end property advisory from discovery to closing",
  "Local market knowledge across emerging and established districts",
  "Premium residential, commercial, and investment portfolio curation",
  "Personalized financing, investment, and relocation guidance",
  "Digital-first experience with in-person expertise",
];

const milestones = [
  {
    year: "2016",
    title: "Started with a boutique advisory model",
    text: "Founded to bring clarity, trust, and strategic insight to urban property buyers and developers.",
  },
  {
    year: "2019",
    title: "Expanded to regional property network",
    text: "Built a stronger multi-city footprint with access to both premium and high-growth developments.",
  },
  {
    year: "2023",
    title: "Scaled digital property experiences",
    text: "Introduced immersive listing, live tours, neighborhood exploration, and investor dashboards.",
  },
];

const partners = [
  "Prime residential developers",
  "Commercial property groups",
  "Mortgage and legal partners",
  "Design and interior specialists",
  "Urban planning and investment advisors",
];

export function AboutUsPage() {
  return (
    <main className="bg-[#f5f7fb] text-slate-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),transparent_18%),linear-gradient(135deg,#f8fbff_0%,#edf5ff_35%,#f5f7fb_100%)] px-4 pb-20 pt-10 md:px-6 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            About us
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Real estate ecosystem
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-black tracking-[-0.06em] text-slate-900 md:text-6xl">
                We help people find the place that moves life forward.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                We are a modern property platform built to connect buyers, investors, renters, and developers through trusted advice, data-backed discovery, and a seamless buying journey.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/mua-nha"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
                >
                  Explore properties
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/live"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                >
                  Watch live tours
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern property and lifestyle community"
                  className="h-[500px] w-full rounded-[24px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-4 rounded-[24px] border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Market reach
                    </div>
                    <div className="text-xl font-black text-slate-900">28 cities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Our impact</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
            Built around trust, access, and long-term value.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-[0_16px_34px_rgba(15,23,42,0.04)]"
            >
              <div className="text-4xl font-black tracking-[-0.05em] text-slate-900">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Our values</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
              The principles that guide every property decision.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {valuePillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-[28px] border border-slate-200 bg-[#f8fafc] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.03)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-900">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Property investment and urban growth"
              className="h-[430px] w-full rounded-[24px] object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Why choose us</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
              A complete real-estate partner for every stage of the journey.
            </h2>

            <div className="mt-8 space-y-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <p className="text-base leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ecf4ff] py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Our journey</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
              From a local advisory practice to a regional property platform.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {milestones.map((item) => (
              <div key={item.year} className="rounded-[28px] border border-blue-200 bg-white p-6 shadow-[0_18px_35px_rgba(59,130,246,0.08)]">
                <div className="mb-5 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  {item.year}
                </div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.14)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Our network</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Strategic relationships that open better opportunities.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {partners.map((partner) => (
                <div key={partner} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                    <Star className="h-4 w-4" />
                  </span>
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 pt-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_50%,#f8fafc_100%)] p-8 md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Let’s build together</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-4xl">
                  Find the right property strategy for your next chapter.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/dang-ky"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/mua-nha"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                >
                  Browse listings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
