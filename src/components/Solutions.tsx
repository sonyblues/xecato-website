import Image from "next/image";
import Reveal, { LightReveal } from "./Reveal";
import { site } from "@/content/site";

/** Full solutions list as a hairline grid of columns. The three core disciplines carry an image. */
export default function Solutions() {
  const { solutions, expertise } = site;
  const imageFor = (slug: string) =>
    ({ architectural: expertise.items[0].image, facade: expertise.items[1].image, landscape: expertise.items[2].image })[slug];

  return (
    <div className="mx-auto max-w-[1280px] px-6 pb-24 md:px-10 md:pb-32">
      <ul className="grid border-s border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
        {solutions.items.map((s, i) => {
          const image = imageFor(s.slug);
          return (
            <Reveal
              as="li"
              key={s.slug}
              delay={(i % 3) * 0.1}
              className="group flex flex-col border-b border-e border-hairline p-8 transition-colors duration-700 hover:bg-bg-elevated md:p-10"
            >
              <div id={s.slug} className="scroll-mt-28" />
              <p className="font-display text-sm text-accent">{s.n}</p>
              {image && (
                <LightReveal className="relative mt-6 aspect-[16/10] overflow-hidden bg-bg-elevated">
                  <Image src={image} alt={s.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </LightReveal>
              )}
              <h2 className="mt-6 font-display text-xl font-400 tracking-[-0.01em] text-fg md:text-2xl">{s.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted md:text-[15px]">{s.desc}</p>
            </Reveal>
          );
        })}
        {/* Fills the last cell of the 3-column grid with the gradient so the row reads as complete */}
        <li aria-hidden className="bg-logo hidden border-b border-e border-hairline lg:block" />
      </ul>
    </div>
  );
}
