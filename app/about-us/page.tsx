import type { Metadata } from "next";
import { AboutUsPage } from "@/modules/about";

export const metadata: Metadata = {
  title: "About us | Real Estate Platform",
  description: "Discover our mission, values, market reach, and real-estate expertise.",
};

export default function Page() {
  return <AboutUsPage />;
}
