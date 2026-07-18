import { navigationItems } from "../../config/portfolio";
import { cn } from "../../utils/cn";

type NavbarLinksProps = {
  className?: string;
  mobile?: boolean;
  onNavigate?: () => void;
};

export function NavbarLinks({
  className,
  mobile,
  onNavigate,
}: NavbarLinksProps) {
  return (
    <nav
      className={cn(
        "items-center gap-2",
        mobile ? "flex" : "flex flex-wrap",
        className,
      )}
    >
      {navigationItems.map((item) => (
        <a
          key={item.label}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground",
            mobile && "w-full px-4 py-3",
          )}
          href={item.href}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
