import { ShieldCheck, Clock, RefreshCw, HeartHandshake } from "lucide-react";
import { guarantee } from "../../data/content";
import { Section, Eyebrow, SectionHeading } from "../ui/Section";
import { FadeIn, Stagger, StaggerItem } from "../ui/FadeIn";

const icons = [Clock, HeartHandshake, RefreshCw];

export function Guarantee() {
  return (
    <Section id="guarantee" className="bg-cream-100">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 shadow-lg shadow-navy-900/15">
            <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
          </div>
          <Eyebrow>{guarantee.eyebrow}</Eyebrow>
          <SectionHeading className="text-navy-900">
            {guarantee.headline}
          </SectionHeading>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-charcoal-600 max-w-2xl mx-auto">
            {guarantee.body}
          </p>
        </FadeIn>

        <Stagger
          className="mt-12 grid sm:grid-cols-3 gap-4 text-left"
          delay={0.15}
        >
          {guarantee.points.map((point, i) => {
            const Icon = icons[i] ?? Clock;
            return (
              <StaggerItem key={point}>
                <div className="rounded-2xl bg-cream-50 border border-border-light p-5 md:p-6 h-full">
                  <Icon
                    className="h-5 w-5 text-gold-600 mb-3"
                    strokeWidth={1.75}
                  />
                  <p className="text-[15px] font-medium text-navy-900 leading-snug">
                    {point}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn delay={0.3}>
          <p className="mt-10 text-base font-medium text-navy-800 tracking-tight">
            {guarantee.closing}
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
