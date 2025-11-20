"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { UpworkIcon } from "@/components/icons/upwork-icon";
import { XIcon } from "@/components/icons/x-icon";

export function Contact() {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:markakinshev@gmail.com",
      color: "hover:text-primary",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/markakinshev",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/dfalt0",
      color: "hover:text-foreground",
    },
    {
      name: "x.com",
      icon: XIcon,
      href: "https://x.com/dfalt0",
      color: "hover:text-foreground",
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a project in mind? I'd love to hear from you
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Upwork Card */}
          <Card className="border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-green-500/10 hover:border-green-500/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-green-500/10 border border-green-500/20">
                    <UpworkIcon className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-semibold mb-1">Hire Me on Upwork</h3>
                    <p className="text-sm text-muted-foreground">
                      Available for freelance projects
                    </p>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 gap-2 group"
                  asChild
                >
                  <a
                    href="https://www.upwork.com/freelancers/~015e481da235081a6b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UpworkIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    View Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Get In Touch Card */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels. No spam please.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="outline"
                      className="h-auto flex-col gap-2 py-6 hover:border-primary/50 transition-all"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={social.color}
                      >
                        <Icon className="h-6 w-6" />
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

