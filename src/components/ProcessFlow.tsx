/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import {
  Sprout,
  Workflow,
  Sparkles,
  Flame,
  Truck,
  Droplet,
  Globe,
  ChevronRight,
  Database
} from "lucide-react";

interface Step {
  id: number;
  label: string;
  icon: any;
  title: string;
  chemicalReaction: string;
  detailedProcess: string;
  primaryOutput: string;
}

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps: Step[] = [
    {
      id: 0,
      label: "Agricultural Waste",
      icon: Sprout,
      title: "Residue Aggregation & Hydrolysis Prep",
      chemicalReaction: "Lignocellulose (Complex Polymer) → Sugar Dimers + Acetic Monomers",
      detailedProcess: "Harvested crop residue (paddy straw, bagasse, municipal organic pulp) is shred down to < 5mm and mixed with recycled water inside our automated pre-digester where soft thermal-chemical steaming triggers chemical hydrolysis.",
      primaryOutput: "Slurry suspension rich in dissolvable organic monomers and saccharides"
    },
    {
      id: 1,
      label: "Biogas Generation",
      icon: Database,
      title: "Anaerobic Co-Digestion Phase",
      chemicalReaction: "Organic Matter + Methanogenic Archaea → CH4 (55%) + CO2 (40%) + H2O/H2S",
      detailedProcess: "The hydrolyzed slurry joins specialized thermophilic bacterial strains in our giant CSTR reactors. Across 20 days, methanogens consume biological carbon molecules to secrete high-volume raw biogas streams.",
      primaryOutput: "Raw damp biogas + nutrient-dense solid digestate slurry"
    },
    {
      id: 2,
      label: "Gas Purification",
      icon: Workflow,
      title: "Catalytic Desulfurization & Scrubbing",
      chemicalReaction: "H2S + Catalyst → Solid Sulfur (S8) + H2O | CO2 separation via adsorbent beds",
      detailedProcess: "Raw biogas is chilled to -5°C to strip water vapor, then forced through copper catalysts to reduce hydrogen sulfide to sub-1.0 ppm level. Multi-tier hollow-fiber membranes then capture all remaining carbon dioxide.",
      primaryOutput: "97.8% molecular purity Methane (CH4) gas"
    },
    {
      id: 3,
      label: "Bio-CNG",
      icon: Flame,
      title: "High-Pressure Gas Compression",
      chemicalReaction: "Gas Densification: 1 bar Atmospheric Pressure → 250 bar Compacted Bio-CNG",
      detailedProcess: "The highly-refined methane goes through multi-stage industrial reciprocating gas compressors, increasing its structural density into liquid-mimicking gas suitable for commercial vehicle cylinders.",
      primaryOutput: "Transport-ready, high-calorific green compressed biomethane (Bio-CNG)"
    },
    {
      id: 4,
      label: "Energy Distribution",
      icon: Truck,
      title: "Off-Grid Industrial Transit Logistics",
      chemicalReaction: "Virtual Pipeline: Compressed bio-gas cascades deployed to gas stations",
      detailedProcess: "Bio-CNG is packed into lightweight, high-safety carbon-wrapped composite cylinder cascades and shipped using zero-carbon freight vehicles to municipal cascades, retail outlets, or industrial gas networks.",
      primaryOutput: "Decarbonized commercial fuel matching IS 15408 high standards"
    },
    {
      id: 5,
      label: "Organic Fertilizer",
      icon: Droplet,
      title: "Slurry Separation & Bio-enrichment",
      chemicalReaction: "Digestate slurry → High N-P-K Organic Carbon Fertilizer concentrates",
      detailedProcess: "The spent biological slurry is centrifugally decanted of moisture, separating solid fibers. The remaining fluid is pasteurized and fortified with trace bio-elements, creating customized liquid premium organic fertilizer.",
      primaryOutput: "Odorless FCCO-certified liquid and solid chemical-free fertilizer"
    },
    {
      id: 6,
      label: "Circular Economy",
      icon: Globe,
      title: "Perfect Carbon Loop Closure",
      chemicalReaction: "Net-Zero Balance: Agro stubble burning avoided | Zero methane slippage",
      detailedProcess: "Farmers return organic nutrients back to fields to grow new grains, generating fresh residue for next seasonal harvests. The circular loop replaces chemical farming imports and removes tons of environmental smog.",
      primaryOutput: "Regenerative localized circular economy with carbon-negative results"
    }
  ];

  // Auto autoplay cycle through steps every 5.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  return (
    <section id="process" className="relative py-24 bg-[#0a0c0a] overflow-hidden">
      {/* Decorative vertical energy laser light */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-w2e-lime/0 via-w2e-green/20 to-w2e-lime/0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono text-w2e-lime tracking-widest uppercase block mb-3">
            TECHNICAL PROCESS TIMELINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Waste to Energy Transformation
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-w2e-green to-w2e-lime mt-4" />
        </div>

        {/* Horizontal Navigation Trail of Steps */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-none flex items-center justify-between min-w-full gap-2 border-b border-white/5">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(step.id);
                  setIsAutoPlaying(false);
                }}
                className={`flex flex-col items-center text-center px-4 py-3 border-b-2 transition-all duration-300 min-w-[130px] shrink-0 cursor-pointer ${
                  isActive
                    ? "border-w2e-lime text-w2e-lime bg-w2e-green/10"
                    : "border-transparent text-gray-500 hover:text-gray-300"
                }`}
              >
                <div className={`p-2 rounded-lg border mb-2 transition-all ${
                  isActive ? "bg-w2e-lime/10 border-w2e-lime/30 text-w2e-lime scale-110" : "bg-white/2 border-white/5 text-gray-400"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold mb-0.5">
                  PHASE 0{step.id + 1}
                </span>
                <span className="text-xs font-semibold whitespace-nowrap block">
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Simulated Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/5 backdrop-blur-md border border-white/10 p-8 sm:p-12 rounded-2xl relative glow-green overflow-hidden">
          
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-radial from-w2e-green/5 to-transparent pointer-events-none" />

          {/* Left Column: Flow Diagrams & Dynamic Stats (5 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-w2e-lime mb-2">
                <Sparkles className="w-4 h-4 animate-spin text-w2e-lime" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">REACTION CHAMBER ONLINE</span>
              </div>
              <span className="text-4xl font-heading font-extrabold text-white">
                0{activeStep + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#8CC63F] mt-1 mb-6">
                {steps[activeStep].label}
              </h3>
            </div>

            {/* Simulated Reactor Dashboard UI */}
            <div className="space-y-4 bg-black/40 border border-white/5 p-5 rounded-xl font-mono text-[10px] text-gray-400">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-500">DYNAMIC FLOW INDEX:</span>
                <span className="text-white text-xs font-bold">W2E-PF-0{activeStep + 1}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-500">OPERATIONAL STATE:</span>
                <span className="text-emerald-400 font-bold animate-pulse">OPTIMIZED (CSTR-1)</span>
              </div>
              <div>
                <span className="block text-gray-500 mb-1 uppercase text-[9px] tracking-wide">Chemical Stoichiometric Formula:</span>
                <span className="block text-[#8CC63F] text-[11px] font-semibold break-words leading-relaxed">
                  {steps[activeStep].chemicalReaction}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Deliverables (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-w2e-lime/10 border border-w2e-lime/20 text-[10px] font-mono text-w2e-lime uppercase rounded-md">
                Process Specifications
              </span>
              <h4 className="text-xl font-heading font-bold text-white">
                {steps[activeStep].title}
              </h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                {steps[activeStep].detailedProcess}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                Primary Biomass Output & Environmental Product:
              </span>
              <div className="inline-flex items-center gap-2 bg-w2e-green/10 border border-w2e-green/20 px-4 py-2 rounded-lg text-xs font-mono text-[#8CC63F] font-bold">
                <ChevronRight className="w-4 h-4" />
                {steps[activeStep].primaryOutput}
              </div>
            </div>
          </div>

        </div>

        {/* Autoplay controllers */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-1.5 border rounded-md text-xs font-mono tracking-wider cursor-pointer transition-colors ${
              isAutoPlaying
                ? "border-w2e-lime/50 text-w2e-lime bg-w2e-lime/5 hover:bg-w2e-lime/10"
                : "border-white/10 text-gray-400 hover:text-white"
            }`}
          >
            {isAutoPlaying ? "▲ PAUSE PROCESS ADVANCEMENT" : "▶ RESUME PROCESS ADVANCEMENT"}
          </button>
        </div>

      </div>
    </section>
  );
}
