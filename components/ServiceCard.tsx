import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site";

export function ServiceCard({
  item,
  showPoints = false,
  headingLevel = 3,
}: {
  item: Service;
  showPoints?: boolean;
  headingLevel?: 2 | 3;
}) {
  const TitleTag = headingLevel === 2 ? "h2" : "h3";

  return (
    <Link
      href={`/hizmetler/${item.slug}`}
      className="group overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
    >
      {item.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-sand">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="h-2 w-full" style={{ background: item.accent }} />
      )}
      <div className="p-5 sm:p-6">
        <span
          className="inline-block h-2 w-10 rounded-full"
          style={{ background: item.accent }}
        />
        <TitleTag className="mt-3 font-display text-xl text-forest sm:mt-4 sm:text-2xl">
          {item.title}
        </TitleTag>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
        {showPoints ? (
          <ul className="mt-4 space-y-1 text-sm text-forest/80">
            {item.points.map((point) => (
              <li key={point}>· {point}</li>
            ))}
          </ul>
        ) : (
          <span className="mt-5 inline-block text-sm font-semibold text-moss group-hover:text-gold">
            Detay →
          </span>
        )}
      </div>
    </Link>
  );
}
