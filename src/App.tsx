/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustMetrics from "./components/TrustMetrics";
import About from "./components/About";
import Solutions from "./components/Solutions";
import ProcessFlow from "./components/ProcessFlow";
import Technology from "./components/Technology";
import IndustriesServed from "./components/IndustriesServed";
import EsgSustainability from "./components/EsgSustainability";
import RoiCalculator from "./components/RoiCalculator";
import ProjectShowcase from "./components/ProjectShowcase";
import KnowledgeHub from "./components/KnowledgeHub";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0a0c0a] text-gray-100 min-h-screen relative selection:bg-w2e-lime selection:text-black">
      {/* Immersive UI Background Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1F6B1B] opacity-20 blur-[120px] rounded-full -z-20 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#8CC63F] opacity-12 blur-[100px] rounded-full -z-20 pointer-events-none" />

      {/* Decorative Technical Circular Elements - Responsive */}
      <div className="fixed top-[40%] right-[-50px] w-[200px] h-[200px] border border-[#8CC63F]/10 rounded-full flex items-center justify-center -z-10 pointer-events-none hidden md:flex">
        <div className="w-[150px] h-[150px] border border-[#8CC63F]/20 rounded-full flex items-center justify-center">
          <div className="w-[100px] h-[100px] border border-[#8CC63F]/40 rounded-full"></div>
        </div>
      </div>
      <div className="fixed bottom-[20%] left-[-80px] w-[250px] h-[250px] border border-[#1F6B1B]/10 rounded-full flex items-center justify-center -z-10 pointer-events-none hidden md:flex">
        <div className="w-[200px] h-[200px] border border-[#1F6B1B]/25 rounded-full flex items-center justify-center">
          <div className="w-[150px] h-[150px] border border-[#1F6B1B]/35 rounded-full"></div>
        </div>
      </div>

      {/* Background static clean line grids for a modern high-end look */}
      <div className="fixed inset-0 bg-[#0a0c0a] -z-30" />
      <div className="fixed inset-y-0 left-12 lg:left-24 w-[1px] bg-white/[0.015] -z-10 pointer-events-none" />
      <div className="fixed inset-y-0 right-12 lg:right-24 w-[1px] bg-white/[0.015] -z-10 pointer-events-none" />

      {/* Nav Section */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative">
        <Hero />
        <TrustMetrics />
        <About />
        <Solutions />
        <ProcessFlow />
        <Technology />
        <IndustriesServed />
        <EsgSustainability />
        <RoiCalculator />
        <ProjectShowcase />
        <KnowledgeHub />
        <ContactSection />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
