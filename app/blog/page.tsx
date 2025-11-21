import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { DevBlog } from "@/components/dev-blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Dev Blog | Mark Akinshev",
  description: "Thoughts, tutorials, and insights on development",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <DevBlog />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}

