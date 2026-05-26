/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Flame, BarChart3, Mail, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Overview", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Process", href: "#process" },
    { label: "Technology", href: "#technology" },
    { label: "ROI Calculator", href: "#calculator" },
    { label: "Projects", href: "#projects" },
    { label: "Knowledge", href: "#blog" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0c0a]/90 backdrop-blur-md border-b border-w2e-green/20 py-4 shadow-lg shadow-black/30"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center group cursor-pointer"
            >
              <Logo />
            </a>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => handleNavClick("#calculator")}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium tracking-wider text-w2e-lime hover:text-white border border-w2e-lime/30 hover:border-w2e-lime hover:bg-[#1F6B1B]/20 rounded-full transition-all duration-200 cursor-pointer"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                DASHBOARD ROI
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="flex items-center gap-1 px-6 py-2.5 bg-[#1F6B1B] hover:bg-[#2a8a25] text-white text-xs font-bold uppercase tracking-wider rounded-full border border-[#8CC63F]/50 shadow-[0_0_20px_rgba(31,107,27,0.3)] duration-200 transition-all cursor-pointer"
              >
                CONTACT US
                <ChevronRight className="w-3.5 h-3.5 text-[#8CC63F]" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => handleNavClick("#calculator")}
                className="p-2 text-w2e-lime border border-w2e-lime/20 rounded-md"
              >
                <BarChart3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white focus:outline-hidden"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#0a0c0a]/95 backdrop-blur-lg border-b border-w2e-green/20 lg:hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => handleNavClick("#calculator")}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-mono font-medium text-w2e-lime border border-w2e-lime/30 rounded-md bg-w2e-lime/5"
                >
                  <BarChart3 className="w-4 h-4" />
                  CALCULATE PLANT ROI
                </button>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-linear-to-r from-w2e-green to-w2e-lime rounded-md"
                >
                  <Mail className="w-4 h-4" />
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
