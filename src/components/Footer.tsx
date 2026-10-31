import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  const { contact, footer, nav } = site;
  return (
    <footer className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
      <div className="grid gap-12 border-t border-hairline py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image src="/brand/logo-light.png" alt="XECATO" width={1100} height={260} className="h-6 w-auto" />
          <p className="mt-5 max-w-xs text-sm text-fg-muted">{footer.line}</p>
        </div>
        <ul className="grid gap-3 md:col-span-3">
          {nav.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="label text-fg-muted transition-colors duration-500 hover:text-accent">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <address className="grid gap-3 text-sm not-italic text-fg-muted md:col-span-4">
          {contact.office.lines.map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
          <a href={contact.phone.href} className="transition-colors duration-500 hover:text-accent" dir="ltr">
            {contact.phone.value}
          </a>
          <a href={contact.email.href} className="transition-colors duration-500 hover:text-accent">
            {contact.email.value}
          </a>
        </address>
      </div>
      <p className="border-t border-hairline py-8 text-xs text-fg-faint">
        © {new Date().getFullYear()} XECATO LLC. {footer.rights}
      </p>
    </footer>
  );
}
