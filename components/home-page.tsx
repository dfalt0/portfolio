"use client";

import { useTheme } from "@/lib/theme-context";
import { AppleHome } from "@/components/apple/apple-home";
import { ClassicHome } from "@/components/classic/classic-home";

export function HomePage() {
  const { theme, mounted } = useTheme();

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return theme === "apple" ? <AppleHome /> : <ClassicHome />;
}
