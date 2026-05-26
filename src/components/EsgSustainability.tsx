/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe, Leaf, Target, Wind, Sparkles } from "lucide-react";

export default function EsgSustainability() {
  const sdgGoals = [
    {
      number: "7",
      title: "Affordable & Clean Energy",
      desc: "Displacing fossil fuels through localized, biological off-grid gas production systems offering decentralized power resiliency.",
      color: "border-amber-500/20 text-amber-400 bg-amber-500/5"
    },
    {
      number: "11",
      title: "Sustainable Smart Cities",
      desc: "Eliminating complex waste transportation and landfill carbon leak fires by digesting urban organic refuse right at town boundaries.",
      color: "border-orange-500/20 text-orange-400 bg-orange-500/5"
    },
    {
      number: "12",
      title: "Responsible Consumption",
      desc: "Closing agricultural production loops by shifting raw solid digestate byproduct slurry straight back into organic cropping fields.",
      color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5"
    },
    {
      number: "13",
      title: "Sovereign Climate Action",
      desc: "Mitigating massive stubble burn toxic emissions, converting bio-methane before it evaporates naturally into the atmosphere.",
      color: "border-teal-500/20 text-teal-400 bg-teal-500/5"
    }
  ];

  return (
    <section id="esg" className="relative py-24 bg-[#0a0c0a] border-y border-white/5 overflow-hidden">
      {/* Absolute decorative glowing radial earth planet placeholder */}
      <div className="absolute -right-48 -bottom-48 w-96 h-96 rounded-full bg-w2e-green/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Alignment Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* ESG Statement Column Left (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-w2e-lime tracking-widest uppercase block mb-1">
              CORPORATE DECARBONIZATION LEDGER
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              A True Climate Negative Enterprise
            </h2>
            <p className="text-gray-300 font-light text-base leading-relaxed">
              We do not just purchase carbon offsets—W2E Bioenergy’s operations are inherently climate-negative. Our entire business model centers on capturing and sealing carbon components before they degrade environment standards.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-w2e-green/10 border border-w2e-green/20 rounded-md text-[#8CC63F]">
                  <Leaf className="w-4 h-4 text-w2e-lime" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Carbon-Negative Fuel Cycles</h4>
                  <p className="text-xs text-gray-400">Yielding a net carbon intensity score far below standard grid green electricity options.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-w2e-green/10 border border-w2e-green/20 rounded-md text-[#8CC63F]">
                  <Globe className="w-4 h-4 text-w2e-lime" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">100% Biodegradable Integrity</h4>
                  <p className="text-xs text-gray-400">Zero synthetic chemical substances used or generated during our refining operations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SDG Interactive Grid Right (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">
                UNITED NATIONS SDG TARGET COMPLIANCE ALIGNMENT
              </span>
              <Sparkles className="w-3.5 h-3.5 text-w2e-lime animate-spin" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sdgGoals.map((goal, i) => (
                <div
                  key={i}
                  className={`border border-white/10 p-6 rounded-2xl relative group overflow-hidden transition-all duration-300 bg-white/5 backdrop-blur-xs hover:bg-white/[0.08] hover:border-w2e-lime/40 ${goal.color}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-heading font-black opacity-30 select-none">
                      SDG {goal.number}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-gray-500">AUDITED_METRIC</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {goal.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    {goal.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
