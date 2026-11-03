"use client";

import React from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Article } from "./FeaturedNewsCard";

interface NewsCardProps {
  article: Article;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[10px] font-bold text-white">
          {article.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 mb-2">
            <span>{article.publishedAt}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.readTime}
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0f6b73] transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>

          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100">
          <Link
            href={`/tin-tuc/${article.slug}`}
            className="text-xs font-bold text-[#0f6b73] hover:underline inline-block"
          >
            Xem chi tiết &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}