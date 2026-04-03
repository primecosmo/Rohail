import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaRocket,
  FaBrain,
} from "react-icons/fa";

export default function WhyChooseMe() {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean & Scalable Code",
      desc: "Structured, maintainable and scalable MERN applications with modern architecture.",
    },
    {
      icon: <FaServer />,
      title: "Full-Stack Expertise",
      desc: "Complete solutions from frontend UI to backend APIs and database systems.",
    },
    {
      icon: <FaRocket />,
      title: "High Performance",
      desc: "Fast loading, optimized systems with smooth user experience.",
    },
    {
      icon: <FaBrain />,
      title: "Smart Solutions",
      desc: "Creative and logical problem solving for real-world challenges.",
    },
  ];

  return (
    <section id="why" className="relative bg-[#07070A] px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">

      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs text-purple-400 tracking-[0.4em] mb-3">
          WHY CHOOSE ME
        </p>

        <h2 className="text-white text-3xl sm:text-5xl font-bold">
          Crafting Next-Level <br />
          <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            MERN Experiences
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          I don’t just build apps — I create scalable, high-performance digital products that deliver real impact.
        </p>
      </div>

      {/* FEATURES */}
      <div className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-6">

        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.04 }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500"
          >
            {/* INNER CARD */}
            <div className="relative h-full rounded-2xl bg-[#0D0D12] p-6 sm:p-8 border border-[#1a1a1a] backdrop-blur-xl">

              {/* TOP RIGHT TAG */}
              <span className="absolute top-4 right-4 text-[10px] text-purple-400 border border-purple-400/30 px-2 py-1 rounded-full">
                PRO
              </span>

              {/* ICON */}
              <div className="text-3xl mb-4 text-purple-400 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* BOTTOM LINE */}
              <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* STATS */}
      <div className="relative z-10 max-w-5xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">

        {[
          { number: "10+", label: "Projects Delivered" },
          { number: "2+", label: "Years Experience" },
          { number: "100%", label: "Client Satisfaction" },
          { number: "24/7", label: "Support Mindset" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="text-center p-5 rounded-xl bg-[#0D0D12] border border-[#1f1f1f] backdrop-blur-xl"
          >
            <h3 className="text-white text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {item.number}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}