import type { Metadata } from "next";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Numbers from "@/components/Numbers";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import { PageHeader } from "@/components/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: site.about.lead,
};

export default function AboutPage() {
  const { about } = site;
  return (
    <>
      <PageHeader label={about.label} headline={about.headline} lead={about.lead} />
      <About />
      <Process />
      <Numbers />
      <Partners />
      <Cta />
    </>
  );
}
