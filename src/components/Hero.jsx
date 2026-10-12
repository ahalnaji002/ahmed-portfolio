import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, Mail, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

import ahmedHero from "../assets/ahmed-hero-cutout.webp";
import nodeLogo from "../assets/tech/nodejs.svg";

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={prefersReducedMotion ? {} : {
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[25%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]"
        />

        <motion.div
          animate={prefersReducedMotion ? {} : {
            x: [0, -60, 0],
            y: [0, 70, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[130px]"
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            {/* Availability */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-sm font-medium text-emerald-300">
                Available for opportunities
              </span>
            </motion.div>

            {/* Small Heading */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mb-4 flex items-center gap-3"
            >
              <Code2 size={21} className="text-violet-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-base">
                Full-Stack Developer
              </p>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl lg:text-[88px]"
            >
              Ahmed Hashem
              <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                Al Naji
              </span>
            </motion.h1>

            {/* Mobile portrait */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.62, duration: 0.7, ease: "easeOut" }}
              className="relative mx-auto mt-8 flex h-[290px] w-[290px] items-end justify-center lg:hidden"
            >
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-500/25 via-violet-500/15 to-purple-500/25 blur-2xl" />
              <div className="absolute inset-2 rounded-full border border-blue-400/25 shadow-[0_0_45px_rgba(59,130,246,0.18)]" />
              <div className="absolute inset-5 rounded-full border border-dashed border-violet-400/20" />

              <div className="relative h-[270px] w-[270px] overflow-hidden rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.16),rgba(124,58,237,0.08)_52%,rgba(5,8,22,0.45)_78%)] shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                <img
                  src={ahmedHero}
                  alt="Ahmed Hashem Al Naji"
                  className="h-full w-full translate-y-2 scale-[0.98] object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg"
            >
              Computer Engineering student and Full-Stack Developer building
              modern web applications, RESTful APIs, and practical digital
              solutions with a strong focus on backend engineering.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#050816] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/20"
              >
                View My Work
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.08]"
              >
                Contact Me
              </a>

              <a
                href="/Ahmed_Al_Naji_CV.pdf"
                download="Ahmed_Al_Naji_CV.pdf"
                className="group flex items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/[0.08] px-6 py-3.5 font-semibold text-violet-100 transition duration-300 hover:-translate-y-1 hover:border-violet-300/60 hover:bg-violet-500/15"
              >
                Download CV
                <Download
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex items-center gap-3"
            >
              <a
                href="https://github.com/ahalnaji002"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white/60 transition hover:border-violet-400/40 hover:text-white"
              >
                <GithubIcon size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-hashem-alnaji/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white/60 transition hover:border-violet-400/40 hover:text-white"
              >
                <LinkedinIcon size={19} />
              </a>

              <a
                href="mailto:ahalnaji002@gmail.com"
                aria-label="Email"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white/60 transition hover:border-violet-400/40 hover:text-white"
              >
                <Mail size={19} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.7,
               duration: 0.85,
               ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden min-h-[620px] -translate-y-19 items-center justify-center lg:flex"
          >
            {/* Outer glow */}
            <div
              className="absolute h-[470px] w-[470px] rounded-full bg-gradient-to-r from-blue-500/25 via-violet-500/20 to-purple-600/25 blur-[90px]"
            />
            {/* Glass panel */}
            <div className="absolute h-[480px] w-[480px] rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.13),rgba(124,58,237,0.05)_48%,rgba(5,8,22,0.3)_75%)] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-md" />
            {/* Neon ring */}
            <div
              className="absolute h-[450px] w-[450px] transform-gpu rounded-full border border-blue-400/30 shadow-[0_0_40px_rgba(59,130,246,0.25),0_0_100px_rgba(124,58,237,0.20)] will-change-transform"
            />
            {/* Second ring */}
            <div
              className="absolute h-[410px] w-[410px] transform-gpu rounded-full border border-dashed border-violet-400/20 will-change-transform"
            />
            {/* Image */}
            <div className="relative z-10 h-[440px] w-[440px] transform-gpu overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-blue-500/[0.04] to-violet-500/[0.08] shadow-[inset_0_0_60px_rgba(59,130,246,0.06)] will-change-transform">
              <img
                src={ahmedHero}
                alt="Ahmed Hashem Al Naji"
                className="h-full w-full translate-y-4 scale-[1.02] object-contain object-bottom drop-shadow-[0_28px_45px_rgba(0,0,0,0.42)]"
              />
            </div>
            {/* Floating tech badges */}
            <div className="hero-orbit absolute h-[620px] w-[620px]">
            <div className="pointer-events-none absolute left-[25px] top-[80px] h-[460px] w-[570px] rounded-[50%] border border-dashed border-violet-400/15" />

            {/* React */}
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.035 }}
              style={{ animationDelay: "0s" }}
              className="hero-orbit-card z-20 flex h-[82px] w-[78px] flex-col items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#08111f]/90 shadow-[0_0_30px_rgba(34,211,238,0.16)] backdrop-blur-xl"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/5">
                <svg
                  viewBox="-11.5 -10.23174 23 20.46348"
                  className="h-8 w-8 text-cyan-400"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="0" cy="0" r="2.05" fill="currentColor" />

                  <g stroke="currentColor" strokeWidth="1">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </div>

              <span className="text-xs font-semibold text-white">React</span>
            </motion.div>

            {/* MySQL */}
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.035 }}
              style={{ animationDelay: "-5s" }}
              className="hero-orbit-card z-20 flex h-[82px] w-[78px] flex-col items-center justify-center rounded-xl border border-blue-400/30 bg-[#08111f]/90 shadow-[0_0_24px_rgba(96,165,250,0.14)] backdrop-blur-xl"
            >
              <div className="mb-1.5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400/5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  aria-hidden="true"
                >
                  <ellipse
                    cx="12"
                    cy="6"
                    rx="6.5"
                    ry="2.8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M5.5 6v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M5.5 11v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </div>

              <span className="text-xs font-semibold text-white">MySQL</span>
            </motion.div>

            {/* Node.js */}
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.035 }}
              style={{ animationDelay: "-10s" }}
              className="hero-orbit-card z-20 flex h-[82px] w-[78px] flex-col items-center justify-center rounded-xl border border-green-400/30 bg-[#08111f]/90 shadow-[0_0_24px_rgba(74,222,128,0.14)] backdrop-blur-xl"
            >
              <div className="mb-1.5 flex h-10 w-10 items-center justify-center rounded-lg bg-green-400/5">
                <img
                  src={nodeLogo}
                  alt="Node.js"
                  className="h-8 w-8 object-contain"
                />
              </div>

              <span className="text-xs font-semibold text-white">Node.js</span>
            </motion.div>

            {/* Dart */}
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.035 }}
              style={{ animationDelay: "-15s" }}
              className="hero-orbit-card z-20 flex h-[82px] w-[78px] flex-col items-center justify-center rounded-xl border border-sky-400/30 bg-[#08111f]/90 shadow-[0_0_24px_rgba(56,189,248,0.14)] backdrop-blur-xl"
            >
              <div className="mb-1.5 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 4.5h7.5L19 11v8.5h-7.5L5 13V4.5Z"
                    fill="#42A5F5"
                  />

                  <path d="M12.5 4.5 19 11h-6.5L6 4.5h6.5Z" fill="#29B6F6" />

                  <path d="M5 13h7.5L19 19.5h-7.5L5 13Z" fill="#0288D1" />
                </svg>
              </div>

              <span className="text-xs font-semibold text-white">Dart</span>
            </motion.div>

            {/* Firebase */}
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.035 }}
              style={{ animationDelay: "-20s" }}
              className="hero-orbit-card z-20 flex h-[82px] w-[78px] flex-col items-center justify-center rounded-xl border border-yellow-400/30 bg-[#08111f]/90 shadow-[0_0_24px_rgba(250,204,21,0.14)] backdrop-blur-xl"
            >
              <div className="mb-1.5 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M5 18.5 7.8 4.5l3.4 6.3L5 18.5Z" fill="#FFA000" />

                  <path d="m7.8 4.5 7.2 13.8-3.8-7.5-3.4-6.3Z" fill="#F57C00" />

                  <path
                    d="m5 18.5 6.2-7.7 2.6-2.5 5.2 10.2-7 3-7-3Z"
                    fill="#FFC107"
                  />
                </svg>
              </div>

              <span className="text-xs font-semibold text-white">Firebase</span>
            </motion.div>

            {/* Flutter */}
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.035 }}
              style={{ animationDelay: "-25s" }}
              className="hero-orbit-card z-20 flex h-[82px] w-[78px] flex-col items-center justify-center rounded-xl border border-cyan-400/30 bg-[#08111f]/90 shadow-[0_0_24px_rgba(34,211,238,0.14)] backdrop-blur-xl"
            >
              <div className="mb-1.5 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M14.5 3 5 12.5 8.5 16 18 6.5 14.5 3Z"
                    fill="#42A5F5"
                  />

                  <path
                    d="M11 17.5 14.5 21 19 16.5 15.5 13 11 17.5Z"
                    fill="#0D47A1"
                  />

                  <path
                    d="M8.5 16 12 19.5 15.5 16 12 12.5 8.5 16Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span className="text-xs font-semibold text-white">Flutter</span>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
        }}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 cursor-pointer rounded-xl px-4 py-2 text-white/30 transition hover:text-violet-300 md:block"
      >
        <motion.span
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, 7, 0] }}
          transition={{
            opacity: { delay: 1.3 },
            y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={17} />
        </motion.span>
      </a>
    </section>
  );
}

export default Hero;
