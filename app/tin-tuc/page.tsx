import type { Metadata } from "next";
import NewsPage  from "@/modules/tin-tuc/components/NewsPage"; 

export const metadata: Metadata = {
  title: "Bất động sản",
};

export default function Page() {
  return (
      <main className="bg-[#f3f1ee] text-slate-900">
        <NewsPage />
      </main>
    );
}
