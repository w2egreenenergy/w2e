/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Solution } from "../types";

export const SOLUTIONS: Solution[] = [
  {
    id: "bio-cng",
    title: "Bio-CNG Infrastructure Plants",
    shortDesc: "Commercial scale waste purification and compression converting crude biogas into high-purity (97%+ Methane) transport-grade biofuel.",
    detailedDesc: "Our ultra-high capacity Bio-CNG production systems process industrial municipal and agricultural waste. By removing carbon dioxide, hydrogen sulfide, moisture, and siloxanes, we deliver green compressed natural gas matching or exceeding IS 15408 standards.",
    iconName: "FlameKindling",
    technicalSpecs: [
      "Methane (CH4) Concentration: > 97.2%",
      "Carbon Dioxide (CO2) Content: < 1.5%",
      "Delivery Compression Pressure: 200 - 250 bar",
      "Process Fuel Recovery Eff: > 99.1%",
      "Inlet Flow Capacities: 500 Nm³/hr to 10,000 Nm³/hr"
    ],
    benefits: [
      "Eligible for lucrative SATAT offtake guarantees",
      "Displaces imported fossil natural gas immediately",
      "Zero process methane slippage into outer atmosphere",
      "Decarbonize public transportation fleets at low cost"
    ],
    systemParameters: [
      { label: "Optimal Feedstock", value: "Press mud, Paddy straw, Animal slurry" },
      { label: "Purification Tech", value: "Vacuum swing adsorption (VSA) / Membrane" },
      { label: "Footprint Requirement", value: "1.5 to 3.0 Acres minimum" }
    ]
  },
  {
    id: "industrial-biogas",
    title: "Industrial Biogas Systems",
    shortDesc: "Continuously stirred tank reactors (CSTR) designed for rapid solid organic digestion and high-volume biological thermal energy production.",
    detailedDesc: "W2E's multi-stage continuous anaerobic digesters employ optimized microbiological consortia to digest sticky solid sludges and high-COD effluents, turning them into dense, clean process heat and power.",
    iconName: "Cpu",
    technicalSpecs: [
      "Thermal Efficiency rating: 44.5% (Electrical) / 88% (Cogeneration)",
      "Digester Core Shell: SS316L clad industrial steel",
      "Operating Temperate State: Mesophilic (38°C) to Thermophilic (55°C)",
      "Desulfurization system: Integrated biological + chemical scrubbers",
      "Retention Duration: 18 - 25 optimal cycle days"
    ],
    benefits: [
      "Generates continuous, non-intermittent baseline power",
      "High thermal recovery yields lower overall factory operating costs",
      "Fully compliant with stringent industrial waste treatment standards",
      "Reduces dependency on heavy grid electricity grid demands"
    ],
    systemParameters: [
      { label: "Reactor Design", value: "CSTR (Continuously Stirred Tank Reactor)" },
      { label: "Solid Content Load", value: "Up to 15% dry solids configuration" },
      { label: "Safety Rating", value: "Hazardous Area Zone-1 FM approved" }
    ]
  },
  {
    id: "agri-waste-mgmt",
    title: "Agricultural Waste Management",
    shortDesc: "Aggregating and treating crop residues like paddy straw and sugar bagasses to eliminate hazardous open field stubble burning.",
    detailedDesc: "We provide automated pre-treatment systems utilizing thermal-chemical and enzymatic hydrolysis to break down complex lignocelluloses. This turns agricultural trash into easily digestible high-yield sugars for biogas production.",
    iconName: "Leaf",
    technicalSpecs: [
      "Pre-treatment Throughput: 50 to 500 dry tons/day",
      "Lignin breakdown efficiency: ~82% reduction rate",
      "Baling and logistics integration: Integrated GPS telemetry",
      "Moisture operating range: 10% to 45% dry basis",
      "Storage stabilization safety: Anti-fermentation thermal cameras"
    ],
    benefits: [
      "Mitigates dangerous seasonal smog and toxic carbon emissions",
      "Creates additional dependable supplementary revenues for local farmers",
      "Secures long-term raw material supply for commercial energy plants",
      "Highly efficient micro-shredding delivers enhanced gas yields"
    ],
    systemParameters: [
      { label: "Target Residues", value: "Paddy Straw, Wheat Straw, Cotton Stalks" },
      { label: "Pre-Treatment", value: "Steam explosion & dilute acid hydrolysis" },
      { label: "Carbon Offset", value: "1.8 tons CO2 offset per ton processed" }
    ]
  },
  {
    id: "gas-purification",
    title: "Advanced Gas Purification",
    shortDesc: "Architectural multi-stage dry chemical and membrane filtration systems that strip out corrosive target gases.",
    detailedDesc: "By leveraging multi-staged gas separation techniques combining biological desulfurization, vacuum-swing adsorption (VSA), high-capacity membrane membranes, and activated carbon polishing beds, we achieve high-purity biomethane.",
    iconName: "Filter",
    technicalSpecs: [
      "Hydrogen Sulfide (H2S) Removal: Down to < 1.0 ppm",
      "Moisture Dew Point rating: -40°C under high pressure",
      "Membrane Material: Hollow-fiber polyimide architecture",
      "Operating recovery rate: Up to 99.5% methane extraction",
      "Siloxane Capture Efficiency: 99.9% filtration"
    ],
    benefits: [
      "Protects downstream gas compressors and gas engines from corrosive acids",
      "Extremely low parasitic energy load during active gas recovery",
      "Fully automated plug-and-play modular skid construction",
      "Minimal maintenance and extended active element service life"
    ],
    systemParameters: [
      { label: "Separation Element", value: "Evonik Fibres multi-stage membranes" },
      { label: "Operating Energy", value: "0.22 kW/Nm³ purified biomethane" },
      { label: "Module Form", value: "ISO Containerized scalable skids" }
    ]
  },
  {
    id: "bio-coal",
    title: "Bio-Coal & Biomass Pellets",
    shortDesc: "High-density torrefied carbon fuel briquettes constructed from agro-residues, acting as direct replacements for thermal coal.",
    detailedDesc: "We engineer torrefaction and high-pressure extrusion plants that dewater and densify residual biomass. The final bio-coal output possesses similar calorific configurations to high-grade Indonesian thermal coal with net-zero emissions.",
    iconName: "Zap",
    technicalSpecs: [
      "Calorific Value: 4,500 - 5,200 kcal/kg output",
      "Moisture Content: < 6.0% moisture volume",
      "Ash Yield Profile: < 8.0% residual ash",
      "Bulk Density configuration: Hardened briquettes (~700 kg/m³)",
      "Operating temperature: 250 - 300°C torrefaction phase"
    ],
    benefits: [
      "Direct drop-in blending fuel for thermal coal-fired power plants",
      "Saves coal mining environmental footprint and high carbon tax levies",
      "High energy density offers low freight and warehousing overheads",
      "Zero sulfur oxides (SOx) released upon combustion"
    ],
    systemParameters: [
      { label: "Carbon Neutrality", value: "100% Biogenic Carbon fuel" },
      { label: "Production Yield", value: "0.7 tons bio-coal per active dry agricultural waste ton" },
      { label: "Briquette Profile", value: "Hexagonal or cylindrical forms (60-90mm)" }
    ]
  },
  {
    id: "liquid-fertilizer",
    title: "Liquid Organic Fertilizer Manufacturing",
    shortDesc: "High-efficiency concentration and extraction of pure nutrient-dense digestate into premium bio-fertilizers.",
    detailedDesc: "The leftover anaerobic slurry or digestate undergoes specialized multi-phase screen decantation, advanced ultrafiltration, and chemical stabilization. This forms concentrated trace-element rich organic fertilizers that revitalize degraded soils.",
    iconName: "Droplet",
    technicalSpecs: [
      "Decanter Centrifugal Throughput: 10 - 50 m³/hour",
      "Macro-Nutrients Profile: Balanced organic Nitrogen, Phosphorus, Potassium (N-P-K)",
      "Organic Carbon Content: > 12.0% high carbon density",
      "Pathogen safety: 100% pasteurization compliance",
      "Suspended Solid limits: Trace particulates $(<100 \mu m)$"
    ],
    benefits: [
      "Displaces highly expensive synthetic chemical urea and potash fertilizers",
      "Supplies beneficial microbes and organic carbon to farm soils",
      "Boosts agricultural harvest yields while retaining moisture content",
      "Provides additional continuous revenue streams for plant operators"
    ],
    systemParameters: [
      { label: "Product Texture", value: "Odorless concentrated liquid formulation" },
      { label: "Packing Standards", value: "HDPE bulk carboys & localized distribution" },
      { label: "Certifications", value: "FCCO (Fertilizer Control Order) standard compliant" }
    ]
  },
  {
    id: "w2e-infra",
    title: "Waste-to-Energy Infrastructure",
    shortDesc: "Comprehensive municipal, agro-process, and industrial scale waste-to-energy physical civil project construction.",
    detailedDesc: "W2E Bioenergy designs, constructs, and deploys high-volume biorefinery campuses. Our civil engineering packages are fully optimized to handle complete site preparation, massive underground reinforced concrete CSTR vessels, and gas storage structures.",
    iconName: "Building2",
    technicalSpecs: [
      "Digester volumes: Up to 8,000 m³ single vessel",
      "Vessel Architecture: Heavy premium pre-stressed reinforced concrete",
      "Storage Domes: Dual-membrane chemical-resistant gas holders",
      "Operating pressure safety: Up to +50 mbar pressure tolerance",
      "Process Lifetime: 30+ year engineered structural lifespans"
    ],
    benefits: [
      "Full turnkey deployment from blueprint approvals to power grid sync",
      "Constructed using highly corrosion-resistant specialty raw concrete",
      "Integrated emergency flaring networks protect against pressure peaks",
      "Built-in advanced earthquake and ground-heave structural resistances"
    ],
    systemParameters: [
      { label: "Asset Lifespan", value: "30 Years + scheduled overhauls" },
      { label: "Pressure Security", value: "Hydraulic and mechanical pressure safety valves" },
      { label: "Standards Compliance", value: "ASME VIII, API 620, DIN 30600" }
    ]
  },
  {
    id: "epc-turnkey",
    title: "EPC & Turnkey Engineering",
    shortDesc: "Complete cradle-to-grave Engineering, Procurement, Construction, and commissioning of commercial bio-refineries.",
    detailedDesc: "Our global engineering office takes projects from initial geological surveys, feedstock feasibility analysis, and CAD blueprints, through process modeling, heavy equipment procurement, automated SCADA integration, to final grid connection.",
    iconName: "ShieldCheck",
    technicalSpecs: [
      "Simulation Standards: Aspen Plus chemical process analysis",
      "Engineering Standard: 3D BIM modelling pipeline",
      "Procurement Logistics: Global network of certified high-alloy fabrication partners",
      "Testing Phase: 72-hour continuous full capacity test run",
      "Delivery Timeline: 12 - 18 months standard project timeline"
    ],
    benefits: [
      "Single-point engineering accountability prevents complex vendor disputes",
      "Highly optimized asset schedules ensure rapid commercial operation dates (COD)",
      "Strict compliance with local regional environment and factory clearances",
      "Guaranteed performance yield profiles backstopped by performance bonds"
    ],
    systemParameters: [
      { label: "Project Phases", value: "FEED, Detailed Engineering, Procurement, Fab, O&M" },
      { label: "Post-Commissioning", value: "12-month standard warranty & dynamic operations trial" },
      { label: "Warranty Backstop", value: "Process performance guarantees" }
    ]
  },
  {
    id: "automation-monitoring",
    title: "Dynamic Automation & Monitoring",
    shortDesc: "Next-generation remote telemetry, PLC automated processes, gas leakage safety controls, and real-time dashboard tracking.",
    detailedDesc: "Every W2E plant is integrated with a smart industrial dashboard. Our SCADA network feeds telemetry including pressure, temperature (mesophilic cycles), digestate level, biological health indices, and output compressed gas quality directly to centralized cloud monitoring.",
    iconName: "Activity",
    technicalSpecs: [
      "Telemetry Sync Rate: Real-time 250ms precision polling",
      "Local Controller Platform: Siemens S7-1500 / Allen-Bradley ControlLogix",
      "Safety Sensors: ATEX explosion-proof methane and hydrogen sulfide optical detectors",
      "Network Protocol: Secure TLS-encrypted MQTT / OPC UA architecture",
      "Leak Intervention Response: < 3.5 seconds automated valve shut-off"
    ],
    benefits: [
      "Enables streamlined remote unmanned plant operation and supervision",
      "AI models proactively alert staff to early toxic biological souring",
      "Automated continuous composition reporting ensures high bio-CNG compliance",
      "Optimized dosing pumps lower direct chemical cost requirements by 28%"
    ],
    systemParameters: [
      { label: "Centralized SCADA", value: "W2E BioCloud central tracking terminal" },
      { label: "AI Prediction Engine", value: "Predictive feedstock digest yield estimation" },
      { label: "Autonomous Actions", value: "Auto-purges, automatic heating control & emergency venting" }
    ]
  }
];
