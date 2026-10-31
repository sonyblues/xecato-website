import Link from "next/link";
import type { ReactNode } from "react";
import Reveal, { Rule } from "./Reveal";

/** Underlined text link with a short brass line that lengthens on hover. */
export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 border-b border-accent pb-2 font-display text-sm tracking-[0.22em] text-fg uppercase transition-colors duration-500 hover:text-accent ${className}`}
    >
      {children}
      <span aria-hidden className="line-logo h-px w-8 transition-all duration-500 group-hover:w-12" />
    </Link>
  );
}

/** Common section shell: hairline on top, label, large quiet headline. */
export function Section({
  id,
  label,
  headline,
  children,
  className = "",
  aside,
  more,
}: {
  id: string;
  label: string;
  headline?: string;
  children?: ReactNode;
  className?: string;
  aside?: ReactNode;
  more?: { href: string; label: string };
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <Rule />
        <div className="grid gap-8 py-20 md:grid-cols-12 md:py-28">
          <Reveal className="md:col-span-4">
            <p className="label">{label}</p>
          </Reveal>
          <div className="md:col-span-8">
            {headline && (
              <Reveal as="h2" delay={0.15} className="font-display text-3xl font-300 leading-[1.1] tracking-[-0.01em] text-fg md:text-5xl">
                {headline}
              </Reveal>
            )}
            {aside && <Reveal delay={0.3} className="mt-6 max-w-xl text-fg-muted">{aside}</Reveal>}
            {more && (
              <Reveal delay={0.4} className="mt-8">
                <ArrowLink href={more.href}>{more.label}</ArrowLink>
              </Reveal>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

/** Opening block of an inner page: label, headline and a short lead. */
export function PageHeader({ label, headline, lead }: { label: string; headline: string; lead?: string }) {
  return (
    <header className="mx-auto max-w-[1280px] px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-48">
      <Reveal>
        <p className="label">{label}</p>
      </Reveal>
      <Reveal as="h1" delay={0.15} className="mt-6 max-w-4xl font-display text-4xl font-300 leading-[1.05] tracking-[-0.01em] text-fg md:text-6xl">
        {headline}
      </Reveal>
      {lead && (
        <Reveal as="p" delay={0.3} className="mt-8 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
          {lead}
        </Reveal>
      )}
    </header>
  );
}
