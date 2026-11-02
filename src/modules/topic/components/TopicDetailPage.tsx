import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  MessageSquareText,
  PlayCircle,
  Sparkles,
} from "lucide-react";

type TopicDetail = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  duration: string;
  skill: string;
  focus: string[];
  vocab: Array<{ word: string; meaning: string }>;
  phrases: string[];
  scenario: string[];
};

const TOPICS: Record<string, TopicDetail> = {
  "greeting-a-buyer": {
    slug: "greeting-a-buyer",
    title: "Greeting a buyer",
    label: "Topic 1",
    summary:
      "Build trust from the first minute of the conversation and make buyers feel comfortable discussing their goals.",
    duration: "8 minutes",
    skill: "Client rapport",
    focus: [
      "Warm openers and first impressions",
      "Understanding the buyer's needs",
      "Setting expectations professionally",
    ],
    vocab: [
      { word: "welcome", meaning: "chào mừng" },
      { word: "purchase", meaning: "mua hàng / mua nhà" },
      { word: "preference", meaning: "sở thích, ưu tiên" },
      { word: "consultation", meaning: "tư vấn" },
      { word: "budget", meaning: "ngân sách" },
    ],
    phrases: [
      "Hello, welcome to our property consultation.",
      "Thank you for reaching out today.",
      "What type of property are you looking for?",
      "May I ask about your budget and timeline?",
      "I would be happy to help you find the right fit.",
    ],
    scenario: [
      "A buyer visits your office for the first time.",
      "They are unsure whether they want an apartment or a townhouse.",
      "You need to ask about budget, preferred location, and moving timeline.",
    ],
  },
  "property-viewing": {
    slug: "property-viewing",
    title: "Property viewing",
    label: "Topic 2",
    summary:
      "Guide home tours with confidence and highlight the strongest selling points without overwhelming the buyer.",
    duration: "10 minutes",
    skill: "Home tour communication",
    focus: [
      "Highlighting key features",
      "Explaining layout and flow",
      "Showing practical lifestyle value",
    ],
    vocab: [
      { word: "layout", meaning: "bố cục" },
      { word: "natural light", meaning: "ánh sáng tự nhiên" },
      { word: "backyard", meaning: "sân sau" },
      { word: "amenities", meaning: "tiện ích" },
      { word: "storage", meaning: "không gian lưu trữ" },
    ],
    phrases: [
      "This living room gets excellent natural light.",
      "The kitchen is spacious and well organized.",
      "The backyard is ideal for family gatherings.",
      "You will also notice the storage space in each bedroom.",
      "This area is perfect for entertaining guests.",
    ],
    scenario: [
      "You are showing a villa to a family with children.",
      "You need to emphasize safety, privacy, and usable space.",
      "The client wants to know whether the layout supports daily living and hosting.",
    ],
  },
  "pricing-and-value": {
    slug: "pricing-and-value",
    title: "Pricing and value",
    label: "Topic 3",
    summary:
      "Explain pricing in a way that helps buyers understand value, neighborhood potential, and investment quality.",
    duration: "12 minutes",
    skill: "Value positioning",
    focus: [
      "Competitive pricing explanation",
      "Neighborhood analysis",
      "Investment potential",
    ],
    vocab: [
      { word: "market value", meaning: "giá trị thị trường" },
      { word: "competitive", meaning: "cạnh tranh / hợp lý so với thị trường" },
      { word: "investment", meaning: "đầu tư" },
      { word: "demand", meaning: "nhu cầu" },
      { word: "appreciation", meaning: "tăng giá" },
    ],
    phrases: [
      "This property is priced competitively for the area.",
      "The neighborhood has growing demand and strong amenities.",
      "We are seeing steady appreciation in this location.",
      "The value is supported by schools, access, and infrastructure.",
      "This unit offers a strong long-term return for the buyer.",
    ],
    scenario: [
      "An investor asks why a home is priced above nearby properties.",
      "You must explain location, return potential, and the quality of the asset.",
      "You also need to tie price to future resale and rental opportunities.",
    ],
  },
  financing: {
    slug: "financing",
    title: "Financing",
    label: "Topic 4",
    summary:
      "Discuss mortgage options, payments, and financing strategies so buyers can make confident decisions.",
    duration: "9 minutes",
    skill: "Mortgage guidance",
    focus: [
      "Loan types and payment terms",
      "Down payment planning",
      "Monthly affordability discussion",
    ],
    vocab: [
      { word: "mortgage", meaning: "vay mua nhà" },
      { word: "down payment", meaning: "tiền đặt cọc / trả trước" },
      { word: "interest rate", meaning: "lãi suất" },
      { word: "affordability", meaning: "khả năng chi trả" },
      { word: "term", meaning: "kỳ hạn" },
    ],
    phrases: [
      "We can review the mortgage options together.",
      "Your monthly payment depends on the loan term.",
      "A larger down payment may reduce interest costs.",
      "Let’s compare the fixed-rate and floating-rate plans.",
      "This loan structure fits your monthly income more comfortably.",
    ],
    scenario: [
      "A buyer is worried that the monthly installment is too high.",
      "You need to explain how loan structure, term, and down payment affect affordability.",
      "You also need to explain the tradeoff between short-term and long-term monthly costs.",
    ],
  },
  "closing-and-contracts": {
    slug: "closing-and-contracts",
    title: "Closing and contracts",
    label: "Topic 5",
    summary:
      "Help clients understand legal documents, closing procedures, and the final steps to complete a transaction.",
    duration: "11 minutes",
    skill: "Transactional communication",
    focus: [
      "Explaining legal documents simply",
      "Negotiating closing timeline",
      "Keeping the process transparent",
    ],
    vocab: [
      { word: "contract", meaning: "hợp đồng" },
      { word: "closing", meaning: "kết thúc giao dịch / bế mạc hợp đồng" },
      { word: "deposit", meaning: "tiền đặt cọc" },
      { word: "terms", meaning: "điều khoản" },
      { word: "signature", meaning: "chữ ký" },
    ],
    phrases: [
      "We need to review the contract terms carefully.",
      "The closing date has been set for next month.",
      "Please sign the offer and deposit documents here.",
      "I recommend reviewing all conditions before final approval.",
      "We will keep the timeline clear and transparent for both parties.",
    ],
    scenario: [
      "A seller is anxious about signing legal paperwork.",
      "You need to explain the purpose of each document and the timeline clearly.",
      "The client wants reassurance that the process is safe and well-structured.",
    ],
  },
  "neighborhood-and-search": {
    slug: "neighborhood-and-search",
    title: "Neighborhood and search",
    label: "Topic 6",
    summary:
      "Help buyers choose a location by aligning lifestyle needs with commute, schools, amenities, and neighborhood value.",
    duration: "7 minutes",
    skill: "Local market guidance",
    focus: [
      "Matching lifestyle to location",
      "Discussing amenities and commute",
      "Choosing the best-fit neighborhood",
    ],
    vocab: [
      { word: "neighborhood", meaning: "khu dân cư / khu phố" },
      { word: "commute", meaning: "lộ trình đi làm / di chuyển" },
      { word: "amenities", meaning: "tiện ích" },
      { word: "convenience", meaning: "sự tiện lợi" },
      { word: "location", meaning: "vị trí" },
    ],
    phrases: [
      "This area is close to schools and metro lines.",
      "The neighborhood offers good convenience and community amenities.",
      "It is ideal for families who value safety and accessibility.",
      "The location supports both work and family life.",
      "I believe this choice fits your daily routine and long-term goals.",
    ],
    scenario: [
      "A buyer is comparing two residential districts.",
      "You need to guide them using convenience, commute, schools, and long-term value.",
      "The client values lifestyle fit more than a slightly lower asking price.",
    ],
  },
};

export function TopicDetailPage({ slug }: { slug: string }) {
  const topic = TOPICS[slug] ?? TOPICS["greeting-a-buyer"];

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Link
          href="/chuyen-de"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to topics
        </Link>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700">
              <BadgeCheck className="h-3.5 w-3.5" />
              {topic.label}
            </div>

            <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              {topic.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              {topic.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="rounded-full bg-slate-100 px-3 py-1.5">Duration: {topic.duration}</div>
              <div className="rounded-full bg-slate-100 px-3 py-1.5">Skill: {topic.skill}</div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-2">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-100">
                    Lesson objective
                  </span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {topic.focus.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="lg:pt-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-2 text-blue-700">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Practice summary</h2>
              </div>

              <ul className="space-y-3">
                {topic.scenario.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200">
                Continue lesson
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </aside>
        </section>

        <section className="mt-10 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-slate-100 p-2 text-slate-700">
                <MessageSquareText className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Key phrases</h2>
            </div>

            <ul className="space-y-3">
              {topic.phrases.map((phrase) => (
                <li key={phrase} className="rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-slate-700">
                  {phrase}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-2 text-blue-700">
                <PlayCircle className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Vocabulary</h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {topic.vocab.map(({ word, meaning }) => (
                <div key={word} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="text-sm font-bold text-slate-900">{word}</div>
                  <div className="mt-1 text-sm text-slate-600">{meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
