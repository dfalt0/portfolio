import { ClassicNavigation } from "@/components/classic/classic-navigation";
import { ClassicHero } from "@/components/classic/classic-hero";
import { PersonalityBlock } from "@/components/shared/personality-block";
import { DevBlog } from "@/components/dev-blog";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export function ClassicHome() {
  return (
    <main className="min-h-screen">
      <ClassicNavigation />
      <ClassicHero />
      <PersonalityBlock variant="classic" />
      <DevBlog />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
