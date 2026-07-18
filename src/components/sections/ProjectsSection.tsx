import { projectItems } from "../../config/portfolio";
import { Section } from "../ui/Section";
import { ProjectCard } from "../ui/ProjectCard";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projetos"
      title="Estruturas preparadas para representar trabalho backend real ou receber seus projetos futuros."
      description="A seção evita invenções e mantém o espaço pronto para os projetos que você quiser destacar posteriormente."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projectItems.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
