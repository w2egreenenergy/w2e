/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { SHOWCASE_PROJECTS } from "../data/projects";
import { ShowcaseProject } from "../types";
import { MapPin, Zap, Leaf, Scale, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import droneImage from "../assets/images/hero_biogas_infrastructure_1779788974859.png";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filters = ["ALL", "Operational", "Commissioning", "Under Construction"];

  const filteredProjects = SHOWCASE_PROJECTS.filter((proj) => {
    if (activeFilter === "ALL") return true;
    return proj.status.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="projects" className="relative py-24 bg-[#0a0c0a] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header and Toggle Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-mono text-w2e-lime tracking-widest uppercase block mb-3">
              ESTABLISHED CAPITAL INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Project Showcase Portfolio
            </h2>
            <div className="h-1 w-16 bg-w2e-lime mt-4 mb-2 rounded-full" />
            <p className="text-gray-400 text-sm max-w-xl mt-1">
              Explore W2E's massive multi-vessel bio-refineries. Each site stands as a fully operational testament to decentralized sovereign clean-fuel production.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex flex-wrap gap-2 border border-white/10 p-1.5 bg-[#0a0c0a] rounded-lg h-fit max-w-fit">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-mono font-bold tracking-wider rounded-md transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-w2e-green text-white shadow-md shadow-w2e-green/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white/5 backdrop-blur-xs border border-white/10 hover:border-[#8CC63F]/40 rounded-2xl overflow-hidden transition-all duration-300 relative group flex flex-col justify-between"
            >
              
              {/* Drone visual mockup container */}
              <div className="relative h-64 overflow-hidden border-b border-white/5">
                <img
                  src={droneImage} // Re-using our high-quality drone output as thumbnail with creative filter presets
                  alt={proj.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 filter brightness-90 saturate-95"
                  referrerPolicy="no-referrer"
                />
                
                {/* Status Indicator Overlays */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase rounded-md flex items-center gap-1.5 text-white ${
                    proj.status === "Operational"
                      ? "bg-emerald-500/80 backdrop-blur-xs border border-emerald-400/30"
                      : proj.status === "Commissioning"
                      ? "bg-amber-600/80 backdrop-blur-xs border border-amber-500/30"
                      : "bg-blue-600/80 backdrop-blur-xs border border-blue-500/30"
                  }`}>
                    {proj.status === "Operational" ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <AlertTriangle className="w-3.5 h-3.5" />
                    )}
                    {proj.status}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-xs border border-white/10 px-2.5 py-1 rounded-md text-[9px] font-mono tracking-wider text-w2e-lime font-bold">
                  SEC-ID: PRJ-{proj.id.split("_")[1].toUpperCase()}
                </div>

                {/* Cover gradient shading */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0c0a] to-transparent pointer-events-none" />
                
                {/* Location text badge inside container */}
                <div className="absolute bottom-4 left-6 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#8CC63F]" />
                  <span className="text-xs font-mono font-medium text-white">{proj.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white group-hover:text-[#8CC63F] transition-colors mb-2">
                    {proj.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-mono text-gray-500">FEEDSTOCK INPUT:</span>
                    <span className="text-[10px] font-mono font-semibold text-[#8CC63F] uppercase tracking-wider">{proj.feedstock}</span>
                  </div>
                </div>

                {/* Specifications List */}
                <div className="grid grid-cols-2 gap-4 bg-black/30 border border-white/5 p-4 rounded-xl font-mono text-[10px]">
                  <div>
                    <span className="block text-gray-500 mb-0.5 uppercase">CAPACITY CONFIG:</span>
                    <span className="block text-white font-bold text-xs">{proj.capacity}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-0.5 uppercase">ENERGY YIELD:</span>
                    <span className="block text-white font-bold text-xs">{proj.energyOutput}</span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-gray-500 flex items-center gap-1">
                      <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                      UNFCCC CARBON REDUCTION:
                    </span>
                    <span className="text-w2e-lime font-black text-xs">{proj.co2Savings}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-w2e-lime" />
                  <span>Sovereign offtake networks fully active & connected to direct cascades grid.</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
