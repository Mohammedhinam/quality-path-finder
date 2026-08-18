import { Download, Eye, Github } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Resume">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Interested in my background and technical skills? Download my latest CV.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={profile.cvPath} download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.cvPath} target="_blank" rel="noreferrer noopener">
                <Eye className="mr-2 h-4 w-4" /> View CV
              </a>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Replace the file at <code className="rounded bg-secondary px-1 py-0.5">public{profile.cvPath}</code>{" "}
            with your own PDF.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <p className="eyebrow">GitHub</p>
          <h3 className="mt-3 text-xl font-bold tracking-tight">Building, Testing &amp; Learning</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Explore my projects, testing work, experiments, and ongoing learning through GitHub.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-6">
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              <Github className="mr-2 h-4 w-4" /> GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
