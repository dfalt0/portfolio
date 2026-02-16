import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { ProjectsFull } from "@/components/projects-full";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Projects | Mark Akinshev",
  description: "In-depth list of personal and open-source projects from GitHub and more.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProjectsFull />
      <Contact />
      <Footer />
    </main>
  );
}
