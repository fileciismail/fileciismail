import type { Metadata } from "next";
import Image from "next/image";
import { certificates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sertifikalarımız",
  description:
    "Fileci İsmail ISO 9001, ISO 14001, ISO 45001 ve CE sertifikaları.",
};

export default function SertifikalarPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
        Belgeler
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-tight text-forest sm:text-4xl lg:text-5xl">
        Sertifikalarımız
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
        Üretim ve satış süreçlerimiz kalite, çevre, iş sağlığı ve ürün
        uygunluğu belgelerine dayanır. Belgeyi büyütmek için tıklayın.
      </p>
      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2">
        {certificates.map((item) => (
          <a
            key={item.id}
            href={item.image}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:border-gold/40 hover:shadow-md"
          >
            <div className="relative aspect-[3/4] bg-sand">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-3 sm:p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="border-t border-line px-5 py-4">
              <h2 className="font-display text-xl text-forest">{item.title}</h2>
              <p className="mt-1 text-sm text-muted">{item.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
