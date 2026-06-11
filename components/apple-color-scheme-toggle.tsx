"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme-context";

type AppleColorSchemeToggleProps = {
  className?: string;
};

export function AppleColorSchemeToggle({ className }: AppleColorSchemeToggleProps) {
  const { colorScheme, toggleColorScheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={className} disabled aria-hidden>
        <Moon className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = colorScheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleColorScheme}
      className={className}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
