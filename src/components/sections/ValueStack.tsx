import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { valueStack, product } from "../../data/content";
import { Section, Eyebrow, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";
import { FadeIn, Stagger, StaggerItem } from "../ui/FadeIn";

function AnimatedPrice({ value, prefix = "$" }: { value: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let frame: number;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
    </span>
  );
}

export function ValueStack() {
  return (
    <Section id="pricing" dark className="overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <FadeIn>
            <Eyebrow light>{valueStack.eyebrow}</Eyebrow>
            <SectionHeading className="text-cream-50 mb-6">
              {valueStack.headline}
            </SectionHeading>
            <div className="hidden lg:block mt-10 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img
                src="/images/value-stack.jpg"
                alt="Complete MoneyFlow OS™ product bundle"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                width={600}
                height={450}
              />
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-7">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl md:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm overflow-hidden">
              <div className="p-6 md:p-8 border-b border-white/10">
                <Stagger className="space-y-0" stagger={0.05}>
                  {valueStack.items.map((item) => (
                    <StaggerItem key={item.name}>
                      <div className="flex items-center justify-between gap-4 py-3.5 border-b border-white/[0.06] last:border-0">
                        <span className="text-[15px] text-cream-100/90 leading-snug">
                          {item.name}
                        </span>
                        <span className="text-sm text-cream-200/40 tabular-nums shrink-0 line-through decoration-cream-200/30">
                          ${item.value}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>

              <div className="p-6 md:p-8 bg-white/[0.03]">
                <div className="flex items-end justify-between gap-4 mb-2">
                  <span className="text-sm text-cream-200/50">Total value</span>
                  <span className="text-lg text-cream-200/40 line-through tabular-nums">
                    ${valueStack.totalValue}
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4 mb-8">
                  <span className="text-base font-medium text-cream-50">
                    Today's price
                  </span>
                  <motion.p
                    className="text-5xl md:text-6xl font-semibold tracking-tight text-gold-400 tabular-nums"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <AnimatedPrice value={valueStack.todayPrice} />
                  </motion.p>
                </div>

                <Button
                  href={product.checkoutUrl}
                  target="_blank"
                  variant="gold"
                  size="lg"
                  className="w-full"
                >
                  {valueStack.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <p className="mt-4 text-center text-sm text-cream-200/40">
                  {valueStack.note}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
