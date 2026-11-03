"use client";

import React from "react";
import Link from "next/link";

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  emptyTitle: string;
  emptyDescription: string;
  actionText: string;
  actionHref?: string;
  onActionClick?: () => void;
}

export function DashboardCard({
  title,
  icon,
  emptyTitle,
  emptyDescription,
  actionText,
  actionHref,
  onActionClick,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-slate-700">{icon}</div>
        <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      </div>

      <div className="text-center py-8 border-2 border-dashed border-slate-100 rounded-xl bg-slate-50">
        <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-3">
          {icon}
        </div>
        <h3 className="font-bold text-slate-800 text-sm">{emptyTitle}</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          {emptyDescription}
        </p>

        {actionHref ? (
          <Link
            href={actionHref}
            className="mt-4 inline-block px-5 py-2 bg-white border border-teal-700 text-teal-700 font-bold text-xs rounded-lg hover:bg-teal-50 transition shadow-sm"
          >
            {actionText}
          </Link>
        ) : (
          <button
            type="button"
            onClick={onActionClick}
            className="mt-4 inline-block px-5 py-2 bg-white border border-teal-700 text-teal-700 font-bold text-xs rounded-lg hover:bg-teal-50 transition shadow-sm cursor-pointer"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
}