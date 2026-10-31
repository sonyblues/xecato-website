"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLink } from "./Section";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const { hero } = site;
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.4, delay, ease },
  });

  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden">
      {/* The building, revealed slowly out of black */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.6, ease }}
      >
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
      </motion.div>
      {/* Darkness kept deliberately heavy at the edges so the light reads as the subject */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,14,15,0.96)_0%,rgba(14,14,15,0.55)_40%,rgba(14,14,15,0.15)_70%,rgba(14,14,15,0.4)_100%)]" />
      <div className="absolute inset-y-0 start-0 w-1/2 bg-[linear-gradient(to_right,rgba(14,14,15,0.7),transparent)] rtl:bg-[linear-gradient(to_left,rgba(14,14,15,0.7),transparent)]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-16 pt-40 md:px-10 md:pb-24">
        <motion.p {...fade(0.9)} className="label mb-6">
          {hero.label}
        </motion.p>
        <motion.h1
          {...fade(1.1)}
          className="max-w-4xl font-display text-[2.6rem] font-300 leading-[1.05] tracking-[-0.01em] text-fg sm:text-6xl md:text-7xl"
        >
          {hero.headline}
        </motion.h1>
        <motion.div
          {...fade(1.4)}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-fg-muted md:text-lg">{hero.sub}</p>
          <ArrowLink href="/projects" className="self-start">
            {hero.cta}
          </ArrowLink>
        </motion.div>
      </div>

      {/* Thin scroll cue */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 start-1/2 h-16 w-px bg-[linear-gradient(to_bottom,transparent,#c9a06f)]"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.2 }}
      />
    </section>
  );
}
