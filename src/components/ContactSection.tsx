/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import {
  Mail,
  Phone,
  Building2,
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  RefreshCw,
  MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    industryType: "Agriculture",
    wasteQuantity: "50-100 Tons/Day",
    interest: "Bio-CNG Plants Setup",
    plantCapacity: "High Yield Infrastructure",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-tech API analysis loading
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 2800);
  };

  const industries = [
    "Agriculture Co-ops",
    "Dairy Farms",
    "Sugar Mills",
    "Municipal Solid Waste",
    "Food Processing Industry",
    "Smart Cities",
    "Poultry Yards"
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#121817] to-[#0B0F0C] border-t border-white/5 overflow-hidden">
      
      {/* Decorative vertical energy laser grids */}
      <div className="absolute top-0 bottom-0 left-10 w-[1px] bg-[#00C853]/5 hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-10 w-[1px] bg-[#3DDC84]/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Core content dual arrangement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Inquiry form (7 Cols) */}
          <div className="lg:col-span-7 ecotech-glass border border-[#00C853]/25 p-6 sm:p-10 rounded-3xl shadow-2xl relative glow-green overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="border-b border-white/15 pb-4 mb-6">
                    <span className="text-[10px] font-mono tracking-widest text-[#3DDC84] uppercase block mb-1 font-bold">
                      PROJECT FEASIBILITY CHANNEL
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                      Request Feasibility Review
                    </h3>
                  </div>

                  {/* Field group Name / Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Contact Officer Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Verma"
                        className="w-full bg-[#0B0F0C]/80 border border-[#00C853]/20 hover:border-[#3DDC84]/50 focus:border-[#3DDC84] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-hidden focus:bg-[#0B0F0C] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Corporate Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@millsco.com"
                        className="w-full bg-[#0B0F0C]/80 border border-[#00C853]/20 hover:border-[#3DDC84]/50 focus:border-[#3DDC84] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-hidden focus:bg-[#0B0F0C] transition-all"
                      />
                    </div>
                  </div>

                  {/* Field group Phone / Industry */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Phone Number (including country code)
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-[#0B0F0C]/80 border border-[#00C853]/20 hover:border-[#3DDC84]/50 focus:border-[#3DDC84] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-hidden focus:bg-[#0B0F0C] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Industry Sector Type
                      </label>
                      <select
                        value={formData.industryType}
                        onChange={(e) => setFormData({ ...formData, industryType: e.target.value })}
                        className="w-full bg-[#0B0F0C]/80 border border-[#00C853]/20 hover:border-[#3DDC84]/50 focus:border-[#3DDC84] rounded-xl px-4 py-3 text-xs text-white focus:outline-hidden focus:bg-[#0B0F0C] transition-all"
                      >
                        {industries.map((ind) => (
                          <option key={ind} value={ind} className="bg-[#0B0F0C] text-white">
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field group Waste / Project Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="sm:col-span-1">
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Daily Biomass Volume
                      </label>
                      <select
                        value={formData.wasteQuantity}
                        onChange={(e) => setFormData({ ...formData, wasteQuantity: e.target.value })}
                        className="w-full bg-[#0B0F0C]/80 border border-[#00C853]/20 hover:border-[#3DDC84]/50 focus:border-[#3DDC84] rounded-xl px-4 py-3 text-xs text-white focus:outline-hidden focus:bg-[#0B0F0C] transition-all"
                      >
                        <option value="10-25 Tons/Day" className="bg-[#0B0F0C]">10 - 25 Tons/Day</option>
                        <option value="25-50 Tons/Day" className="bg-[#0B0F0C]">25 - 50 Tons/Day</option>
                        <option value="50-100 Tons/Day" className="bg-[#0B0F0C]">50 - 100 Tons/Day</option>
                        <option value="100-250 Tons/Day" className="bg-[#0B0F0C]">100 - 250 Tons/Day</option>
                        <option value="250+ Tons/Day" className="bg-[#0B0F0C]">250+ Tons/Day</option>
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Technical Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-[#0B0F0C]/80 border border-[#00C853]/20 hover:border-[#3DDC84]/50 focus:border-[#3DDC84] rounded-xl px-4 py-3 text-xs text-white focus:outline-hidden focus:bg-[#0B0F0C] transition-all"
                      >
                        <option value="Bio-CNG Plants Setup" className="bg-[#0B0F0C]">Bio-CNG Plants</option>
                        <option value="Industrial Biogas System" className="bg-[#0B0F0C]">Industrial Biogas</option>
                        <option value="Gas Purification Columns" className="bg-[#0B0F0C]">Advanced Purification</option>
                        <option value="EPC Master Contracting" className="bg-[#0B0F0C]">EPC Turnkey Project</option>
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Target Capacity Load
                      </label>
                      <select
                        value={formData.plantCapacity}
                        onChange={(e) => setFormData({ ...formData, plantCapacity: e.target.value })}
                        className="w-full bg-[#0B0F0C]/80 border border-[#00C853]/20 hover:border-[#3DDC84]/50 focus:border-[#3DDC84] rounded-xl px-4 py-3 text-xs text-white focus:outline-hidden focus:bg-[#0B0F0C] transition-all"
                      >
                        <option value="High Yield Infrastructure" className="bg-[#0B0F0C]">High Yield (Commercial)</option>
                        <option value="Medium Regional Skid" className="bg-[#0B0F0C]">Medium Regional Skid</option>
                        <option value="Small Agricultural Mill Assembly" className="bg-[#0B0F0C]">Small Agricultural Mill</option>
                      </select>
                    </div>
                  </div>

                  {/* Message box */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Brief site location, geography or feedstock description
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Kolhapur sugarcane mill, 4.5 acres ready clay land, looking to tap local distillery effluent..."
                      className="w-full bg-[#0B0F0C]/80 border border-[#00C853]/20 hover:border-[#3DDC84]/50 focus:border-[#3DDC84] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-hidden focus:bg-[#0B0F0C] transition-all resize-none"
                    />
                  </div>

                  {/* Security notes */}
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Your industrial details are protected under standard non-disclosure terms.</span>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#00C853] to-[#3DDC84] hover:from-[#3DDC84] hover:to-[#00C853] text-[#0B0F0C] text-xs font-bold font-mono tracking-widest uppercase rounded-xl hover:scale-[1.01] active:scale-[0.99] disabled:brightness-75 transition-all shadow-[0_0_20px_rgba(0,200,83,0.3)] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-[#0B0F0C]" />
                        RUNNING FEASIBILITY MONTE CARLO SIMULATOR...
                      </>
                    ) : (
                      <>
                        SUBMIT INQUIRY & ANALYZE PAYBACK
                        <ArrowRight className="w-4 h-4 text-[#0B0F0C]" />
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 bg-w2e-lime/10 border border-w2e-lime rounded-full flex items-center justify-center mx-auto mb-4 text-[#8CC63F]">
                    <CheckCircle2 className="w-8 h-8 text-w2e-lime animate-pulse" />
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#8CC63F] uppercase block mb-1">
                      ANALYSIS SIMULATOR SUCCESS
                    </span>
                    <h3 className="text-2xl font-heading font-extrabold text-white">
                      Inquiry Received & Securely Registered
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 font-light leading-relaxed max-w-md mx-auto">
                    Excellent, <strong>{formData.name}</strong>. W2E's AI optimization pipeline has compiled your target indicators (<strong>{formData.wasteQuantity} of {formData.industryType} biomass</strong>). A certified bio-systems engineer will email your preliminary blueprints to <strong>{formData.email}</strong> shortly.
                  </p>

                  <div className="bg-black/40 border border-white/5 p-5 rounded-xl font-mono text-[10px] text-left max-w-sm mx-auto space-y-2">
                    <div className="flex justify-between border-b border-white/5 pb-1 text-gray-500">
                      <span>PROJECT_SECTOR:</span>
                      <span className="text-white">{formData.industryType}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1 text-gray-500">
                      <span>FEEDSTOCK_VOLUME:</span>
                      <span className="text-white">{formData.wasteQuantity}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1 text-gray-500">
                      <span>BLUEPRINT_INDEX:</span>
                      <span className="text-[#3DDC84] font-bold">W2E-FEAS-P944A</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>REGISTRATION_STATUS:</span>
                      <span className="text-emerald-400 font-bold">MONTE-CARLO COMPLETE</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        industryType: "Agriculture",
                        wasteQuantity: "50-100 Tons/Day",
                        interest: "Bio-CNG Plants Setup",
                        plantCapacity: "High Yield Infrastructure",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Submit another site blueprint
                  </button>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* RIGHT: Corporate HQ contact details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#3DDC84] tracking-widest uppercase block font-bold">
                CENTRAL OPERATIONS & HQ
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                W2E Bioenergy Headquarters
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Connect directly with our central operations and engineering leadership team in Maharashtra to coordinate feasibility studies, plant design, and project deployment.
              </p>
            </div>

            {/* Offices list */}
            <div className="space-y-6 font-mono text-xs">
              
              {/* Primary HQ Card */}
              <div className="ecotech-glass border border-[#00C853]/20 hover:border-[#3DDC84]/40 hover:shadow-[0_0_15px_rgba(0,200,83,0.08)] p-6 rounded-2xl transition-all duration-300 space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Building2 className="w-5 h-5 text-[#3DDC84]" />
                  <span>Maharashtra Main Operations & Plant HQ</span>
                </div>
                
                <div className="space-y-3.5">
                  <div className="flex items-start gap-2.5 text-gray-300">
                    <MapPin className="w-4 h-4 text-[#30db76] shrink-0 mt-0.5" />
                    <p className="leading-relaxed text-[11px]">
                      A/P - Chinawal, Tal - Raver, Dist - Jalgaon, Maharashtra - 425505
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2.5 text-gray-300 border-t border-white/5 pt-3">
                    <Phone className="w-4 h-4 text-[#30db76] shrink-0" />
                    <a 
                      href="tel:+919420672283" 
                      className="hover:text-[#3DDC84] transition-colors font-bold text-[11px] hover:underline"
                    >
                      +91 9420672283
                    </a>
                  </div>
                </div>

                {/* Email Channels */}
                <div className="border-t border-white/5 pt-3.5 space-y-3">
                  <div className="flex items-center gap-2.5 text-gray-400">
                    <Mail className="w-4 h-4 text-[#3DDC84] shrink-0" />
                    <div>
                      <span className="text-[9px] text-gray-500 block leading-none font-bold uppercase mb-0.5">Executive Desk</span>
                      <a 
                        href="mailto:ceo@w2egreenenergy.com" 
                        className="hover:text-[#3DDC84] transition-colors hover:underline text-[11px] text-gray-300 font-semibold"
                      >
                        ceo@w2egreenenergy.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-gray-400">
                    <Mail className="w-4 h-4 text-[#3DDC84] shrink-0" />
                    <div>
                      <span className="text-[9px] text-gray-500 block leading-none font-bold uppercase mb-0.5">Projects & Director</span>
                      <a 
                        href="mailto:lalit@w2egreenenergy.com" 
                        className="hover:text-[#3DDC84] transition-colors hover:underline text-[11px] text-gray-300 font-semibold"
                      >
                        lalit@w2egreenenergy.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-gray-400">
                    <Mail className="w-4 h-4 text-[#3DDC84] shrink-0" />
                    <div>
                      <span className="text-[9px] text-gray-500 block leading-none font-bold uppercase mb-0.5">Technical Support</span>
                      <a 
                        href="mailto:support@w2egreenenergy.com" 
                        className="hover:text-[#3DDC84] transition-colors hover:underline text-[11px] text-gray-300 font-semibold"
                      >
                        support@w2egreenenergy.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
