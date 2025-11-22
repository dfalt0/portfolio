"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BongoCat } from "@/components/bongo-cat";

export function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            A passionate developer who loves creating and fixing things
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* About Card */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage 
                    src="/profile.JPG" 
                    alt="Mark Akinshev Picture"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
                    MA
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-3">Mark Akinshev</h3>
                  <p className="text-muted-foreground mb-4">
                    Full-stack, Cybersecurity, and Systems Engineer.
                    I specialize in modern web and system technologies and love turning complex problems into simple,
                    efficient, and reliable solutions.
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

          {/* Code Snippet */}
          <div className="hero-visual">
            <div className="code-editor-window">
              {/* Window Header */}
              <div className="window-header">
                <div className="window-controls">
                  <span className="window-control window-control-close"></span>
                  <span className="window-control window-control-minimize"></span>
                  <span className="window-control window-control-maximize"></span>
                </div>
                <div className="window-title">
                  engineer.js
                </div>
                <div className="window-actions">
                  <span className="window-action">⋮</span>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="code-editor-content">
                <div className="code-lines">
                  <div className="code-line">
                    <span className="line-number">1</span>
                    <span className="code-text">
                      <span className="comment">// who can it be now</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">2</span>
                    <span className="code-text">
                      <span className="keyword">const</span>
                      <span className="operator"> </span>
                      <span className="variable">engineer</span>
                      <span className="operator"> = </span>
                      <span className="punctuation">{"{"}</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">3</span>
                    <span className="code-text indent">
                      <span className="property">name</span>
                      <span className="operator">: </span>
                      <span className="string">'The Ginger Wizard'</span>
                      <span className="punctuation">,</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">4</span>
                    <span className="code-text indent">
                      <span className="property">passion</span>
                      <span className="operator">: </span>
                      <span className="string">'Make Useful Things'</span>
                      <span className="punctuation">,</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">5</span>
                    <span className="code-text indent">
                      <span className="property">status</span>
                      <span className="operator">: </span>
                      <span className="string">'Watching Anime'</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">6</span>
                    <span className="code-text">
                      <span className="punctuation">{"};"}</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">7</span>
                    <span className="code-text">
                      <span className="cursor-blink">▋</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bongo Cat Animation */}
        <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center mt-36 mb-0">
          <div className="scale-[1.0] sm:scale-[1.4] lg:scale-[1.8]">
            <BongoCat />
          </div>
        </div>
      </div>
    </section>
  );
}

