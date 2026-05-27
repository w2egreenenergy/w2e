/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import {
  Calculator,
  Flame,
  Award,
  TrendingUp,
  Coins,
  Leaf,
  Info,
  Scale,
  Sparkles,
  DollarSign
} from "lucide-react";

interface FeedstockYield {
  name: string;
  cngYield: number; // kg Bio-CNG per ton
  fertilizerYield: number; // kg per ton
  densityFactor: number;
}

const FEEDSTOCK_MAP: { [key: string]: FeedstockYield } = {
  PaddyStraw: { name: "Agricultural Rice Paddy Straw", cngYield: 135, fertilizerYield: 380, densityFactor: 1.1 },
  SugarPressMud: { name: "Sugar Mill Press Mud (Filter Cake)", cngYield: 105, fertilizerYield: 450, densityFactor: 1.3 },
  MunicipalWetWaste: { name: "Organic Fragment Municipal Waste (OFMSW)", cngYield: 82, fertilizerYield: 280, densityFactor: 1.0 },
  AnimalCattleManure: { name: "Concentrated Dairy Animal Slurry", cngYield: 54, fertilizerYield: 320, densityFactor: 0.8 },
  DistillerySpendWash: { name: "Agro Food Industrial Effluent Solids", cngYield: 115, fertilizerYield: 420, densityFactor: 1.4 },
};

export default function RoiCalculator() {
  const [feedstockType, setFeedstockType] = useState<string>("PaddyStraw");
  const [wasteQuantity, setWasteQuantity] = useState<number>(100); // tons per day
  const [landAvailable, setLandAvailable] = useState<number>(5.5); // acres
  const [automationLevel, setAutomationLevel] = useState<"Standard" | "Smart Enterprise" | "Autonomous AI">("Smart Enterprise");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const [outputs, setOutputs] = useState({
    bioCngProd: 0,
    fertilizerProd: 0,
    co2Savings: 0,
    annualRevenue: 0,
    estimatedCapex: 0,
    roiTimelineYears: 0,
  });

  useEffect(() => {
    const selectedYield = FEEDSTOCK_MAP[feedstockType] || FEEDSTOCK_MAP.PaddyStraw;
    
    // Core engineering calculations
    const dailyBioCngKg = wasteQuantity * selectedYield.cngYield;
    const dailyFertilizerKg = wasteQuantity * selectedYield.fertilizerYield;
    
    // Annualized performance totals (assuming 345 operating days per year with scheduled shutdowns)
    const operationalDays = 345;
    const annualBioCngKg = dailyBioCngKg * operationalDays;
    
    // CO2 offset index (approx 2.45 kg savings per kg CNG + avoided direct stubble burn variables)
    const annualCo2SavingsTons = (annualBioCngKg * 2.45) / 1000 + (feedstockType === "PaddyStraw" ? wasteQuantity * 1.8 * operationalDays : 0);
    
    // Financial math
    // 1 kg Bio-CNG average price under SATAT is approx 82 INR (~$1.00 USD)
    // 1 kg bio-fertilizer average wholesale is approx 3.5 INR (~$0.04 USD)
    const cngUnitPrice = currency === "INR" ? 82 : 1.0;
    const fertUnitPrice = currency === "INR" ? 3.5 : 0.04;
    
    const rawCngRevenue = annualBioCngKg * cngUnitPrice;
    const rawFertRevenue = (dailyFertilizerKg * operationalDays) * fertUnitPrice;
    const annualGains = rawCngRevenue + rawFertRevenue;

    // CAPEX variables: standard biorefinery costs ~ 4.2 Million INR per ton input capacity (highly scaled)
    // AI level increases CAPEX slightly but optimizes OPEX to boost overall ROI
    const automationMultiplier = automationLevel === "Standard" ? 0.95 : automationLevel === "Smart Enterprise" ? 1.05 : 1.15;
    const totalCapex = wasteQuantity * 4.4 * 1000000 * automationMultiplier; // in INR
    const finalCapex = currency === "INR" ? totalCapex : totalCapex / 83; // converted to USD if selection made

    // Operational expenses approx 48% of gross revenue
    const netAnnualSurplus = annualGains * (automationLevel === "Autonomous AI" ? 0.58 : automationLevel === "Smart Enterprise" ? 0.52 : 0.45);
    const roiTimeline = Math.min(10, Math.max(2.5, finalCapex / netAnnualSurplus));

    setOutputs({
      bioCngProd: Math.round(dailyBioCngKg),
      fertilizerProd: Math.round(dailyFertilizerKg),
      co2Savings: Math.round(annualCo2SavingsTons),
      annualRevenue: Math.round(annualGains),
      estimatedCapex: Math.round(finalCapex),
      roiTimelineYears: Number(roiTimeline.toFixed(1)),
    });

  }, [feedstockType, wasteQuantity, landAvailable, automationLevel, currency]);

  // Format monetary figures professionally
  const formatMoney = (val: number) => {
    if (currency === "INR") {
      if (val >= 10000000) {
        return `₹ ${(val / 10000000).toFixed(2)} Crores`;
      }
      return `₹ ${(val / 100000).toFixed(2)} Lacs`;
    } else {
      if (val >= 1000000) {
        return `$ ${(val / 1000000).toFixed(2)} M`;
      }
      return `$ ${val.toLocaleString()}`;
    }
  };

  return (
    <section id="calculator" className="relative py-24 bg-gradient-to-b from-[#0B0F0C] to-[#121817] overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-[#00C853]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#3DDC84] tracking-widest uppercase block mb-3 font-bold">
            FEASIBILITY SIMULATION ENGINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Bioenergy Plant ROI Calculator
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#00C853] via-[#3DDC84] to-[#00E5FF] mx-auto mt-4 mb-4 rounded-full shadow-[0_0_10px_rgba(0,200,83,0.3)]" />
          <p className="text-sm text-gray-400">
            Estimate direct biological recovery capacities, annual SATAT earnings, and capital payback periods by custom-modelling site variables instantly.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => setCurrency("INR")}
            className={`px-3.5 py-1.5 text-[10px] font-mono tracking-wider font-extrabold rounded-md transition-all cursor-pointer ${
              currency === "INR" ? "bg-[#3DDC84] text-black shadow-[0_0_12px_rgba(61,220,132,0.3)]" : "bg-[#121817] text-gray-400 hover:text-white border border-white/5"
            }`}
          >
            INR (₹)
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className={`px-3.5 py-1.5 text-[10px] font-mono tracking-wider font-extrabold rounded-md transition-all cursor-pointer ${
              currency === "USD" ? "bg-[#3DDC84] text-black shadow-[0_0_12px_rgba(61,220,132,0.3)]" : "bg-[#121817] text-gray-400 hover:text-white border border-white/5"
            }`}
          >
            USD ($)
          </button>
        </div>

        {/* Calculator Outer Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ecotech-glass border border-[#00C853]/20 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-[#3DDC84]/40 transition-all duration-500 glow-green">
          
          {/* LEFT: Inputs Panel (5 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 border-r border-white/10 space-y-8 bg-[#121817]/40">
            <div className="flex items-center gap-2 pb-4 border-b border-white/10 font-heading">
              <Calculator className="w-5 h-5 text-[#3DDC84]" />
              <h3 className="font-heading font-extrabold text-base text-white tracking-widest uppercase">
                SITE LOGISTICS PARAMETERS
              </h3>
            </div>

            {/* Field 1: Feedstock Selection */}
            <div>
              <label className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-3">
                Feedstock Substrate Profile
              </label>
              <select
                value={feedstockType}
                onChange={(e) => setFeedstockType(e.target.value)}
                className="w-full bg-[#0B0F0C] border border-[#00C853]/20 hover:border-[#3DDC84]/60 focus:border-[#3DDC84] rounded-xl px-4 py-3.5 text-xs text-white focus:outline-hidden transition-all shadow-inner"
              >
                {Object.keys(FEEDSTOCK_MAP).map((key) => (
                  <option key={key} value={key} className="bg-[#0B0F0C]">
                    {FEEDSTOCK_MAP[key].name} (yields {FEEDSTOCK_MAP[key].cngYield} kg/ton)
                  </option>
                ))}
              </select>
            </div>

            {/* Field 2: Daily Waste Quantity Slider */}
            <div>
              <div className="flex justify-between items-center mb-3 font-mono text-xs">
                <span className="text-gray-400 uppercase tracking-widest font-bold">Daily waste quantity</span>
                <span className="text-[#3DDC84] font-mono font-bold text-sm bg-[#00C853]/10 px-2.5 py-1 rounded-lg border border-[#00C853]/30 shadow-[0_0_10px_rgba(0,200,83,0.1)]">
                  {wasteQuantity} TONS / DAY
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={wasteQuantity}
                onChange={(e) => setWasteQuantity(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 accent-[#3DDC84] rounded-md cursor-pointer"
              />
              <span className="text-[10px] text-gray-500 font-mono flex justify-between mt-1">
                <span>10 Tons (Pilot)</span>
                <span>500 Tons (Massive Grid)</span>
              </span>
            </div>

            {/* Field 3: Land Availability Slider */}
            <div>
              <div className="flex justify-between items-center mb-3 font-mono text-xs">
                <span className="text-gray-400 uppercase tracking-widest font-bold">Land Available</span>
                <span className="text-[#3DDC84] font-mono font-bold text-sm bg-[#00C853]/10 px-2.5 py-1 rounded-lg border border-[#00C853]/30 shadow-[0_0_10px_rgba(0,200,83,0.1)]">
                  {landAvailable} ACRES
                </span>
              </div>
              <input
                type="range"
                min="1.5"
                max="15"
                step="0.5"
                value={landAvailable}
                onChange={(e) => setLandAvailable(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 accent-[#3DDC84] rounded-md cursor-pointer"
              />
              <span className="text-[10px] text-gray-500 font-mono flex justify-between mt-1">
                <span>1.5 Acres minimum</span>
                <span>15 Acres maximum</span>
              </span>
            </div>

            {/* Field 4: Automation Selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-3">
                Automation and AI control package
              </label>
              <div className="grid grid-cols-3 gap-3">
                {["Standard", "Smart Enterprise", "Autonomous AI"].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setAutomationLevel(level as any)}
                    className={`px-3 py-2.5 rounded-lg border text-left text-xs font-mono font-bold tracking-tight transition-all cursor-pointer ${
                      automationLevel === level
                        ? "bg-[#3DDC84]/15 border-[#3DDC84] text-[#3DDC84] shadow-[0_0_12px_rgba(61,220,132,0.15)]"
                        : "bg-white/[0.01] border-white/5 text-gray-400 hover:text-white"
                     }`}
                  >
                    {level === "Standard" ? "STANDARD PLC" : level === "Smart Enterprise" ? "SMART SCADA" : "NEURAL AI"}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Outputs Dashboard (7 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 bg-gradient-to-br from-[#121817] via-[#121817]/40 to-[#0B0F0C]/20 border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-white/5 mb-8">
                <Sparkles className="w-5 h-5 text-[#3DDC84]" />
                <h3 className="font-heading font-extrabold text-base text-white tracking-widest uppercase">
                  ESTIMATED FEASIBILITY REPORT
                </h3>
              </div>

              {/* Dials / Outputs grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1: CNG Prod */}
                <div className="bg-[#0B0F0C]/80 border border-[#00C853]/15 p-4.5 rounded-2xl shadow-inner hover:border-[#3DDC84]/30 transition-all duration-300">
                  <Flame className="w-4 h-4 text-[#3DDC84] mb-1.5" />
                  <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-wider">Bio-CNG Yield</span>
                  <span className="block font-mono text-2xl font-black text-white">{outputs.bioCngProd.toLocaleString()}</span>
                  <span className="text-[9px] font-mono text-gray-500">KG / RUNNING DAY</span>
                </div>

                {/* 2: Fertilizer */}
                <div className="bg-[#0B0F0C]/80 border border-[#00C853]/15 p-4.5 rounded-2xl shadow-inner hover:border-[#3DDC84]/30 transition-all duration-300">
                  <Scale className="w-4 h-4 text-[#00C853] mb-1.5" />
                  <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-wider">Bio-Fertilizer</span>
                  <span className="block font-mono text-2xl font-black text-white">{outputs.fertilizerProd.toLocaleString()}</span>
                  <span className="text-[9px] font-mono text-gray-500">KG / RUNNING DAY</span>
                </div>

                {/* 3: Carbon Offset */}
                <div className="bg-[#0B0F0C]/80 border border-[#00C853]/15 p-4.5 rounded-2xl shadow-inner hover:border-[#00E5FF]/30 transition-all duration-300">
                  <Leaf className="w-4 h-4 text-[#00E5FF] mb-1.5" />
                  <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-wider">CO₂ Offset</span>
                  <span className="block font-mono text-2xl font-black text-white">~{outputs.co2Savings.toLocaleString()}</span>
                  <span className="text-[9px] font-mono text-gray-500">TONS / CALENDAR YEAR</span>
                </div>

                {/* 4: Revenue */}
                <div className="bg-[#0B0F0C]/80 border border-[#00C853]/15 p-4.5 rounded-2xl shadow-inner hover:border-[#3DDC84]/30 transition-all duration-300">
                  <Coins className="w-4 h-4 text-[#8B5E34] mb-1.5" />
                  <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-wider">Gross Revenue</span>
                  <span className="block font-mono text-xl font-bold text-[#3DDC84]">{formatMoney(outputs.annualRevenue)}</span>
                  <span className="text-[9px] font-mono text-gray-500">PER RUNNING YEAR</span>
                </div>

              </div>
            </div>

            {/* Payback Dials */}
            <div className="mt-8 border-t border-white/5 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">
                  ESTIMATED CAPEX OUTLAY
                </span>
                <span className="block text-2xl font-mono font-black text-white">
                  {formatMoney(outputs.estimatedCapex)}
                </span>
                <p className="text-[9px] text-gray-500 leading-normal mt-1">
                  *Based on regional material metrics. Includes processing skids and earthworks.
                </p>
              </div>

              <div>
                <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                  PAYBACK PERIOD
                  <Info className="w-3.5 h-3.5 text-[#3DDC84] cursor-help" title="Calculated using standardized EBITDA averages." />
                </span>
                <span className="block text-3xl font-mono font-black text-[#3DDC84] drop-shadow-[0_0_12px_rgba(61,220,132,0.3)]">
                  {outputs.roiTimelineYears} Years
                </span>
                <span className="text-[9px] text-emerald-400 font-mono uppercase tracking-widest">
                  ★ ADVANCED HIGH-YIELD VENTURE
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
