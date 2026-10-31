import Cta from "@/components/Cta";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <Projects limit={3} headline="Selected work across the region." />
      <Numbers />
      <Partners />
      <Cta />
    </>
  );
}
