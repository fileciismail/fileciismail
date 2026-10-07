import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Kahramanmaraş'ta balkon filesi, kuş filesi, halı saha filesi, inşaat filesi ve merdiven boşluğu filesi üretim ve montajı.",
};

export default function HizmetlerPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
        Hizmetler
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-tight text-forest sm:text-4xl lg:text-5xl">
        Kahramanmaraş&apos;ta güvenlik filesi çözümleri
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
        Her file aynı işi görmez. Aşağıdan ihtiyacınıza bakın; fiyat teklifinde malzeme
        ve montaj şeklini yerinde netleştiririz.
      </p>
      <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
        {services.map((item) => (
          <ServiceCard
            key={item.slug}
            item={item}
            showPoints
            headingLevel={2}
          />
        ))}
      </div>
    </div>
  );
}
