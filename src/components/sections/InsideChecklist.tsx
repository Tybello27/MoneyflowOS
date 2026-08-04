import { Check } from "lucide-react";
import { insideChecklist } from "../../data/content";
import { Section, Eyebrow, SectionHeading, SectionLead } from "../ui/Section";
import { FadeIn, Stagger, StaggerItem } from "../ui/FadeIn";

export function InsideChecklist() {
  return (
    <Section id="inside" className="bg-cream-100">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <FadeIn>
            <Eyebrow>{insideChecklist.eyebrow}</Eyebrow>
            <SectionHeading className="text-navy-900">
              {insideChecklist.headline}
            </SectionHeading>
            <SectionLead className="mt-5 text-base md:text-lg">
              {insideChecklist.subheadline}
            </SectionLead>
            <div className="mt-8 hidden lg:block">
              <img
                src="/images/desk-minimal.jpg"
                alt="MoneyFlow OS™ on a minimal desk"
                className="rounded-2xl shadow-lg shadow-navy-900/10 ring-1 ring-black/5 aspect-[4/3] object-cover w-full"
                loading="lazy"
                width={600}
                height={450}
              />
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-8">
          <Stagger className="grid sm:grid-cols-2 gap-3" stagger={0.04}>
            {insideChecklist.items.map((item) => (
              <StaggerItem key={item.label}>
                <div className="flex items-start gap-3.5 rounded-xl bg-cream-50 border border-border-light px-4 py-4 hover:border-cream-300 hover:shadow-sm transition-all duration-300">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="font-semibold text-navy-900 tracking-tight text-[15px]">
                      {item.label}
                    </p>
                    <p className="text-sm text-charcoal-500 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
