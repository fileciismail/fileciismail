import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.24em] text-moss">404</p>
      <h1 className="mt-3 font-display text-4xl text-forest">
        Sayfa bulunamadı
      </h1>
      <p className="mt-3 text-muted">Aradığınız sayfa taşınmış veya yok.</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-paper"
      >
        Ana sayfaya dön
      </Link>
    </div>
  );
}
