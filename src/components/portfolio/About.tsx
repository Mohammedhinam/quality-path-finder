import { Sparkles } from "lucide-react";
import { Section } from "./Section";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <aside className="rounded-xl border border-border bg-card p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="h-4 w-4 text-accent" /> Currently Learning
          </h3>
          <ul className="mt-4 space-y-2.5">
            {about.currentlyLearning.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
