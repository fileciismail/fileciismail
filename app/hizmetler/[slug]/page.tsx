import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services, site, telLink } from "@/lib/site";

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    openGraph: service.image
      ? {
          images: [{ url: service.image }],
        }
      : undefined,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/hizmetler" className="inline-flex min-h-10 items-center text-sm text-moss hover:text-gold">
        ← Tüm hizmetler
      </Link>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-moss sm:mt-6">
        Kahramanmaraş file üretim ve montajı
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-tight text-forest sm:text-4xl lg:text-5xl">
        {service.title}
      </h1>
      <p className="mt-4 text-base text-muted sm:text-lg">{service.summary}</p>
      {service.image ? (
        <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-sand sm:mt-8 sm:rounded-3xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      ) : (
        <div
          className="mt-8 h-2 w-16 rounded-full"
          style={{ background: service.accent }}
        />
      )}
      <div className="mt-10 space-y-5 text-base leading-relaxed text-ink/85">
        {service.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {service.points.map((point) => (
          <li
            key={point}
            className="rounded-2xl border border-line bg-white px-4 py-3 text-sm text-forest"
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-10 rounded-2xl bg-forest px-5 py-7 text-paper sm:mt-12 sm:rounded-3xl sm:px-6 sm:py-8">
        <h2 className="font-display text-xl sm:text-2xl">Bu iş için fiyat teklifi alın</h2>
        <p className="mt-2 text-sm text-paper/70">
          Fotoğraf ve adres yeterli. Kahramanmaraş içi fiyat teklifi ücretsizdir.
        </p>
        <a
          href={telLink()}
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink sm:w-auto"
        >
          {site.phoneDisplay} ara
        </a>
      </div>
    </article>
  );
}
