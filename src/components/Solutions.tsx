/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { SOLUTIONS } from "../data/solutions";
import { Solution } from "../types";
import {
  Flame,
  Cpu,
  Leaf,
  Filter,
  Zap,
  Droplet,
  Building2,
  ShieldCheck,
  Activity,
  X,
  Target,
  FileSpreadsheet,
  Settings,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Map icon strings to Lucide components
const IconMap: { [key: string]: any } = {
  FlameKindling: Flame,
  Cpu: Cpu,
  Leaf: Leaf,
  Filter: Filter,
  Zap: Zap,
  Droplet: Droplet,
  Building2: Building2,
  ShieldCheck: ShieldCheck,
  Activity: Activity,
};

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  return (
    <section id="solutions" className="relative py-24 bg-[#0a0c0a] border-y border-white/5">
      {/* Background visual graphics */}
      <div className="absolute left-1/4 top-1/10 w-96 h-96 bg-w2e-green/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/10 w-96 h-96 bg-w2e-lime/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#8CC63F] tracking-widest uppercase block mb-3">
            BIO-REFINERY SOLUTIONS SUITE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-heading">
            Advanced Circular Technologies
          </h2>
          <div className="h-1 w-16 bg-[#8CC63F] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-sm text-gray-400">
            W2E Bioenergy delivers engineered systems, modular gas processing skids, and complete turnkey EPC projects designed to process complex biomass feedstock efficiently.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution) => {
            const IconComponent = IconMap[solution.iconName] || Settings;
            return (
              <div
                key={solution.id}
                onClick={() => setSelectedSolution(solution)}
                className="group bg-white/5 backdrop-blur-xs hover:bg-white/[0.08] border border-white/10 hover:border-[#8CC63F]/40 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
              >
                <div>
                  {/* Styling headers */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-w2e-green/5 border border-w2e-green/10 rounded-lg group-hover:bg-[#1F6B1B]/20 group-hover:border-[#8CC63F]/40 text-white font-mono transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#8CC63F] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="font-mono text-[9px] tracking-wide text-gray-500 uppercase">
                      SYSTEM LEVEL 01
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-white mb-3 group-hover:text-w2e-lime transition-all duration-200">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light mb-6">
                    {solution.shortDesc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-w2e-lime border-t border-white/5 pt-4 group-hover:text-white transition-colors">
                  ENGINEERING DIAGRAM
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Spec Drawer - Modal overlay */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop slide blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xs cursor-pointer"
            />

            {/* Panel box */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full max-w-xl h-full bg-[#0a0c0a] border-l border-w2e-green/30 p-8 sm:p-10 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              {/* Close Button & Title */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-w2e-green/15 border border-w2e-green/30 rounded-lg text-w2e-lime text-lg">
                      {(() => {
                        const Icon = IconMap[selectedSolution.iconName] || Settings;
                        return <Icon className="w-5 h-5" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white">
                        {selectedSolution.title}
                      </h3>
                      <p className="font-mono text-[9px] text-[#8CC63F]">W2E SPECIFICATION ARCHITECTURE</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSolution(null)}
                    className="p-2 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-md transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body Details */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-mono text-gray-300 uppercase tracking-widest mb-2">System Overview</h4>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                      {selectedSolution.detailedDesc}
                    </p>
                  </div>

                  {/* System Parameters (Mini indicators grid) */}
                  <div>
                    <h4 className="text-xs font-mono text-gray-300 uppercase tracking-widest mb-3">Thermodynamic & Site Parameters</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {selectedSolution.systemParameters.map((param, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/5 p-3 rounded-lg">
                          <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">{param.label}</span>
                          <span className="block text-xs font-semibold text-w2e-lime-400">{param.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h4 className="text-xs font-mono text-gray-300 uppercase tracking-widest mb-3">System Specifications</h4>
                    <ul className="space-y-2">
                      {selectedSolution.technicalSpecs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-400 font-mono">
                          <Target className="w-3.5 h-3.5 text-w2e-lime shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Real-world benefits */}
                  <div>
                    <h4 className="text-xs font-mono text-gray-300 uppercase tracking-widest mb-3">ESG & Commercial Merits</h4>
                    <ul className="space-y-2">
                      {selectedSolution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Drawer Footer CTA */}
              <div className="pt-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={() => {
                    setSelectedSolution(null);
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-linear-to-r from-w2e-green to-w2e-lime shrink-0 text-xs font-bold text-white rounded-lg hover:brightness-110 active:scale-95 transition-all text-center"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  REQUEST FEASIBILITY BLUEPRINT
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
