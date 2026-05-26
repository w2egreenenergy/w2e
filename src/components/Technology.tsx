/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ShieldCheck, Cpu, RefreshCw, Layers, BrainCircuit, Workflow } from "lucide-react";

const purificationImage = "/src/assets/images/purification_automation_tech_1779788996711.png";

export default function Technology() {
  // Mini simulated live dashboard states
  const [telemetry, setTelemetry] = useState({
    vesselTemp: 38.4,
    pressureBar: 232.4,
    methanePct: 98.15,
    h2sLevel: 0.22,
    valveState: "AUTONOMOUS",
    oxygenPct: 0.12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry((prev) => ({
        vesselTemp: Number((38.4 + (Math.random() * 0.4 - 0.2)).toFixed(2)),
        pressureBar: Number((232.4 + (Math.random() * 1.5 - 0.75)).toFixed(1)),
        methanePct: Number((98.15 + (Math.random() * 0.04 - 0.02)).toFixed(2)),
        h2sLevel: Number(Math.max(0.1, prev.h2sLevel + (Math.random() * 0.04 - 0.02)).toFixed(2)),
        valveState: prev.valveState,
        oxygenPct: Number(Math.max(0.05, prev.oxygenPct + (Math.random() * 0.02 - 0.01)).toFixed(2)),
      }));
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Cpu,
      title: "Smart Membrane Separators",
      desc: "Chemical polymeric hollow-fiber membranes recover over 99.5% of biological methane, while rejecting carbon dioxide. Requires active compression power of just 0.22 kW/Nm³."
    },
    {
      icon: BrainCircuit,
      title: "AI-Enabled Biological Diagnostics",
      desc: "Our neural network models continuously estimate digestate gas yield ratios, detecting early biological 'souring' trends before reactors suffer acidic ph drops."
    },
    {
      icon: Layers,
      title: "Two-Stage Desulfurization",
      desc: "Combines high-efficiency biochemical desulfurization (reducing H2S down to 20ppm) with secondary solid copper oxide scrubbers, generating ultra-pure gas streams."
    },
    {
      icon: Workflow,
      title: "Closed-Loop Thermal Integration",
      desc: "Thermal jackets recover combustion waste heat from cogeneration units, piping caloric water directly back to maintain optimal mesophilic digester temperatures."
    }
  ];

  return (
    <section id="technology" className="relative py-24 bg-[#0a0c0a] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Column structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-w2e-lime tracking-widest uppercase block animate-pulse">
              SYSTEM ENGINEERING CONSOLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Futuristic Industrial Automation
            </h2>
            <p className="text-gray-300 font-light text-base leading-relaxed">
              W2E Bioenergy incorporates elite SCADA controls and automated safety mechanics, driving peak methane recovery yields with minimal environmental or material slippages.
            </p>
          </div>
          <div className="lg:col-span-6 border-l-2 border-w2e-lime/20 pl-6">
            <p className="text-sm text-gray-400 font-mono leading-relaxed">
              "We leverage advanced mathematical gas transport modeling and continuous sensor reporting to maintain active thermal and biological balances. W2E delivers automated industrial scalability with the responsiveness of modern digital software."
            </p>
            <span className="block text-xs font-bold text-white mt-4 font-heading uppercase tracking-wider">
              — ELENA ROSTOV, TECHNICAL OPERATIONS DIRECTOR
            </span>
          </div>
        </div>

        {/* Dashboard and Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Futuristic Telemetry Console Left (7 Cols) */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl shadow-black relative overflow-hidden">
            
            {/* Top Bar terminal labels */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-w2e-lime animate-ping" />
                <span className="text-xs font-mono font-medium text-white tracking-widest uppercase">
                  METHANE RECOVERY OPTIMIZATION PORT
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#8CC63F]">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                TELEMETRY REFRESH LIVE
              </div>
            </div>

            {/* Simulated Grid of sensors */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              
              <div className="bg-white/1 border border-white/5 p-4 rounded-xl">
                <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">CSTR REACTOR TEMP</span>
                <span className="block text-xl font-mono font-bold text-white mb-1">{telemetry.vesselTemp} °C</span>
                <span className="text-[9px] font-mono text-emerald-400">● Mesophilic Cycle Normal</span>
              </div>

              <div className="bg-white/1 border border-white/5 p-4 rounded-xl">
                <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">CNG COMPRESSION</span>
                <span className="block text-xl font-mono font-bold text-white mb-1">{telemetry.pressureBar} BAR</span>
                <span className="text-[9px] font-mono text-emerald-400">● Pressure Locked Safety</span>
              </div>

              <div className="bg-white/1 border border-white/5 p-4 rounded-xl">
                <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">CH4 COMPOSITION</span>
                <span className="block text-xl font-mono font-bold text-w2e-lime mb-1">{telemetry.methanePct} %</span>
                <span className="text-[9px] font-mono text-emerald-400">● Elite Grade Biofuel</span>
              </div>

              <div className="bg-white/1 border border-white/5 p-4 rounded-xl">
                <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">TOTAL H2S IMPURITY</span>
                <span className="block text-xl font-mono font-bold text-[#8CC63F] mb-1">{telemetry.h2sLevel} PPM</span>
                <span className="text-[9px] font-mono text-emerald-400">{"● < 1.0 ppm Clean Range"}</span>
              </div>

              <div className="bg-white/1 border border-white/5 p-4 rounded-xl">
                <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">PNEUMATIC VALVES</span>
                <span className="block text-xl font-mono font-bold text-emerald-400 mb-1">{telemetry.valveState}</span>
                <span className="text-[9px] font-mono text-gray-400">● Auto AI Dosing Logic</span>
              </div>

              <div className="bg-white/1 border border-white/5 p-4 rounded-xl">
                <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">OXYGEN (O2) LIQUID</span>
                <span className="block text-xl font-mono font-bold text-white mb-1">{telemetry.oxygenPct} %</span>
                <span className="text-[9px] font-mono text-[#8CC63F]">● Explosive Lock normal</span>
              </div>

            </div>

            {/* Embedded Technology Image Mockup inside terminal */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 group">
              <img
                src={purificationImage}
                alt="W2E industrial gas purification skids installation"
                className="w-full h-48 sm:h-64 object-cover filter brightness-85 contrast-110 group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-w2e-lime" />
                  <span className="text-[10px] font-mono text-white tracking-widest uppercase">
                    PLC SCADA SKID VSA_UNIT_3 SHUTDOWN SAFE
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Features description column Right (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Core Technical Features
            </h3>
            
            <div className="space-y-6">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="p-3 bg-white/2 border border-white/5 rounded-lg text-[#8CC63F] shrink-0 h-fit">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{feat.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
