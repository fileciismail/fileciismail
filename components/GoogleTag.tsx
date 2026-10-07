import Script from "next/script";
import { PhoneCallTracker } from "@/components/PhoneCallTracker";
import { site } from "@/lib/site";

export function GoogleTag() {
  const id = site.googleAdsId;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
      <PhoneCallTracker />
    </>
  );
}
