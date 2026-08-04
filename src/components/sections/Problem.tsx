import { Check, X } from "lucide-react";
import { problem } from "../../data/content";
import { Section, Eyebrow, SectionHeading } from "../ui/Section";
import { FadeIn, Stagger, StaggerItem } from "../ui/FadeIn";
import { cn } from "../../utils/cn";

export function Problem() {
  return (
    <Section id="problem" className="bg-cream-100">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <FadeIn>
            <Eyebrow>{problem.eyebrow}</Eyebrow>
            <SectionHeading className="text-navy-900 whitespace-pre-line">
              {problem.headline}
            </SectionHeading>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {problem.paragraphs.map((p, i) => (
            <FadeIn key={i} delay={0.08 * i}>
              <p className="text-lg md:text-xl leading-relaxed text-charcoal-600">
                {p}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>

      <Stagger
        className="mt-16 md:mt-20 grid sm:grid-cols-3 gap-5 md:gap-6"
        delay={0.1}
      >
        {problem.points.map((point) => (
          <StaggerItem key={point.title}>
            <div className="h-full rounded-2xl bg-cream-50 border border-border-light p-6 md:p-8 shadow-sm shadow-navy-900/[0.03] hover:shadow-md hover:border-cream-300 transition-all duration-300">
              <div className="h-1 w-8 rounded-full bg-gold-500 mb-5" />
              <h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                {point.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-charcoal-500">
                {point.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-16 md:mt-20">
        <FadeIn>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-gold-600 mb-8">
            {problem.comparisonEyebrow}
          </p>
        </FadeIn>
        <Stagger className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
          {problem.comparison.map((col, idx) => {
            const isProduct = idx === 1;
            return (
              <StaggerItem key={col.label}>
                <div
                  className={cn(
                    "h-full rounded-2xl md:rounded-3xl p-7 md:p-9 border transition-shadow duration-300",
                    isProduct
                      ? "bg-navy-900 border-navy-800 shadow-xl shadow-navy-900/20"
                      : "bg-cream-50 border-border-light"
                  )}
                >
                  <p
                    className={cn(
                      "text-xs font-medium uppercase tracking-[0.16em] mb-6",
                      isProduct ? "text-gold-400" : "text-charcoal-400"
                    )}
                  >
                    {col.label}
                  </p>
                  <ul className="space-y-4">
                    {col.items.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            isProduct
                              ? "bg-gold-400/15 text-gold-400"
                              : "bg-charcoal-800/5 text-charcoal-400"
                          )}
                        >
                          {isProduct ? (
                            <Check className="h-3 w-3" strokeWidth={2.5} />
                          ) : (
                            <X className="h-3 w-3" strokeWidth={2.5} />
                          )}
                        </span>
                        <span
                          className={cn(
                            "text-[15px] md:text-base leading-relaxed",
                            isProduct ? "text-cream-100" : "text-charcoal-600"
                          )}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
}
