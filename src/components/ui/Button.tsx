import { cn } from "../../utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-cream-50 hover:bg-navy-800 shadow-lg shadow-navy-900/15 hover:shadow-xl hover:shadow-navy-900/20 hover:-translate-y-0.5",
  secondary:
    "bg-cream-100 text-navy-900 border border-border-light hover:bg-cream-200 hover:border-cream-300",
  ghost: "bg-transparent text-navy-900 hover:bg-cream-200/60",
  gold: "bg-gradient-to-b from-gold-400 to-gold-600 text-navy-950 hover:from-gold-300 hover:to-gold-500 shadow-lg shadow-gold-600/25 hover:shadow-xl hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-[15px] gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className,
  onClick,
  target,
  rel,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium tracking-tight rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={target}
        rel={target === "_blank" ? rel ?? "noopener noreferrer" : rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
