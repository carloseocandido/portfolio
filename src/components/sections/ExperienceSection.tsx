import { experienceItems } from "../../config/portfolio";
import { Section } from "../ui/Section";
import { Timeline } from "../ui/Timeline";
import { ExperienceCard } from "../ui/ExperienceCard";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experiência"
      title="Da qualidade ao backend: uma trajetória construída na prática."
      description="Minha experiência em suporte, desenvolvimento e QA influenciou diretamente a forma como hoje construo e mantenho sistemas backend."
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
