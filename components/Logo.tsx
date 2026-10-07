import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex min-w-0 items-center"
      aria-label={`${site.name} ana sayfa`}
    >
      <Image
        src="/logo.png"
        alt={site.name}
        width={512}
        height={512}
        priority
        className={`h-40 w-40 object-contain sm:h-52 sm:w-52 lg:h-64 lg:w-64 ${
          light ? "" : "rounded-md bg-ink"
        }`}
      />
    </Link>
  );
}
