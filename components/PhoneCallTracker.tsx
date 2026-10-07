"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function PhoneCallTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href^='tel:']");
      if (!(link instanceof HTMLAnchorElement)) return;

      if (typeof window.gtag !== "function") return;

      window.gtag("event", "conversion", {
        send_to: site.googleAdsPhoneConversion,
        event_category: "phone_call",
        event_label: link.href,
      });
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
