import Image from "next/image";
import Reveal from "./Reveal";
import { Section } from "./Section";
import { site } from "@/content/site";

export default function Partners() {
  const { partners } = site;
  return (
    <Section id="partners" label={partners.label} headline={partners.headline}>
      <ul className="grid grid-cols-2 border-s border-t border-hairline pb-24 sm:grid-cols-4 md:pb-32">
        {partners.logos.map((l, i) => (
          <Reveal as="li" key={l.name} delay={i * 0.06} className="flex h-28 items-center justify-center border-b border-e border-hairline px-8 md:h-32">
            <Image
              src={l.src}
              alt={l.name}
              width={200}
              height={80}
              className="h-auto max-h-8 w-auto max-w-[120px] opacity-55 transition-opacity duration-700 hover:opacity-100"
            />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
