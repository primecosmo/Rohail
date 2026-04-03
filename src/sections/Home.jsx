import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaDatabase, FaReact } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground.jsx";

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen bg-[#0F0F0F] overflow-hidden px-6 sm:px-12 lg:px-20 py-24">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* TOP BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2a2a2a] bg-[#151515] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse"></span>
            <p className="text-xs text-[#c084fc] tracking-wider">
              5+ YEARS EXPERIENCE
            </p>
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-white font-extrabold leading-tight text-4xl sm:text-6xl lg:text-7xl">
            I Scale <br />
            <span className="bg-gradient-to-r from-[#6a35ff] via-[#c084fc] to-[#00c2cb] bg-clip-text text-transparent">
              Digital Ideas
            </span>{" "}
            <br />
            Into Reality.
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-[#9CA3AF] max-w-xl text-sm sm:text-lg leading-relaxed">
            Specializing{" "}
            <span className="text-[#c084fc] font-medium">MERN</span>,{" "}
            <span className="text-[#00c2cb] font-medium">Flutter</span>, and{" "}
            <span className="text-white font-medium">SEO</span>. High-performance
            architecture for global scale.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-7 py-3 rounded-xl font-semibold text-white 
              bg-gradient-to-r from-[#6a35ff] via-[#c084fc] to-[#00c2cb] 
              shadow-lg hover:scale-105 transition">
              Start Project
            </button>

            <button className="px-7 py-3 rounded-xl border border-[#2F2F2F] text-white 
              hover:border-[#c084fc] hover:text-[#c084fc] transition">
              Methodology
            </button>
          </div>
        </div>

        {/* RIGHT SIDE FLOATING CARDS */}
        <div className="relative flex flex-col gap-8">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#6a35ff] to-[#00c2cb] flex items-center justify-center text-white text-lg">
                <FaMobileAlt />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">
                  Flutter Mobility
                </h3>
                <p className="text-xs text-[#00c2cb]">
                  CROSS-PLATFORM HUB
                </p>
              </div>
            </div>

            <p className="text-xs text-[#9CA3AF] mb-2">RENDERING ENGINE</p>

            <div className="w-full h-2 bg-[#1f1f1f] rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-gradient-to-r from-[#6a35ff] to-[#00c2cb] rounded-full"></div>
            </div>

            <p className="text-right text-xs text-[#9CA3AF] mt-1">120 FPS</p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border border-[#0F0F0F] bg-green-500 flex items-center justify-center text-white text-sm">
                  <FaReact />
                </div>
                <div className="w-8 h-8 rounded-full border border-[#0F0F0F] bg-blue-500 flex items-center justify-center text-white text-sm">
                  <FaDatabase />
                </div>
                <div className="w-8 h-8 rounded-full border border-[#0F0F0F] bg-purple-500 flex items-center justify-center text-white text-sm">
                  <FaMobileAlt />
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm">
                  MERN Ecosystem
                </h3>
                <p className="text-xs text-[#c084fc]">
                  FULL-STACK SCALE
                </p>
              </div>
            </div>

            <p className="text-xs text-[#9CA3AF] mb-2">ENGINE COMPLEXITY</p>

            <div className="w-full h-2 bg-[#1f1f1f] rounded-full overflow-hidden">
              <div className="h-full w-[98%] bg-gradient-to-r from-[#6a35ff] via-[#c084fc] to-[#00c2cb] rounded-full"></div>
            </div>

            <p className="text-right text-xs text-[#9CA3AF] mt-1">98%</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}