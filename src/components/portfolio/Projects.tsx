import { useMemo, useState } from "react";
import { ExternalLink, Github, Info } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { projectFilters, projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import dental from "@/assets/project-dental.jpg";
import cars from "@/assets/project-cars.jpg";
import finance from "@/assets/project-finance.jpg";
import qa from "@/assets/project-qa.jpg";

const covers: Record<string, { src: string; alt: string }> = {
  Research: { src: dental, alt: "Abstract illustration of dental health data analysis" },
  "Web Development": { src: cars, alt: "Abstract illustration of a vehicle rental web interface" },
  "Mobile Development": { src: finance, alt: "Abstract illustration of a mobile finance tracking app" },
  "QA & Testing": { src: qa, alt: "Abstract illustration of a software test checklist" },
};

function ProjectCard({ project }: { project: Project }) {
  const cover = covers[project.category];
  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        project.featured ? "border-accent/60 ring-1 ring-accent/25" : "border-border",
      )}
    >
      <img
        src={cover.src}
        alt={cover.alt}
        width={1024}
        height={640}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-accent/15 px-2 py-1 text-[11px] font-semibold text-accent">
            {project.categoryLabel}
          </span>
          {project.featured && (
            <span className="rounded-md border border-accent/50 px-2 py-1 text-[11px] font-semibold text-accent">
              Primary focus
            </span>
          )}
        </div>

        <h3 className="mt-3 text-base font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <dl className="mt-4 space-y-2 text-sm">
          <div>
            <dt className="text-xs font-semibold text-foreground">Problem</dt>
            <dd className="text-muted-foreground">{project.problem}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold text-foreground">Solution</dt>
            <dd className="text-muted-foreground">{project.solution}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold text-foreground">My Contribution</dt>
            <dd className="text-muted-foreground">{project.contribution}</dd>
          </div>
        </dl>

        {project.contents && (
          <div className="mt-4 rounded-lg border border-border bg-surface p-4">
            <p className="text-xs font-semibold">Project contents</p>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {project.contents.map((c) => (
                <li key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.note && (
          <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {project.note}
          </p>
        )}

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          {project.links.map((link) => (
            <Button key={link.label} asChild variant="outline" size="sm">
              <a href={link.href} target={link.href === "#" ? undefined : "_blank"} rel="noreferrer noopener">
                {link.label === "GitHub" ? (
                  <Github className="mr-2 h-3.5 w-3.5" />
                ) : (
                  <ExternalLink className="mr-2 h-3.5 w-3.5" />
                )}
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [active, setActive] = useState<string>("All");
  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured Projects"
      description="Academic and self-driven projects across software quality assurance, web and mobile development."
    >
      <div role="tablist" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            role="tab"
            type="button"
            aria-selected={active === filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              active === filter
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visible.map((project) => (
          <div key={project.title} className="animate-in fade-in duration-500">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
}
