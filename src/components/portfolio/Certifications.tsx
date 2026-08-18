import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications & Courses"
      description="Placeholder cards — replace each with a real certification once completed."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <article
            key={index}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50"
          >
            <Award className="h-5 w-5 text-accent" aria-hidden="true" />
            <h3 className="mt-3 text-sm font-semibold">{cert.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
            <p className="mt-1 text-xs text-muted-foreground">{cert.year}</p>
            <a
              href={cert.credential}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
            >
              Credential link <ExternalLink className="h-3 w-3" />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
