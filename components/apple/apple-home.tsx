import { AppleNavigation } from "@/components/apple/apple-navigation";
import { AppleHero } from "@/components/apple/apple-hero";
import { WorkSection } from "@/components/apple/sections/work-section";
import { SoftwareSection } from "@/components/apple/sections/software-section";
import { ArticlesSection } from "@/components/apple/sections/articles-section";
import { BlogSection } from "@/components/apple/sections/blog-section";
import { HobbiesSection } from "@/components/apple/sections/hobbies-section";
import { Footer } from "@/components/footer";

export function AppleHome() {
  return (
    <main className="min-h-screen">
      <AppleNavigation />
      <AppleHero />
      <WorkSection />
      <SoftwareSection />
      <ArticlesSection />
      <BlogSection />
      <HobbiesSection />
      <Footer />
    </main>
  );
}
