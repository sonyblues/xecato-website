import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Projects from "@/components/Projects";
import { PageHeader } from "@/components/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected lighting projects across the UAE, Qatar, Saudi Arabia and Bahrain.",
};

export default function ProjectsPage() {
  const { projects } = site;
  return (
    <>
      <PageHeader label={projects.label} headline={projects.headline} lead="Façades, interiors and landscapes across the Gulf. Filter by discipline." />
      <Projects />
      <Cta />
    </>
  );
}
