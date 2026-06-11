"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BongoCat } from "@/components/bongo-cat";
import { EngineerSnippet } from "@/components/shared/engineer-snippet";
import { GitHubContributions } from "@/components/shared/github-contributions";
import { LazyMount } from "@/components/shared/lazy-mount";

type PersonalityBlockProps = {
  variant?: "classic" | "apple";
  showHeading?: boolean;
};

export function PersonalityBlock({
  variant = "classic",
  showHeading = true,
}: PersonalityBlockProps) {
  const isApple = variant === "apple";

  return (
    <section
      id={isApple ? undefined : "about"}
      className={
        isApple
          ? showHeading
            ? "py-20 sm:py-28"
            : "py-8 sm:py-12"
          : "py-24 sm:py-32 relative"
      }
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div
            className={
              isApple
                ? "max-w-3xl mb-16"
                : "max-w-3xl mx-auto text-center mb-16"
            }
          >
            <h2
              className={
                isApple
                  ? "text-4xl sm:text-5xl font-semibold tracking-tight mb-3"
                  : "text-3xl sm:text-4xl font-bold mb-4"
              }
            >
              {isApple ? "Mark Akinshev" : "About Me"}
            </h2>
            <p
              className={
                isApple
                  ? "text-lg text-muted-foreground max-w-xl"
                  : "text-lg sm:text-xl text-muted-foreground"
              }
            >
              {isApple
                ? "Full-stack, cybersecurity, and systems engineer."
                : "A passionate developer who loves creating and fixing things"}
            </p>
          </div>
        )}

        {isApple ? (
          <div className="max-w-2xl mx-auto">
            <EngineerSnippet variant={variant} />
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage
                      src="/profile.JPG"
                      alt="Mark Akinshev"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl bg-linear-to-br from-primary to-primary/60 text-primary-foreground">
                      MA
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold mb-3">Mark Akinshev</h3>
                    <p className="text-muted-foreground mb-4">
                      Full-stack, Cybersecurity, and Systems Engineer. I specialize
                      in modern web and system technologies and love turning complex
                      problems into simple, efficient, and reliable solutions.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <EngineerSnippet variant={variant} />
          </div>
        )}

        {!isApple && (
          <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center mt-24 mb-0">
            <LazyMount minHeight="200px">
              <div className="scale-[1.0] sm:scale-[1.4] lg:scale-[1.8]">
                <BongoCat />
              </div>
            </LazyMount>
          </div>
        )}

        {!isApple && (
          <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center mt-32 mb-0">
            <GitHubContributions variant={variant} />
          </div>
        )}
      </div>
    </section>
  );
}
