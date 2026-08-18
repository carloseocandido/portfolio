import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function ScrollToTop() {
  const { t } = useTranslation();
  const [isTopVisible, setIsTopVisible] = useState(true);

  useEffect(() => {
    const topSection = document.getElementById("top");

    if (!topSection || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsTopVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(topSection);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t("scrollToTop")}
      className={`fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/90 text-foreground shadow-lg shadow-slate-950/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary focus-visible:outline-offset-4 ${isTopVisible ? "pointer-events-none translate-y-3 opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <span className="text-xl leading-none" aria-hidden="true">
        ↑
      </span>
    </button>
  );
}
