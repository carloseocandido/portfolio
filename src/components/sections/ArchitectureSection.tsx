import { architectureTopics } from "../../config/portfolio";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

export function ArchitectureSection() {
  return (
    <Section
      id="architecture"
      eyebrow="Arquitetura"
      title="Padrões de arquitetura que sustentam manutenção, evolução e clareza técnica."
      description="Os tópicos abaixo refletem os princípios que orientam minhas decisões ao desenvolver APIs e serviços backend."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {architectureTopics.map((topic) => (
          <Card key={topic.title} className="rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-foreground">
              {topic.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {topic.summary}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
