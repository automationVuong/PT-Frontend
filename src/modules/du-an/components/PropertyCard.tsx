"use client";

import React, { useState } from "react";
import Link from "next/link";

type PropertyCardProps = {
  image: string;
  title: string;
  location: string;
  price: string;
  priceLabel?: string;
  tags?: string[];
  featured?: boolean;
  href?: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function PropertyCard({
  image,
  title,
  location,
  price,
  priceLabel = "price",
  tags = [],
  featured = false,
  href,
}: PropertyCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const cardHref = href ?? `/vi/home/second-hand-house/${slugify(title)}`;

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Ngăn chặn Link chuyển trang khi bấm vào nút lưu
    e.stopPropagation();
    setIsSaved(!isSaved);
    // Thêm logic lưu/bỏ lưu bất động sản của bạn ở đây (ví dụ: gọi API)
  };

  return (
    <Link href={cardHref} className="block w-full cursor-pointer">
      <article className="overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.02)] transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative">
          <img src={image} alt={title} className="h-52 w-full object-cover" />
          {featured ? (
            <span className="absolute left-3 top-3 rounded-md bg-[#f97316] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white shadow-sm">
              Featured
            </span>
          ) : null}
          <button
            type="button"
            onClick={handleSaveClick}
            className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm shadow-sm transition ${
              isSaved ? "text-rose-500 font-bold" : "text-slate-700 hover:text-rose-500"
            }`}
            aria-label="Save property"
          >
            {isSaved ? "♥" : "♡"}
          </button>
        </div>

        <div className="space-y-3 p-3.5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-[15px] font-semibold text-slate-800">{title}</h3>
              <p className="mt-1 text-xs text-slate-500">{location}</p>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-[14px] font-bold text-slate-900">{price}</div>
              <div className="text-[10px] uppercase tracking-[0.08em] text-slate-400">{priceLabel}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}