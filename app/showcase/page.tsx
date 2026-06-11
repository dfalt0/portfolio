import type { Metadata } from "next";
import { ShowcasePageContent } from "@/components/theme-pages/showcase-page-content";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Freelance web development showcase and services.",
};

export default function ShowcasePage() {
  return (
    <>
      <ShowcasePageContent />
      <Footer />
    </>
  );
}
