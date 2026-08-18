import { usePortfolio } from "../../hooks/usePortfolio";
import { Section } from "../ui/Section";
import { Timeline } from "../ui/Timeline";
import { ExperienceCard } from "../ui/ExperienceCard";
import { useTranslation } from "react-i18next";

export function ExperienceSection() {
  const { t } = useTranslation();
  const { experienceItems } = usePortfolio();

  return (
    <Section
      id="experience"
      eyebrow={t("experience")}
      title={t("sections.experienceTitle")}
      description={t("sections.experienceDescription")}
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
