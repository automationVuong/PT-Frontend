"use client";

import React from "react";
import Link from "next/link";
import { Clock, Tag, ArrowUpRight } from "lucide-react";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  publishedAt: string;
  readTime: string;
}

interface FeaturedNewsCardProps {
  article: Article;
}

export function FeaturedNewsCard({ article }: FeaturedNewsCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0">
      <div className="relative lg:col-span-7 h-64 lg:h-auto overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 rounded-full bg-[#0f6b73] px-3 py-1 text-xs font-bold text-white shadow-sm flex items-center gap-1">
          <Tag className="w-3 h-3" /> {article.category}
        </div>
      </div>

      <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-3">
            <span>{article.publishedAt}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
          </div>

          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-[#0f6b73] transition-colors line-clamp-3 leading-snug">
            {article.title}
          </h2>

          <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/tin-tuc/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f6b73] hover:underline"
          >
            Đọc tiếp bài viết <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}