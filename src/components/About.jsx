import { motion } from "motion/react";
import { GraduationCap, Code2, Database, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Computer Engineering",
    text: "Academic foundation in software, systems, and engineering problem-solving.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    text: "Building modern web experiences with React, Node.js, Laravel, and more.",
  },
  {
    icon: Database,
    title: "Backend Focus",
    text: "REST APIs, authentication, databases, architecture, and scalable application logic.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    text: "Turning requirements and real-world needs into practical digital solutions.",
  },
];

function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[15%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-[5%] right-[-5%] h-[440px] w-[440px] rounded-full bg-violet-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="text-sm font-bold tracking-[0.25em] text-violet-400">
            01 / ABOUT ME
          </span>

          <div className="h-px w-16 bg-gradient-to-r from-violet-500 to-transparent" />
        </motion.div>

        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering ideas into{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                real products.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              I&apos;m a Computer Engineering student and Full-Stack Developer
              focused on building practical, maintainable, and user-centered
              digital products.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/45">
              My work spans frontend development, backend systems, REST APIs,
              database design, mobile applications, and real-world client
              projects. I enjoy understanding the problem first, then building a
              solution that is clear, reliable, and scalable.
            </p>
          </motion.div>

          {/* Right side */}
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -7,
                    scale: 1.015,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-violet-400/35 hover:bg-white/[0.055]"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-500/15">
                      <Icon size={21} />
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/45">
                      {card.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
