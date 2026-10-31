import Image from "next/image";
import Reveal, { LightReveal } from "./Reveal";
import { Section } from "./Section";
import { site } from "@/content/site";

export default function Expertise() {
  const { expertise } = site;
  return (
    <Section id="expertise" label={expertise.label} headline={expertise.headline} more={expertise.more}>
      <ul className="grid gap-x-8 gap-y-16 pb-24 md:grid-cols-3 md:pb-32">
        {expertise.items.map((item, i) => (
          <li key={item.n} className={i === 1 ? "md:translate-y-16" : ""}>
            <LightReveal delay={i * 0.15} className="relative aspect-[3/4] overflow-hidden bg-bg-elevated">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </LightReveal>
            <Reveal delay={0.2 + i * 0.15} className="mt-8">
              <p className="label">{item.n}</p>
              <h3 className="mt-4 font-display text-2xl font-400 tracking-[-0.01em] text-fg">{item.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted md:text-[15px]">{item.desc}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
