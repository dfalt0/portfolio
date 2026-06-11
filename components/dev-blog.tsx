"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, BookOpen } from "lucide-react";
import { blogPosts, OBSIDIAN_BLOG_URL } from "@/lib/site-data";
import { LazyMount } from "@/components/shared/lazy-mount";

const FaultyTerminal = dynamic(() => import("@/components/FaultyTerminal"), {
  ssr: false,
});

export function DevBlog() {
  const [bgActive, setBgActive] = useState(false);

  return (
    <section id="dev-blog" className="py-24 sm:py-32 relative min-h-screen">
      <LazyMount
        className="absolute inset-0 z-0 opacity-20"
        minHeight="100%"
        onVisibleChange={setBgActive}
      >
        <FaultyTerminal
          scale={3}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={!bgActive}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#00ff00"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
      </LazyMount>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
        <div className="max-w-3xl mx-auto text-center mb-12 pointer-events-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Dev Blog</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Thoughts, tutorials, and insights on development
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16 pointer-events-auto">
          <Card className="border-2 border-primary/20 bg-primary/5 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg mb-1">Obsidian Blog</h3>
                    <p className="text-sm text-muted-foreground">
                      Check out my complete blog with more posts, tutorials, and deep dives
                    </p>
                  </div>
                </div>
                <Button variant="default" size="sm" asChild className="whitespace-nowrap">
                  <a href={OBSIDIAN_BLOG_URL} target="_blank" rel="noopener noreferrer">
                    Visit Blog
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mb-8 pointer-events-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Featured Posts</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-auto">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                <CardDescription className="text-base">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
