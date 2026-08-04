import { includedStrip } from "../../data/content";

export function IncludedStrip() {
  const items = [...includedStrip, ...includedStrip];

  return (
    <div
      className="relative overflow-hidden border-y border-border-light bg-navy-950 py-4"
      aria-label="Everything included in MoneyFlow OS"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-950 to-transparent z-10" />
      <div className="flex w-max animate-marquee motion-reduce:animate-none motion-reduce:flex-wrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 pr-6 whitespace-nowrap"
            aria-hidden={i >= includedStrip.length}
          >
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-cream-100/70">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-gold-400/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
