import type { Metadata } from "next";
import { blogPostsBySlug } from "@/lib/site-data";
import { BlogPostContent } from "@/components/theme-pages/blog-post-content";
import { Footer } from "@/components/footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsBySlug[slug];

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <BlogPostContent slug={slug} />
      <Footer />
    </>
  );
}
