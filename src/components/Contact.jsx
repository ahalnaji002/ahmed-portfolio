import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n/context";
import { Code, Container, Reveal, SectionHeader, Window } from "./ui";

// `copy` is what the copy button puts on the clipboard (the full URL for profiles).
const contactLinks = [
  { label: "email", value: profile.contact.email, href: "mailto:" + profile.contact.email, copy: profile.contact.email },
  { label: "linkedin", value: "ahmed-hashem-alnaji", href: profile.contact.linkedin, external: true, copy: profile.contact.linkedin },
  { label: "github", value: "ahalnaji002", href: profile.contact.github, external: true, copy: profile.contact.github },
];

const PROJECT_IDS = ["web", "backend", "mobile"];
const STAGE_IDS = ["idea", "design", "ready"];
const PRIORITY_IDS = ["fast", "clean", "scale"];

function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [visitorName, setVisitorName] = useState("");
  const [project, setProject] = useState(PROJECT_IDS[0]);
  const [stage, setStage] = useState(STAGE_IDS[0]);
  const [priority, setPriority] = useState(PRIORITY_IDS[0]);

  const projectLabel = c.options.project[project];
  const priorityLabel = c.options.priority[priority];
  const subject = encodeURIComponent(c.email.subject(projectLabel));
  const body = encodeURIComponent(
    c.email.body({
      name: visitorName.trim(),
      project: projectLabel,
      stage: c.options.stage[stage],
      priority: priorityLabel,
    }),
  );
  const projectEmail = "mailto:" + profile.contact.email + "?subject=" + subject + "&body=" + body;

  return (
    <section id="contact" className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeader
          index="06"
          path={c.path}
          title={
            <>
              {c.title[0]}
              <span className="text-accent">{c.title[1]}</span>
            </>
          }
          intro={c.intro}
        />

        <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal>
            <Window title="new_project.sh" meta={c.duration}>
              <div className="p-4 sm:p-6">
                <label className="block">
                  <span className="mb-2 block text-sm">
                    <Code className="text-accent">--name</Code> <span className="text-muted">{c.nameLabel}</span>
                  </span>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(event) => setVisitorName(event.target.value)}
                    maxLength={60}
                    autoComplete="name"
                    placeholder={c.namePlaceholder}
                    className="w-full border border-line bg-bg px-3.5 py-3 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-accent"
                  />
                </label>

                <div className="mt-6 space-y-6">
                  <ChoiceGroup flag="--type" label={c.typeLabel} ids={PROJECT_IDS} labels={c.options.project} value={project} onChange={setProject} />
                  <ChoiceGroup flag="--stage" label={c.stageLabel} ids={STAGE_IDS} labels={c.options.stage} value={stage} onChange={setStage} />
                  <ChoiceGroup flag="--priority" label={c.priorityLabel} ids={PRIORITY_IDS} labels={c.options.priority} value={priority} onChange={setPriority} />
                </div>

                <motion.div
                  key={project + stage + priority}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="mt-7 border border-line bg-bg p-4 text-sm leading-6 rtl:leading-7"
                  aria-live="polite"
                >
                  <p className="text-ok">
                    <Code>&gt;</Code> {c.fit}
                  </p>
                  <p className="mt-1 text-muted">{c.fitDetail(c.messages[project], priorityLabel)}</p>
                </motion.div>

                <a
                  href={projectEmail}
                  className="mt-4 block bg-accent px-5 py-3.5 text-center font-bold text-bg transition hover:bg-ink"
                >
                  {c.cta}
                </a>
                <p className="mt-2 text-center text-xs text-muted">{c.ctaNote}</p>
              </div>
            </Window>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <Window title={c.direct} meta={c.anyChannel}>
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
                        <Code className="block text-xs text-muted">{link.label}</Code>
                        <Code className="mt-1 block truncate text-sm group-hover:text-accent">{link.value}</Code>
                      </span>
                      <span className="text-muted transition group-hover:text-accent">↗</span>
                    </a>
                    <CopyButton value={link.copy} name={link.label} />
                  </li>
                ))}
              </ul>
            </Window>
            <p className="border border-line p-4 text-sm leading-6 text-muted rtl:leading-7">{c.note}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function CopyButton({ value, name }) {
  const { t } = useLanguage();
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
      aria-label={"Copy " + name + ": " + value}
      title={value}
      className={
        "w-24 shrink-0 border-s border-line text-xs transition hover:bg-bg " +
        (status === "copied" ? "text-ok" : status === "failed" ? "text-[#ff7b72]" : "text-muted hover:text-accent")
      }
    >
      <span aria-live="polite">
        {status === "copied" ? t.contact.copied : status === "failed" ? t.contact.copyFailed : t.contact.copy}
      </span>
    </button>
  );
}

function ChoiceGroup({ flag, label, ids, labels, value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-2.5 text-sm">
        <Code className="text-accent">{flag}</Code> <span className="text-muted">{label}</span>
      </legend>
      <div className="flex flex-wrap gap-2">
        {ids.map((id) => {
          const isSelected = value === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onChange(id)}
              className={
                "border px-3.5 py-2 text-sm transition " +
                (isSelected
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-line text-muted hover:border-ink hover:text-ink")
              }
            >
              {isSelected ? "● " : "○ "}
              {labels[id]}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default Contact;
