import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Work Experience | Mark Akinshev",
  description: "My professional work history and career experience",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

