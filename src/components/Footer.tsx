/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Mail, Award, ArrowUp, Milestone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-[#0a0c0a] border-t border-w2e-green/20 pt-16 pb-8 font-sans overflow-hidden">
      
      {/* Decorative vertical energy accents */}
      <div className="absolute top-0 left-0 right-0 h-[10px] bg-gradient-to-r from-w2e-green via-[#8CC63F] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid division */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Bio Branding (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo />

            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              W2E Bioenergy develops next-generation Waste-to-Energy (W2E) biorefineries, advanced continuous anaerobic reactors, and high-purity membrane biomethane separation skids to fuel India’s sustainable off-grid logistics.
            </p>

            <div className="flex items-center gap-1 bg-w2e-green/5 border border-w2e-green/10 p-3 rounded-lg max-w-sm">
              <Milestone className="w-5 h-5 text-w2e-lime shrink-0" />
              <p className="text-[10px] font-mono text-gray-400">
                Registered industrial provider under Central Gov SATAT and Bio-Compost schemes.
              </p>
            </div>
          </div>

          {/* Col 2: Engineering Quick Roots (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">
              Biorefinery Sections
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#about" className="text-gray-400 hover:text-w2e-lime transition-colors">
                  &gt; Corporate Overview
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-w2e-lime transition-colors">
                  &gt; Technology Modules
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-w2e-lime transition-colors">
                  &gt; Cycle Simulation
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-w2e-lime transition-colors">
                  &gt; Investment Dashboard
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-w2e-lime transition-colors">
                  &gt; Showcase Portfolios
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Environmental Standards (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 font-mono text-[10px]">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest">
              ESG Compliance Accreditations
            </h4>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-w2e-lime mt-1.5 shrink-0" />
                <span>IS 15408 High-Purity Compressed Biomethane vehicle fuels standard matching.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-w2e-lime mt-1.5 shrink-0" />
                <span>Sovereign Fertilizer Control Order (FCO) compliance clearance rating.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-w2e-lime mt-1.5 shrink-0" />
                <span>Decarbonization tracking verified against global UNFCCC climate frameworks.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-gray-500 text-center sm:text-left">
            <p>
              &copy; {currentYear} W2E Bioenergy Private Limited. All rights reserved globally.
            </p>
            <p className="mt-1 text-gray-600">
              Technical CAD schematics, EPC blueprints, and SCADA code models remain protected under industrial patents.
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 hover:border-w2e-lime/50 rounded-lg text-xs font-mono text-gray-400 hover:text-white transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            BACK TO CONSOLE TOP
          </button>
        </div>

      </div>
    </footer>
  );
}
