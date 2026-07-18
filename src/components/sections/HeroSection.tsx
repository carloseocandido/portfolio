import { siteContent, heroLinks, socialLinks } from "../../config/portfolio";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { AnimatedSection } from "../ui/AnimatedSection";
import carlosPhoto from "../../assets/ico/carlos.jpeg";

export function HeroSection() {
  return (
    <section id="top" className="pt-10 sm:pt-14">
      <Container>
        <div className="grid items-center gap-10 pb-10 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <AnimatedSection>
            <div className="max-w-3xl space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/70 p-1.5 shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:h-24 sm:w-24">
                  <img
                    src={carlosPhoto}
                    alt="Carlos"
                    className="h-full w-full rounded-[1.1rem] object-cover"
                    loading="eager"
                  />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    profile
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Backend Developer
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgb(var(--primary)/0.55)]" />
                system online
              </div>

              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {siteContent.roles.join(" • ")}
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                  {siteContent.name}
                  <span className="block text-primary">Backend Developer</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  {siteContent.headline}
                </p>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {siteContent.summary}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={heroLinks.github} external>
                  GitHub
                </Button>
                <Button href={heroLinks.linkedin} variant="secondary" external>
                  LinkedIn
                </Button>
                {/* <Button
                  href={heroLinks.resume}
                  variant="ghost"
                  download="Carlos-CV.txt"
                >
                  Download CV
                </Button> */}
                <Button href="#contact" variant="secondary">
                  Contato
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((link) => (
                  <Badge key={link.label}>{link.label}</Badge>
                ))}
              </div>

              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                {siteContent.ctaLabel}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120} className="lg:justify-self-end">
            <Card className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.16),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.14),_transparent_30%)]" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                      focus
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-foreground">
                      Arquitetura pronta para escala
                    </h2>
                  </div>
                  <span className="material-symbols-outlined text-3xl text-primary">
                    database
                  </span>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Pilares
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground/90">
                      Node.js, TypeScript, APIs REST, arquitetura limpa, testes
                      automatizados e banco relacional.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Compromisso
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground/90">
                      Entregar software previsível, com contrato claro, baixo
                      acoplamento e manutenção simples.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge>REST APIs</Badge>
                  <Badge>Clean Architecture</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Testing</Badge>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
