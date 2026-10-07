import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, services, site, telLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
            {site.city}&apos;ta balkon filesi, kuş filesi, halı saha filesi,
            inşaat filesi ve merdiven boşluğu filesi üretim ve montajı.
          </p>
          <p className="mt-4 text-sm text-paper/80 break-words">
            <a href={telLink()} className="font-semibold text-gold-soft hover:text-gold">
              {site.phoneDisplay}
            </a>
            <br />
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/60 hover:text-gold-soft"
            >
              {site.addressDisplay}
            </a>
          </p>
          <a
            href={telLink()}
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-ink"
          >
            Hemen ara
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 md:contents">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Sayfalar
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold-soft py-0.5 inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Hizmetler
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/hizmetler/${item.slug}`}
                    className="hover:text-gold-soft py-0.5 inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-paper/50">
        © 2026 {site.legalName}. {site.city}.
      </div>
    </footer>
  );
}
