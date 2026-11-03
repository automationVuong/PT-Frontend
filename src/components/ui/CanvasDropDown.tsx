"use client";

import { useEffect, useRef, useState } from "react";

type CanvasDropDownProps = {
  label: string;
  groups: string[][];
};

export function CanvasDropDown({
  label,
  groups,
}: CanvasDropDownProps) {
  const [open, setOpen] = useState(false);
  const [left, setLeft] = useState(0);

  const triggerRef = useRef<HTMLButtonElement>(null);

  const updatePosition = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    setLeft(rect.left);
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

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        updatePosition();
        setOpen(true);
      }}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Navigation trigger */}
      <button
        ref={triggerRef}
        type="button"
        onFocus={() => {
          updatePosition();
          setOpen(true);
        }}
        onBlur={(event) => {
          if (
            !event.currentTarget.parentElement?.contains(
              event.relatedTarget as Node
            )
          ) {
            setOpen(false);
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
        className={`fixed left-0 right-0 top-[58px] z-50 transition-all duration-200 ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
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
                  {column.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block whitespace-nowrap text-slate-800 transition hover:text-slate-950"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
