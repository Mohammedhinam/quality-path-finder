import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Background" className="bg-surface">
      <ol className="relative space-y-8 border-l border-border pl-6">
        {education.map((item) => (
          <li key={item.degree} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card"
            >
              <GraduationCap className="h-3.5 w-3.5 text-accent" />
            </span>
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <h3 className="min-w-0 text-base font-semibold tracking-tight">{item.degree}</h3>
                <span className="shrink-0 rounded-md bg-accent/15 px-2 py-1 text-[11px] font-semibold text-accent">
                  {item.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.duration}</p>
              <dl className="mt-4 grid gap-3 sm:grid-cols-3">
                {item.details.map((detail) => (
                  <div key={detail.label} className="rounded-lg border border-border bg-surface p-3">
                    <dt className="text-[11px] font-semibold tracking-wide uppercase text-muted-foreground">
                      {detail.label}
                    </dt>
                    <dd className="mt-1 text-sm">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
