import type { Metadata } from "next";
import Cta from "@/components/Cta";
import { PageHeader } from "@/components/Section";
import Solutions from "@/components/Solutions";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Solutions",
  description: site.solutions.intro,
};

export default function SolutionsPage() {
  const { solutions } = site;
  return (
    <>
      <PageHeader label={solutions.label} headline={solutions.headline} lead={solutions.intro} />
      <Solutions />
      <Cta />
    </>
  );
}
