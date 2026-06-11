"use client";

import { workHistorySummary } from "@/lib/site-data";
import { EngineerSnippet } from "@/components/shared/engineer-snippet";

export function AppleHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start lg:items-center">
          <div>
            <p className="font-mono text-sm text-primary mb-6">{"// hello, I'm"}</p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-foreground">
              Mark
              <br />
              Akinshev
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {workHistorySummary}
            </p>

            <div className="mt-10 flex max-w-full flex-row flex-nowrap items-center gap-3 sm:gap-5">
              <div className="flex shrink-0 flex-row flex-nowrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollTo("work")}
                  className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  See my work
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("software")}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background text-foreground px-6 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                >
                  Projects
                </button>
              </div>

              <div className="inline-flex shrink-0 items-center gap-2.5 text-sm text-muted-foreground whitespace-nowrap">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full status-dot-green-ping opacity-30" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full status-dot-green" />
                </span>
                open to interesting problems
              </div>
            </div>
          </div>

          <div className="w-full">
            <EngineerSnippet variant="apple" />
          </div>
        </div>
      </div>
    </section>
  );
}
