"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-context";
import { ThemeShell } from "@/components/theme-shell";
import { DevBlog } from "@/components/dev-blog";
import { blogPosts } from "@/lib/site-data";
import { Calendar } from "lucide-react";

export function BlogPageContent() {
  const { theme, mounted } = useTheme();

  if (!mounted) return <div className="min-h-screen bg-background" />;

  if (theme === "apple") {
    return (
      <main className="min-h-screen pt-14">
        <ThemeShell showFooter={false}>
          <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-semibold tracking-tight mb-8">Blog</h1>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl border border-border bg-card/80 p-6 hover:shadow-md transition-shadow"
                >
                  <h2 className="text-lg font-medium">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{post.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ThemeShell>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <ThemeShell showFooter={false}>
        <DevBlog />
      </ThemeShell>
    </main>
  );
}
