"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/app/data/site-content";
import { cn } from "@/app/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/85 shadow-md backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-8 lg:px-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 transition",
                  active
                    ? "bg-sky-100 text-sky-950"
                    : "hover:bg-slate-100 hover:text-slate-950"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          className="text-right text-sm font-semibold uppercase tracking-[0.28em] text-slate-900"
        >
          GU Shiyuan
        </Link>
      </div>
    </header>
  );
}
