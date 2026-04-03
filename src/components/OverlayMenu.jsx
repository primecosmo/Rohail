import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function OverlayMenu({ isOpen, onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const origin = isMobile ? "90% 6%" : "50% 6%";

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Why Choose", link: "#why" },
    { name: "Our Skills", link: "#skills" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-start pt-28
                     bg-[#0A0A0A] overflow-y-auto"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#c084fc] hover:text-[#6a35ff]
                       text-3xl transition z-[1100]"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          {/* MENU LINKS */}
          <ul className="space-y-8 text-center w-full z-[1050]">

            {navItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
              >
                <a
                  href={item.link}
                  onClick={onClose}
                  className="text-2xl font-semibold text-white hover:text-[#c084fc] transition"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}

            {/* CONTACT BUTTON */}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <a href="#contact" onClick={onClose}>
                <button className="px-8 py-3 rounded-xl bg-gradient-to-r 
                from-[#6a35ff] via-[#c084fc] to-[#00c2cb] 
                text-white font-semibold shadow-lg hover:scale-105 transition">
                  Contact
                </button>
              </a>
            </motion.li>

          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}