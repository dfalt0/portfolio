import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { DevBlog } from "@/components/dev-blog";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
// import { Showcase } from "@/components/showcase";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <DevBlog />
      <Projects />
      <Skills />
      <Contact />
      {/* <Showcase /> */}
      <Footer />
    </main>
  );
}
