import { motion } from "motion/react";
import { Code2, Server, Database, Smartphone } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "Creating modern, responsive interfaces with clean architecture and smooth user experiences.",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "React Router",
    ],
    accent: "cyan",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Developing APIs, business logic, and secure backend systems.",
    skills: [
      "Node.js",
      "Express.js",
      "Laravel",
      "PHP",
      "REST APIs",
      "JWT Authentication",
      "API Design",
      "MVC Architecture",
    ],
    accent: "violet",
  },
  {
    icon: Database,
    title: "Database",
    description: "Designing structured and reliable data solutions.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Database Design",
      "ERD Modeling",
      "SQL Queries",
      "Migrations",
      "Data Modeling",
    ],
    accent: "blue",
  },
  {
    icon: Smartphone,
    title: "Mobile & Cloud",
    description:
      "Building cross-platform mobile applications integrated with modern cloud services.",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "Flutter Widgets",
      "State Management",
      "Firebase Authentication",
      "Cloud Firestore",
      "Mobile UI Design",
    ],
    accent: "emerald",
  },
];

const accentStyles = {
  cyan: {
    icon: "text-cyan-300",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/10",
    hover: "hover:border-cyan-400/35",
    glow: "bg-cyan-500/10",
  },
  violet: {
    icon: "text-violet-300",
    border: "border-violet-400/20",
    bg: "bg-violet-400/10",
    hover: "hover:border-violet-400/35",
    glow: "bg-violet-500/10",
  },
  blue: {
    icon: "text-blue-300",
    border: "border-blue-400/20",
    bg: "bg-blue-400/10",
    hover: "hover:border-blue-400/35",
    glow: "bg-blue-500/10",
  },
  emerald: {
    icon: "text-emerald-300",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/10",
    hover: "hover:border-emerald-400/35",
    glow: "bg-emerald-500/10",
  },
};

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[10%] h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-[5%] right-[10%] h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="text-sm font-bold tracking-[0.25em] text-violet-400">
            02 / SKILLS
          </span>

          <div className="h-px w-16 bg-gradient-to-r from-violet-500 to-transparent" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technologies I use to build{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              real products.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
            A practical stack for building complete web and mobile solutions,
            from user interfaces and APIs to databases and cloud services.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const style = accentStyles[group.accent];

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  rotateX: 1.5,
                  rotateY: -1.5,
                  transition: {
                    type: "spring",
                    stiffness: 420,
                    damping: 28,
                    mass: 0.6,
                  },
                }}
                style={{
                  transformPerspective: 1000,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-colors duration-200 ${style.hover} hover:shadow-[0_22px_60px_rgba(124,58,237,0.12)]`}
              >
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full ${style.glow} blur-3xl opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div
                        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${style.border} ${style.bg} ${style.icon}`}
                      >
                        <Icon size={23} />
                      </div>

                      <h3 className="text-2xl font-bold text-white">
                        {group.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-7 text-white/45">
                        {group.description}
                      </p>
                    </div>

                    <span className="text-sm font-bold text-white/15">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Skill tags */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          y: -2,
                          scale: 1.04,
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 25,
                          },
                        }}
                        className="rounded-xl border border-white/10 bg-[#090d1a]/70 px-4 py-2 text-sm font-medium text-white/70 transition hover:border-white/20 hover:text-white"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech marquee */}
        <div className="mt-20 overflow-hidden border-y border-white/5 py-5">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max whitespace-nowrap"
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-center gap-8 pr-8 text-sm font-semibold uppercase tracking-[0.18em] text-white/25"
              >
                <span>React</span>
                <span className="text-violet-400/40">✦</span>

                <span>Tailwind CSS</span>
                <span className="text-violet-400/40">✦</span>

                <span>Node.js</span>
                <span className="text-violet-400/40">✦</span>

                <span>Express.js</span>
                <span className="text-violet-400/40">✦</span>

                <span>Laravel</span>
                <span className="text-violet-400/40">✦</span>

                <span>PHP</span>
                <span className="text-violet-400/40">✦</span>

                <span>MySQL</span>
                <span className="text-violet-400/40">✦</span>

                <span>PostgreSQL</span>
                <span className="text-violet-400/40">✦</span>

                <span>Flutter</span>
                <span className="text-violet-400/40">✦</span>

                <span>Firebase</span>
                <span className="text-violet-400/40">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
