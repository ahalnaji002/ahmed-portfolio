import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import ahLogo from "../assets/logo/ah-logo.webp";

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
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

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
        <a href="#home" className="group flex items-center gap-3">
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

            return (
              <a
                key={item}
                href={"#" + id}
                className={
                  "relative py-2 text-sm font-medium transition duration-300 " +
                  (isActive ? "text-white" : "text-white/60 hover:text-white")
                }
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

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-xl border border-violet-400/40 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-purple-500/10 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(124,58,237,0.10)] transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/70 hover:shadow-[0_0_30px_rgba(124,58,237,0.22)] sm:flex"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative z-10">Let's Talk</span>

            <ArrowUpRight
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-violet-400/40 lg:hidden"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 grid max-w-7xl grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-[#080b18]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl lg:hidden"
          >
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <a
                  key={item}
                  href={"#" + id}
                  onClick={() => setMobileOpen(false)}
                  className={
                    "rounded-xl px-4 py-3 text-sm font-medium transition " +
                    (isActive
                      ? "bg-violet-500/10 text-violet-200"
                      : "text-white/55 hover:bg-white/5 hover:text-white")
                  }
                >
                  {item}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="mx-auto mt-2 h-px max-w-6xl bg-gradient-to-r from-transparent via-blue-500/30 to-transparent shadow-[0_0_14px_rgba(59,130,246,0.22)]" />
    </motion.header>
  );
}

export default Navbar;
