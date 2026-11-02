import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  ChevronRight,
  CreditCard,
  Download,
  Landmark,
  PiggyBank,
  Plus,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";

const walletSummary = [
  { label: "Available balance", value: "₫ 2.480M", change: "+8.2%", tone: "text-emerald-600" },
  { label: "Invested capital", value: "₫ 12.900M", change: "+14.6%", tone: "text-blue-600" },
  { label: "Monthly return", value: "₫ 418K", change: "+2.1%", tone: "text-violet-600" },
  { label: "Pending deposits", value: "₫ 760K", change: "-0.4%", tone: "text-amber-600" },
];

const holdings = [
  {
    name: "The Sapphire Residences",
    type: "Apartment",
    amount: "₫ 3.250M",
    returnRate: "+11.8%",
    status: "Profitable",
  },
  {
    name: "Green Valley Villas",
    type: "Villa",
    amount: "₫ 4.100M",
    returnRate: "+9.4%",
    status: "Stable",
  },
  {
    name: "Harborview Apartments",
    type: "Condotel",
    amount: "₫ 2.680M",
    returnRate: "+13.2%",
    status: "Profitable",
  },
];

const transactions = [
  { title: "Deposit to Sapphire Residences", date: "Today, 09:15", amount: "+₫ 300K", type: "income" },
  { title: "Property maintenance refund", date: "Yesterday, 18:20", amount: "+₫ 120K", type: "income" },
  { title: "Withdrawal to Vietcombank", date: "Mon, 15:42", amount: "-₫ 80K", type: "expense" },
  { title: "Rental income share", date: "Sun, 10:02", amount: "+₫ 245K", type: "income" },
];

const quickActions = [
  { label: "Top up wallet", icon: Plus },
  { label: "Transfer", icon: ArrowUpRight },
  { label: "Withdraw", icon: ArrowDownLeft },
  { label: "Statement", icon: Download },
];

export function WalletPage() {
  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-800">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-4 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-black text-white shadow-lg shadow-blue-600/20">
              Q
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Q-Broker</div>
              <div className="text-lg font-black tracking-tight text-slate-900">Wallet</div>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            <a href="#" className="hover:text-slate-900">Overview</a>
            <a href="#" className="hover:text-slate-900">Transactions</a>
            <a href="#" className="hover:text-slate-900">Properties</a>
            <a href="#" className="hover:text-slate-900">Cards</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 bg-slate-100 p-2.5 text-slate-700 transition hover:border-slate-300">
              <Bell className="h-4 w-4" />
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20">
              Add funds
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-4 py-6 lg:px-6">
        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
          <section className="space-y-6">
            <div className="rounded-[30px] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-6 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-100">Main wallet</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight">₫ 2.480M</h1>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Wallet className="h-6 w-6 text-cyan-300" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-200">
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">•••• 4789</div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-200">
                  <TrendingUp className="h-4 w-4" />
                  +8.2% this month
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-4">
                {walletSummary.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-300">{item.label}</p>
                    <div className="mt-3 text-xl font-black text-white">{item.value}</div>
                    <div className={`mt-2 text-xs font-semibold ${item.tone}`}>{item.change}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600">Holdings</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Property investments</h2>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                  View all
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4">
                {holdings.map((holding) => (
                  <div key={holding.name} className="flex items-center justify-between gap-4 rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/15">
                        <Landmark className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-slate-900">{holding.name}</div>
                        <div className="text-sm text-slate-500">{holding.type}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-bold text-slate-900">{holding.amount}</div>
                      <div className="text-sm font-semibold text-emerald-600">{holding.returnRate}</div>
                    </div>

                    <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                      {holding.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900">Quick actions</h3>
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.label}
                      className="rounded-[20px] border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
                    >
                      <div className="mb-3 inline-flex rounded-xl bg-white p-2 text-blue-600 shadow-sm ring-1 ring-slate-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="text-sm font-semibold text-slate-800">{action.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900">Security</h3>
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </div>

              <div className="rounded-[22px] border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-bold text-emerald-800">Protected account</div>
                    <div className="mt-1 text-xs text-emerald-700">2-factor authentication enabled</div>
                  </div>
                  <div className="rounded-full bg-emerald-600 p-2 text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600">History</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Recent transactions</h2>
            </div>
            <button className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">Export</button>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                <tr>
                  <th className="px-4 py-3">Activity</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {transactions.map((transaction) => (
                  <tr key={transaction.title} className="text-sm text-slate-700">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${transaction.type === "income" ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"}`}>
                          {transaction.type === "income" ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                        </div>
                        <span className="font-medium text-slate-800">{transaction.title}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-slate-500">{transaction.date}</td>
                    <td className={`px-4 py-4 text-right font-bold ${transaction.type === "income" ? "text-emerald-600" : "text-rose-600"}`}>
                      {transaction.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
