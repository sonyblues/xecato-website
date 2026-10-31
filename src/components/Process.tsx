import Reveal, { Rule } from "./Reveal";
import { Section } from "./Section";
import { site } from "@/content/site";

export default function Process() {
  const { process } = site;
  return (
    <Section id="process" label={process.label} headline={process.headline}>
      <ol className="pb-24 md:pb-32">
        {process.steps.map((s, i) => (
          <li key={s.n}>
            <Rule delay={i * 0.1} />
            <Reveal delay={0.1 + i * 0.1} className="grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:py-12">
              <p className="font-display text-sm text-accent md:col-span-2">{s.n}</p>
              <h3 className="font-display text-2xl font-300 tracking-[-0.01em] text-fg md:col-span-5 md:text-3xl">{s.title}</h3>
              <p className="max-w-md text-sm leading-relaxed text-fg-muted md:col-span-5 md:text-[15px]">{s.desc}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
