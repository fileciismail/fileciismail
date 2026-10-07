import type { Metadata } from "next";
import Image from "next/image";
import { catalog, telLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Katalog",
  description:
    "Fileci İsmail ürün kataloğu: göz aralığı ve iplik kalınlığına göre güvenlik filesi modelleri.",
};

export default function KatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
        Katalog
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-tight text-forest sm:text-4xl lg:text-5xl">
        Üretim kataloğu
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
        Göz aralığı ve iplik kalınlığı ihtiyaca göre değişir. Aşağıdaki
        modellerden seçin; yerinde ölçüye göre üretip takıyoruz.
      </p>
      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {catalog.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-3xl border border-line bg-white shadow-sm"
          >
            <a href={item.image} target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-square bg-sand">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </a>
            <div className="p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-moss">
                Beyaz
              </p>
              <h2 className="mt-2 font-display text-xl text-forest">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{item.use}</p>
              <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-xl border border-line bg-paper px-3 py-2">
                  <dt className="text-xs text-muted">Göz aralığı</dt>
                  <dd className="font-semibold text-forest">{item.mesh}</dd>
                </div>
                <div className="rounded-xl border border-line bg-paper px-3 py-2">
                  <dt className="text-xs text-muted">İplik</dt>
                  <dd className="font-semibold text-forest">{item.thread}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href={telLink()}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper"
        >
          Bu modeller için fiyat teklifi alın
        </a>
      </div>
    </div>
  );
}
