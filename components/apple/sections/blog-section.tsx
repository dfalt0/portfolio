import Link from "next/link";
import { blogPosts } from "@/lib/site-data";
import { Calendar } from "lucide-react";

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Blog</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl">
          Featured posts from the dev blog.
        </p>

        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card/80 p-6 hover:shadow-md transition-shadow group"
            >
              <div>
                <h3 className="text-lg font-medium tracking-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                  {post.description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/blog" className="text-sm text-primary hover:underline">
            All posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
