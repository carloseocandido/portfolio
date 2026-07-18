import type { ReactNode } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Container } from "./Container";
import { cn } from "../../utils/cn";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-shell scroll-mt-24", className)}>
      <Container>
        <AnimatedSection>
          <div className="mb-10 max-w-3xl space-y-4">
            <p className="section-kicker">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-description">{description}</p>
          </div>
          {children}
        </AnimatedSection>
      </Container>
    </section>
  );
}
