"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import Reveal, { Rule } from "./Reveal";
import { site } from "@/content/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const start = performance.now();
    const duration = 1800;
    let frame = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export default function Numbers() {
  const { numbers } = site;
  return (
    <section id="numbers" className="mx-auto max-w-[1280px] px-6 md:px-10">
      <Rule />
      <div className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-4">
          <p className="label">{numbers.label}</p>
        </Reveal>
        <ul className="grid gap-12 sm:grid-cols-3 md:col-span-8">
          {numbers.items.map((item, i) => (
            <Reveal as="li" key={item.label} delay={0.15 + i * 0.12}>
              <p className="text-logo font-display text-6xl font-300 leading-none tracking-[-0.02em] md:text-7xl">
                <Counter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-4 text-sm text-fg-muted">{item.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
