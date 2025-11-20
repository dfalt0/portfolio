import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Showcase } from "@/components/showcase";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Mark's Freelance Showcase",
  description: "Explore the types of websites I can build for your business - from landing pages to e-commerce stores",
};

export default function ShowcasePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Showcase />
      <Contact />
      <Footer />
    </main>
  );
}

