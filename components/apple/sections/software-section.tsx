import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects-data";
import { ExternalLink, Github } from "lucide-react";
import { GitHubContributions } from "@/components/shared/github-contributions";
import { LottieIcon } from "@/components/shared/lottie-icon";

export function SoftwareSection({ fullPage = false }: { fullPage?: boolean }) {
  const sorted = [...projects].sort((a, b) =>
    a.title.includes("AkinSec") ? -1 : b.title.includes("AkinSec") ? 1 : 0
  );

  return (
    <section
      id="software"
      className={`${fullPage ? "pt-24" : "py-24 sm:py-32"} scroll-mt-20`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Software</h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-xl">
          Projects and products I build and maintain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sorted.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-border bg-card/80 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                {project.iconType === "github" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github className="h-6 w-6" />
                  </a>
                ) : project.lottieIcon ? (
                  <LottieIcon
                    icon={project.lottieIcon}
                    folder="projects"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted"
                    lottieClassName="h-8 w-8"
                    placeholderClassName="rounded-xl bg-muted"
                  />
                ) : project.image.startsWith("/") ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={48}
                    height={48}
                    className={
                      project.image === "/akinsec-logo.png"
                        ? "h-12 w-12 shrink-0 object-contain"
                        : "rounded-xl object-cover"
                    }
                  />
                ) : (
                  <span className="text-3xl">{project.image}</span>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Visit <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {!fullPage && (
          <div className="mt-10">
            <Link href="/projects" className="text-sm text-primary hover:underline">
              View all projects →
            </Link>
          </div>
        )}

        <div className="mt-20 pt-8 border-t border-border">
          <GitHubContributions variant="apple" />
        </div>
      </div>
    </section>
  );
}
