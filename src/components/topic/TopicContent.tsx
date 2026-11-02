import {
  Building2,
  CircleDollarSign,
  Compass,
  House,
  KeyRound,
  MessageSquareText,
  NotebookText,
  Search,
} from "lucide-react";

const topics = [
  {
    title: "Topic 1: Greeting a buyer",
    subtitle: "Build trust with a first-time home buyer or investor.",
    icon: MessageSquareText,
    accent: "from-cyan-500 to-blue-500",
    color: "bg-cyan-50 text-cyan-700",
    examples: [
      "Hello, welcome to our property consultation.",
      "Thanks for reaching out today.",
      "What kind of home are you looking for?",
    ],
  },
  {
    title: "Topic 2: Property viewing",
    subtitle: "Guide clients through a home tour and highlight key features.",
    icon: House,
    accent: "from-yellow-400 to-orange-400",
    color: "bg-amber-50 text-amber-700",
    examples: [
      "This living room gets plenty of natural light.",
      "The kitchen has a modern layout and island.",
      "The backyard is ideal for family gatherings.",
    ],
  },
  {
    title: "Topic 3: Pricing and value",
    subtitle: "Explain price, neighborhood value, and investment potential.",
    icon: CircleDollarSign,
    accent: "from-emerald-500 to-teal-500",
    color: "bg-emerald-50 text-emerald-700",
    examples: [
      "This property is priced competitively for the area.",
      "The neighborhood has strong rental demand.",
      "Location and amenities increase long-term value.",
    ],
  },
  {
    title: "Topic 4: Financing",
    subtitle: "Discuss loan options, mortgage planning, and payment structure.",
    icon: Building2,
    accent: "from-violet-500 to-indigo-500",
    color: "bg-violet-50 text-violet-700",
    examples: [
      "We can review mortgage options together.",
      "Your monthly payment depends on the loan term.",
      "A larger down payment may reduce interest costs.",
    ],
  },
  {
    title: "Topic 5: Closing and contracts",
    subtitle: "Explain legal steps, offer letters, and final transactions.",
    icon: KeyRound,
    accent: "from-rose-500 to-pink-500",
    color: "bg-rose-50 text-rose-700",
    examples: [
      "We need to review the contract terms carefully.",
      "The closing date is scheduled for next month.",
      "Please sign the offer and deposit documents here.",
    ],
  },
  {
    title: "Topic 6: Neighborhood and search",
    subtitle: "Help clients choose a location based on lifestyle and commute.",
    icon: Search,
    accent: "from-sky-500 to-cyan-500",
    color: "bg-sky-50 text-sky-700",
    examples: [
      "This area is close to schools and metro lines.",
      "It is a quiet neighborhood with good amenities.",
      "It is perfect for families looking for convenience.",
    ],
  },
];

const quickTips = [
  "Use a warm greeting before discussing price or requirements.",
  "Describe home features in simple, confident language.",
  "Keep the conversation focused on client needs and budget.",
  "Ask follow-up questions about location, size, and timeline.",
];

export function TopicContent() {
  return (
    <div className="space-y-10 py-10">
      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Core topics</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Real-estate conversation topics</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {topics.map(({ title, subtitle, icon: Icon, accent, color, examples }) => (
            <article key={title} className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)]">
              <div className={`bg-gradient-to-r ${accent} p-5 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-xl bg-white/15 p-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-white/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em]">
                    Topic
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>

                <div className={`mt-5 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${color}`}>
                  Property practice
                </div>

                <ul className="mt-4 space-y-2">
                  {examples.map((example) => (
                    <li key={example} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-2 text-blue-700">
              <NotebookText className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Quick sales tips</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickTips.map((tip) => (
              <div key={tip} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                {tip}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-[28px] bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 p-8 text-white shadow-[0_22px_55px_rgba(15,23,42,0.18)]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-100">Practice</p>
              <h2 className="mt-2 text-3xl font-bold">Use these phrases in real client conversations</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-sky-100">
                Mastering a few real-estate phrases can help you sound confident when speaking with buyers, sellers, and investors.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3 text-sm text-cyan-100">
                <Compass className="h-4 w-4" />
                Sample conversation
              </div>
              <div className="rounded-xl bg-slate-950/40 p-4 text-sm text-slate-100">
                <p>“This property offers a great location and strong long-term value.”</p>
                <p className="mt-2 text-cyan-200">“I’d like to walk you through the pricing and financing options.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
