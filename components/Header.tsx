"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, site, telLink } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-paper backdrop-blur-md supports-[backdrop-filter]:bg-ink/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-6 sm:py-2.5">
        <div className="min-w-0 shrink">
          <Logo light />
        </div>
        <nav className="hidden items-center gap-5 text-sm lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-paper/80 transition hover:text-gold-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={telLink()} className="text-sm text-gold-soft whitespace-nowrap">
            {site.phoneDisplay}
          </a>
          <a
            href={telLink()}
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold-soft whitespace-nowrap"
          >
            Fiyat teklifi alın
          </a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={telLink()}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-gold-soft"
            aria-label="Telefonu ara"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
                fill="currentColor"
              />
            </svg>
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/15"
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-paper transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-paper transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-paper transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-white/10 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1 text-base">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3.5 text-paper/90 hover:bg-white/5 active:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <a href={telLink()} className="rounded-xl px-3 py-3.5 font-medium text-gold-soft">
              Ara: {site.phoneDisplay}
            </a>
            <a
              href={telLink()}
              className="mt-2 rounded-full bg-gold px-4 py-3.5 text-center text-sm font-semibold leading-snug text-ink"
            >
              Fiyat teklifi için ara
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
