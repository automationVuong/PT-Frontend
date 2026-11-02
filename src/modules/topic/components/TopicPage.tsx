import { TopicContent } from "./TopicContent";
import { TopicHero } from "./TopicHero";

export function TopicPage() {
  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-800">
      <TopicHero />
      <TopicContent />
    </div>
  );
}
