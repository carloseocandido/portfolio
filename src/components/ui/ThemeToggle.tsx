import { Button } from "./Button";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const iconName = resolvedTheme === "dark" ? "light_mode" : "dark_mode";

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      aria-label={
        resolvedTheme === "dark"
          ? "Alternar para tema claro"
          : "Alternar para tema escuro"
      }
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
