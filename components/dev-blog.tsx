"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, BookOpen } from "lucide-react";

export function DevBlog() {
  const blogPosts = [
    {
      title: "Building Scalable Web Applications",
      description:
        "Exploring best practices for building scalable web applications with modern frameworks and architectures.",
      date: "2024-01-15",
      tags: ["Web Development", "Architecture", "Best Practices"],
      slug: "building-scalable-web-applications",
    },
    {
      title: "Understanding React Performance Optimization",
      description:
        "Deep dive into React performance optimization techniques and how to identify and fix common bottlenecks.",
      date: "2024-01-10",
      tags: ["React", "Performance", "Optimization"],
      slug: "react-performance-optimization",
    },
    {
      title: "The Future of Full-Stack Development",
      description:
        "A look at emerging trends and technologies shaping the future of full-stack development.",
      date: "2024-01-05",
      tags: ["Full-Stack", "Trends", "Technology"],
      slug: "future-of-full-stack-development",
    },
  ];

  return (
    <section
      id="dev-blog"
      className="py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Dev Blog
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Thoughts, tutorials, and insights on development
          </p>
        </div>

        {/* External Blog Link */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="border-2 border-primary/20 bg-primary/5 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg mb-1">Obisidan Blog</h3>
                    <p className="text-sm text-muted-foreground">
                      Check out my complete blog with more posts, tutorials, and deep dives
                    </p>
                  </div>
                </div>
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="whitespace-nowrap"
                >
                  <a
                    href="https://dfalt0.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Blog
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Featured Posts</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                <CardDescription className="text-base">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full"
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

