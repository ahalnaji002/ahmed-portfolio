import { motion } from "motion/react";
import { Check, Download, GraduationCap, Rocket } from "lucide-react";

const milestones = [
  { year: "2021", title: "The beginning", text: "Started Computer Engineering at the Islamic University of Gaza." },
  { year: "2022–23", title: "Engineering foundations", text: "Built strong foundations in programming, algorithms, databases, and computer systems." },
  { year: "2024–25", title: "From learning to building", text: "Turned knowledge into full-stack, backend, and mobile products solving real problems." },
  { year: "2027", title: "Ready for what’s next", text: "One semester from graduation and growing into a production-minded Full-Stack Developer." },
];

const technologies = ["React", "Node.js", "Express.js", "Laravel", "MySQL", "PostgreSQL", "Flutter", "Firebase"];

function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden px-6 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute bottom-[5%] right-[-5%] h-[440px] w-[440px] rounded-full bg-violet-600/10 blur-[150px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-sm font-bold tracking-[0.25em] text-violet-400">04 / JOURNEY</span>
              <div className="h-px w-16 bg-gradient-to-r from-violet-500 to-transparent" />
            </div>
            <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Every step added a new{" "}<span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">layer.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              My journey at the Islamic University of Gaza shaped the engineering mindset behind my work—understand deeply, build practically, and keep improving.
            </p>
          </div>
          <div className="inline-flex h-fit items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] px-5 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300"><GraduationCap size={22} /></span>
            <span><span className="block text-xs uppercase tracking-widest text-emerald-300/60">Current status</span><span className="mt-1 block font-bold text-white">One semester to graduation</span></span>
          </div>
        </div>
        <div className="relative grid gap-5 lg:grid-cols-4">
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-1 overflow-hidden rounded-full bg-white/5 lg:block">
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4 }}
              className="h-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
          </div>
          {milestones.map((item, index) => (
            <motion.article key={item.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 0.55 }} className="relative pt-1 lg:pt-16">
              <span className="absolute left-6 top-0 z-10 hidden h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#080b18] text-sm font-black text-white shadow-[0_0_25px_rgba(124,58,237,0.25)] lg:flex">
                {index === milestones.length - 1 ? <Rocket size={20} className="text-violet-300" /> : <Check size={18} className="text-cyan-300" />}
              </span>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/35">
                <span className="text-xs font-black tracking-[0.2em] text-violet-400">{item.year}</span>
                <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/45">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div><span className="text-sm font-bold text-white">Computer Engineering Student</span><span className="mt-1 block text-sm text-white/40">Islamic University of Gaza · 2021–2027</span></div>
            <div className="flex max-w-3xl flex-wrap gap-2">{technologies.map((tech) => <span key={tech} className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/60">{tech}</span>)}</div>
            <a
              href="/Ahmed_Al_Naji_CV.pdf"
              download="Ahmed_Al_Naji_CV.pdf"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-100 transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/60 hover:bg-violet-500/20"
            >
              Download CV
              <Download
                size={17}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
