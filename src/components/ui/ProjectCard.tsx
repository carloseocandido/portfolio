import type { ProjectItem } from "../../types/portfolio";
import { Button } from "./Button";
import { Card } from "./Card";
import { Chip } from "./Chip";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {project.summary}
          </p>
        </div>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Desafio
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground/90">
            {project.challenge}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Solução
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground/90">
            {project.solution}
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>
      {(project.github || project.external) && (
        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          {project.github && (
            <Button href={project.github} variant="secondary" external>
              GitHub
            </Button>
          )}
          {project.external && (
            <Button href={project.external} variant="ghost" external>
              Ver projeto
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}
