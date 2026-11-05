import type { Metadata } from "next";
import HomePage from "@/modules/home/components/HomePage"; 

export default function Page() {
  return (
    <main className="bg-[#f3f1ee] text-slate-900">
      <HomePage />
    </main>
  );
}