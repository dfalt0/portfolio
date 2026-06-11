"use client";

import { useTheme } from "@/lib/theme-context";
import { ThemeShell } from "@/components/theme-shell";
import { SoftwareSection } from "@/components/apple/sections/software-section";
import { ProjectsFull } from "@/components/projects-full";
import { Contact } from "@/components/contact";

export function ProjectsPageContent() {
  const { theme, mounted } = useTheme();

  if (!mounted) return <div className="min-h-screen bg-background" />;

  if (theme === "apple") {
    return (
      <main className="min-h-screen">
        <ThemeShell showFooter={false}>
          <SoftwareSection fullPage />
        </ThemeShell>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <ThemeShell showFooter={false}>
        <ProjectsFull />
        <Contact />
      </ThemeShell>
    </main>
  );
}
