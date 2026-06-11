"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme-context";

type ThemeToggleProps = {
  variant?: "apple" | "classic";
  className?: string;
};

export function ThemeToggle({ variant = "apple", className }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className={className} disabled>
        …
      </Button>
    );
  }

  const label = theme === "apple" ? "Old Theme" : "Current";

  return (
    <Button
      variant={variant === "apple" ? "ghost" : "outline"}
      size="sm"
      onClick={toggleTheme}
      className={className}
      aria-label={`Switch to ${label}`}
    >
      {label}
    </Button>
  );
}
