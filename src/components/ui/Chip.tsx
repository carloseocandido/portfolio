import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type ChipProps = HTMLAttributes<HTMLSpanElement>;

export function Chip({ className, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-medium text-foreground shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
