import { Container } from "../ui/Container";
import { socialLinks } from "../../config/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/90 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">
            Carlos | Backend Developer
          </p>
          <p className="mt-2 max-w-md text-sm leading-7 text-muted-foreground">
            Portfólio focado em desenvolvimento backend, arquitetura de
            software, qualidade de código e sistemas escaláveis.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer noopener" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
