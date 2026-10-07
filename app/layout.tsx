import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { CallButton } from "@/components/CallButton";
import { Footer } from "@/components/Footer";
import { GoogleTag } from "@/components/GoogleTag";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#14352c",
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "kahramanmaraş balkon filesi",
    "kahramanmaraş kuş filesi",
    "kahramanmaraş halı saha filesi",
    "kahramanmaraş inşaat filesi",
    "güvenlik filesi montajı",
    "fileci ismail",
    "maraş file",
  ],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    locale: "tr_TR",
    type: "website",
    url: site.url,
    images: [{ url: "/logo.png", alt: site.name }],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <GoogleTag />
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}
