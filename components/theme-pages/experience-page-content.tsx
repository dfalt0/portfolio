"use client";

import { useTheme } from "@/lib/theme-context";
import { ThemeShell } from "@/components/theme-shell";
import { Experience } from "@/components/experience";
import { WorkSection } from "@/components/apple/sections/work-section";

export function ExperiencePageContent() {
  const { theme, mounted } = useTheme();

  if (!mounted) return <div className="min-h-screen bg-background" />;

  return (
    <main className="min-h-screen">
      <ThemeShell showFooter={false}>
        {theme === "apple" ? (
          <div className="pt-14">
            <WorkSection />
          </div>
        ) : (
          <Experience />
        )}
      </ThemeShell>
    </main>
  );
}
