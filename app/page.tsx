import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import {
  districts,
  faqs,
  reasons,
  services,
  site,
  steps,
  telLink,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute inset-0 diamond-net opacity-70" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-soft sm:text-xs sm:tracking-[0.28em]">
              {site.city} · Üretim ve montaj
            </p>
            <h1 className="mt-4 font-display text-[2rem] leading-[1.15] tracking-tight sm:mt-5 sm:text-5xl sm:leading-[1.12] lg:text-6xl">
              Balkonunuz, sahanız, şantiyeniz güvende olsun.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/75 sm:mt-6 sm:text-lg">
              Kahramanmaraş&apos;ta balkon filesi, kuş filesi, halı saha filesi,
              inşaat filesi ve merdiven boşluğu filesi. Fileci İsmail olarak
              üretiyor ve yerinde takıyoruz.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a
                href={telLink()}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold leading-snug text-ink transition hover:bg-gold-soft sm:w-auto"
              >
                Fiyat teklifi alın: {site.phoneDisplay}
              </a>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-paper hover:bg-white/5 sm:w-auto"
              >
                Hizmetlere bak
              </Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-2 border-t border-white/10 pt-6 text-center sm:mt-12 sm:gap-4 sm:pt-8 sm:text-left">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-paper/50 sm:text-[11px] sm:tracking-[0.16em]">
                  Teklif
                </dt>
                <dd className="mt-1 font-display text-xl text-gold-soft sm:text-2xl">
                  Ücretsiz
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-paper/50 sm:text-[11px] sm:tracking-[0.16em]">
                  Bölge
                </dt>
                <dd className="mt-1 font-display text-xl text-gold-soft sm:text-2xl">
                  Kahramanmaraş
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-ink/40 p-4 shadow-2xl backdrop-blur-sm sm:rounded-[2rem] sm:p-6 lg:p-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold-soft sm:text-xs sm:tracking-[0.22em]">
                Ne üretiyor, ne takıyoruz
              </p>
              <ul className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                {services.slice(0, 4).map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/hizmetler/${item.slug}`}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2.5 transition hover:border-gold/40 hover:bg-white/10"
                    >
                      {item.image ? (
                        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl sm:h-14 sm:w-14">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </span>
                      ) : null}
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-paper sm:text-base">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block line-clamp-2 text-xs text-paper/60 sm:truncate sm:text-sm">
                          {item.short}
                        </span>
                      </span>
                      <span className="pr-1 text-gold-soft transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-4 text-center text-xs text-forest sm:justify-between sm:gap-4 sm:px-6 sm:py-5 sm:text-left sm:text-sm">
          <span>Kendi üretimimiz</span>
          <span className="hidden text-gold sm:inline">◆</span>
          <span>Yerinde ölçü</span>
          <span className="hidden text-gold sm:inline">◆</span>
          <span>Gergin montaj</span>
          <span className="hidden text-gold sm:inline">◆</span>
          <span>Kahramanmaraş ve çevre</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
            Hizmetler
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-forest sm:text-4xl">
            İhtiyaca göre file, tahmine göre değil.
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Balkon, kuş, saha ve inşaat filesi aynı malzeme değildir.
            Kahramanmaraş&apos;ta her işe doğru göz aralığı ve doğru gergi
            uyguluyoruz.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <ServiceCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-forest text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-soft">
              Neden biz
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              File takmak kolay görünür. Doğru takmak ayrı iştir.
            </h2>
            <p className="mt-4 text-sm text-paper/70 sm:text-base">
              Gevşek file, boş kenar veya yanlış göz aralığı hem işe yaramaz hem
              çabuk bozulur. Biz ölçü, üretim ve işçiliği aynı işin parçası
              sayarız.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
              >
                <h3 className="font-display text-lg text-gold-soft sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
          Süreç
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight text-forest sm:text-4xl">
          Tekliften teslimata dört adım.
        </h2>
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((item) => (
            <div key={item.n} className="border-t-2 border-gold pt-5">
              <p className="font-display text-3xl text-gold">{item.n}</p>
              <h3 className="mt-3 text-lg font-semibold text-forest">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl text-forest sm:text-3xl">
            Kahramanmaraş&apos;ın her yerindeyiz
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            Onikişubat&apos;tan Dulkadiroğlu&apos;na, Elbistan&apos;dan
            Türkoğlu&apos;na yerinde ölçü alıp fiyat teklifi veriyoruz. Gaziantep ve Osmaniye
            işleri de konuşulur.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8">
            {districts.map((name) => (
              <li
                key={name}
                className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-forest sm:px-4 sm:py-2 sm:text-sm"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl text-forest sm:text-4xl">
          Sık sorulanlar
        </h2>
        <div className="mt-6 divide-y divide-line border-y border-line sm:mt-8">
          {faqs.map((item) => (
            <details key={item.q} className="group py-4 sm:py-5">
              <summary className="cursor-pointer list-none font-semibold text-forest [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3 text-left text-[15px] sm:items-center sm:gap-4 sm:text-base">
                  {item.q}
                  <span className="shrink-0 text-gold transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-ink px-5 py-10 text-center text-paper diamond-net sm:rounded-[2rem] sm:px-12 sm:py-14">
          <h2 className="font-display text-2xl tracking-tight sm:text-4xl">
            Balkon fotoğrafı yeter, fiyat teklifi verelim.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-paper/70 sm:text-base">
            {site.phoneDisplay} numarasını arayın. Kahramanmaraş içi fiyat teklifi
            ücretsizdir.
          </p>
          <a
            href={telLink()}
            className="mt-7 inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-gold px-7 py-3 font-semibold text-ink hover:bg-gold-soft sm:mt-8 sm:w-auto"
          >
            {site.phoneDisplay} ara
          </a>
        </div>
      </section>
    </>
  );
}
