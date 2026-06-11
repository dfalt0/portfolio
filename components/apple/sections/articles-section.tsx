import { OBSIDIAN_BLOG_URL } from "@/lib/site-data";
import { ExternalLink } from "lucide-react";
import { LottieIcon } from "@/components/shared/lottie-icon";

export function ArticlesSection() {
  return (
    <section id="articles" className="py-24 sm:py-32 scroll-mt-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Articles</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl">
          Long-form writing, tutorials, and deep dives on my Obsidian blog.
        </p>

        <a
          href={OBSIDIAN_BLOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-6 rounded-2xl border border-border bg-card/80 p-8 hover:shadow-md transition-shadow group"
        >
          <div className="flex items-start gap-4">
            <LottieIcon
              icon="obsidian-blog"
              folder="articles"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted"
              lottieClassName="h-8 w-8"
              placeholderClassName="rounded-xl bg-muted"
            />
            <div>
              <h3 className="text-xl font-semibold tracking-tight">Obsidian Blog</h3>
              <p className="text-muted-foreground mt-2 max-w-md">
                Complete blog with posts, tutorials, and technical write-ups hosted on GitHub Pages.
              </p>
            </div>
          </div>
          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-foreground shrink-0" />
        </a>
      </div>
    </section>
  );
}
