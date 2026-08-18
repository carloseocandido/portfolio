import { usePortfolio } from "../../hooks/usePortfolio";
import { Section } from "../ui/Section";
import { ProjectCard } from "../ui/ProjectCard";
import { useTranslation } from "react-i18next";

export function ProjectsSection() {
  const { t } = useTranslation();
  const { projectItems } = usePortfolio();

  return (
    <Section
      id="projects"
      eyebrow={t("projects")}
      title={t("sections.projectsTitle")}
      description={t("sections.projectsDescription")}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projectItems.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
