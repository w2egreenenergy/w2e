/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Calculator, Sparkles, ShieldCheck, HelpCircle } from "lucide-react";
import heroImage from "../assets/images/hero_biogas_infrastructure_1779788974859.png";

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
        {/* Deep dark green radial tint overlay tailored to Dark Eco-Tech Charcoal Black */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0F0C]/75 to-[#0B0F0C] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0C] via-transparent to-[#0B0F0C]/55" />
      </div>

      {/* Grid Overlay for Industrial Modern Appearance */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,83,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,83,0.02)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none z-10" />

      {/* Container Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full">
        <div className="max-w-4xl text-left">
          {/* Top Tagline Badges */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00C853]/10 border border-[#3DDC84]/30 rounded-full mb-6 max-w-fit shadow-[0_0_15px_rgba(0,200,83,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3DDC84]"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#3DDC84] uppercase">
              Next-Gen Bio-CNG Technology &bull; SATAT Approved
            </span>
          </div>

          {/* Heading with Dual-tagline focus (staggered entries) */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-6 leading-[1.1]">
            Transforming Waste <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#3DDC84] to-[#00C853] font-black drop-shadow-[0_0_30px_rgba(0,200,83,0.15)]">
              Into Clean Energy
            </span>
          </h1>

          {/* Slogan Toggle indicator */}
          <div className="h-1.5 w-28 bg-gradient-to-r from-[#00C853] via-[#3DDC84] to-[#00E5FF] mb-8 rounded-full shadow-[0_0_12px_rgba(0,200,83,0.4)]" />

          {/* Subheading */}
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-light mb-10">
            W2E Bioenergy develops advanced Bio-CNG, industrial biogas, and agricultural waste management complexes. We engineer clean systems that transform carbon liabilities into powerful green fuels and soil nutrients.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll("#solutions")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00C853] to-[#3DDC84] text-black font-extrabold tracking-wider hover:from-[#3DDC84] hover:to-[#00C853] rounded-lg shadow-[0_0_20px_rgba(0,200,83,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.45)] hover:scale-[1.03] active:scale-95 text-sm group transition-all duration-300 cursor-pointer"
            >
              <Flame className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
              EXPLORE SOLUTIONS
            </button>

            <button
              onClick={() => handleScroll("#calculator")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#121817]/60 border border-white/10 text-white font-bold tracking-wider hover:bg-white/5 hover:border-[#3DDC84]/50 hover:shadow-[0_0_20px_rgba(61,220,132,0.15)] active:scale-95 text-sm rounded-lg transition-all duration-300 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#3DDC84]" />
              PLANT ROI CALCULATOR
            </button>

            <button
              onClick={() => handleScroll("#contact")}
              className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider text-gray-300 hover:text-[#3DDC84] hover:bg-[#00C853]/10 rounded-lg transition-all duration-300 cursor-pointer"
            >
              Consult an Engineer &rarr;
            </button>
          </div>

          {/* Trust points footer */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-16 mt-4 border-t border-white/5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#3DDC84] shrink-0" />
              <span className="text-xs font-mono text-gray-400">SATAT Qualified Vendor</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#3DDC84] shrink-0" />
              <span className="text-xs font-mono text-gray-400">Zero Methane Slippage</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#3DDC84] shrink-0" />
              <span className="text-xs font-mono text-gray-400">ISO 9001, 14001, 45001 Specs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mini scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={() => handleScroll("#about")}
          className="p-2 border border-white/10 rounded-full hover:border-[#3DDC84]/50 transition-colors"
        >
          <div className="w-1.5 h-3 bg-[#3DDC84] rounded-full animate-bounce" />
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
