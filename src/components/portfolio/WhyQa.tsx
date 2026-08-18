import { ChevronRight } from "lucide-react";
import { Section } from "./Section";
import { whyQa } from "@/data/portfolio";

export function WhyQa() {
  return (
    <Section id="why-qa" eyebrow="Professional Focus" title="Why QA?" className="bg-surface">
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {whyQa.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="max-w-3xl">
            {p}
          </p>
        ))}
      </div>

      <ol className="mt-10 flex flex-wrap items-center gap-2">
        {whyQa.workflow.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium sm:text-sm">
              <span className="mr-2 text-accent">{String(index + 1).padStart(2, "0")}</span>
              {step}
            </span>
            {index < whyQa.workflow.length - 1 && (
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
