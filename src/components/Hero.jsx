import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail, Code2 } from "lucide-react";

import ahmedHero from "../assets/ahmed-hero.png";
import nodeLogo from "../assets/tech/nodejs.svg";

function GithubIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7C5.7.7.7 5.8.7 12.2c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16.7 4.7 17.7 5 17.7 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.3 5.8 18.3.7 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.8c0-3.75-2-5.5-4.65-5.5a4.02 4.02 0 0 0-3.62 1.98V8.5H9.25V21h3.48v-6.2c0-1.63.31-3.2 2.33-3.2 1.99 0 2.01 1.86 2.01 3.3V21H21v-7.2Z" />
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
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
          animate={{
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
              initial={{ opacity: 0, y: 20 }}
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
              initial={{ opacity: 0, y: 25 }}
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
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl lg:text-[88px]"
            >
              Ahmed Hashem
              <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                Alnaji
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
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
              initial={{ opacity: 0, y: 25 }}
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
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex items-center gap-3"
            >
              <a
                href="#"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white/60 transition hover:border-violet-400/40 hover:text-white"
              >
                <GithubIcon size={19} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white/60 transition hover:border-violet-400/40 hover:text-white"
              >
                <LinkedinIcon size={19} />
              </a>

              <a
                href="#contact"
                aria-label="Email"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white/60 transition hover:border-violet-400/40 hover:text-white"
              >
                <Mail size={19} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.7,
              duration: 1,
              ease: "easeOut",
            }}
            className="relative hidden min-h-[620px] -translate-y-19 items-center justify-center lg:flex"
          >
            {/* Outer glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.75, 0.45],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[470px] w-[470px] rounded-full bg-gradient-to-r from-blue-500/25 via-violet-500/20 to-purple-600/25 blur-[90px]"
            />
            {/* Glass panel */}
            <div className="absolute h-[520px] w-[430px] rounded-[36px] border border-white/10 bg-white/[0.025] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-md" />
            {/* Neon ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[410px] w-[410px] rounded-full border border-blue-400/30 shadow-[0_0_40px_rgba(59,130,246,0.25),0_0_100px_rgba(124,58,237,0.20)]"
            />
            {/* Second ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[360px] w-[360px] rounded-full border border-dashed border-violet-400/20"
            />
            {/* Image */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-[460px] w-[360px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.02] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            >
              <img
                src={ahmedHero}
                alt="Ahmed Hashem Alnaji"
                className="h-full w-full object-cover object-[center_18%]"
              />

              {/* Dark fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050816] via-[#050816]/55 to-transparent" />

              {/* Soft glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/10" />
            </motion.div>
            {/* Floating tech badges */}

            {/* React */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[-28px] top-[105px] z-20 flex h-[92px] w-[84px] flex-col items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#08111f]/80 shadow-[0_0_30px_rgba(34,211,238,0.16)] backdrop-blur-xl"
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
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[5px] top-[235px] z-20 flex h-[92px] w-[84px] flex-col items-center justify-center rounded-xl border border-blue-400/30 bg-[#08111f]/80 shadow-[0_0_24px_rgba(96,165,250,0.14)] backdrop-blur-xl"
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
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 4.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[-28px] top-[365px] z-20 flex h-[92px] w-[84px] flex-col items-center justify-center rounded-xl border border-green-400/30 bg-[#08111f]/80 shadow-[0_0_24px_rgba(74,222,128,0.14)] backdrop-blur-xl"
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
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 4.9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[-28px] top-[105px] z-20 flex h-[92px] w-[84px] flex-col items-center justify-center rounded-xl border border-sky-400/30 bg-[#08111f]/80 shadow-[0_0_24px_rgba(56,189,248,0.14)] backdrop-blur-xl"
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
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[5px] top-[235px] z-20 flex h-[92px] w-[84px] flex-col items-center justify-center rounded-xl border border-yellow-400/30 bg-[#08111f]/80 shadow-[0_0_24px_rgba(250,204,21,0.14)] backdrop-blur-xl"
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
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 5.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[-28px] top-[365px] z-20 flex h-[92px] w-[84px] flex-col items-center justify-center rounded-xl border border-cyan-400/30 bg-[#08111f]/80 shadow-[0_0_24px_rgba(34,211,238,0.14)] backdrop-blur-xl"
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
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: { delay: 1.3 },
          y: {
            duration: 1.8,
            repeat: Infinity,
          },
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

        <ArrowDown size={17} />
      </motion.a>
    </section>
  );
}

export default Hero;
