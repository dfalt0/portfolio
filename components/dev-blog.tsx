"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

export function DevBlog() {
  const blogPosts = [
    {
      title: "Building Scalable Web Applications",
      description:
        "Exploring best practices for building scalable web applications with modern frameworks and architectures.",
      date: "2024-01-15",
      tags: ["Web Development", "Architecture", "Best Practices"],
      link: "#",
    },
    {
      title: "Understanding React Performance Optimization",
      description:
        "Deep dive into React performance optimization techniques and how to identify and fix common bottlenecks.",
      date: "2024-01-10",
      tags: ["React", "Performance", "Optimization"],
      link: "#",
    },
    {
      title: "The Future of Full-Stack Development",
      description:
        "A look at emerging trends and technologies shaping the future of full-stack development.",
      date: "2024-01-05",
      tags: ["Full-Stack", "Trends", "Technology"],
      link: "#",
    },
  ];

  return (
    <section
      id="dev-blog"
      className="py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Dev Blog
          </h2>
          <p className="text-xl text-muted-foreground">
            Thoughts, tutorials, and insights on development
          </p>
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
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
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
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read More
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

