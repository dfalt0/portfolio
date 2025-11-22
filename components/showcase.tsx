"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, Clock, DollarSign } from "lucide-react";
import DarkVeil from "@/components/DarkVeil";

// Preview Card Component with proper error handling
function PreviewCard({ example, index }: { example: any; index: number }) {
  const [previewError, setPreviewError] = useState(false);
  const isExternal = example.url.startsWith("http");
  
  return (
    <Card
      key={index}
      className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col overflow-hidden"
    >
      {/* Browser Window Preview */}
      <div className="relative h-48 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-50" />
        {isExternal && !previewError ? (
          <div className="relative h-full w-full">
            {/* Browser Window Frame */}
            <div className="absolute inset-0 flex flex-col">
              {/* Browser Chrome */}
              <div className="h-8 bg-muted border-b border-border flex items-center gap-2 px-3 z-10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 mx-2 h-5 bg-background/50 rounded text-[10px] flex items-center px-2 text-muted-foreground truncate">
                  {example.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </div>
              </div>
              {/* Live Preview iframe */}
              <div className="flex-1 relative overflow-hidden bg-background">
                <iframe
                  src={example.url}
                  className="w-full h-full border-0 pointer-events-none scale-50 origin-top-left"
                  style={{ width: '200%', height: '200%' }}
                  title={`${example.title} preview`}
                  sandbox="allow-same-origin allow-scripts"
                  loading="lazy"
                  onError={() => setPreviewError(true)}
                />
                {/* Overlay to prevent interaction */}
                <div className="absolute inset-0" />
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="text-4xl mb-2 opacity-50">🌐</div>
            <div className="text-xs text-muted-foreground">Click to view</div>
          </div>
        )}
      </div>
      
      <CardHeader className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {example.category}
          </Badge>
        </div>
        <CardTitle className="text-lg mb-2">{example.title}</CardTitle>
        <CardDescription className="text-sm">
          {example.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          className="w-full"
          asChild
        >
          <a
            href={example.url}
            target={example.url.startsWith("http") ? "_blank" : "_self"}
            rel={example.url.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            Visit Site
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export function Showcase() {
  const websiteTypes = [
    {
      title: "Business Landing Page",
      description:
        "Professional, conversion-optimized landing pages that capture leads and showcase your business. Perfect for startups, agencies, and service providers.",
      features: [
        "Responsive design",
        "Contact forms",
        "SEO optimized",
        "Fast loading",
        "Mobile-first",
      ],
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "🏢",
      price: "Starting at $299",
      delivery: "3-5 days",
      category: "Landing Page",
    },
    {
      title: "E-Commerce Store",
      description:
        "Full-featured online stores with shopping cart, payment integration, and inventory management. Ideal for retail businesses and product sellers.",
      features: [
        "Shopping cart",
        "Payment gateway",
        "Product catalog",
        "Order management",
        "Admin dashboard",
      ],
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      image: "🛍️",
      price: "Starting at $799",
      delivery: "7-10 days",
      category: "E-Commerce",
    },
    {
      title: "Portfolio Website",
      description:
        "Stunning portfolio sites for creatives, designers, and professionals. Showcase your work with style and make a lasting impression.",
      features: [
        "Gallery showcase",
        "Project details",
        "Contact integration",
        "Blog section",
        "Social links",
      ],
      technologies: ["React", "Next.js", "Framer Motion"],
      image: "🎨",
      price: "Starting at $199",
      delivery: "2-4 days",
      category: "Portfolio",
    },
    {
      title: "Restaurant Website",
      description:
        "Beautiful restaurant websites with menu display, online ordering, table reservations, and location information. Perfect for food businesses.",
      features: [
        "Menu display",
        "Online ordering",
        "Reservation system",
        "Location map",
        "Reviews integration",
      ],
      technologies: ["Next.js", "Stripe", "Maps API"],
      image: "🍽️",
      price: "Starting at $499",
      delivery: "5-7 days",
      category: "Restaurant",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Modern SaaS applications with user authentication, subscription management, and analytics. Built for scalable business applications.",
      features: [
        "User authentication",
        "Subscription billing",
        "Analytics dashboard",
        "API integration",
        "Multi-user support",
      ],
      technologies: ["Next.js", "Auth.js", "Stripe", "PostgreSQL"],
      image: "💼",
      price: "Starting at $1,299",
      delivery: "10-14 days",
      category: "SaaS",
    },
    {
      title: "Blog & Content Site",
      description:
        "Content-rich websites with blog functionality, CMS integration, and SEO optimization. Perfect for writers, marketers, and content creators.",
      features: [
        "Blog system",
        "CMS integration",
        "SEO optimized",
        "Search functionality",
        "Newsletter signup",
      ],
      technologies: ["Next.js", "Contentful", "MDX"],
      image: "📝",
      price: "Starting at $399",
      delivery: "4-6 days",
      category: "Content",
    },
    {
      title: "Real Estate Website",
      description:
        "Property listing websites with search filters, virtual tours, and agent profiles. Designed for real estate agencies and property managers.",
      features: [
        "Property listings",
        "Advanced search",
        "Virtual tours",
        "Agent profiles",
        "Contact forms",
      ],
      technologies: ["Next.js", "Maps API", "Image Gallery"],
      image: "🏠",
      price: "Starting at $599",
      delivery: "6-8 days",
      category: "Real Estate",
    },
    {
      title: "Fitness & Wellness",
      description:
        "Dynamic fitness websites with class schedules, trainer profiles, membership signup, and booking systems. Perfect for gyms and studios.",
      features: [
        "Class schedules",
        "Trainer profiles",
        "Membership signup",
        "Booking system",
        "Progress tracking",
      ],
      technologies: ["Next.js", "Calendar API", "Stripe"],
      image: "💪",
      price: "Starting at $449",
      delivery: "5-7 days",
      category: "Fitness",
    },
    {
      title: "Education & Learning Platform",
      description:
        "Interactive learning platforms with course management, student progress tracking, and video integration. Ideal for online schools, tutors, and training programs.",
      features: [
        "Course catalog",
        "Video lessons",
        "Progress tracking",
        "Student dashboard",
        "Certificates & badges",
      ],
      technologies: ["Next.js", "Video API", "PostgreSQL", "Stripe"],
      image: "📚",
      price: "Starting at $699",
      delivery: "8-12 days",
      category: "Education",
    },
  ];

  return (
    <div className="min-h-screen pt-16 relative">
      {/* DarkVeil Background */}
      <div className="absolute inset-0 z-0 opacity-100">
        <DarkVeil />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90 pointer-events-none" />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                Website Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                For Your Business
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional, modern websites tailored to your needs. 
              <br />Fast delivery, responsive design, and ongoing support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>100% Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>SEO Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Examples Section */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Live Examples
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore these live websites to see examples of modern, professional designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "My Portfolio",
                description: "This website - a modern portfolio showcasing full-stack development skills",
                url: "https://dfalt0.vercel.app/",
                category: "Portfolio",
              },
              {
                title: "Paddle Payments",
                description: "Mobile web payments starter with modern design and payment integration",
                url: "https://paddle-mobile-web-payments-starter.vercel.app/",
                category: "E-Commerce",
              },
              {
                title: "ContentStack Commerce",
                description: "CMS-powered commerce solution with headless architecture",
                url: "https://solutions-cms-contentstack-commerce.vercel.app/",
                category: "E-Commerce",
              },
              {
                title: "Magic Portfolio",
                description: "Elegant portfolio template with smooth animations and modern design",
                url: "https://demo.magic-portfolio.com/",
                category: "Portfolio",
              },
              {
                title: "Architech Dev",
                description: "Professional development agency website with clean architecture",
                url: "https://www.architech-dev.tech/",
                category: "Agency",
              },
              {
                title: "Morphic",
                description: "AI-powered search platform with modern interface and adaptive AI",
                url: "https://www.morphic.sh/",
                category: "SaaS",
              },
              {
                title: "Astroship",
                description: "Marketing website starter template built with Astro and TailwindCSS",
                url: "https://astroship.web3templates.com/",
                category: "Template",
              },
              {
                title: "Prompt Kit",
                description: "UI components library for building AI interfaces and chat applications",
                url: "https://www.prompt-kit.com/",
                category: "Component Library",
              },
              {
                title: "AstroWind",
                description: "Free Astro template for startups, SaaS, and marketing websites",
                url: "https://astrowind.vercel.app/",
                category: "Template",
              },
              {
                title: "Next SaaS Starter",
                description: "Multi-tenant Next.js starter with authentication and modern UI",
                url: "https://next-saas-start.vercel.app/",
                category: "SaaS",
              },
              {
                title: "Zola Chat",
                description: "AI chat interface with modern design and intuitive user experience",
                url: "https://www.zola.chat/",
                category: "AI App",
              },
              {
                title: "Stack Template",
                description: "Multi-tenant Next.js starter with Stack Auth and Shadcn UI",
                url: "https://stack-template.vercel.app/",
                category: "Template",
              }
            ].map((example, index) => (
              <PreviewCard key={index} example={example} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from these popular website use-cases or request a custom solution
            </p>
          </div>

          {/* Featured Big Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                🤖
              </div>
              <CardHeader className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    AI Application
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">AI Chat Bot Site</CardTitle>
                <CardDescription className="text-base mb-4">
                  Intelligent AI-powered chat interfaces with natural language processing, conversation memory, and multi-model support. Perfect for customer support, virtual assistants, and interactive AI experiences.
                </CardDescription>
                <div className="space-y-2 mb-4">
                  {[
                    "Natural language processing",
                    "Conversation history",
                    "Multi-AI model support",
                    "File upload & analysis",
                    "Custom knowledge base",
                    "Real-time streaming responses",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "OpenAI API", "Vercel AI SDK", "PostgreSQL", "Prisma", "Streaming"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Starting at $1,499</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>12-16 days</span>
                  </div>
                </div>
                <Button
                  variant="default"
                  className="w-full"
                  asChild
                >
                  <a href="#contact" onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}>
                    Request This Type
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                📊
              </div>
              <CardHeader className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    Dashboard
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Custom Business Dashboards</CardTitle>
                <CardDescription className="text-base mb-4">
                  Tailored analytics dashboards with real-time data visualization, custom metrics, and interactive reports. Built to match your business needs with powerful insights and beautiful design.
                </CardDescription>
                <div className="space-y-2 mb-4">
                  {[
                    "Real-time data visualization",
                    "Custom metrics & KPIs",
                    "Interactive charts & graphs",
                    "Data export capabilities",
                    "Role-based access control",
                    "API integrations",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Chart.js", "D3.js", "PostgreSQL", "Prisma", "REST APIs"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Starting at $1,799</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>14-18 days</span>
                  </div>
                </div>
                <Button
                  variant="default"
                  className="w-full"
                  asChild
                >
                  <a href="#contact" onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}>
                    Request This Type
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteTypes.map((website, index) => (
              <Card
                key={index}
                className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col"
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {website.image}
                </div>
                <CardHeader className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {website.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{website.title}</CardTitle>
                  <CardDescription className="text-sm mb-4">
                    {website.description}
                  </CardDescription>
                  <div className="space-y-2 mb-4">
                    {website.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {website.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{website.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{website.delivery}</span>
                    </div>
                  </div>
                  <Button
                    variant="default"
                    className="w-full"
                    asChild
                  >
                    <a href="#contact" onClick={(e) => {
                      e.preventDefault();
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}>
                      Request This Type
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto border-2 border-primary/20">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Need Something Custom?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                I can build custom websites tailored to your specific business needs. 
                Let's discuss your project and create something unique.
              </p>
              <Button
                size="lg"
                className="text-base px-8"
                asChild
              >
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                  Get a Custom Quote
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

