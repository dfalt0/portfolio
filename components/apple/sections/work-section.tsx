import { workHistory, workSectionSummary } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { BongoCat } from "@/components/bongo-cat";
import { LazyMount } from "@/components/shared/lazy-mount";

export function WorkSection() {
  return (
    <section id="work" className="py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Work</h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-4xl leading-relaxed">
          {workSectionSummary}
        </p>

        <div className="space-y-12">
          {workHistory.map((job) => (
            <article
              key={`${job.company}-${job.startDate}`}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 pb-12 border-b border-border last:border-0"
            >
              <div className="text-sm text-muted-foreground">
                <p>
                  {job.startDate} — {job.endDate}
                </p>
                <p className="mt-1">{job.location}</p>
                <Badge variant="secondary" className="mt-3 text-xs">
                  {job.type}
                </Badge>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{job.position}</h3>
                <p className="text-muted-foreground mt-1">{job.company}</p>
                <p className="text-muted-foreground mt-4 leading-relaxed">{job.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-20 pt-16 sm:pt-20 lg:pt-24 border-t border-border">
          <LazyMount minHeight="200px">
            <div className="scale-[1.0] sm:scale-[1.4] lg:scale-[1.8]">
              <BongoCat />
            </div>
          </LazyMount>
        </div>
      </div>
    </section>
  );
}
