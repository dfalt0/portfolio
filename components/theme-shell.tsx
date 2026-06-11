"use client";

import { useTheme } from "@/lib/theme-context";
import { ClassicNavigation } from "@/components/classic/classic-navigation";
import { AppleNavigation } from "@/components/apple/apple-navigation";
import { Footer } from "@/components/footer";
import type { ReactNode } from "react";

type ThemeShellProps = {
  children: ReactNode;
  showFooter?: boolean;
};

export function ThemeShell({ children, showFooter = true }: ThemeShellProps) {
  const { theme, mounted } = useTheme();

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <>
      {theme === "classic" ? <ClassicNavigation /> : <AppleNavigation />}
      {children}
      {showFooter && <Footer />}
    </>
  );
}
