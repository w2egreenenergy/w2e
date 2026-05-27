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
    <div className="bg-[#0B0F0C] text-gray-100 min-h-screen relative selection:bg-[#3DDC84] selection:text-black">
      {/* Background static clean line grids for a modern high-end look */}
      <div className="fixed inset-0 bg-[#0B0F0C] -z-30" />
      
      {/* Immersive Dark Eco-Tech Ambient Glows - Static GPU-optimized atmospheric blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#00C853] opacity-[0.16] blur-[130px] rounded-full -z-20 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00E5FF] opacity-[0.08] blur-[110px] rounded-full -z-20 pointer-events-none" />
      <div className="fixed top-[40%] left-[30%] w-[35%] h-[35%] bg-[#7A8F3B] opacity-[0.05] blur-[120px] rounded-full -z-20 pointer-events-none" />

      {/* Decorative Technical Circular Elements - Responsive */}
      <div className="fixed top-[40%] right-[-50px] w-[200px] h-[200px] border border-[#3DDC84]/15 rounded-full flex items-center justify-center -z-10 pointer-events-none hidden md:flex">
        <div className="w-[150px] h-[150px] border border-[#3DDC84]/20 rounded-full flex items-center justify-center">
          <div className="w-[100px] h-[100px] border border-[#00E5FF]/25 rounded-full"></div>
        </div>
      </div>
      <div className="fixed bottom-[20%] left-[-80px] w-[250px] h-[250px] border border-[#00C853]/15 rounded-full flex items-center justify-center -z-10 pointer-events-none hidden md:flex">
        <div className="w-[200px] h-[200px] border border-[#00C853]/20 rounded-full flex items-center justify-center">
          <div className="w-[150px] h-[150px] border border-[#3DDC84]/25 rounded-full"></div>
        </div>
      </div>

      <div className="fixed inset-0 kinetic-grid opacity-75 -z-20 pointer-events-none" />
      <div className="fixed inset-y-0 left-12 lg:left-24 w-[1px] bg-white/[0.012] -z-10 pointer-events-none" />
      <div className="fixed inset-y-0 right-12 lg:right-24 w-[1px] bg-white/[0.012] -z-10 pointer-events-none" />

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
