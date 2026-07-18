import type { ExperienceItem } from "../../types/portfolio";
import { Badge } from "./Badge";
import { Card } from "./Card";
import { cn } from "../../utils/cn";

type ExperienceCardProps = {
  item: ExperienceItem;
};

const toneClasses: Record<ExperienceItem["tone"], string> = {
  neutral: "border-border/80",
  accent: "border-accent/40",
  primary: "border-primary/40",
};

export function ExperienceCard({ item }: ExperienceCardProps) {
  const combinedHighlights = item.timeline?.length
    ? Array.from(
        new Set([
          ...item.highlights,
          ...item.timeline.flatMap((entry) => entry.highlights ?? []),
        ]),
      )
    : item.highlights;

  return (
    <Card className={cn("relative rounded-2xl p-6", toneClasses[item.tone])}>
      <div className="absolute -left-[33px] top-7 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-[0_0_0_6px_rgb(var(--primary)/0.12)]" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          {item.logoSrc ? (
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={item.logoSrc}
                alt={item.logoAlt ?? item.company}
                className="h-full w-full object-contain p-2"
                loading="lazy"
              />
            </div>
          ) : null}
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
          </div>
        </div>
        <Badge className="self-start">{item.period}</Badge>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        {item.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {combinedHighlights.map((highlight) => (
          <Badge key={highlight}>{highlight}</Badge>
        ))}
      </div>
      {item.timeline?.length ? (
        <div className="mt-6 space-y-5 border-l border-border/70 pl-5">
          {item.timeline.map((entry) => (
            <div key={`${entry.title}-${entry.period}`} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-4 border-background bg-primary" />
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-base font-semibold text-foreground">
                      {entry.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {entry.period}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  {entry.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
