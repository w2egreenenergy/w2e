/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Leaf, Award, Recycle, ShieldAlert, Thermometer, Database } from "lucide-react";
import { motion } from "motion/react";

export default function TrustMetrics() {
  // Live ticking counters starting from realistic baseline values
  const [metrics, setMetrics] = useState({
    wasteProcessed: 284592.4, // Tons
    co2Savings: 512268.1, // Tons
    fuelGenerated: 11383796.0, // kg (Bio-CNG)
    energyEfficiency: 94.8, // Percentage (stable)
    fertilizerProduced: 1422960.5, // Liters / kg
    activeReactors: 14 // Static count
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        // Increment waste by ~15 kg per sec (0.015 Tons)
        wasteProcessed: prev.wasteProcessed + 0.015,
        // CO2 savings proportional offset (~2.3x index)
        co2Savings: prev.co2Savings + 0.034,
        // Fuel generation ~1.1 kg per sec
        fuelGenerated: prev.fuelGenerated + 1.1,
        // Thermal stability adjustments
        energyEfficiency: Number((94.8 + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        // Digested organic fertilizer extraction yields
        fertilizerProduced: prev.fertilizerProduced + 0.75,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const statsList = [
    {
      id: "waste",
      label: "Tons Organic Waste Purified",
      value: metrics.wasteProcessed.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      suffix: " TONS",
      prefix: "",
      icon: Recycle,
      color: "text-[#3DDC84]",
      bgBorder: "border-[#3DDC84]/15",
      glowBg: "rgba(61, 220, 132, 0.08)",
      desc: "Total biomass digested and diverted from landfills and open stubble field burning."
    },
    {
      id: "co2",
      label: "CO₂ Equivalent Offset",
      value: metrics.co2Savings.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      suffix: " METRIC TONS",
      prefix: "",
      icon: Leaf,
      color: "text-[#00E5FF]",
      bgBorder: "border-[#00E5FF]/20",
      glowBg: "rgba(0, 229, 255, 0.08)",
      desc: "Direct reduction in methane greenhouse gases calculated via UNFCC guidelines."
    },
    {
      id: "fuel",
      label: "Renewable Bio-CNG Recovered",
      value: Math.floor(metrics.fuelGenerated).toLocaleString("en-US"),
      suffix: " KG",
      prefix: "",
      icon: Award,
      color: "text-[#00C853]",
      bgBorder: "border-[#00C853]/20",
      glowBg: "rgba(0, 200, 83, 0.08)",
      desc: "Ultra-pure compressed biomethane supplied into transit trucks and local stations."
    },
    {
      id: "eff",
      label: "Energy Recovery Efficiency",
      value: metrics.energyEfficiency,
      suffix: "% RECOVERY",
      prefix: "",
      icon: Thermometer,
      color: "text-[#00E5FF]",
      bgBorder: "border-[#00E5FF]/15",
      glowBg: "rgba(0, 229, 255, 0.08)",
      desc: "Net thermal process recovery, optimizing circular heat return networks."
    },
    {
      id: "fertilizer",
      label: "Organic Bio-Fertilizer Output",
      value: Math.floor(metrics.fertilizerProduced).toLocaleString("en-US"),
      suffix: " LITERS",
      prefix: "",
      icon: ShieldAlert, // Representing defense/nurture of soil
      color: "text-[#8B5E34]",
      bgBorder: "border-[#8B5E34]/20",
      glowBg: "rgba(139, 94, 52, 0.08)",
      desc: "Pathogen-free biological liquid slurry optimized to regenerate local topsoils."
    },
    {
      id: "reactors",
      label: "Active Commercial Digesters",
      value: metrics.activeReactors,
      suffix: " COMM. VESSElS",
      prefix: "",
      icon: Database,
      color: "text-[#3DDC84]",
      bgBorder: "border-[#3DDC84]/15",
      glowBg: "rgba(61, 220, 132, 0.08)",
      desc: "Large-scale continuously stirred industrial concrete tanks synchronized to main control."
    }
  ];

  return (
    <section id="metrics" className="relative py-20 bg-[#121817]/60 backdrop-blur-xl border-y border-[#00C853]/10 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-[#00C853]/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#3DDC84]/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-[#3DDC84] tracking-widest uppercase block mb-2 font-bold">
              ESC AUDITED IMPACT LEDGER
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Real-Time Ecological Statistics
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mt-2">
              Our continuous telemetry syncs fuel, solid digestate yields, and structural climate benefits directly from W2E's online circular power networks.
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-[#00C853]/10 border border-[#3DDC84]/30 px-3 py-1.5 rounded-full font-mono text-[10px] text-[#3DDC84] shadow-[0_0_12px_rgba(0,200,83,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#00C853] animate-ping inline-block" />
            LIVE TELEMETRY ACTIVE
          </div>
        </div>
 
        {/* Metrics Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsList.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="ecotech-glass ecotech-glass-hover p-6 rounded-2xl relative group overflow-hidden"
                style={{
                  boxShadow: `inset 0 0 16px ${stat.glowBg}`
                }}
              >
                {/* Micro overlay flare */}
                <div className="absolute -right-2 -bottom-2 w-16 h-16 rounded-full bg-white/2 opacity-2 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 text-gray-300">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#3DDC84]/50">
                    W2E-SEC_SYS_0{stat.id === "waste" ? 1 : stat.id === "co2" ? 2 : stat.id === "fuel" ? 3 : 4}
                  </span>
                </div>
 
                <div className="mb-2">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
                    {stat.label}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono font-black text-2xl sm:text-3xl text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="font-mono text-xs text-[#3DDC84]">
                      {stat.suffix}
                    </span>
                  </div>
                </div>
 
                <p className="text-[11px] text-gray-400 border-t border-white/5 pt-3 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
