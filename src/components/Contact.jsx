import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Mail,
  Sparkles,
} from "lucide-react";

const contactLinks = [
  { label: "Email", value: "ahalnaji002@gmail.com", href: "mailto:ahalnaji002@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "ahmed-hashem-alnaji", href: "https://www.linkedin.com/in/ahmed-hashem-alnaji/", icon: BriefcaseBusiness },
  { label: "GitHub", value: "ahalnaji002", href: "https://github.com/ahalnaji002", icon: Code2 },
];

const projectOptions = ["Web App", "Backend / API", "Mobile App"];
const stageOptions = ["Just an idea", "Have a design", "Ready to build"];
const priorityOptions = ["Launch quickly", "Clean architecture", "Scale later"];

const projectMessages = {
  "Web App": "turn your web app idea into a focused, practical product",
  "Backend / API": "design a reliable backend with clean APIs and room to grow",
  "Mobile App": "shape your mobile app into a smooth, useful experience",
};

function Contact() {
  const [visitorName, setVisitorName] = useState("");
  const [project, setProject] = useState(projectOptions[0]);
  const [stage, setStage] = useState(stageOptions[0]);
  const [priority, setPriority] = useState(priorityOptions[0]);

  const subject = encodeURIComponent(project + " project inquiry");
  const introduction = visitorName.trim()
    ? "I'm " + visitorName.trim() + ", and I'm interested in building a " + project + "."
    : "I'm interested in building a " + project + ".";
  const body = encodeURIComponent(
    [
      "Hi Ahmed,",
      "",
      introduction,
      "Current stage: " + stage,
      "Priority: " + priority,
      "",
      "A short note about my idea:",
      "",
    ].join("\n"),
  );
  const projectEmail = "mailto:ahalnaji002@gmail.com?subject=" + subject + "&body=" + body;

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-20%] left-[20%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute right-[10%] top-[5%] h-[380px] w-[380px] rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-10 lg:p-14"
      >
        <span className="text-sm font-bold tracking-[0.25em] text-violet-400">
          06 / CONTACT
        </span>

        <div className="mt-6 max-w-4xl">
          <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              meaningful.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-white/50">
            Tell me what you&apos;re building. In a few clicks, I&apos;ll prepare
            the first message so we can start with clarity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-3xl border border-violet-400/20 bg-[#080c1a]/75 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-7">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300/70">
                  Project starter
                </p>
                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Shape your idea in 20 seconds.
                </h3>
              </div>
              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300 sm:flex">
                <Sparkles size={21} />
              </span>
            </div>

            <label className="mb-6 block">
              <span className="mb-3 flex items-center gap-3">
                <span className="text-[11px] font-black tracking-[0.18em] text-violet-400">
                  HELLO
                </span>
                <span className="text-sm font-semibold text-white/75">
                  What should I call you?
                </span>
              </span>
              <input
                type="text"
                value={visitorName}
                onChange={(event) => setVisitorName(event.target.value)}
                maxLength={60}
                autoComplete="name"
                placeholder="Your name (optional)"
                className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-violet-400/50 focus:bg-violet-500/[0.05] focus:ring-2 focus:ring-violet-500/10"
              />
            </label>

            <div className="space-y-6">
              <ChoiceGroup
                step="01"
                label="What are we building?"
                options={projectOptions}
                value={project}
                onChange={setProject}
              />
              <ChoiceGroup
                step="02"
                label="Where are you now?"
                options={stageOptions}
                value={stage}
                onChange={setStage}
              />
              <ChoiceGroup
                step="03"
                label="What matters most?"
                options={priorityOptions}
                value={priority}
                onChange={setPriority}
              />
            </div>

            <motion.div
              key={project + stage + priority}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.055] p-5"
            >
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                  <Check size={16} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">This sounds like a good fit.</p>
                  <p className="mt-1 text-sm leading-6 text-white/50">
                    I can help you {projectMessages[project]}, with{" "}
                    {priority.toLowerCase()} in mind.
                  </p>
                </div>
              </div>
            </motion.div>

            <a
              href={projectEmail}
              className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#050816] transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/20"
            >
              Start this project
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <div className="mb-2">
              <p className="text-sm font-bold text-white">Prefer a direct hello?</p>
              <p className="mt-1 text-sm leading-6 text-white/40">
                Reach me through any channel below.
              </p>
            </div>

            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-violet-400/40 hover:bg-white/[0.05]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <Icon size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-white/35">
                    {label}
                  </span>
                  <span className="mt-1 block truncate text-sm font-medium text-white/75">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                />
              </a>
            ))}

            <div className="mt-auto rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm leading-6 text-white/35">
              Clear scope, honest communication, and practical solutions from
              the first conversation.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ChoiceGroup({ step, label, options, value, onChange }) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <span className="text-[11px] font-black tracking-[0.18em] text-violet-400">
          {step}
        </span>
        <p className="text-sm font-semibold text-white/75">{label}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = value === option;

          return (
            <button
              key={option}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onChange(option)}
              className={
                "rounded-xl border px-3.5 py-2.5 text-sm font-medium transition duration-200 " +
                (isSelected
                  ? "border-violet-400/50 bg-violet-500/15 text-white shadow-[0_0_20px_rgba(124,58,237,0.1)]"
                  : "border-white/10 bg-white/[0.025] text-white/45 hover:border-white/20 hover:text-white/75")
              }
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
