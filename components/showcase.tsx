"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, Clock, DollarSign } from "lucide-react";

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
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
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
              Fast delivery, responsive design, and ongoing support.
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

      {/* Showcase Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Types of Websites I Build
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from these popular website designs or request a custom solution
            </p>
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
      <section className="py-16 sm:py-24 bg-muted/30">
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

