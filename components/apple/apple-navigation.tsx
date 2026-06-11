"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Github } from "lucide-react";
import { AppleColorSchemeToggle } from "@/components/apple-color-scheme-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { AKINSEC_URL } from "@/lib/site-data";

const SECTIONS = ["Work", "Software", "Articles", "Blog", "Hobbies"] as const;

export function AppleNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/72 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
              aria-label="Mark Akinshev home"
            >
              MA
            </Link>
            <a
              href="https://github.com/dfalt0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={AKINSEC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-label="AkinSec"
            >
              AkinSec
            </a>
          </div>

          <nav className="hidden sm:flex items-center gap-8">
            {pathname === "/" ? (
              SECTIONS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))
            ) : (
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
            )}
            <div className="flex items-center gap-1">
              <AppleColorSchemeToggle />
              <ThemeToggle variant="apple" />
            </div>
          </nav>

          <div className="flex items-center gap-1 sm:hidden">
            <AppleColorSchemeToggle />
            <ThemeToggle variant="apple" />
          </div>
        </div>
      </div>
    </header>
  );
}
