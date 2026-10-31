"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site } from "@/content/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        solid ? "bg-bg/85 backdrop-blur-md border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" aria-label="XECATO home" onClick={() => setOpen(false)}>
          <Logo className="h-6 w-auto md:h-7" />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {site.nav.map((l) => {
            const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`label border-b pb-1 transition-colors duration-500 hover:text-accent ${
                    active ? "border-accent text-fg" : "border-transparent text-fg-muted"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-px w-6 bg-fg transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-fg transition-transform duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-hairline md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {site.nav.map((l) => (
              <li key={l.href} className="border-b border-hairline last:border-0">
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-4 font-display text-lg tracking-wide text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
