import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-20", className)}>
      <div className="section-shell">
        {(eyebrow || title) && (
          <header className="mb-10 max-w-2xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
            )}
            {description && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
