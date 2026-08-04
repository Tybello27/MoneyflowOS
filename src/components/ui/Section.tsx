import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  dark,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 lg:py-32",
        dark ? "bg-navy-950 text-cream-50" : "bg-cream-50 text-charcoal-800",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export function Eyebrow({ children, className, light }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.2em] mb-4 md:mb-5",
        light ? "text-gold-400" : "text-gold-600",
        className
      )}
    >
      {children}
    </p>
  );
}

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-semibold tracking-[-0.015em] leading-[1.08] text-balance",
        className
      )}
    >
      {children}
    </Tag>
  );
}

interface SectionLeadProps {
  children: ReactNode;
  className?: string;
}

export function SectionLead({ children, className }: SectionLeadProps) {
  return (
    <p
      className={cn(
        "text-lg md:text-xl leading-relaxed text-charcoal-500 max-w-2xl text-balance",
        className
      )}
    >
      {children}
    </p>
  );
}
