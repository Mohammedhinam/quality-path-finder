import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/portfolio";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState<string | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setNotice(null);
      return;
    }

    setErrors({});
    setNotice(
      "Your details are valid, but no email backend is connected yet, so this message was not sent. Use the “Email Me” button below, or connect a backend to enable sending.",
    );
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Connect"
      description="I am currently open to QA internships, software testing opportunities, and entry-level IT opportunities."
      className="bg-surface"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-xl border border-border bg-card p-6">
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Email</span>
                <a href={`mailto:${profile.email}`} className="break-all hover:text-accent">
                  {profile.email}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">LinkedIn</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="break-all hover:text-accent"
                >
                  {profile.linkedin}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Github className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">GitHub</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="break-all hover:text-accent"
                >
                  {profile.github}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <span className="block text-xs text-muted-foreground">Location</span>
                {profile.location}
              </span>
            </li>
          </ul>

          <Button asChild className="mt-6 w-full">
            <a href={`mailto:${profile.email}`}>
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </a>
          </Button>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-xl border border-border bg-card p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" maxLength={100} aria-invalid={!!errors.name} />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" maxLength={255} aria-invalid={!!errors.email} />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>
          <div className="mt-4 grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" maxLength={150} aria-invalid={!!errors.subject} />
            {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
          </div>
          <div className="mt-4 grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={6} maxLength={1000} aria-invalid={!!errors.message} />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>

          <Button type="submit" size="lg" className="mt-5">
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>

          <p aria-live="polite" className="mt-4 text-xs leading-relaxed text-muted-foreground">
            {notice ??
              "Note: this form validates input only — no email backend is connected yet, so submissions are not delivered."}
          </p>
        </form>
      </div>
    </Section>
  );
}
