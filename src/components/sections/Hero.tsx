import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { hero, product } from "../../data/content";
import { Button } from "../ui/Button";
import { FadeIn } from "../ui/FadeIn";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-cream-50 pt-24 pb-16 md:pt-28 md:pb-24"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-60" />
      <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-cream-200/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-navy-900/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1">
            <FadeIn delay={0.05}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600 mb-5">
                {hero.eyebrow}
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-semibold tracking-[-0.015em] leading-[1.06] text-navy-900 text-balance whitespace-pre-line">
                {hero.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-charcoal-500 max-w-md text-balance">
                {hero.subheadline}
              </p>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  href={product.checkoutUrl}
                  target="_blank"
                  variant="gold"
                  size="lg"
                >
                  {hero.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#inside" variant="secondary" size="lg">
                  {hero.secondaryCta}
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.36}>
              <p className="mt-8 text-sm text-charcoal-400 max-w-md leading-relaxed">
                {hero.audienceLine}
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2">
            <FadeIn delay={0.15} direction="none">
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                <motion.div
                  className="relative z-10"
                  animate={
                    reduceMotion
                      ? undefined
                      : { y: [0, -10, 0] }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/15 ring-1 ring-black/5">
                    <img
                      src="/images/hero-product.jpg"
                      alt="MoneyFlow OS™ premium workbook and interactive dashboard on tablet"
                      className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[5/4]"
                      width={1200}
                      height={960}
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-white/10 pointer-events-none" />
                  </div>
                </motion.div>

                <div className="absolute -bottom-6 -left-4 md:-left-8 z-20 hidden sm:block">
                  <motion.div
                    className="rounded-2xl bg-cream-50/95 backdrop-blur-md border border-border-light shadow-xl shadow-navy-900/10 px-5 py-4 max-w-[200px]"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                  >
                    <p className="text-[11px] uppercase tracking-wider text-gold-600 font-medium mb-1">
                      Includes
                    </p>
                    <p className="text-sm font-semibold text-navy-900 leading-snug">
                      {hero.badge}
                    </p>
                  </motion.div>
                </div>

                <div className="absolute -z-0 -inset-8 bg-gradient-to-br from-gold-400/10 via-transparent to-navy-900/5 rounded-full blur-3xl" />
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.5} className="mt-16 md:mt-20 flex justify-center">
          <a
            href="#problem"
            className="group flex flex-col items-center gap-2 text-charcoal-400 hover:text-navy-900 transition-colors"
            aria-label="Scroll to continue"
          >
            <span className="text-[11px] uppercase tracking-[0.18em]">Explore</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
