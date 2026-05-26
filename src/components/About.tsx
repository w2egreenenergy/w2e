/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Scale, Factory, Milestone, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const pillars = [
    {
      icon: Factory,
      title: "Sustainable Engineering",
      desc: "Our high-precision Continuous Stirred Tank Reactors (CSTR) utilize chemical-resistant metallurgy designed for continuous 30+ year lifespans.",
      tag: "INFRASTRUCTURE"
    },
    {
      icon: Scale,
      title: "Circular Economy",
      desc: "By transforming rice straw, sugar bagasses, and farm waste into fuel and organic fertilizers, we replace imported petroleum and synthetic chemical urea.",
      tag: "CIRCULAR MODEL"
    },
    {
      icon: Users,
      title: "SATAT Network Integration",
      desc: "We align are complete EPC layouts with India's SATAT scheme guidelines, facilitating long-term green offtake contracts with sovereign gas agencies.",
      tag: "COMPLIANCE & GROWTH"
    },
    {
      icon: Milestone,
      title: "ESG Stewardship Profile",
      desc: "Every operating cell actively offsets black carbon soot and carbon dioxide emissions while ensuring clean, high-nutrient irrigation returns.",
      tag: "GLOBAL RATING"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0a0c0a] overflow-hidden">
      {/* Decorative Grid Line Highlights */}
      <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-w2e-green/20 to-transparent" />
      <div className="absolute bottom-1/4 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-w2e-lime/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Bento Column Left (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-w2e-lime tracking-widest uppercase block">
              CORPORATE ECOSYSTEM PROFILE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Powering Clean Carbon Infrastructure
            </h2>
            <p className="text-gray-300 font-light text-base leading-relaxed">
              W2E Bioenergy is a leading innovator of high-yield commercial Bio-CNG, biogas recovery systems, and bio-coal engineering. We partner with agricultural cooperatives, agro-industries, and municipal administrations to erect state-of-the-art waste mitigation facilities.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We replace standard pollutant practices—like field burner stubble fires and landfill pileups—with automated chemical scrubbers networks, biological methane fermentation units, and advanced organic liquid fertilizers factories.
            </p>

            <div className="pt-4 border-t border-white/5 space-y-4">
              <div className="flex items-start gap-3 bg-white/[0.02] border border-w2e-green/10 p-4 rounded-lg">
                <ShieldAlert className="w-5 h-5 text-w2e-lime shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Our Master Carbon Mandate:</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    By redirecting 100% of collected agricultural residues, we actively reduce dangerous smog levels throughout Northern and Western India, converting a global health issue into regional economic power.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Pillars Grid Right (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-w2e-green/35 p-6 rounded-xl transition-all duration-300 relative group"
                >
                  {/* Subtle index line indicator */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-linear-to-r from-w2e-green to-w2e-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-wider text-w2e-lime uppercase bg-w2e-green/10 px-2 py-0.5 rounded-full border border-w2e-green/20">
                      {pillar.tag}
                    </span>
                    <span className="text-xs font-mono text-gray-500 font-medium">
                      PHASE 0{index + 1}
                    </span>
                  </div>

                  <div className="p-3 bg-w2e-green/5 rounded-lg border border-w2e-green/20 text-white w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#8CC63F]" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-w2e-lime transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
