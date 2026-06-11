import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/theme-pages/projects-page-content";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Projects",
  description: "In-depth list of personal and open-source projects from GitHub and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsPageContent />
      <Footer />
    </>
  );
}
