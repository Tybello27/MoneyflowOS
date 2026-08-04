import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, product } from "../../data/content";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream-50/80 backdrop-blur-xl border-b border-border-light/80 shadow-sm shadow-navy-900/5"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="flex h-16 md:h-[4.5rem] items-center justify-between">
            <a
              href="#top"
              className="flex items-center gap-2.5 group"
              aria-label={`${product.name} home`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-gold-400 text-xs font-bold tracking-tight">
                MF
              </span>
              <span className="font-display text-base font-semibold tracking-tight text-navy-900">
                MoneyFlow OS™
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-charcoal-600 hover:text-navy-900 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button
                href={product.checkoutUrl}
                target="_blank"
                size="sm"
                variant="primary"
              >
                {nav.cta}
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-navy-900 hover:bg-cream-200/80 transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-label="Close menu overlay"
            />
            <motion.nav
              className="absolute top-0 right-0 h-full w-[min(100%,20rem)] bg-cream-50 shadow-2xl p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              aria-label="Mobile"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-sm font-semibold text-navy-900">Menu</span>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-cream-200"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 text-lg font-medium text-navy-900 rounded-xl hover:bg-cream-100"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <Button
                  href={product.checkoutUrl}
                  target="_blank"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  {nav.cta}
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
