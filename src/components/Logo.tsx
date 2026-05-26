/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", iconOnly = false, variant = "light" }: LogoProps) {
  // Solid Brand Green from Corporate Logo
  const brandGreen = "#226127";
  
  // Choose colors based on light vs dark theme backgrounds
  const textW2eColor = variant === "dark" ? "text-[#226127]" : "text-white";
  const textBioColor = variant === "dark" ? "text-[#226127]" : "text-[#8CC63F]";

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* High-Fidelity Company Logo Icon (Solid Leaf-Flame sphere) */}
      <div className="relative shrink-0 select-none">
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 transition-all duration-300"
        >
          {/* Main Solid Circular Background */}
          <circle cx="50" cy="50" r="46" fill={brandGreen} />
          
          {/* Left sweeping negative space curve (pure white carve out) */}
          <path
            d="M 45 6
               C 27 12, 16 32, 16 50
               C 16 68, 25 80, 31 86
               C 26 73, 29 57, 35 45
               C 41 33, 46 22, 45 6 Z"
            fill="#ffffff"
          />

          {/* Right nested negative space curve (pure white outline groove) */}
          <path
            d="M 52 32
               C 58 32, 78 44, 78 62
               C 78 78, 62 88, 48 91
               C 58 78, 62 65, 62 50
               C 62 38, 56 34, 52 32 Z"
            fill="#ffffff"
          />

          {/* Core Green inner leaf structure */}
          <path
            d="M 56 40
               C 61 40, 72 50, 72 62
               C 72 73, 60 81, 49 84
               C 56 74, 59 63, 59 52
               C 59 44, 58 42, 56 40 Z"
            fill={brandGreen}
          />
        </svg>
      </div>

      {/* Brand Name Block (Vertically Stacked as per Original Logo) */}
      {!iconOnly && (
        <div className="flex flex-col select-none font-sans leading-none">
          <span className={`font-sans font-black text-2xl tracking-tighter ${textW2eColor}`}>
            W2E
          </span>
          <span className={`block text-[10px] sm:text-[11px] tracking-[0.16em] font-sans font-black uppercase mt-0.5 ${textBioColor}`}>
            BIOENERGY
          </span>
        </div>
      )}
    </div>
  );
}
