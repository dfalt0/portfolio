import type { Metadata } from "next";
import { ExperiencePageContent } from "@/components/theme-pages/experience-page-content";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work history and professional experience.",
};

export default function ExperiencePage() {
  return (
    <>
      <ExperiencePageContent />
      <Footer />
    </>
  );
}
