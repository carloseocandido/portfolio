import { techCategories } from "../../config/portfolio";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { TechBadge } from "../ui/TechBadge";

export function StackSection() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Uma base técnica organizada por contexto, não por moda."
      description="As tecnologias estão separadas por função para evidenciar como cada camada contribui para uma entrega backend consistente e escalável."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {techCategories.map((category) => (
          <Card key={category.title} className="rounded-3xl p-6">
            <p className="section-kicker">{category.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {category.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.items.map((tech) => (
                <TechBadge key={tech.name} label={tech.name} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
