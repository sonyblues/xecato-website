"use client";

import Image from "next/image";
import { useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Section } from "./Section";
import { site } from "@/content/site";

type Filter = (typeof site.projects.filters)[number];
const ease = [0.22, 1, 0.36, 1] as const;

/** Store the pointer position as CSS variables so the glow can follow it. */
function trackGlow(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
  e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
}

/** Project grid. `limit` shows a teaser (no filters) with a link to the full page. */
export default function Projects({ limit, headline }: { limit?: number; headline?: string }) {
  const { projects } = site;
  const [filter, setFilter] = useState<Filter>("All");
  const reduce = useReducedMotion();
  const teaser = limit !== undefined;
  const visible = projects.items
    .filter((p) => teaser || filter === "All" || p.category === filter)
    .slice(0, limit ?? projects.items.length);

  return (
    <Section
      id="projects"
      label={projects.label}
      headline={headline ?? projects.headline}
      more={teaser ? projects.more : undefined}
    >
      {!teaser && (
        <div className="mb-12 flex flex-wrap gap-x-8 gap-y-3" role="tablist" aria-label="Filter projects">
          {projects.filters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className={`label border-b pb-2 transition-colors duration-500 ${
                  active ? "border-accent text-fg" : "border-transparent text-fg-faint hover:text-fg-muted"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      )}

      <motion.ul layout className="grid gap-x-8 gap-y-14 pb-24 sm:grid-cols-2 md:pb-32 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.li
              key={p.name}
              layout
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              transition={{ duration: 1, delay: i * 0.06, ease }}
              className={i % 3 === 1 ? "lg:translate-y-12" : ""}
            >
              <a href="/contact" className="group block" onMouseMove={trackGlow}>
                <div className="glow-card relative aspect-[4/5] overflow-hidden bg-bg-elevated">
                  <Image
                    src={p.image}
                    alt={`${p.name}, ${p.location}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
                  />
                  {p.placeholder && (
                    <span className="absolute end-3 top-3 z-[2] border border-fg/20 bg-bg/70 px-2 py-1 text-[10px] tracking-[0.2em] text-fg-faint uppercase">
                      {projects.placeholderNote}
                    </span>
                  )}
                </div>
                <div className="mt-5 flex flex-col gap-3 border-t border-hairline pt-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-400 text-fg transition-colors duration-500 group-hover:text-accent">{p.name}</h3>
                    <p className="mt-1 text-sm text-fg-muted">{p.location}</p>
                  </div>
                  <p className="label text-fg-faint sm:text-end">{p.category} · {p.type}</p>
                </div>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
