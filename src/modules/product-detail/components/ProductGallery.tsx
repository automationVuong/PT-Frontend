"use client";

import { useEffect, useState } from "react";

type ProductGalleryProps = {
  gallery: string[];
  title: string;
};

export function ProductGallery({ gallery, title }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (gallery.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % gallery.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [gallery.length]);

  const activeImage = gallery[activeIndex];

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4">
          <span className="rounded-full border border-white/40 bg-slate-900/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            Gallery
          </span>
          <span className="rounded-full border border-white/40 bg-white/20 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
            {activeIndex + 1}/{gallery.length}
          </span>
        </div>

        <img
          key={activeImage}
          src={activeImage}
          alt={title}
          className="h-[420px] w-full object-cover transition-all duration-700 ease-out md:h-[500px] xl:h-[560px] hover:scale-[1.02]"
        />

        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
          {gallery.map((_, index) => (
            <button
              key={`${title}-${index}`}
              type="button"
              aria-label={`Chuyển đến ảnh ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        {gallery.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 ${
              index === activeIndex
                ? "border-blue-500 ring-2 ring-blue-100 scale-[1.01]"
                : "border-slate-200 hover:border-slate-300 hover:-translate-y-0.5"
            }`}
          >
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="h-28 w-full object-cover transition duration-300 hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
