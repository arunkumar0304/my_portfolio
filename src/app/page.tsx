import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import BigHero from "@/components/BigHero";
import Marquee from "@/components/Marquee";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <BigHero />
      <Marquee />
      <Experience />
      <ProjectShowcase />
      <Projects />
    </main>
  );
}
