import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { IncludedStrip } from "./components/sections/IncludedStrip";
import { Problem } from "./components/sections/Problem";
import { Transformation } from "./components/sections/Transformation";
import { InsideChecklist } from "./components/sections/InsideChecklist";
import { ValueStack } from "./components/sections/ValueStack";
import { Guarantee } from "./components/sections/Guarantee";
import { FAQ } from "./components/sections/FAQ";

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-800">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-cream-50 focus:outline-none"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <IncludedStrip />
        <Problem />
        <Transformation />
        <InsideChecklist />
        <ValueStack />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
