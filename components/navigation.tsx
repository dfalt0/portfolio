"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Ensure dark mode is set on mount
    document.documentElement.classList.add("dark");
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (item: string) => {
    if (item === "Showcase" || item === "Experience") {
      setIsMobileMenuOpen(false);
      return;
    }
    scrollToSection(item.toLowerCase());
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Mark Akinshev
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {pathname === "/" ? (
              <>
                {["About", "Projects", "Skills", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </>
            ) : (
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
            )}
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors ${
                pathname === "/blog"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/showcase"
              className={`text-sm font-medium transition-colors ${
                pathname === "/showcase"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Showcase
            </Link>
            <Link
              href="/experience"
              className={`text-sm font-medium transition-colors ${
                pathname === "/experience"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Experience
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-2"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {pathname === "/" ? (
              <>
                {["About", "Projects", "Skills", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      handleNavClick(item);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </>
            ) : (
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                Home
              </Link>
            )}
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                pathname === "/blog"
                  ? "text-foreground font-semibold bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/showcase"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                pathname === "/showcase"
                  ? "text-foreground font-semibold bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              Showcase
            </Link>
            <Link
              href="/experience"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                pathname === "/experience"
                  ? "text-foreground font-semibold bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              Experience
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

