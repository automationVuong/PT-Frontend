import type { Metadata } from "next";
import BuyCategoryPage  from "@/modules/tin-tuc/mua/components/BuyCategoryPage"; 

export const metadata: Metadata = {
  title: "Bất động sản",
};

export default function Page() {
  return (
      <main className="bg-[#f3f1ee] text-slate-900">
        <BuyCategoryPage />
      </main>
    );
}
