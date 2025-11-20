"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "AkinSec | Cybersecurity Automation",
      description:
        "CEO & Founder of cybersecurity SaaS startup built to automate all aspects of cybersecurity for businesses.",
      technologies: ["React.js", "Vite", "Tailwind", "ReactFlow", "shadcn/ui", "Framer Motion/GSAP", "n8n", "Radix UI", "PostgreSQL", "Prisma", "Vercel","AWS", "Hostinger"],
      image: "/AkinSec_sc.png",
      link: "https://akinsec.com",
      github: "https://github.com/dfalt0/akinsec",
    },
    {
      title: "AI Fine Tuning | malware-dataset1-test1",
      description:
        "A work in progress AI fine tuning project with UnslothAI, fine tuning a model to detect malware.",
      technologies: ["Google Collab", "NVidia CUDA", "UnSloth.ai", "Open-Source Models", "Python", "PyTorch"],
      image: "/ai-sc.png",
      link: "#",
      github: "https://github.com/dfalt0/malware-dataset1-test1",
    },
    // {
    //   title: "AI Content Generator",
    //   description:
    //     "An AI-powered content generation tool that helps creators generate high-quality content with advanced language models.",
    //   technologies: ["Next.js", "OpenAI", "Tailwind CSS", "Vercel"],
    //   image: "🤖",
    //   link: "#",
    //   github: "#",
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description:
    //     "A comprehensive analytics dashboard for managing multiple social media accounts with real-time metrics and insights.",
    //   technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    //   image: "📊",
    //   link: "#",
    //   github: "#",
    // },
  ];

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            A collection of projects that showcase my "skills and creativity".
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                {project.image.startsWith("/") || project.image.startsWith("http") ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <span>{project.image}</span>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

