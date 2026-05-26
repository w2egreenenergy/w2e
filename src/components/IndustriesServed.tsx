/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import {
  Sprout,
  Tractor,
  Factory,
  UtensilsCrossed,
  Trash2,
  Building,
  Egg,
  FlaskConical,
  Hotel,
  ChevronRight,
  Sparkles
} from "lucide-react";

interface Industry {
  id: string;
  title: string;
  description: string;
  potentialFeedstock: string;
  byproductValue: string;
  icon: any;
}

export default function IndustriesServed() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const industries: Industry[] = [
    {
      id: "agri",
      title: "Agriculture Co-ops",
      description: "Aggregating regional wheat, paddy straw, and cotton stalks directly from farmers to stop seasonal stubble flares and clear air basins.",
      potentialFeedstock: "Paddy Straw, Wheat Stubble, Crop Residues",
      byproductValue: "Free bio-fertilizer supply back to members",
      icon: Sprout
    },
    {
      id: "dairy",
      title: "Industrial Dairy Farms",
      description: "Processing solid cattle dung and dairy wash slurries into pressurized fuel cascades, purifying dirty cow dung lagoons.",
      potentialFeedstock: "High-moisture cattle manure & washwater",
      byproductValue: "Heat recovery networks + concentrated slurry sales",
      icon: Tractor
    },
    {
      id: "sugar",
      title: "Sugar Mills & Distilleries",
      description: "Exploiting sugar press mud filter cakes and spent molasses washes to create dedicated onsite high-density grid generators.",
      potentialFeedstock: "Bagasse, Press Mud/Filter Cake, Spent Wash",
      byproductValue: "Power turbine cogeneration grid sync",
      icon: Factory
    },
    {
      id: "food",
      title: "Food Processing Units",
      description: "Recycling rich organic chemical waste and starch residues from commercial chip, canning, and beverage manufacturing lines.",
      potentialFeedstock: "High-COD effluent starches, pulps, fruit waste",
      byproductValue: "Clean steam returned directly to cooking lines",
      icon: UtensilsCrossed
    },
    {
      id: "municipal",
      title: "Municipal Administrations",
      description: "Sorting organic domestic solid wastes from city landfills to alleviate underground methane pressure fires.",
      potentialFeedstock: "Segregated organic fraction of municipal solid waste (OFMSW)",
      byproductValue: "Bio-CNG supplied directly to metropolitan bus fleets",
      icon: Trash2
    },
    {
      id: "smart_cities",
      title: "Futuristic Smart Cities",
      description: "Partnering with urban housing complexes to install local compact biorefining engines, eliminating massive garbage routes.",
      potentialFeedstock: "Lawn trimmings, household food scraps, sewage sludge",
      byproductValue: "Urban landscape power, green fuel gas",
      icon: Building
    },
    {
      id: "poultry",
      title: "Poultry & Poultry Farms",
      description: "Reducing dangerous ammonia odor levels by digesting nitrogen-dense chicken manure into nutrient-stabilized compost.",
      potentialFeedstock: "Nitrogenous chicken litter & layer drop wastes",
      byproductValue: "Odourless concentrated crystalline solid NPK fertilizer",
      icon: Egg
    },
    {
      id: "industrial",
      title: "Industrial Waste Yards",
      description: "Treating complex biological chemical waste streams from starch mills, starch processing plants, and food distributors.",
      potentialFeedstock: "Biological sludges, enzymatic sludge residues",
      byproductValue: "Local process boiler heat, thermal efficiency reduction",
      icon: FlaskConical
    },
    {
      id: "hospitality",
      title: "Hospitality Industry",
      description: "Converting high-moisture left-over kitchen buffet organic streams from luxury resort chains into clear baseline kitchen burner gas.",
      potentialFeedstock: "Kitchen food scraps, fat-trap grease oils",
      byproductValue: "Purified direct LPG burners displacement",
      icon: Hotel
    }
  ];

  return (
    <section id="industries" className="relative py-24 bg-[#0a0c0a] overflow-hidden">
      {/* Decorative vector grid shapes */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-w2e-green/2 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-w2e-lime tracking-widest uppercase block mb-3">
              TARGET FEEDSTOCK CAPABILITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Industries We Serve
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            W2E Bioenergy tailors digestive and mechanical parameters to optimize gas outputs from a highly diverse portfolio of industrial and agricultural substrates.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={ind.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="bg-white/5 backdrop-blur-xs border border-white/10 hover:border-[#8CC63F]/40 hover:bg-white/[0.08] p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group h-72"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-w2e-green/5 group-hover:bg-w2e-lime/15 text-[#8CC63F] rounded-lg border border-w2e-green/10 transition-colors">
                      <Icon className="w-5 h-5 text-w2e-lime" />
                    </div>
                    <span className="text-[9px] font-mono text-gray-500 uppercase">SEC_ID: IND-0{idx + 1}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-white mb-2 group-hover:text-w2e-lime transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light mb-4 text-ellipsis line-clamp-3">
                    {ind.description}
                  </p>
                </div>

                {/* Technical data foldout drawer shown on hover/active state */}
                <div className="border-t border-white/5 pt-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-gray-500">FEEDSTOCK:</span>
                      <span className="text-w2e-lime font-bold text-right truncate max-w-[150px]">{ind.potentialFeedstock}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-gray-500">BY-PRODUCT VALUE:</span>
                      <span className="text-white font-bold text-right truncate max-w-[150px]">{ind.byproductValue}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
