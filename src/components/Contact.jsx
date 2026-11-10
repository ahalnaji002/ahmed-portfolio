import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Container, Reveal, SectionHeader, Window } from "./ui";

const contactLinks = [
  { label: "email", value: "ahalnaji002@gmail.com", href: "mailto:ahalnaji002@gmail.com", copy: true },
  { label: "linkedin", value: "ahmed-hashem-alnaji", href: "https://www.linkedin.com/in/ahmed-hashem-alnaji/", external: true },
  { label: "github", value: "ahalnaji002", href: "https://github.com/ahalnaji002", external: true },
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
    <section id="contact" className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeader
          index="06"
          path="./contact.sh"
          title={
            <>
              Let&apos;s build something <span className="text-accent">that works.</span>
            </>
          }
          intro="Tell me what you're building. In a few clicks, I'll prepare the first message so we can start with clarity."
        />

        <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal>
            <Window title="new_project.sh" meta="~20 sec">
              <div className="p-4 sm:p-6">
                <label className="block">
                  <span className="mb-2 block text-sm">
                    <span className="text-accent">--name</span>{" "}
                    <span className="text-muted">What should I call you?</span>
                  </span>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(event) => setVisitorName(event.target.value)}
                    maxLength={60}
                    autoComplete="name"
                    placeholder="your name (optional)"
                    className="w-full border border-line bg-bg px-3.5 py-3 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-accent"
                  />
                </label>

                <div className="mt-6 space-y-6">
                  <ChoiceGroup flag="--type" label="What are we building?" options={projectOptions} value={project} onChange={setProject} />
                  <ChoiceGroup flag="--stage" label="Where are you now?" options={stageOptions} value={stage} onChange={setStage} />
                  <ChoiceGroup flag="--priority" label="What matters most?" options={priorityOptions} value={priority} onChange={setPriority} />
                </div>

                <motion.div
                  key={project + stage + priority}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="mt-7 border border-line bg-bg p-4 text-sm leading-6"
                  aria-live="polite"
                >
                  <p className="text-ok">&gt; This sounds like a good fit.</p>
                  <p className="mt-1 text-muted">
                    I can help you {projectMessages[project]}, with {priority.toLowerCase()} in mind.
                  </p>
                </motion.div>

                <a
                  href={projectEmail}
                  className="mt-4 block bg-accent px-5 py-3.5 text-center font-bold text-bg transition hover:bg-ink"
                >
                  ./start-project →
                </a>
                <p className="mt-2 text-center text-xs text-muted">
                  Opens your email app with a draft message ready to send.
                </p>
              </div>
            </Window>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <Window title="direct" meta="any channel">
              <ul>
                {contactLinks.map((link) => (
                  <li key={link.label} className="flex items-stretch border-b border-line last:border-0">
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="group flex min-w-0 flex-1 items-center justify-between gap-3 px-4 py-4 transition hover:bg-bg"
                    >
                      <span className="min-w-0">
                        <span className="block text-xs text-muted">{link.label}</span>
                        <span className="mt-1 block truncate text-sm group-hover:text-accent">{link.value}</span>
                      </span>
                      <span className="text-muted transition group-hover:text-accent">↗</span>
                    </a>
                    {link.copy && <CopyButton value={link.value} />}
                  </li>
                ))}
              </ul>
            </Window>
            <p className="border border-line p-4 text-sm leading-6 text-muted">
              Clear scope, honest communication, and practical solutions from the first conversation.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function CopyButton({ value }) {
  const [status, setStatus] = useState("idle");
  const timer = useRef(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={"Copy " + value}
      className={
        "w-24 shrink-0 border-s border-line text-xs transition hover:bg-bg " +
        (status === "copied" ? "text-ok" : status === "failed" ? "text-[#ff7b72]" : "text-muted hover:text-accent")
      }
    >
      <span aria-live="polite">{status === "copied" ? "copied ✓" : status === "failed" ? "blocked ✗" : "copy"}</span>
    </button>
  );
}

function ChoiceGroup({ flag, label, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-2.5 text-sm">
        <span className="text-accent">{flag}</span> <span className="text-muted">{label}</span>
      </legend>
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
                "border px-3.5 py-2 text-sm transition " +
                (isSelected
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-line text-muted hover:border-ink hover:text-ink")
              }
            >
              {isSelected ? "● " : "○ "}
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default Contact;
