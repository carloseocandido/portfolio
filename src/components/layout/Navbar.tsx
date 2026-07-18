import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { HeaderActions } from "../header/HeaderActions";
import { NavbarLinks } from "../header/NavbarLinks";
import { cn } from "../../utils/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a
          href="#top"
          className="group inline-flex items-center gap-3"
          aria-label="Ir para o início da página"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:-rotate-6">
            C
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.24em] text-foreground">
              CARLOS
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Backend Developer
            </span>
          </span>
        </a>

        <NavbarLinks
          className="hidden lg:flex"
          onNavigate={() => setIsOpen(false)}
        />

        <div className="flex items-center gap-2">
          <HeaderActions />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/70 text-foreground transition-colors hover:bg-muted/80 lg:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-border/60 bg-background/95 lg:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <Container className="py-4">
          <NavbarLinks
            className="flex flex-col gap-2"
            onNavigate={() => setIsOpen(false)}
            mobile
          />
        </Container>
      </div>
    </header>
  );
}
