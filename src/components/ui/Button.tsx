import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type AnchorButtonProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps | "href"> & {
    href: string;
    external?: boolean;
    download?: boolean | string;
  };

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps | "type"> & {
    href?: undefined;
    type?: "button" | "submit" | "reset";
  };

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90",
  secondary:
    "border border-border/80 bg-card/80 text-foreground hover:bg-muted/80",
  ghost: "text-foreground hover:bg-muted/70",
};

export function Button(props: AnchorButtonProps | NativeButtonProps) {
  const { children, className, variant = "primary", ...rest } = props;
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const anchorProps = rest as Omit<
      AnchorButtonProps,
      keyof SharedProps | "href"
    >;
    const shouldOpenInNewTab =
      anchorProps.external ?? /^https?:\/\//.test(props.href);

    return (
      <a
        {...anchorProps}
        href={props.href}
        className={classes}
        target={shouldOpenInNewTab ? "_blank" : undefined}
        rel={shouldOpenInNewTab ? "noreferrer noopener" : undefined}
        download={anchorProps.download}
      >
        {children}
      </a>
    );
  }

  const buttonProps = rest as Omit<
    NativeButtonProps,
    keyof SharedProps | "href"
  >;

  return (
    <button
      {...buttonProps}
      className={classes}
      type={buttonProps.type ?? "button"}
    >
      {children}
    </button>
  );
}
