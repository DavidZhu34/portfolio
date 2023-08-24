import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Education from "@/components/education";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Skills />
    </main>
  );
}
