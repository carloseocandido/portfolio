import { architectureTopics } from "../../config/portfolio";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";

export function ArchitectureSection() {
  return (
    <Section
      id="architecture"
      eyebrow="Arquitetura"
      title="Como estruturo sistemas backend"
      description="Mais do que seguir padrões por convenção, busco separar responsabilidades para manter regras de negócio testáveis, independentes e fáceis de evoluir."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-3xl p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <p className="section-kicker">Fluxo de uma requisição</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                HTTP → aplicação → domínio → persistência
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                A ideia é evitar que regras de negócio fiquem acopladas ao
                framework HTTP ou ao banco de dados.
              </p>
            </div>

            <div className="grid gap-3">
              <ArchitectureStep
                number="01"
                title="Controller / Route"
                description="Recebe a requisição, valida os dados de entrada e encaminha a operação."
              />

              <ArchitectureStep
                number="02"
                title="Use Case"
                description="Orquestra a operação e concentra as regras da aplicação."
              />

              <ArchitectureStep
                number="03"
                title="Domain"
                description="Representa as regras e comportamentos que pertencem ao negócio."
              />

              <ArchitectureStep
                number="04"
                title="Repository"
                description="Abstrai a persistência e evita que a regra de negócio dependa diretamente do banco."
              />

              <ArchitectureStep
                number="05"
                title="Infrastructure"
                description="Implementa detalhes externos como ORM, banco de dados, APIs e outros serviços."
              />
            </div>
          </div>
        </Card>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <Card className="rounded-3xl p-6">
            <p className="section-kicker">Princípios</p>

            <h3 className="mt-3 text-xl font-semibold text-foreground">
              O objetivo é reduzir acoplamento
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Frameworks e ferramentas podem mudar. A regra de negócio não
              deveria precisar ser reescrita sempre que isso acontece.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Chip>Clean Architecture</Chip>
              <Chip>DDD</Chip>
              <Chip>SOLID</Chip>
              <Chip>Dependency Injection</Chip>
            </div>
          </Card>

          <Card className="rounded-3xl p-6">
            <p className="section-kicker">Na prática</p>

            <h3 className="mt-3 text-xl font-semibold text-foreground">
              Arquitetura adaptada ao projeto
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Já trabalhei com diferentes combinações de framework e
              persistência, escolhendo a abordagem de acordo com o contexto da
              aplicação.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Chip>Express</Chip>
              <Chip>Fastify</Chip>
              <Chip>Knex</Chip>
              <Chip>Sequelize</Chip>
              <Chip>Drizzle ORM</Chip>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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

type ArchitectureStepProps = {
  number: string;
  title: string;
  description: string;
};

function ArchitectureStep({
  number,
  title,
  description,
}: ArchitectureStepProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border/70 bg-background/50 p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-mono text-xs font-semibold text-primary">
        {number}
      </div>

      <div>
        <h4 className="font-semibold text-foreground">{title}</h4>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
