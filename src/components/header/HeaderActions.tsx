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
              <p className="mb-2 text-sm font-medium text-foreground">
                {t("language")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {(["pt-BR", "en", "es"] as const).map((language) => (
                  <button
                    key={language}
                    type="button"
                    onClick={() => changeLanguage(language)}
                    className={`rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${i18n.resolvedLanguage === language ? "border-primary bg-primary/10 text-primary" : "border-border/70 text-muted-foreground hover:bg-muted/70 hover:text-foreground"}`}
                    aria-pressed={i18n.resolvedLanguage === language}
                  >
                    {language === "pt-BR" ? "PT-BR" : language.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
