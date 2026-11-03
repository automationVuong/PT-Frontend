"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const menuItems = [
  { label: "Personal details", href: "/account-settings" },
  { label: "Profile", href: "/account-settings/profile" },
  { label: "Contact preferences", href: "/account-settings/contact-preferences" },
  { label: "My places", href: "/account-settings/my-places" },
  { label: "Account security", href: "/account-settings/security" },
];

export function AccountSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full lg:w-72 space-y-1 bg-white border border-slate-200 rounded-xl p-3 shadow-sm h-fit">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition ${
              isActive
                ? "bg-teal-50 text-teal-800 border-l-4 border-teal-700"
                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <span>{item.label}</span>
            {isActive && <ChevronRight className="w-4 h-4 text-teal-700" />}
          </Link>
        );
      })}
    </div>
  );
}