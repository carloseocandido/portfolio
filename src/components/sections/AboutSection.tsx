import { usePortfolio } from "../../hooks/usePortfolio";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t } = useTranslation();
  const { aboutHighlights, aboutParagraphs } = usePortfolio();

  return (
    <Section
      id="about"
      eyebrow={t("about")}
      title={t("sections.aboutTitle")}
      description={t("sections.aboutDescription")}
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <Card className="rounded-3xl p-6">
          <div className="space-y-6">
            <div>
              <p className="section-kicker">{t("differentiator")}</p>

              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                {t("aboutCardTitle")}
              </h3>
            </div>

            <p className="text-sm leading-7 text-muted-foreground">
              {t("aboutCardDescription")}
            </p>

            <div className="flex flex-wrap gap-3">
              {aboutHighlights.map((highlight) => (
                <Badge
                  key={highlight}
                  className="bg-background/60 text-foreground"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
