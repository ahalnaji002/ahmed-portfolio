import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useLocation, Link } from "react-router-dom";

import ahLogo from "../assets/logo/ah-logo.png";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Journey",
  "Certificates",
  "Contact",
];

function Navbar() {
  const location = useLocation();

  const isProjectPage = location.pathname.startsWith("/projects");

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <a
          href={isProjectPage ? "/#home" : "#home"}
          className="group flex items-center gap-3"
        >
          <img
            src={ahLogo}
            alt="Ahmed Hashem Logo"
            className="h-12 w-12 object-contain transition duration-300 group-hover:scale-110"
          />

          <span className="text-[30px] leading-none font-black tracking-[-0.04em] text-white">
            AH<span className="text-violet-500">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;

            return isProjectPage ? (
              <Link
                key={item}
                to={`/#${id}`}
                className={`relative py-2 text-sm font-medium transition duration-300 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {item}

                {isActive && (
                  <motion.span
                    layoutId="active-nav-dot"
                    className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-400"
                  />
                )}
              </Link>
            ) : (
              <a
                key={item}
                href={`#${id}`}
                className={`relative py-2 text-sm font-medium transition duration-300 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {item}

                {isActive && (
                  <motion.span
                    layoutId="active-nav-dot"
                    className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-400"
                  />
                )}
              </a>
            );
          })}
        </div>

        <a
          href={isProjectPage ? "/#contact" : "#contact"}
          className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-violet-400/40 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-purple-500/10 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(124,58,237,0.10)] transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/70 hover:shadow-[0_0_30px_rgba(124,58,237,0.22)]"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <span className="relative z-10">Let's Talk</span>

          <ArrowUpRight
            size={16}
            className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </nav>

      <div className="mx-auto mt-2 h-px max-w-6xl bg-gradient-to-r from-transparent via-blue-500/30 to-transparent shadow-[0_0_14px_rgba(59,130,246,0.22)]" />
    </motion.header>
  );
}

export default Navbar;
