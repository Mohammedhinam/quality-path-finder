import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import heroArt from "@/assets/hero-abstract.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-accent-soft),transparent_70%)] opacity-60"
      />
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="min-w-0">
          <p className="eyebrow">Open to QA internships</p>
          <h1 className="mt-4 text-3xl leading-tight font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-base font-medium text-accent sm:text-lg">{profile.tagline}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.cvPath} download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <img
              src={heroArt}
              alt="Abstract illustration of software test cases and a connected technology grid"
              width={1200}
              height={1200}
              className="h-auto w-full"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {["Manual Testing", "API Testing", "Automation"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border bg-surface px-2 py-3 text-[11px] font-medium text-surface-foreground sm:text-xs"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
