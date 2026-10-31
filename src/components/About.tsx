import Image from "next/image";
import Reveal, { LightReveal, Rule } from "./Reveal";
import { site } from "@/content/site";

export default function About() {
  const { about } = site;
  return (
    <div className="mx-auto max-w-[1280px] px-6 md:px-10">
      <div className="grid gap-12 pb-24 md:grid-cols-12 md:pb-32">
        <div className="md:col-span-7">
          {about.body.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 0.1} className="mb-5 max-w-xl text-base leading-relaxed text-fg-muted md:text-[17px]">
              {p}
            </Reveal>
          ))}
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {about.pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={0.2 + i * 0.1} className="border-t border-accent pt-4">
                <h3 className="font-display text-lg font-400 text-fg">{p.title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{p.desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
        <LightReveal delay={0.2} className="relative aspect-[4/5] overflow-hidden bg-bg-elevated md:col-span-4 md:col-start-9">
          <Image src="/images/expertise-facade.jpg" alt="Stone façade grazed by warm light" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
        </LightReveal>
      </div>

      <Rule />
      <div className="grid gap-8 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-4">
          <p className="label">{about.clientsLabel}</p>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {about.clients.map((c) => (
              <li key={c} className="font-display text-base text-fg-muted md:text-lg">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
