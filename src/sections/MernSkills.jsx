import { motion } from "framer-motion";
import {
  FaDatabase,
  FaNodeJs,
  FaReact,
  FaServer,
} from "react-icons/fa";

export default function MernSkills() {
  const skills = [
    {
      name: "MongoDB",
      icon: <FaDatabase />,
      level: 90,
      tag: "Database",
      desc: "Scalable NoSQL design, indexing & aggregation pipelines.",
    },
    {
      name: "Express.js",
      icon: <FaServer />,
      level: 85,
      tag: "Backend",
      desc: "Robust APIs, middleware & secure authentication systems.",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      level: 95,
      tag: "Frontend",
      desc: "Dynamic UI, reusable components & smooth UX.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: 88,
      tag: "Server",
      desc: "Async backend systems & scalable architecture.",
    },
  ];

  return (
    <section id="skills" className="relative bg-[#050507] px-6 sm:px-10 lg:px-20 py-24 overflow-hidden">

      {/* GRID BG */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* MULTI GLOW */}
      <div className="absolute top-[-120px] left-[20%] w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[20%] w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <p className="text-xs tracking-[0.4em] text-cyan-400 mb-3">
          MY EXPERTISE
        </p>

        <h2 className="text-white text-3xl sm:text-5xl font-bold leading-tight">
          Crafting Powerful <br />
          <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            MERN Stack Systems
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Focused on performance, scalability and real-world solutions with modern development standards.
        </p>
      </div>

      {/* SKILLS */}
      <div className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 animate-[pulse_6s_linear_infinite]"
          >
            {/* INNER */}
            <div className="relative h-full rounded-2xl bg-[#0B0B10]/90 p-6 flex flex-col items-center text-center border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] transition">

              {/* TAG */}
              <span className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                {skill.tag}
              </span>

              {/* ICON */}
              <div className="text-3xl mb-4 text-cyan-400 group-hover:scale-110 transition">
                {skill.icon}
              </div>

              {/* CIRCLE */}
              <div className="relative w-24 h-24 mb-4">
                <svg className="w-full h-full rotate-[-90deg]">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40"
                    stroke="#1f1f1f"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={251}
                    initial={{ strokeDashoffset: 251 }}
                    whileInView={{
                      strokeDashoffset: 251 - (251 * skill.level) / 100,
                    }}
                    transition={{ duration: 1.8 }}
                    className="drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                  />
                </svg>

                {/* % */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                  {skill.level}%
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-white text-lg font-semibold mb-1">
                {skill.name}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-xs leading-relaxed opacity-80 group-hover:opacity-100">
                {skill.desc}
              </p>

              {/* BOTTOM GLOW LINE */}
              <div className="mt-5 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500"></div>

            </div>
          </motion.div>
        ))}

        {/* SVG */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient">
              <stop stopColor="#a855f7" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CTA */}
      <div className="relative z-10 text-center mt-24">
        <h3 className="text-white text-xl sm:text-2xl font-semibold">
          Let’s Build Something Exceptional
        </h3>

        <button className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-white font-semibold hover:scale-105 transition shadow-lg">
          Start a Project
        </button>
      </div>

    </section>
  );
}