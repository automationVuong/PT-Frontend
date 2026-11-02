import { NewsHero } from "./NewsHero";
import { NewsList } from "./NewsList";
import { NewsSidebar } from "./NewsSidebar";

export function NewsPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <NewsHero />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <NewsList />
          </div>

          <div className="xl:pt-6">
            <NewsSidebar />
          </div>
        </div>
      </main>
    </div>
  );
}
