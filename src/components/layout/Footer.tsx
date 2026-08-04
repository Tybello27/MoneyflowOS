import { product } from "../../data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-cream-200/70 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-gold-400 text-xs font-bold">
                MF
              </span>
              <span className="text-cream-50 font-semibold tracking-tight">
                {product.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream-200/50">
              {product.tagline}. A calm, complete system for budgeting, debt,
              savings, and net worth — in one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
            <div className="space-y-3">
              <p className="text-cream-50/90 font-medium">Explore</p>
              <ul className="space-y-2">
                <li>
                  <a href="#story" className="hover:text-cream-50 transition-colors">
                    The story
                  </a>
                </li>
                <li>
                  <a href="#inside" className="hover:text-cream-50 transition-colors">
                    What's inside
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-cream-50 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-cream-50 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-cream-50/90 font-medium">Product</p>
              <ul className="space-y-2">
                <li>
                  <a href="#guarantee" className="hover:text-cream-50 transition-colors">
                    Guarantee
                  </a>
                </li>
                <li>
                  <a
                    href={product.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream-50 transition-colors"
                  >
                    Get access
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-cream-200/40">
          <p>
            © {year} {product.name}. All rights reserved.
          </p>
          <p>Digital product · Instant delivery · One-time purchase</p>
        </div>
      </div>
    </footer>
  );
}
