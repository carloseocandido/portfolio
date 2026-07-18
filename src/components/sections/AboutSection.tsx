import { aboutHighlights, aboutParagraphs } from "../../config/portfolio";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="Sobre"
      title="Perfil profissional orientado a backend, arquitetura e qualidade de software."
      description="As experiências anteriores em suporte, desenvolvimento desktop e QA Automation formaram a base que hoje sustenta minha especialização em Backend."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <Card className="rounded-3xl p-6">
          <div className="space-y-5">
            <div>
              <p className="section-kicker">Essência profissional</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                Especialização em APIs, regras de negócio e escalabilidade
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {aboutHighlights.map((highlight) => (
                <Badge
                  key={highlight}
                  className="bg-background/60 text-foreground"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
