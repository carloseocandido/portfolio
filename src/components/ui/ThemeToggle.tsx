import { Button } from "./Button";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const iconName = resolvedTheme === "dark" ? "light_mode" : "dark_mode";

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      aria-label={resolvedTheme === "dark" ? t("theme.light") : t("theme.dark")}
      className="h-11 w-11 rounded-full px-0"
    >
      <span
        className="material-symbols-outlined text-[20px]"
        aria-hidden="true"
      >
        {iconName}
      </span>
    </Button>
  );
}
