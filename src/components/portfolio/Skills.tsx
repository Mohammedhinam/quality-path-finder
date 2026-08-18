import { Section } from "./Section";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical Skills"
      description="Skills built through coursework, academic projects and self-learning."
      className="bg-surface"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50"
          >
            <h3 className="text-sm font-semibold tracking-tight">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
