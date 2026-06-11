import { hobbies } from "@/lib/site-data";
import { HobbyLottieIcon } from "@/components/shared/hobby-lottie-icon";

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 sm:py-32 scroll-mt-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Hobbies</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl">
          What I do when I&apos;m not behind a keyboard.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hobbies.map((hobby) => (
            <article
              key={hobby.title}
              className="rounded-2xl border border-border bg-card/80 p-6 hover:shadow-md transition-shadow"
            >
              <HobbyLottieIcon icon={hobby.icon} />
              <h3 className="text-lg font-semibold tracking-tight">{hobby.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {hobby.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
