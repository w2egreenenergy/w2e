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
    <section id="solutions" className="relative py-24 bg-gradient-to-b from-[#121817] to-[#0B0F0C] border-y border-white/5">
      {/* Background visual graphics */}
      <div className="absolute left-1/4 top-1/10 w-96 h-96 bg-[#00C853]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/10 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#3DDC84] tracking-widest uppercase block mb-3 font-bold">
            BIO-REFINERY SOLUTIONS SUITE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-heading">
            Advanced Circular Technologies
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-[#00C853] to-[#3DDC84] mx-auto mt-4 mb-4 rounded-full shadow-[0_0_10px_rgba(0,200,83,0.3)]" />
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
                className="group ecotech-glass p-6 rounded-2xl flex flex-col justify-between cursor-pointer relative transition-all duration-300 hover:border-[#00C853]/40 hover:shadow-[0_0_25px_rgba(0,200,83,0.12)] overflow-hidden"
              >
                <div>
                  {/* Styling headers */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#00C853]/10 border border-[#00C853]/20 rounded-lg group-hover:bg-[#00DDA2]/20 group-hover:border-[#00E5FF]/40 text-white font-mono transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#3DDC84] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="font-mono text-[9px] tracking-wide text-gray-500 uppercase">
                      SYSTEM LEVEL 01
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-white mb-3 group-hover:text-[#3DDC84] transition-all duration-200">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light mb-6">
                    {solution.shortDesc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#3DDC84] border-t border-white/5 pt-4 group-hover:text-white transition-colors">
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
              className="relative w-full max-w-xl h-full bg-[#121817]/95 backdrop-blur-2xl border-l border-[#00C853]/35 p-8 sm:p-10 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              {/* Close Button & Title */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#00C853]/15 border border-[#3DDC84]/30 rounded-lg text-[#3DDC84] text-lg shadow-[0_0_12px_rgba(0,200,83,0.15)]">
                      {(() => {
                        const Icon = IconMap[selectedSolution.iconName] || Settings;
                        return <Icon className="w-5 h-5" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white">
                        {selectedSolution.title}
                      </h3>
                      <p className="font-mono text-[9px] text-[#3DDC84]">W2E SPECIFICATION ARCHITECTURE</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSolution(null)}
                    className="p-2 text-gray-400 hover:text-white border border-white/10 hover:border-[#00C853]/30 rounded-md transition-all cursor-pointer"
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
                        <div key={i} className="bg-[#0B0F0C]/50 border border-[#00C853]/15 p-3 rounded-xl hover:border-[#3DDC84]/30 transition-colors duration-300 shadow-inner">
                          <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">{param.label}</span>
                          <span className="block text-xs font-semibold text-[#3DDC84]">{param.value}</span>
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
                          <Target className="w-3.5 h-3.5 text-[#3DDC84] shrink-0 mt-0.5" />
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
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00C853] mt-1.5 shrink-0 shadow-[0_0_6px_rgba(0,200,83,0.5)]" />
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
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#00C853] to-[#3DDC84] hover:from-[#3DDC84] hover:to-[#00C853] shrink-0 text-xs font-bold text-black rounded-lg shadow-[0_0_20px_rgba(0,200,83,0.25)] hover:scale-[1.02] active:scale-95 transition-all text-center"
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
