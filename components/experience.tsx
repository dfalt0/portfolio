"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import Beams from "@/components/Beams";

export function Experience() {
  const workHistory = [
    {
      company: "AkinSec",
      position: "CEO & Founder",
      location: "Remote",
      startDate: "2024",
      endDate: "Present",
      description: "Founded and lead a cybersecurity SaaS startup focused on automating all aspects of cybersecurity for businesses. Building innovative solutions to help companies protect their digital assets.",
      responsibilities: [
        "Product development and strategy",
        "Team leadership and management",
        "Business development and client relations",
        "Technical architecture and implementation",
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "AWS", "Vercel"],
      type: "Full-time",
    },
    {
      company: "Freelance Developer",
      position: "Full-Stack Developer",
      location: "Remote",
      startDate: "2022",
      endDate: "Present",
      description: "Providing full-stack development services to clients worldwide. Specializing in modern web applications, e-commerce solutions, and custom software development.",
      responsibilities: [
        "Client consultation and project planning",
        "Full-stack web application development",
        "UI/UX design and implementation",
        "Deployment and maintenance",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
      type: "Freelance",
    },
    {
      company: "Systems Engineer",
      position: "Cybersecurity & Systems Engineer",
      location: "Various",
      startDate: "2020",
      endDate: "2024",
      description: "Worked on various cybersecurity and systems engineering projects, focusing on infrastructure security, automation, and system optimization.",
      responsibilities: [
        "System architecture design",
        "Security implementation and auditing",
        "Infrastructure automation",
        "Performance optimization",
      ],
      technologies: ["Linux", "Docker", "AWS", "Python", "Bash", "Kubernetes"],
      type: "Contract",
    },
  ];

  return (
    <div className="min-h-screen pt-16 relative">
      {/* Beams Background */}
      <div className="absolute inset-0 z-0 opacity-30" style={{ width: '100%', height: '100%' }}>
        <Beams
          beamWidth={1}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={5}
          noiseIntensity={5}
          scale={0.2}
          rotation={30}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90 pointer-events-none" />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                Work Experience
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                & Career Journey
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A timeline of my professional experience, projects, and career milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-4 sm:py-8 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {workHistory.map((job, index) => (
                <Card
                  key={index}
                  className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <CardTitle className="text-2xl">{job.position}</CardTitle>
                        </div>
                        <CardDescription className="text-lg font-semibold text-foreground mb-2">
                          {job.company}
                        </CardDescription>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {job.startDate} - {job.endDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <Badge variant="secondary">{job.type}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-base text-muted-foreground mb-4">
                      {job.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto border-2 border-primary/20">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Interested in Working Together?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm always open to discussing new opportunities, projects, or collaborations. 
                Let's connect and see how we can work together.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

