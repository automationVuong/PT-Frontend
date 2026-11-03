import { HeroBanner } from "@/modules/home/components/HeroBanner";
import { HomeInfo } from "@/modules/home/components/HomeInfo";
import { FeatureCards } from "@/modules/home/components/FeatureCards";
import { FooterLinks } from "@/modules/home/components/FooterLinks";

export default function HomePage() {
  return (
    <main className="bg-[#f3f1ee] text-slate-900">
      <HeroBanner />
      <HomeInfo />
      <FeatureCards />
      <FooterLinks />
    </main>
  );
}