import { transformation } from "../../data/content";
import { Section, Eyebrow, SectionHeading } from "../ui/Section";
import { FadeIn, Stagger, StaggerItem } from "../ui/FadeIn";

export function Transformation() {
  return (
    <Section id="story" className="overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <FadeIn direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl shadow-navy-900/12 ring-1 ring-black/5">
                <img
                  src="/images/woman-reading.jpg"
                  alt="Person reading the MoneyFlow OS™ workbook with focus"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                  width={700}
                  height={875}
                />
              </div>
              <div className="absolute -bottom-5 -right-4 md:-right-6 hidden sm:block">
                <div className="rounded-2xl bg-navy-900 text-cream-50 px-5 py-4 shadow-xl max-w-[180px]">
                  <p className="text-[11px] uppercase tracking-wider text-gold-400 mb-1">
                    The shift
                  </p>
                  <p className="text-sm font-medium leading-snug">
                    Structure over willpower
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-7">
          <FadeIn>
            <Eyebrow>{transformation.eyebrow}</Eyebrow>
            <SectionHeading className="text-navy-900 whitespace-pre-line mb-8">
              {transformation.headline}
            </SectionHeading>
          </FadeIn>

          <div className="space-y-5 mb-10">
            {transformation.story.map((paragraph, i) => (
              <FadeIn key={i} delay={0.08 * (i + 1)}>
                <p className="text-lg leading-relaxed text-charcoal-600">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>

          <Stagger className="grid sm:grid-cols-3 gap-4" delay={0.2}>
            {transformation.outcomes.map((outcome) => (
              <StaggerItem key={outcome.label}>
                <div className="rounded-xl border border-border-light bg-cream-100/80 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold-600 mb-2">
                    {outcome.label}
                  </p>
                  <p className="text-sm leading-relaxed text-charcoal-700">
                    {outcome.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
