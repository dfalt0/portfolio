"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      category: "Fullstack Development",
      description: "Building modern web applications from frontend to backend with a focus on performance, scalability, and user experience.",
      technologies: [
        "JavaScript/TypeScript",
        "React.js",
        "Next.js",
        "Vue.js",
        "PHP & Laravel",
        "Python",
        "REST APIs",
        "PostgreSQL",
        "MySQL",
        "Prisma",
        "Node.js",
      ],
      highlights: [
        "Modernized decade-old web apps, cutting load times by 50%",
        "Built SaaS platforms with React, Next.js, and TypeScript",
        "Refactored legacy PHP to Laravel with improved performance",
        "Developed eCommerce solutions with payment integrations",
      ],
      detailedInfo: {
        overview: "I specialize in building end-to-end web applications that are fast, scalable, and user-friendly. From modern React frontends to robust backend APIs, I create solutions that solve real business problems.",
        experience: [
          "Refactored decade-old PHP applications to Laravel, reducing page load times by 50% and improving query performance",
          "Built full-stack SaaS platforms using React, Next.js, TypeScript, and PostgreSQL with Prisma ORM",
          "Developed eCommerce solutions with Stripe, PayPal, and Amazon Delivery integrations",
          "Created RESTful APIs and integrated third-party services for seamless functionality",
          "Optimized database queries and implemented caching strategies for improved performance",
        ],
        projects: [
          "AkinSec - Cybersecurity SaaS platform with React, Next.js, and modern UI frameworks",
          "SolarSystems.tech - eCommerce storefront with payment processing and delivery integration",
          "Legacy application modernization projects reducing technical debt and improving maintainability",
        ],
      },
    },
    {
      category: "Cybersecurity",
      description: "Protecting organizations through threat detection, compliance frameworks, and automated security operations.",
      technologies: [
        "SIEM/SOAR/XDR",
        "HIPAA/NIST/ISO 27001",
        "Vulnerability Assessment",
        "Threat Detection & Response",
        "Wireshark & BurpSuite",
        "Security Frameworks",
        "Penetration Testing",
        "Incident Response",
      ],
      highlights: [
        "Found and fixed 20+ major vulnerabilities across client networks",
        "Implemented SOC 2, HIPAA, NIST, and ISO 27001 frameworks",
        "Deployed SIEM platforms with custom rules and automated remediation",
        "Built cybersecurity SaaS platform automating SOC operations",
      ],
      detailedInfo: {
        overview: "I protect organizations by implementing comprehensive security frameworks, detecting threats, and automating security operations. My expertise spans compliance, vulnerability assessment, and building security automation platforms.",
        experience: [
          "Found and fixed 20+ major vulnerabilities including unpatched systems and cloud service misconfigurations",
          "Wrote and implemented SOC 2, HIPAA, NIST, and ISO 27001 security frameworks for client organizations",
          "Deployed SIEM platforms (Wazuh, Splunk, Elastic Security) with custom correlation rules and automated alerts",
          "Hardened Windows and Linux systems using CIS baselines, firewalls, and least-privilege access controls",
          "Built n8n workflows for event correlation, threat intelligence, and automated remediation",
          "Created cybersecurity SaaS platform that automates all aspects of a Security Operations Center",
        ],
        projects: [
          "AkinSec - SaaS platform automating cybersecurity operations with n8n workflows and Docker deployment",
          "AI Malware Detection - Fine-tuning LLMs to detect obfuscated malware and unsafe code",
          "Security framework implementations for tech refurbisher (50 staff) and logistics firm (90-vehicle fleet)",
        ],
      },
    },
    {
      category: "Systems Engineering",
      description: "Designing, automating, and managing enterprise infrastructure across cloud and on-premises environments.",
      technologies: [
        "AWS, Azure, GCP",
        "Terraform & Infrastructure-as-Code",
        "Docker & Containerization",
        "Linux (RHEL/Ubuntu) & Windows Server",
        "VMware & Hyper-V",
        "n8n Automation",
        "PowerShell & Bash",
        "Active Directory",
        "Fortinet & Network Security",
      ],
      highlights: [
        "Managed 50 client networks and 2,500 endpoints with 98% uptime",
        "Automated deployment pipelines, cutting setup time by 50%",
        "Migrated legacy infrastructure to AWS/Azure with improved scalability",
        "Built centralized alerting and self-healing automation systems",
      ],
      detailedInfo: {
        overview: "I design and manage enterprise infrastructure that's reliable, scalable, and automated. From cloud migrations to on-premises virtualization, I create systems that keep businesses running smoothly.",
        experience: [
          "Managed 50 client networks and 2,500 endpoints as one of two engineers, maintaining 98% uptime",
          "Automated deployment, backup, and monitoring pipelines with Terraform and Docker, reducing setup time by 50%",
          "Migrated legacy infrastructure to AWS and Azure, improving scalability and recovery times",
          "Built centralized alerting systems to detect failures before users noticed them",
          "Integrated MFA with Fortinet, Duo, and Azure AD, generating $60K in recurring revenue",
          "Managed VMware and Hyper-V clusters, optimizing performance and uptime",
          "Developed self-healing scripts for failed backups and patch jobs",
          "Supported SOC 2, NIST, HIPAA, and ISO 27001 environments for legal and healthcare clients",
        ],
        projects: [
          "Infrastructure automation reducing manual work by 60% through PowerShell and Bash scripting",
          "Cloud migration projects moving 2TB+ of data with zero downtime and checksum verification",
          "Centralized monitoring and alerting systems for proactive issue detection",
        ],
      },
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="border-2 hover:border-primary/50 transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedCategory(categoryIndex)}
            >
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 text-center">
                  {category.category}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 text-center">
                  {category.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3">Key Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.slice(0, 6).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {category.technologies.length > 6 && (
                      <Badge variant="outline" className="text-xs">
                        +{category.technologies.length - 6} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mt-auto">
                  <h4 className="text-sm font-semibold mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {category.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-primary mt-4 text-center font-medium">
                    Click to learn more →
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={selectedCategory !== null} onOpenChange={(open) => !open && setSelectedCategory(null)}>
          {selectedCategory !== null && (
            <DialogContent className="max-w-3xl max-h-[90vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {skillCategories[selectedCategory].category}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {skillCategories[selectedCategory].description}
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[70vh] pr-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Overview</h3>
                    <p className="text-sm text-muted-foreground">
                      {skillCategories[selectedCategory].detailedInfo.overview}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Experience</h3>
                    <ul className="space-y-3">
                      {skillCategories[selectedCategory].detailedInfo.experience.map((exp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Notable Projects</h3>
                    <ul className="space-y-3">
                      {skillCategories[selectedCategory].detailedInfo.projects.map((project, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillCategories[selectedCategory].technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}

