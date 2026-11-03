import type { Metadata } from "next";
import { DuAnPage } from "@/modules/du-an/components/DuAnPage";

export const metadata: Metadata = {
  title: "Bất động sản",
};

export default function Page() {
  return (
      <main className="bg-[#f3f1ee] text-slate-900">
        <DuAnPage />
      </main>
    );
}
