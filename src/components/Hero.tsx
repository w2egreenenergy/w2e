/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Calculator, Sparkles, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

const heroImage = "/src/assets/images/hero_biogas_infrastructure_1779788974859.png";

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Cinematic Background Image + Custom Tint Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Futuristic clean energy biogas plant infrastructure"
          className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Deep dark green radial tint overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0c0a]/75 to-[#050705] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0a] via-[#0a0c0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0a] via-transparent to-[#0a0c0a]/40" />
      </div>

      {/* Floating Sparkles Canvas effect (Subtle Animated Particles) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-w2e-lime/40 blur-[2px]"
            style={{
              width: `${Math.random() * 4 + 4}px`,
              height: `${Math.random() * 4 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Overlay for Industrial Modern Appearance */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

      {/* Container Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full">
        <div className="max-w-4xl text-left">
          {/* Top Tagline Badges */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F6B1B]/20 border border-[#1F6B1B]/40 rounded-full mb-6 max-w-fit">
            <span className="w-2 h-2 rounded-full bg-[#8CC63F] animate-pulse"></span>
            <span className="text-xs font-mono font-medium tracking-wider text-[#8CC63F] uppercase">
              Next-Gen Bio-CNG Technology &bull; SATAT Approved
            </span>
          </div>

          {/* Heading with Dual-tagline focus (staggered entries) */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-6 leading-[1.1]">
            Transforming Waste <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8CC63F] to-[#1F6B1B] font-black">
              Into Clean Energy
            </span>
          </h1>

          {/* Slogan Toggle indicator */}
          <div className="h-1 w-24 bg-linear-to-r from-w2e-green to-w2e-lime mb-8 rounded-full" />

          {/* Subheading */}
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-light mb-10">
            W2E Bioenergy develops advanced Bio-CNG, industrial biogas, and agricultural waste management complexes. We engineer clean systems that transform carbon liabilities into powerful green fuels and soil nutrients.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll("#solutions")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold tracking-wider hover:bg-neutral-100 rounded-lg scale-100 hover:scale-[1.03] active:scale-95 text-sm group transition-all duration-300 cursor-pointer"
            >
              <Flame className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
              EXPLORE SOLUTIONS
            </button>

            <button
              onClick={() => handleScroll("#calculator")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-wider hover:bg-white/5 hover:border-w2e-lime/50 active:scale-95 text-sm rounded-lg transition-all duration-300 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#8CC63F]" />
              PLANT ROI CALCULATOR
            </button>

            <button
              onClick={() => handleScroll("#contact")}
              className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider text-gray-300 hover:text-[#8CC63F] hover:bg-[#1F6B1B]/10 rounded-lg transition-all duration-300 cursor-pointer"
            >
              Consult an Engineer &rarr;
            </button>
          </div>

          {/* Trust points footer */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-16 mt-4 border-t border-white/5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-w2e-lime shrink-0" />
              <span className="text-xs font-mono text-gray-400">SATAT Qualified Vendor</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-w2e-lime shrink-0" />
              <span className="text-xs font-mono text-gray-400">Zero Methane Slippage</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-w2e-lime shrink-0" />
              <span className="text-xs font-mono text-gray-400">ISO 9001, 14001, 45001 Specs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mini scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={() => handleScroll("#about")}
          className="p-2 border border-white/10 rounded-full hover:border-w2e-lime/50 transition-colors"
        >
          <div className="w-1.5 h-3 bg-w2e-lime rounded-full animate-bounce" />
        </button>
      </div>

      {/* Floating Animations CSS inside a style block to assure they work instantly without styling issues */}
      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.02) translate(0px, 0px); }
          100% { transform: scale(1.08) translate(-5px, -5px); }
        }
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
