import { motion } from "motion/react";
import { ArrowUpRight, BriefcaseBusiness, Code2, Mail } from "lucide-react";

const contactLinks = [
  { label: "Email", value: "ahalnaji002@gmail.com", href: "mailto:ahalnaji002@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "ahmed-hashem-alnaji", href: "https://www.linkedin.com/in/ahmed-hashem-alnaji/", icon: BriefcaseBusiness },
  { label: "GitHub", value: "ahalnaji002", href: "https://github.com/ahalnaji002", icon: Code2 },
];

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-20%] left-[20%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute right-[10%] top-[5%] h-[380px] w-[380px] rounded-full bg-violet-600/10 blur-[140px]" />
      </div>
      <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-10 lg:p-14">
        <span className="text-sm font-bold tracking-[0.25em] text-violet-400">06 / CONTACT</span>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">meaningful.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/50">Have a project, opportunity, or idea in mind? Reach out through email or connect with me on LinkedIn and GitHub.</p>
          </div>
          <div className="grid gap-3">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-violet-400/40 hover:bg-white/[0.05]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300"><Icon size={20} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-white/35">{label}</span>
                  <span className="mt-1 block truncate text-sm font-medium text-white/75 sm:text-base">{value}</span>
                </span>
                <ArrowUpRight size={18} className="text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
