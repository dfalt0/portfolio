"use client";

import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { LazyMount } from "@/components/shared/lazy-mount";
import { workHistory, workSectionSummary } from "@/lib/site-data";

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

export function Experience() {
  return (
    <div className="min-h-screen pt-16 relative">
      {/* Beams Background */}
      <LazyMount className="absolute inset-0 z-0 opacity-30" minHeight="100%">
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
      </LazyMount>
      
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
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {workSectionSummary}
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

