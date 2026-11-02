"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  ChevronDown,
  User,
  Smartphone,
  Building2,
  Menu,
  X,
} from "lucide-react";

const NAV_GROUPS = [
  {
    label: "Khám phá",
    items: [
      { label: "Nhà mới", href: "/mua-nha" },
      { label: "Nhà cho thuê", href: "/mua-nha" },
      { label: "Căn hộ cao cấp", href: "/mua-nha" },
      { label: "Bất động sản thương mại", href: "/bat-dong-san-ban-do" },
    ],
  },
  {
    label: "Khu vực",
    items: [
      { label: "Khu dân cư", href: "/bat-dong-san-ban-do" },
      { label: "Đô thị mới", href: "/vi/home/second-hand-house" },
      { label: "Giá nhà", href: "/mua-nha" },
    ],
  },
  {
    label: "Thông tin",
    items: [
      { label: "Về chúng tôi", href: "/about-us" },
      { label: "Tin tức", href: "/tin-tuc" },
      { label: "Khóa học", href: "/khoa-hoc" },
      { label: "Thiết kế nội thất", href: "/live" },
    ],
  },
];

const NAV_ITEMS = [
  { label: "Nhà cũ", href: "/vi/home/second-hand-house", badge: null },
  { label: "Nhà mới", href: "/mua-nha", badge: "Hot" },
  { label: "Nhà cho thuê", href: "/mua-nha", badge: null },
  { label: "Bất động sản thương mại", href: "/bat-dong-san-ban-do", badge: null },
  { label: "Khu dân cư", href: "/bat-dong-san-ban-do", badge: null },
  { label: "Giá nhà", href: "/mua-nha", badge: null },
  { label: "Về chúng tôi", href: "/about-us", badge: null },
  { label: "Thiết kế nội thất", href: "/live", badge: null },
];

export default function Header() {
  const [currentCity, setCurrentCity] = useState("Hà Nội");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cities = ["Hà Nội", "TP. HCM", "Đà Nẵng", "Hải Phòng", "Huế", "Cần Thơ", "Nha Trang"];

  return (
    <header className="w-full border-b border-gray-100 bg-white font-sans text-gray-800">
      {/* 1. TOP BAR */}
      <div className="bg-[#f7f8f9] border-b border-gray-100 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between">
          {/* Left: City Selector */}
          <div className="relative flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-medium text-gray-700">{currentCity}</span>
            <button
              onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
              className="flex items-center text-gray-500 hover:text-blue-600 ml-1 transition"
            >
              [Đổi thành phố]
              <ChevronDown className="w-3 h-3 ml-0.5" />
            </button>

            {/* City Dropdown Menu */}
            {isCityDropdownOpen && (
              <div className="absolute top-7 left-0 z-50 bg-white shadow-lg rounded-md border border-gray-100 p-3 w-48">
                <div className="text-gray-400 mb-2 font-medium">Thành phố phổ biến</div>
                <div className="grid grid-cols-3 gap-2">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setCurrentCity(city);
                        setIsCityDropdownOpen(false);
                      }}
                      className={`text-left px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-600 ${
                        currentCity === city
                          ? "text-blue-600 font-bold"
                          : "text-gray-600"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Quick Links & User Login */}
          <div className="flex items-center space-x-5">
            <Link
              href="/tai-ung-dung"
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <Smartphone className="w-3.5 h-3.5" />
              Tải ứng dụng
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/dang-ky"
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <User className="w-3.5 h-3.5" />
              Đăng nhập / Đăng ký
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-yellow-400 text-xl font-bold text-white shadow-sm">
            B
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight text-gray-900 leading-tight lg:text-[2rem]">
              Bất động sản
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-full px-3 py-2 text-base font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-blue-600 lg:px-4"
              >
                {group.label}
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>

              <div className="absolute left-0 top-full z-50 mt-2 hidden min-w-[240px] rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_18px_42px_rgba(15,23,42,0.08)] group-hover:block group-focus-within:block">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Right CTA / Post House */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/dang-tin-nha-dat"
            className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium text-sm px-4 py-2 rounded-md shadow-sm transition"
          >
            <Building2 className="w-4 h-4" />
            Chủ nhà đăng tin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* 3. MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-4 space-y-3">
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="rounded-xl border border-gray-100 bg-gray-50 p-2">
              <div className="mb-2 px-2 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">
                {group.label}
              </div>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-white hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <Link
              href="/dang-tin-nha-dat"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full bg-gradient-to-r from-blue-600 to-yellow-400 text-white font-medium py-2 rounded-md"
            >
              Chủ nhà đăng tin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
