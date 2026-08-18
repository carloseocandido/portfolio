import { usePortfolio } from "../../hooks/usePortfolio";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";
import { useTranslation } from "react-i18next";

export function ArchitectureSection() {
  const { t } = useTranslation();
  const { architectureTopics } = usePortfolio();
  const details = "architectureDetails";

  return (
    <Section
      id="architecture"
      eyebrow={t("architecture")}
      title={t("sections.architectureTitle")}
      description={t("sections.architectureDescription")}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-3xl p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <p className="section-kicker">{t(`${details}.flow`)}</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                {t(`${details}.flowTitle`)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t(`${details}.flowDescription`)}
              </p>
            </div>

            <div className="grid gap-3">
              <ArchitectureStep
                number="01"
                title="Controller / Route"
                description={t(`${details}.controllerDescription`)}
              />

              <ArchitectureStep
                number="02"
                title="Use Case"
                description={t(`${details}.useCaseDescription`)}
              />

              <ArchitectureStep
                number="03"
                title="Domain"
                description={t(`${details}.domainDescription`)}
              />

              <ArchitectureStep
                number="04"
                title="Repository"
                description={t(`${details}.repositoryDescription`)}
              />

              <ArchitectureStep
                number="05"
                title="Infrastructure"
                description={t(`${details}.infrastructureDescription`)}
              />
            </div>
          </div>
        </Card>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <Card className="rounded-3xl p-6">
            <p className="section-kicker">{t(`${details}.principles`)}</p>

            <h3 className="mt-3 text-xl font-semibold text-foreground">
              {t(`${details}.couplingTitle`)}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {t(`${details}.couplingDescription`)}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Chip>Clean Architecture</Chip>
              <Chip>DDD</Chip>
              <Chip>SOLID</Chip>
              <Chip>Dependency Injection</Chip>
            </div>
          </Card>

          <Card className="rounded-3xl p-6">
            <p className="section-kicker">{t(`${details}.practical`)}</p>

            <h3 className="mt-3 text-xl font-semibold text-foreground">
              {t(`${details}.adaptedTitle`)}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {t(`${details}.adaptedDescription`)}
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
