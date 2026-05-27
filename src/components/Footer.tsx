/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Mail, Award, ArrowUp, Milestone, MapPin, Phone, FileText, Shield, CreditCard, Truck, X } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activePolicy, setActivePolicy] = useState<"terms" | "privacy" | "refund" | "shipping" | null>(null);

  const openPolicy = (policy: "terms" | "privacy" | "refund" | "shipping") => {
    setActivePolicy(policy);
    document.body.style.overflow = "hidden";
  };

  const closePolicy = () => {
    setActivePolicy(null);
    document.body.style.overflow = "unset";
  };

  const policyContent = {
    terms: {
      title: "Terms of Service",
      icon: FileText,
      badge: "W2E-TOS_REV2026",
      sections: [
        {
          heading: "1. Acceptance of Terms",
          text: "By accessing the W2E Bioenergy portal, configuring the feasibility simulators, or submitting corporate waste stream attributes, you agree to comply with and be bound by these industrial Terms of Service."
        },
        {
          heading: "2. Proprietary Engineering Models",
          text: "All dynamic calculation structures, mass-balance formulas, volatile solids loading curves, and custom biological retention simulations accessed via this site constitute proprietary Intellectual Property of W2E Bioenergy Private Limited under the Trademark and Design Registry rules."
        },
        {
          heading: "3. SATAT Guidelines Coordination",
          text: "All yield metrics computed on this system align with government SATAT (Sustainable Alternative Towards Affordable Transportation) yield parameters. However, final commercial EPC projects require physically audited feedstock lab audits and volatile fatty acid (VFA) digestion validations."
        },
        {
          heading: "4. Permitted Activity & Restrictions",
          text: "Users are strictly forbidden from scraping the live ESC ledger, compiling calculation constants, or reversing telemetry endpoints. Infractions will lead to immediate electronic channel termination and legal redress."
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      icon: Shield,
      badge: "W2E-PRV_COMPLY",
      sections: [
        {
          heading: "1. Confined Biomass Raw Data Logging",
          text: "W2E Bioenergy respects the high confidentiality of sugarcane mills, distilleries, urban municipalities, and farming cooperatives. Raw biomass volume profiles, chemical properties, and land ownership records are stored purely to drive local engineering configurations."
        },
        {
          heading: "2. Telemetry and SCADA Safeguards",
          text: "All calculations originating from Maharashtra operation coordinate sets, plant SCADA tokens, and site inquiry formats are transmitted via encrypted AES-256 secure sockets and hosted on strictly partitioned, ISO 27001 compliant cloud servers."
        },
        {
          heading: "3. Cookie Tracking Protocol",
          text: "We use lightweight, non-persistent session tags to memorize your feedstock selection (e.g., paddy straw vs. pressmud) and site variables within the feasibility slider engine. No data is ever syndicated to third-party ad networks."
        },
        {
          heading: "4. Information Custody & Erasure",
          text: "To preserve calculation trace timelines for Central government subsidies audits, project inputs are archived in secondary off-line records for three (3) calendar years unless early erasure is authorized by your Corporate Board representative."
        }
      ]
    },
    refund: {
      title: "Refund & Cancellation Policy",
      icon: CreditCard,
      badge: "W2E-REF_MILITARY",
      sections: [
        {
          heading: "1. Engineering Audits & Yield Profiles",
          text: "Sizing analysis, laboratory feedstock inoculations, and detailed computational fluid dynamic (CFD) sizing models for biochemical reactors represent direct engineering resource hours. Therefore, all initial consulting payments to W2E engineers are strictly non-refundable once engineering evaluation commences."
        },
        {
          heading: "2. EPC Milestones Procurement",
          text: "Commercial turnkey site setups (design, procurement, grid-sync, commissioning) function under step-by-step milestone schedules (e.g. initial structural concrete work, gas storage membrane installation). Material purchases and construction resources allocated to completed milestones cannot be refunded or cancelled."
        },
        {
          heading: "3. Modular Equipment Shifting",
          text: "For separate hardware skid elements (such as biogas scrubbers, carbon molecular sieve (CMS) columns, or SCADA telemetry enclosures), official cancellation submissions must be sent to epc.gujarat@w2ebio.com within 48 hours is strictly required before shipping starts."
        }
      ]
    },
    shipping: {
      title: "Shipping & Delivery Policy",
      icon: Truck,
      badge: "W2E-SHIP_LOGISTICS",
      sections: [
        {
          heading: "1. Industrial Heavy Skid Transit",
          text: "Our physical biorefinery assemblies (such as modular gas purification skids, membrane units, desulfurization columns, and continuous stirred digester components) are manufactured at our Gujarat Technical & EPC Complex and transferred directly to the project property site gates using specialized heavy transport operators."
        },
        {
          heading: "2. Transit Insurance & Custody Transfer",
          text: "Every physical component ships under comprehensive industrial Transit Insurance coverage. Transport risks transfer directly to the client at the designated property main gate when the shipping vehicles cross physical boundary checks."
        },
        {
          heading: "3. Blueprint and Digital Layouts",
          text: "All CAD diagrams, custom engineering calculations sheets, and pre-feasibility final slide books are dispatched via secured, compressed email files within 7 to 14 business days after initial configuration deposits are cleared."
        }
      ]
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-[#0B0F0C] border-t border-[#00C853]/20 pt-16 pb-8 font-sans overflow-hidden">
      
      {/* Decorative vertical energy accents */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#00C853] via-[#3DDC84] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid division */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Bio Branding (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo />

            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              W2E Bioenergy develops next-generation Waste-to-Energy (W2E) biorefineries, advanced continuous anaerobic reactors, and high-purity membrane biomethane separation skids to fuel India’s sustainable off-grid logistics.
            </p>

            <div className="flex items-center gap-2.5 bg-[#00C853]/5 border border-[#3DDC84]/25 p-3 rounded-xl max-w-sm">
              <Milestone className="w-5 h-5 text-[#3DDC84] shrink-0" />
              <p className="text-[10px] font-mono text-gray-400 leading-snug">
                Registered industrial provider under Central Gov SATAT and Bio-Compost schemes.
              </p>
            </div>
          </div>

          {/* Col 2: Compliance & Legal (2 Cols) */}
          <div className="lg:col-span-2 space-y-4 font-mono text-xs">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest">
              Compliance & Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => openPolicy("terms")}
                  className="text-gray-400 hover:text-[#3DDC84] hover:underline transition-colors cursor-pointer text-left focus:outline-hidden"
                >
                  &gt; Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPolicy("privacy")}
                  className="text-gray-400 hover:text-[#3DDC84] hover:underline transition-colors cursor-pointer text-left focus:outline-hidden"
                >
                  &gt; Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPolicy("refund")}
                  className="text-gray-400 hover:text-[#3DDC84] hover:underline transition-colors cursor-pointer text-left focus:outline-hidden"
                >
                  &gt; Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPolicy("shipping")}
                  className="text-gray-400 hover:text-[#3DDC84] hover:underline transition-colors cursor-pointer text-left focus:outline-hidden"
                >
                  &gt; Shipping Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Maharashtra Operations & Support (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest">
              Operations & Support
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5 text-gray-400">
                <MapPin className="w-4 h-4 text-[#3DDC84] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-[11px] text-gray-300">
                  A/P - Chinawal, Tal - Raver, Dist - Jalgaon, Maharashtra - 425505
                </p>
              </div>
              
              <div className="flex items-center gap-2.5 text-gray-400">
                <Phone className="w-4 h-4 text-[#3DDC84] shrink-0" />
                <a 
                  href="tel:+919420672283" 
                  className="hover:text-[#3DDC84] transition-colors font-bold text-gray-300 hover:underline"
                >
                  +91 9420672283
                </a>
              </div>

              <div className="border-t border-white/5 pt-3 space-y-2.5">
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

          {/* Col 4: Environmental Standards (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 font-mono text-[10px]">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest">
              ESG Compliance
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] mt-1.5 shrink-0" />
                <span>IS 15408 High-Purity Compressed Biomethane vehicle fuels standard matching.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] mt-1.5 shrink-0" />
                <span>Sovereign Fertilizer Control Order (FCO) compliance clearance rating.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] mt-1.5 shrink-0" />
                <span>Decarbonization tracking verified against UNFCCC climate frameworks.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-gray-500 text-center sm:text-left">
            <p>
              &copy; {currentYear} W2E Bioenergy Private Limited. All rights reserved globally.
            </p>
            <p className="mt-1 text-gray-600">
              Technical CAD schematics, EPC blueprints, and SCADA code models remain protected under industrial patents.
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 hover:border-[#3DDC84]/50 rounded-lg text-xs font-mono text-gray-400 hover:text-white transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            BACK TO CONSOLE TOP
          </button>
        </div>

      </div>

      {/* Floating Premium WhatsApp Contact FAB */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
        <a
          href="https://wa.me/919420672283"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_4px_28px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-[1.08] group"
          title="Direct Bio-CNG Support"
        >
          {/* Continuous ripple rings emerging outward - optimized for mobile performance & size */}
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute inset-0 rounded-full bg-[#25D366]/30 -z-10 pointer-events-none hidden sm:block"
              initial={{ scale: 0.9, opacity: 0.9 }}
              animate={{ scale: 2.1, opacity: 0 }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut",
              }}
            />
          ))}

          {/* WhatsApp Logo Icon with hover tilt */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-7 sm:h-7 fill-white transform group-hover:rotate-12 transition-transform duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
          >
            <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.192 8.192 0 0 1-1.26-4.38c0-4.51 3.67-8.18 8.18-8.18 2.18 0 4.24.85 5.78 2.39 1.54 1.54 2.4 3.6 2.4 5.79 0 4.51-3.67 8.19-8.18 8.19zm4.49-6.13c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.66.83-.81.99-.15.17-.31.19-.56.06-.25-.13-1.07-.39-2.03-1.25-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.17-.23.25-.39.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.5-.41-.43-.56-.44-.15-.01-.31-.01-.47-.01-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.3z" />
          </svg>
        </a>
      </div>

      {/* Global Interactive Legal Policy Center Modal and Overlay */}
      <AnimatePresence>
        {activePolicy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePolicy}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] bg-[#121817] border border-[#00C853]/20 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,200,83,0.15)] glow-green"
            >
              {/* Header of Modal */}
              <div className="p-6 md:p-8 border-b border-white/5 flex items-start justify-between bg-gradient-to-r from-[#00C853]/5 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#00C853]/10 border border-[#3DDC84]/25 rounded-xl text-[#3DDC84] shadow-[0_0_15px_rgba(0,200,83,0.15)]">
                    {(() => {
                      const IconComponent = policyContent[activePolicy].icon;
                      return <IconComponent className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight leading-none">
                      {policyContent[activePolicy].title}
                    </h3>
                    <span className="text-[9px] font-mono text-[#3DDC84] tracking-widest uppercase block mt-1.5">
                      {policyContent[activePolicy].badge} &bull; W2E BIOENERGY COMPLIANCE
                    </span>
                  </div>
                </div>
                <button
                  onClick={closePolicy}
                  className="p-2 text-gray-400 hover:text-white border border-white/10 hover:border-[#00C853]/30 rounded-lg transition-all cursor-pointer focus:outline-hidden"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body Contents of Modal */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 custom-scrollbar text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
                {policyContent[activePolicy].sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2 border-b border-white/[0.03] pb-5 last:border-0 last:pb-0">
                    <h4 className="font-mono text-[11px] md:text-xs text-[#3DDC84] uppercase tracking-wider font-bold">
                      {sec.heading}
                    </h4>
                    <p className="font-light text-gray-400 leading-relaxed">
                      {sec.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer of Modal */}
              <div className="p-4 bg-[#0B0F0C] border-t border-white/5 flex justify-end gap-3">
                <button
                  onClick={closePolicy}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#00C853]/15 to-[#3DDC84]/15 hover:from-[#00C853]/25 hover:to-[#3DDC84]/25 border border-[#00C853]/35 text-white text-xs font-mono rounded-lg transition-all cursor-pointer focus:outline-hidden"
                >
                  ACKNOWLEDGEMENT & CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
