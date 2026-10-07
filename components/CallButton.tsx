import { site, telLink } from "@/lib/site";

export function CallButton() {
  return (
    <a
      href={telLink()}
      className="fixed z-50 flex items-center gap-2 rounded-full bg-gold px-3.5 py-3 text-sm font-semibold text-ink shadow-lg shadow-black/25 transition hover:scale-[1.03] active:scale-[0.98] right-[max(0.75rem,env(safe-area-inset-right))] bottom-[max(0.75rem,env(safe-area-inset-bottom))] sm:right-4 sm:bottom-4 sm:px-4"
      aria-label={`${site.phoneDisplay} numarayı ara`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
      </svg>
      Ara
    </a>
  );
}
