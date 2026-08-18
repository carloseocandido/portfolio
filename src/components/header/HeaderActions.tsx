import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useTheme } from "../../hooks/useTheme";

type HeaderActionsProps = {
  mobile?: boolean;
};

export function HeaderActions({ mobile = false }: HeaderActionsProps) {
  const { t } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (language: "pt-BR" | "en" | "es") => {
    void i18n.changeLanguage(language);
    localStorage.setItem("portfolio-language", language);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, []);

  return (
    <div ref={settingsRef} className={mobile ? "relative w-full" : "relative"}>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center text-foreground transition-colors hover:text-primary"
        aria-label={t("settings")}
        aria-expanded={isOpen}
        aria-controls="settings-popover"
      >
        <span className="text-2xl leading-none" aria-hidden="true">
          ⚙
        </span>
      </button>

      {isOpen ? (
        <div
          id="settings-popover"
          className="absolute left-0 top-[calc(100%+0.75rem)] z-50 w-[min(16rem,calc(100vw-2rem))] rounded-2xl border border-border/80 bg-card p-4 shadow-2xl shadow-slate-950/15 lg:left-auto lg:right-0"
          role="dialog"
          aria-label={t("settings")}
        >
          <div className="space-y-4">
            <div>
              <p className="section-kicker">{t("settings")}</p>
              <h2 className="mt-2 text-base font-semibold text-foreground">
                {t("appearance")}
              </h2>
            </div>

            <div className="flex w-full rounded-xl border border-border/70 bg-background/40 p-1">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-sm transition-colors ${resolvedTheme === "light" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"}`}
                aria-pressed={resolvedTheme === "light"}
              >
                <span className="text-base leading-none" aria-hidden="true">
                  ☀
                </span>
                {t("light")}
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-sm transition-colors ${resolvedTheme === "dark" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"}`}
                aria-pressed={resolvedTheme === "dark"}
              >
                <span className="text-base leading-none" aria-hidden="true">
                  ☾
                </span>
                {t("dark")}
              </button>
            </div>

            <div className="border-t border-border/70 pt-4">
              <p className="text-sm font-medium text-foreground">
                {t("language")}
              </p>
              <div className="relative mt-2">
                <button
                  type="button"
                  onClick={() => setIsLanguageOpen((current) => !current)}
                  className="flex h-11 w-full items-center justify-between rounded-xl border border-border/70 bg-background/50 px-3 text-sm font-medium text-foreground transition-colors hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-expanded={isLanguageOpen}
                  aria-controls="language-options"
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="font-mono text-xs font-semibold tracking-tight text-muted-foreground"
                      aria-hidden="true"
                    >
                      文A
                    </span>
                    {t(
                      `languageNames.${i18n.resolvedLanguage === "pt-BR" ? "ptBR" : i18n.resolvedLanguage}`,
                    )}
                  </span>
                  <span
                    className="text-xs text-muted-foreground"
                    aria-hidden="true"
                  >
                    {isLanguageOpen ? "▲" : "▼"}
                  </span>
                </button>

                {isLanguageOpen ? (
                  <div
                    id="language-options"
                    className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-10 rounded-xl border border-border/80 bg-card p-1.5 shadow-xl shadow-slate-950/15"
                    role="listbox"
                    aria-label={t("language")}
                  >
                    {(["pt-BR", "en", "es"] as const).map((language) => (
                      <button
                        key={language}
                        type="button"
                        onClick={() => {
                          changeLanguage(language);
                          setIsLanguageOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-muted/70 ${i18n.resolvedLanguage === language ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                        role="option"
                        aria-selected={i18n.resolvedLanguage === language}
                      >
                        {t(
                          `languageNames.${language === "pt-BR" ? "ptBR" : language}`,
                        )}
                        {i18n.resolvedLanguage === language ? "✓" : null}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
