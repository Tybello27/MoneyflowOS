import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faq } from "../../data/content";
import { Section, Eyebrow, SectionHeading } from "../ui/Section";
import { FadeIn } from "../ui/FadeIn";
import { cn } from "../../utils/cn";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const panelId = `faq-panel-${question.slice(0, 12).replace(/\s/g, "-")}`;
  const buttonId = `faq-button-${question.slice(0, 12).replace(/\s/g, "-")}`;

  return (
    <div className="border-b border-border-light last:border-0">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 md:py-6 text-left group"
        >
          <span className="text-base md:text-lg font-medium tracking-tight text-navy-900 group-hover:text-navy-700 transition-colors pr-4">
            {question}
          </span>
          <span
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-light bg-cream-50 text-navy-900 transition-all duration-300",
              isOpen && "bg-navy-900 border-navy-900 text-gold-400 rotate-45"
            )}
          >
            <Plus className="h-4 w-4" strokeWidth={2} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { height: "auto", opacity: 1 }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[15px] md:text-base leading-relaxed text-charcoal-500 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <FadeIn>
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <SectionHeading className="text-navy-900">
              {faq.headline}
            </SectionHeading>
          </FadeIn>
        </div>

        <div className="lg:col-span-8">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl bg-cream-100 border border-border-light px-5 md:px-8 shadow-sm shadow-navy-900/[0.02]">
              {faq.items.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
