import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <Intro />
      </div>
      <div className="flex flex-col items-center px-4">
        <SectionDivider />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </main>
  );
}
