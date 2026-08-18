import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-shell grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-base font-bold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.tagline}</p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-muted-foreground hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">Social</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
