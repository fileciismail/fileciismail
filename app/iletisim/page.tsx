import type { Metadata } from "next";
import { site, telLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Fileci İsmail ile ücretsiz fiyat teklifi için iletişime geçin. Kahramanmaraş, 444 0 582.",
};

export default function IletisimPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
        İletişim
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-tight text-forest sm:text-4xl lg:text-5xl">
        Fiyat teklifi için arayın, yerinde bakalım.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Balkon veya saha fotoğrafı, ilçe ve kabaca ölçü yeterli.
        Kahramanmaraş içi fiyat teklifi ücretsizdir.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ul className="space-y-4 text-sm">
          <li className="rounded-2xl border border-line bg-white px-5 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Telefon
            </p>
            <a
              href={telLink()}
              className="mt-1 block font-semibold text-forest hover:text-gold"
            >
              {site.phoneDisplay}
            </a>
          </li>
          <li className="rounded-2xl border border-line bg-white px-5 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Konum
            </p>
            <p className="mt-1 font-semibold leading-relaxed text-forest">
              {site.addressDisplay}
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-medium text-moss hover:text-gold"
            >
              Haritada aç →
            </a>
          </li>
        </ul>
        <div className="overflow-hidden rounded-2xl border border-line">
          <iframe
            title="Fileci İsmail konum"
            src={site.mapsEmbed}
            className="h-full min-h-64 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
