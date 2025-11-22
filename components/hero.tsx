"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal, Zap, Github } from "lucide-react";
import PixelBlast from "@/components/PixelBlast";

// Color palette to choose from
const colors = [
  "#B19EEF", // Purple
  "#3b82f6", // Blue
  "#8b5cf6", // Violet
  "#ec4899", // Pink
  "#10b981", // Green
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#06b6d4", // Cyan
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentColor, setCurrentColor] = useState("#B19EEF");

  useEffect(() => {
    setMounted(true);
    // Pick a random color on page load
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Pixel Blast Background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={8}
          color={currentColor}
          patternScale={2}
          patternDensity={1.3}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.2}
          rippleThickness={0.1}
          rippleIntensityScale={1.5}
          speed={2.0}
          edgeFade={0.25}
          transparent
        />
      </div>
      
      {/* Gradient Overlay for better text readability - pointer-events-none so clicks pass through */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pointer-events-none">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <div className="relative">
              <Terminal className="h-4 w-4 animate-pulse" style={{ animationDuration: '1s' }} />
              {/* <Zap className="h-3 w-3 absolute -top-1 -right-1 text-primary animate-ping" /> */}
            </div>
            <span>Your Everything Engineer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
              Conducting Duct-Tape
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Experiments
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Crafting, building, and breaking things. Always on a project. Software should be simple, efficient, reliable, fast, easy, and "cost-effective".
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="text-base px-8 py-6 pointer-events-auto"
            >
              Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 py-6 pointer-events-auto"
            >
              <Link href="/showcase">Freelance</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 py-6 pointer-events-auto"
            >
              <a 
                href="https://github.com/dfalt0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="pt-12">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-muted-foreground hover:text-foreground transition-colors pointer-events-auto"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

