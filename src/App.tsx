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
import { motion } from "motion/react";

export default function App() {
  // Configured positions for high-end floating eco particles
  const particles = [
    { size: 6, left: "10%", top: "15%", duration: 18, delay: 0 },
    { size: 4, left: "85%", top: "25%", duration: 25, delay: 2 },
    { size: 8, left: "40%", top: "45%", duration: 22, delay: 4 },
    { size: 5, left: "70%", top: "60%", duration: 30, delay: 1 },
    { size: 7, left: "20%", top: "75%", duration: 20, delay: 3 },
    { size: 5, left: "80%", top: "85%", duration: 28, delay: 5 },
    { size: 9, left: "50%", top: "92%", duration: 24, delay: 2 },
  ];

  return (
    <div className="bg-[#0B0F0C] text-gray-100 min-h-screen relative selection:bg-[#3DDC84] selection:text-black">
      {/* Immersive Dark Eco-Tech Ambient Glows - Animated breathing/mesh effect */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#00C853] blur-[150px] rounded-full -z-20 pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00E5FF] blur-[130px] rounded-full -z-20 pointer-events-none" 
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="fixed top-[40%] left-[30%] w-[35%] h-[35%] bg-[#7A8F3B] blur-[140px] rounded-full -z-20 pointer-events-none"
      />

      {/* Floating Premium Eco-Particles Container */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-[#3DDC84]/20 mix-blend-screen"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              boxShadow: "0 0 8px rgba(61, 220, 132, 0.4)",
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

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

      {/* Background static clean line grids for a modern high-end look */}
      <div className="fixed inset-0 bg-[#0B0F0C] -z-30" />
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
