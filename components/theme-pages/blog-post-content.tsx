"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-context";
import { ThemeShell } from "@/components/theme-shell";
import { blogPostsBySlug, type BlogPost } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";

export function BlogPostContent({ slug }: { slug: string }) {
  const { theme, mounted } = useTheme();
  const post: BlogPost | undefined = blogPostsBySlug[slug];

  if (!mounted) return <div className="min-h-screen bg-background" />;

  if (!post) {
    return (
      <main className="min-h-screen">
        <ThemeShell showFooter={false}>
          <div className="pt-16 container mx-auto px-4 py-24 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </ThemeShell>
      </main>
    );
  }

  const isApple = theme === "apple";

  return (
    <main className="min-h-screen">
      <ThemeShell showFooter={false}>
        <article className={isApple ? "pt-20" : "pt-16"}>
          <div
            className={
              isApple
                ? "max-w-3xl mx-auto px-4 py-12"
                : "container mx-auto px-4 sm:px-6 lg:px-8 py-12"
            }
          >
            <div className={isApple ? "" : "max-w-3xl mx-auto"}>
              <Button variant="ghost" size="sm" asChild className="mb-8">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h1
                className={
                  isApple
                    ? "text-4xl font-semibold tracking-tight mb-6"
                    : "text-4xl sm:text-5xl font-bold mb-6"
                }
              >
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8">{post.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div
                className="blog-content space-y-6 text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
      </ThemeShell>
    </main>
  );
}
