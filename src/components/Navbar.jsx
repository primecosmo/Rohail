import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/rrd.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);
    return () => homeSection && observer.unobserve(homeSection);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible || menuOpen) {
        setVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceVisible, menuOpen]);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Why Choose", link: "#why" },
    { name: "Our Skills", link: "#skills" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
        bg-[#0F0F0F]/95 backdrop-blur-xl border-b border-[#2F2F2F]`}
      >
        <div className="relative max-w-7xl mx-auto h-20 flex items-center justify-between px-4 sm:px-6">

          {/* LOGO */}
          <a
            href="#home"
            className="absolute left-[10px] top-1/2 -translate-y-1/2 lg:static lg:translate-y-0 flex items-center"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto object-contain hover:scale-105 transition"
            />
          </a>

          {/* DESKTOP LINKS */}
          <div
            className="hidden lg:flex items-center gap-10 text-[#D1D5DB] text-sm
            absolute left-1/2 -translate-x-1/2"
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="relative group hover:text-white transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 
                bg-gradient-to-r from-[#6a35ff] via-[#c084fc] to-[#00c2cb] 
                transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="#contact"
              className="hidden sm:inline-flex px-6 py-2 rounded-xl
              bg-gradient-to-r from-[#6a35ff] via-[#c084fc] to-[#00c2cb]
              text-white font-semibold transition"
            >
              Contact
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="text-[#c084fc] text-3xl lg:hidden hover:scale-110 transition"
              aria-label="Open Menu"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}