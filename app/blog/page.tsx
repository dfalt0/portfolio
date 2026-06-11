import type { Metadata } from "next";
import { BlogPageContent } from "@/components/theme-pages/blog-page-content";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dev blog with tutorials, insights, and development thoughts.",
};

export default function BlogPage() {
  return (
    <>
      <BlogPageContent />
      <Footer />
    </>
  );
}
