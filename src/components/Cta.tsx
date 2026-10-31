import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/content/site";

/** Closing band in the logo's bronze gradient that points every page toward the contact page. */
export default function Cta() {
  const { cta } = site;
  return (
    <section className="mx-auto max-w-[1280px] px-6 pb-24 md:px-10 md:pb-32">
      <Reveal className="bg-logo relative overflow-hidden px-8 py-16 text-bg md:px-16 md:py-24">
        {/* A faint, oversized mark in the corner, like the gradient catching light */}
        <div aria-hidden className="pointer-events-none absolute -end-16 -top-24 h-[420px] w-[420px] opacity-[0.12] [background:url('/brand/mark.svg')_center/contain_no-repeat]" />
        <div className="relative grid gap-8 md:grid-cols-12 md:items-end">
          <p className="label text-bg/70 md:col-span-4">{cta.label}</p>
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl font-300 leading-[1.1] tracking-[-0.01em] md:text-5xl">{cta.headline}</h2>
            <Link
              href={cta.link.href}
              className="group mt-8 inline-flex items-center gap-4 border-b border-bg/60 pb-2 font-display text-sm tracking-[0.22em] uppercase transition-colors duration-500 hover:border-bg"
            >
              {cta.link.label}
              <span aria-hidden className="h-px w-8 bg-bg transition-all duration-500 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
