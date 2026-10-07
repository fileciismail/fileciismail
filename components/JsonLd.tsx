import { site } from "@/lib/site";

export function JsonLd() {
  const digits = site.phoneDisplay.replace(/\D/g, "");
  const telephone = digits.startsWith("444")
    ? `+90${digits}`
    : `+90${digits.replace(/^0/, "")}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    description: site.description,
    url: site.url,
    areaServed: site.city,
    telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      addressCountry: site.address.country,
    },
    hasMap: site.mapsUrl,
    priceRange: "₺₺",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
