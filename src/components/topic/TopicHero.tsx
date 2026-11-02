import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export function TopicHero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-teal-700 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
              <Sparkles className="h-3.5 w-3.5" />
              Real estate learning topics
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">
              Learn real-estate conversations that help you sell, buy, and advise better
            </h1>

            <p className="mt-5 max-w-xl text-base text-sky-100">
              Start with practical property topics such as buyer greetings, property tours, pricing, financing, and closing conversations.
              Each topic helps you handle real client situations with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20">
                Start learning
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Browse topics
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow-[0_25px_60px_rgba(15,23,42,0.25)]">
            <div className="rounded-[24px] border border-white/10 bg-slate-950/40 p-6">
              <div className="mb-5 flex items-center justify-between text-sm text-slate-200">
                <span>Learning progress</span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-300">
                  Active
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-100">
                    <span>Buyer greeting</span>
                    <span>88%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-100">
                    <span>Property tour</span>
                    <span>72%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-100">
                    <span>Closing terms</span>
                    <span>64%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-[64%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-100">
                <BookOpen className="h-4 w-4" />
                12 new property lessons this week
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
