import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.name}: Kahramanmaraş'ta balkon, kuş, halı saha, inşaat ve merdiven boşluğu filesi üretim ve montajı.`,
};

export default function HakkimizdaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
        Hakkımızda
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-tight text-forest sm:text-4xl lg:text-5xl">
        Kahramanmaraş&apos;ta fileyi üreten ve takan ekip.
      </h1>
      <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink/85 sm:mt-8 sm:text-base">
        <p>
          {site.name}, Kahramanmaraş&apos;ta güvenlik filesi üretim ve montajı
          yapan yerel bir firmadır. İşimiz balkon filesi, kuş filesi, halı saha
          filesi, inşaat filesi ve merdiven boşluğu uygulamalarıdır.
        </p>
        <p>
          File satışı tek başına yetmez. Ölçü yanlışsa kenar boş kalır; gergi
          zayıfsa file sarkar; kuş filesi yerine güvenlik filesi takılırsa
          güvercin yine girer. Bu yüzden her işe yerinde bakıyor, malzeme ve
          montajı o işe göre seçiyoruz.
        </p>
        <p>
          Onikişubat, Dulkadiroğlu ve çevre ilçelerde çalışıyoruz. Amaç uzun
          süre duran, temiz görünen ve gerçekten koruyan bir file bırakmaktır.
        </p>
      </div>
    </div>
  );
}
