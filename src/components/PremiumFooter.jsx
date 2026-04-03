import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function PremiumFooter() {

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "Why Choose", link: "#why" },
    { name: "Our Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    { icon: FaLinkedin, link: "https://linkedin.com" },
    { icon: FaGithub, link: "https://github.com" },
    { icon: FaEnvelope, link: "mailto:rohaildev@gmail.com" },
  ];

  return (
    <footer className="relative bg-[#050507] text-white pt-20 pb-10 overflow-hidden">

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
      <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full" />

      {/* CTA CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center 
        bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-16"
      >
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Let’s Build Something <span className="text-cyan-400">Amazing</span>
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Have an idea? I can turn it into a powerful digital product.
          </p>
        </div>

        <a href="#contact">
          <button className="mt-3 md:mt-0 px-7 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 
          text-white font-semibold hover:scale-105 transition shadow-lg">
            Get In Touch
          </button>
        </a>
      </motion.div>

      {/* MAIN GRID */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Rohail Dev
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            MERN Stack Developer building fast, scalable web apps with modern UI and strong backend systems.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="relative text-gray-400 hover:text-cyan-400 transition group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>

          <div className="flex gap-4">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
              >
                <item.icon className="text-gray-300 hover:text-cyan-400" size={18} />
              </motion.a>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4">
            rohail.codes@gmail.com
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 mt-16 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rohail Dev — All Rights Reserved.
      </div>
    </footer>
  );
}