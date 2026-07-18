import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type TimelineProps = HTMLAttributes<HTMLOListElement>;

export function Timeline({ className, ...props }: TimelineProps) {
  return (
    <ol
      className={cn(
        "relative space-y-6 border-l border-border/80 pl-6",
        className,
      )}
      {...props}
    />
  );
}
