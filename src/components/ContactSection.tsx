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
  Globe,
  Share2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  RefreshCw
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
    <section id="contact" className="relative py-24 bg-[#0a0c0a] border-t border-white/5 overflow-hidden">
      
      {/* Decorative vertical energy laser grids */}
      <div className="absolute top-0 bottom-0 left-10 w-[1px] bg-w2e-green/5 hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-10 w-[1px] bg-w2e-lime/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Core content dual arrangement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Inquiry form (7 Cols) */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-10 rounded-2xl shadow-xl shadow-black relative glow-green overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="border-b border-white/5 pb-4 mb-6">
                    <span className="text-[10px] font-mono tracking-widest text-[#8CC63F] uppercase block mb-1">
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
                        className="w-full bg-white/[0.02] border border-white/10 hover:border-[#8CC63F]/50 focus:border-[#8CC63F] rounded-lg px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-hidden focus:bg-[#0a0c0a] transition-all"
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
                        className="w-full bg-white/[0.02] border border-white/10 hover:border-[#8CC63F]/50 focus:border-[#8CC63F] rounded-lg px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-hidden focus:bg-[#0a0c0a] transition-all"
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
                        className="w-full bg-white/[0.02] border border-white/10 hover:border-[#8CC63F]/50 focus:border-[#8CC63F] rounded-lg px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-hidden focus:bg-[#0a0c0a] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Industry Sector Type
                      </label>
                      <select
                        value={formData.industryType}
                        onChange={(e) => setFormData({ ...formData, industryType: e.target.value })}
                        className="w-full bg-white/[0.02] border border-white/10 hover:border-[#8CC63F]/50 focus:border-[#8CC63F] rounded-lg px-4 py-3 text-xs text-white focus:outline-hidden focus:bg-[#0a0c0a] transition-all"
                      >
                        {industries.map((ind) => (
                          <option key={ind} value={ind} className="bg-[#0a0c0a] text-white">
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
                        className="w-full bg-white/[0.02] border border-white/10 hover:border-[#8CC63F]/50 focus:border-[#8CC63F] rounded-lg px-4 py-3 text-xs text-white focus:outline-hidden focus:bg-[#0a0c0a] transition-all"
                      >
                        <option value="10-25 Tons/Day" className="bg-[#0a0c0a]">10 - 25 Tons/Day</option>
                        <option value="25-50 Tons/Day" className="bg-[#0a0c0a]">25 - 50 Tons/Day</option>
                        <option value="50-100 Tons/Day" className="bg-[#0a0c0a]">50 - 100 Tons/Day</option>
                        <option value="100-250 Tons/Day" className="bg-[#0a0c0a]">100 - 250 Tons/Day</option>
                        <option value="250+ Tons/Day" className="bg-[#0a0c0a]">250+ Tons/Day</option>
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Technical Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-white/[0.02] border border-white/10 hover:border-[#8CC63F]/50 focus:border-[#8CC63F] rounded-lg px-4 py-3 text-xs text-white focus:outline-hidden focus:bg-[#0a0c0a] transition-all"
                      >
                        <option value="Bio-CNG Plants Setup" className="bg-[#0a0c0a]">Bio-CNG Plants</option>
                        <option value="Industrial Biogas System" className="bg-[#0a0c0a]">Industrial Biogas</option>
                        <option value="Gas Purification Columns" className="bg-[#0a0c0a]">Advanced Purification</option>
                        <option value="EPC Master Contracting" className="bg-[#0a0c0a]">EPC Turnkey Project</option>
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Target Capacity Load
                      </label>
                      <select
                        value={formData.plantCapacity}
                        onChange={(e) => setFormData({ ...formData, plantCapacity: e.target.value })}
                        className="w-full bg-white/[0.02] border border-white/10 hover:border-[#8CC63F]/50 focus:border-[#8CC63F] rounded-lg px-4 py-3 text-xs text-white focus:outline-hidden focus:bg-[#0a0c0a] transition-all"
                      >
                        <option value="High Yield Infrastructure" className="bg-[#0a0c0a]">High Yield (Commercial)</option>
                        <option value="Medium Regional Skid" className="bg-[#0a0c0a]">Medium Regional Skid</option>
                        <option value="Small Agricultural Mill Assembly" className="bg-[#0a0c0a]">Small Agricultural Mill</option>
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
                      className="w-full bg-white/[0.02] border border-white/10 hover:border-[#8CC63F]/50 focus:border-[#8CC63F] rounded-lg px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-hidden focus:bg-[#0a0c0a] transition-all resize-none"
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
                    className="w-full flex items-center justify-center gap-2 py-4 bg-linear-to-r from-w2e-green to-w2e-lime text-xs font-bold font-mono tracking-widest text-white rounded-lg hover:brightness-110 disabled:brightness-75 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-white" />
                        RUNNING FEASIBILITY MONTE CARLO SIMULATOR...
                      </>
                    ) : (
                      <>
                        SUBMIT INQUIRY & ANALYZE PAYBACK pay
                        <ArrowRight className="w-4 h-4 text-white" />
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
                      <span className="text-w2e-lime font-bold">W2E-FEAS-P944A</span>
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
              <span className="text-xs font-mono text-[#8CC63F] tracking-widest uppercase block">
                GLOBAL OFFICES & OUTPOSTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                W2E Bioenergy Headquarters
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Connect directly with our central offices in India's technology and industrial energy hubs for direct corporate financing and sovereign project partnerships.
              </p>
            </div>

            {/* Offices list */}
            <div className="space-y-6 font-mono text-xs">
              
              {/* Office 1 */}
              <div className="bg-white/5 backdrop-blur-xs border border-white/10 hover:border-[#8CC63F]/40 p-5 rounded-xl transition-all space-y-3">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Building2 className="w-4 h-4 text-[#8CC63F]" />
                  <span>Delhi NCR Corporate Office</span>
                </div>
                <p className="text-gray-400 leading-relaxed text-[11px]">
                  Tower B, Renewable Energy Center, Core 4, Sector 62, Noida, NCR Delhi, 201301, India.
                </p>
                <div className="flex flex-wrap gap-4 text-[10px] text-gray-500 border-t border-white/5 pt-3">
                  <div className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-w2e-lime" />
                    <span>+91 11 4102-8844</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-w2e-lime" />
                    <span>hcr.delhi@w2ebio.com</span>
                  </div>
                </div>
              </div>

              {/* Office 2 */}
              <div className="bg-white/5 backdrop-blur-xs border border-white/10 hover:border-[#8CC63F]/40 p-5 rounded-xl transition-all space-y-3">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Building2 className="w-4 h-4 text-[#8CC63F]" />
                  <span>Gujarat Technical & EPC Complex</span>
                </div>
                <p className="text-gray-400 leading-relaxed text-[11px]">
                  Level 8, Bio-Grid Plaza, SG Highway, Ahmedabad, Gujarat, 380054, India.
                </p>
                <div className="flex flex-wrap gap-4 text-[10px] text-gray-500 border-t border-white/5 pt-3">
                  <div className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-w2e-lime" />
                    <span>+91 79 6608-1122</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-w2e-lime" />
                    <span>epc.gujarat@w2ebio.com</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social handles */}
            <div className="border-t border-white/5 pt-6">
              <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-3">
                ENCRYPTED SECURE DIRECT CHANNELS
              </span>
              <div className="flex items-center gap-3 text-xs font-mono">
                <a href="#about" className="flex items-center gap-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 rounded-md transition-colors">
                  <Globe className="w-3.5 h-3.5 text-w2e-lime" />
                  <span>w2ebio.energy</span>
                </a>
                <a href="#solutions" className="flex items-center gap-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 rounded-md transition-colors">
                  <Share2 className="w-3.5 h-3.5 text-w2e-lime" />
                  <span>LinkedIn Infrastructure</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
