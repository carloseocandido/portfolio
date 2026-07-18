import { experienceItems } from "../../config/portfolio";
import { Section } from "../ui/Section";
import { Timeline } from "../ui/Timeline";
import { ExperienceCard } from "../ui/ExperienceCard";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experiência"
      title="Trajetória construída por camadas: suporte, sistemas legados, QA e backend."
      description="Cada etapa contribuiu para a base técnica atual, com foco em resolução de problemas, qualidade e construção de software sólido."
    >
      <Timeline>
        {experienceItems.map((item) => (
          <li key={item.title}>
            <ExperienceCard item={item} />
          </li>
        ))}
      </Timeline>
    </Section>
  );
}
