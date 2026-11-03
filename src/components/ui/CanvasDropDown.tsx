"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link"; // Sử dụng Link của Next.js nếu dùng Next.js

type CanvasDropDownProps = {
  label: string;
  groups: string[][];
  hrefs?: string[][]; // Thêm mảng đường dẫn tương ứng với groups
  ref?: React.RefObject<HTMLButtonElement | null>;
};

export function CanvasDropDown({
  label,
  groups,
  hrefs,
  ref: externalRef,
}: CanvasDropDownProps) {
  const [open, setOpen] = useState(false);
  const [left, setLeft] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const internalRef = useRef<HTMLButtonElement | null>(null);

  const updatePosition = () => {
    const node = externalRef?.current || internalRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    setLeft(rect.left);
  };

  const openMenu = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    updatePosition();
    setOpen(true);
  };

  const closeMenu = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 350);
  };

  useEffect(() => {
    if (!open) return;

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      {/* Navigation trigger */}
      <button
        ref={(node) => {
          internalRef.current = node;
          if (typeof externalRef === "function") {
            externalRef(node);
          } else if (externalRef) {
            (externalRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          }
        }}
        type="button"
        onFocus={openMenu}
        onBlur={(event) => {
          if (
            !event.currentTarget.parentElement?.contains(
              event.relatedTarget as Node
            )
          ) {
            closeMenu();
          }
        }}
        aria-expanded={open}
        className={`inline-flex rounded-[8px] px-2 py-2 text-[13px] font-black transition ${
          open
            ? "bg-slate-50 text-slate-900"
            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
        }`}
      >
        {label}
      </button>

      {/* Full-width dropdown */}
      <div
        className={`fixed left-0 right-0 top-[58px] z-50 transition-all duration-300 ease-out ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        {/* Full-width background */}
        <div className="w-full border-t border-slate-200 bg-[#f1f0ee] shadow-[0_18px_30px_rgba(15,23,42,0.08)]">
          {/* Content aligned exactly under nav item */}
          <div
            className="w-fit py-8"
            style={{ marginLeft: `${left}px` }}
          >
            <div className="flex gap-12 text-left text-[13px] font-black text-slate-800 lg:gap-20">
              {groups.map((column, columnIndex) => (
                <div
                  key={`${label}-${columnIndex}`}
                  className="space-y-8"
                >
                  {column.map((item, itemIndex) => {
                    // Lấy đường dẫn tương ứng nếu được truyền vào, mặc định là "#"
                    const href = hrefs?.[columnIndex]?.[itemIndex] || "#";

                    return (
                      <Link
                        key={item}
                        href={href}
                        onClick={() => setOpen(false)} // Ẩn menu khi bấm chuyển trang
                        className="block whitespace-nowrap text-slate-800 transition hover:text-slate-950"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}