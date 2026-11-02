import {
  Bell,
  CheckCheck,
  Home,
  MessageSquareText,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Video,
  MoreHorizontal,
  Paperclip,
  ArrowUpRight,
} from "lucide-react";

const conversations = [
  {
    name: "Khang Tran",
    role: "Senior broker",
    status: "Online",
    lastSeen: "2 min ago",
    preview: "The Sapphire Residences has a verified title deed ready for review.",
    unread: 3,
    accent: "bg-emerald-500",
  },
  {
    name: "Lan Nguyen",
    role: "Sales advisor",
    status: "Busy",
    lastSeen: "8 min ago",
    preview: "I can schedule a private viewing for Friday afternoon.",
    unread: 1,
    accent: "bg-amber-500",
  },
  {
    name: "Duy Pham",
    role: "Property consultant",
    status: "Online",
    lastSeen: "14 min ago",
    preview: "I’ve sent the comparison sheet for the two apartment options.",
    unread: 0,
    accent: "bg-blue-500",
  },
  {
    name: "Mai Tran",
    role: "Legal specialist",
    status: "Away",
    lastSeen: "26 min ago",
    preview: "The document checklist is ready for your review.",
    unread: 2,
    accent: "bg-violet-500",
  },
];

const messages = [
  {
    self: false,
    text: "Hi! I’ve reviewed the layout and the payment plan. The unit still has full legal documentation.",
    time: "09:12",
  },
  {
    self: true,
    text: "Perfect. Can you share the final price and the neighborhood details again for my partner?",
    time: "09:13",
  },
  {
    self: false,
    text: "Absolutely. The project is near the metro, schools, and premium retail. We can arrange a private tour this week.",
    time: "09:14",
  },
  {
    self: true,
    text: "Great. Please send the updated comparison sheet and timeline for closing.",
    time: "09:16",
  },
  {
    self: false,
    text: "I’ll send the checklist and viewing schedule right away. We can also check financing options.",
    time: "09:18",
  },
];

export function ChatPage() {
  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-800">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-black text-white shadow-lg shadow-blue-600/20">
              Q
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Q-Broker</div>
              <div className="text-lg font-black tracking-tight text-slate-900">Messages</div>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            <a href="#" className="flex items-center gap-2 hover:text-slate-900"><Home className="h-4 w-4" /> Home</a>
            <a href="#" className="flex items-center gap-2 hover:text-slate-900"><MessageSquareText className="h-4 w-4" /> Inbox</a>
            <a href="#" className="flex items-center gap-2 hover:text-slate-900"><ShieldCheck className="h-4 w-4" /> Verified</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 bg-slate-100 p-2.5 text-slate-700 transition hover:border-slate-300">
              <Bell className="h-4 w-4" />
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20">
              New chat
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] px-4 py-6 lg:px-6">
        <div className="grid min-h-[calc(100vh-120px)] gap-6 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="border-r border-slate-200 bg-slate-50/80">
            <div className="border-b border-slate-200 p-4">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  defaultValue="Search chats"
                  className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2 p-3">
              {conversations.map((conversation) => (
                <button
                  key={conversation.name}
                  className={`flex w-full items-start gap-3 rounded-[22px] border p-3 text-left transition ${
                    conversation.name === "Khang Tran"
                      ? "border-blue-200 bg-blue-50 shadow-sm"
                      : "border-transparent bg-transparent hover:border-slate-200 hover:bg-white"
                  }`}
                >
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-600 text-sm font-bold text-white">
                      {conversation.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <span className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white ${conversation.accent}`} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="truncate text-sm font-bold text-slate-900">{conversation.name}</div>
                      <span className="text-[10px] font-medium text-slate-400">{conversation.lastSeen}</span>
                    </div>
                    <div className="mt-1 text-[11px] font-medium text-slate-500">{conversation.role}</div>
                    <div className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">{conversation.preview}</div>
                  </div>

                  {conversation.unread > 0 && (
                    <div className="ml-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[10px] font-bold text-white">
                      {conversation.unread}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </aside>

          <section className="flex min-h-0 flex-col bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-600 text-sm font-bold text-white">
                  KT
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900">Khang Tran</div>
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    Online now
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="rounded-xl border border-slate-200 bg-slate-100 p-2.5 text-slate-700 transition hover:border-slate-300">
                  <Phone className="h-4 w-4" />
                </button>
                <button className="rounded-xl border border-slate-200 bg-slate-100 p-2.5 text-slate-700 transition hover:border-slate-300">
                  <Video className="h-4 w-4" />
                </button>
                <button className="rounded-xl border border-slate-200 bg-slate-100 p-2.5 text-slate-700 transition hover:border-slate-300">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-1 flex-col bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_30%),_linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]">
              <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 px-5 py-4">
                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Property verified
                </div>
                <div className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Unit available
                </div>
                <div className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                  Closing support
                </div>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
                {messages.map((message, index) => (
                  <div key={`${message.time}-${index}`} className={`flex ${message.self ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[75%] rounded-[22px] px-4 py-3 shadow-sm ${message.self ? "bg-blue-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}>
                      <div className="text-sm leading-6">{message.text}</div>
                      <div className={`mt-2 flex items-center justify-end gap-2 text-[10px] ${message.self ? "text-blue-100" : "text-slate-400"}`}>
                        <span>{message.time}</span>
                        {message.self && <CheckCheck className="h-3 w-3" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 bg-white p-4">
                <div className="flex items-center gap-3 rounded-[22px] border border-slate-200 bg-slate-50 p-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm ring-1 ring-slate-200">
                    <Paperclip className="h-4 w-4" />
                  </button>
                  <input
                    type="text"
                    defaultValue="Type your message here..."
                    className="w-full bg-transparent px-2 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                  />
                  <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20">
                    <Send className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span className="inline-flex items-center gap-2"><ArrowUpRight className="h-3.5 w-3.5" /> Quick actions</span>
                  <span>Response time: under 5 min</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
