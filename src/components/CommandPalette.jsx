import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { API_PATH, profile } from "../data/profile";
import { projects } from "../data/projects";
import { sections } from "../data/sections";
import { useModalAccessibility } from "../hooks/useModalAccessibility";
import { fetchGitActivity, timeAgo } from "../lib/github";
import { OPEN_PALETTE_EVENT, openProject, shortcutLabel } from "../lib/palette";

const MAILTO = "mailto:" + profile.contact.email;
const HIRE_MAILTO = MAILTO + "?subject=" + encodeURIComponent("Let's work together");

// Let the dialog close (and its focus/scroll lock release) before acting on the page.
const afterClose = (fn) => window.setTimeout(fn, 60);

const normalize = (text) => text.trim().toLowerCase().replace(/\s+/g, " ");

function downloadCv() {
  const link = document.createElement("a");
  link.href = profile.contact.cv;
  link.download = "Ahmed_Al_Naji_CV.pdf";
  link.click();
}

const HELP_LINES = [
  { text: "cd ~/<section>    jump to a section (about, skills, projects…)" },
  { text: "open <project>    open a case study, e.g. open hcms" },
  { text: "cv --download     download my CV" },
  { text: "curl /api/ahmed   open the live JSON API" },
  { text: "mail ahmed        write me an email · copy email" },
  { text: "open github       also: open linkedin" },
  { text: "git log           my latest GitHub activity" },
  { text: "whoami · ls · clear · exit" },
  { text: "psst… there might be a sudo command 👀", tone: "muted" },
];

// Every listed command: `label` is what you type, `aliases` also match exactly,
// `keywords` only help the search.
const COMMANDS = [
  ...sections.map((section) => ({
    label: "cd ~/" + section.label,
    hint: "Jump to " + section.label,
    group: "navigate",
    aliases: [section.label, section.id, "cd " + section.label, "cd " + section.id],
    keywords: section.id,
    run: ({ close }) => {
      close();
      afterClose(() => document.getElementById(section.id)?.scrollIntoView());
    },
  })),
  ...projects.map((project) => ({
    label: "open " + project.id,
    hint: project.title,
    group: "project",
    aliases: [project.id],
    keywords: project.title + " " + project.category + " " + project.tech.join(" "),
    run: ({ close }) => {
      close();
      afterClose(() => openProject(project.id));
    },
  })),
  {
    label: "cv --download",
    hint: "Download my CV (PDF)",
    group: "action",
    aliases: ["cv", "resume", "download cv"],
    keywords: "resume pdf",
    run: ({ print }) => {
      downloadCv();
      print([{ text: "downloading Ahmed_Al_Naji_CV.pdf…", tone: "ok" }]);
    },
  },
  {
    label: "curl " + API_PATH,
    hint: "Open the live JSON API",
    group: "action",
    aliases: ["api", "curl", "curl api"],
    keywords: "json endpoint backend",
    run: ({ print }) => {
      window.open(API_PATH, "_blank", "noopener");
      print([{ text: "200 OK — opened " + API_PATH + " in a new tab", tone: "ok" }]);
    },
  },
  {
    label: "mail ahmed",
    hint: "Write me an email",
    group: "action",
    aliases: ["mail", "email", "contact me"],
    keywords: "email message hire",
    run: ({ print }) => {
      window.location.href = MAILTO;
      print([{ text: "opening your email app…", tone: "ok" }]);
    },
  },
  {
    label: "copy email",
    hint: profile.contact.email,
    group: "action",
    aliases: [],
    keywords: "clipboard mail",
    run: async ({ print }) => {
      try {
        await navigator.clipboard.writeText(profile.contact.email);
        print([{ text: "copied ✓ " + profile.contact.email, tone: "ok" }]);
      } catch {
        print([{ text: "clipboard blocked — here it is: " + profile.contact.email, tone: "err" }]);
      }
    },
  },
  {
    label: "open github",
    hint: "github.com/ahalnaji002",
    group: "action",
    aliases: ["github"],
    keywords: "code repos",
    run: ({ print }) => {
      window.open(profile.contact.github, "_blank", "noopener");
      print([{ text: "opened GitHub in a new tab", tone: "ok" }]);
    },
  },
  {
    label: "open linkedin",
    hint: "linkedin.com/in/ahmed-hashem-alnaji",
    group: "action",
    aliases: ["linkedin"],
    keywords: "profile",
    run: ({ print }) => {
      window.open(profile.contact.linkedin, "_blank", "noopener");
      print([{ text: "opened LinkedIn in a new tab", tone: "ok" }]);
    },
  },
  {
    label: "git log",
    hint: "My latest GitHub activity",
    group: "system",
    aliases: ["git", "git log -1", "activity"],
    keywords: "github commits push recent",
    run: async ({ print }) => {
      const activity = await fetchGitActivity();
      if (!activity?.repo) {
        print([{ text: "fatal: couldn't reach GitHub right now", tone: "err" }]);
        return;
      }
      print([
        { text: "last push → " + activity.repo + " (" + timeAgo(activity.pushed_at) + ")", tone: "ok" },
        ...(activity.description ? [{ text: activity.description, tone: "muted" }] : []),
        { text: activity.url, tone: "muted" },
      ]);
    },
  },
  {
    label: "whoami",
    hint: "Who is Ahmed?",
    group: "system",
    aliases: [],
    keywords: "about me",
    run: ({ print }) =>
      print([
        { text: profile.name + " — " + profile.role },
        { text: "focus: backend · " + profile.education.degree + " @ " + profile.education.university },
        { text: "status: open_to_work", tone: "ok" },
      ]),
  },
  {
    label: "ls",
    hint: "List sections",
    group: "system",
    aliases: ["ls ~", "dir"],
    keywords: "list",
    run: ({ print }) => print([{ text: sections.map((section) => section.label + "/").join("  ") }]),
  },
  {
    label: "help",
    hint: "What can I type?",
    group: "system",
    aliases: ["?", "man", "commands"],
    keywords: "",
    run: ({ print }) => print(HELP_LINES),
  },
  {
    label: "clear",
    hint: "Clear the output",
    group: "system",
    aliases: ["cls"],
    keywords: "",
    run: ({ clear }) => clear(),
  },
];

// Unlisted commands for the curious.
const SECRETS = {
  "sudo hire ahmed": ({ print }) => {
    print([
      { text: "[sudo] password for recruiter: ********", tone: "muted" },
      { text: "✓ access granted. Excellent decision.", tone: "ok" },
      { text: "opening your email app…", tone: "muted" },
    ]);
    window.setTimeout(() => {
      window.location.href = HIRE_MAILTO;
    }, 900);
  },
  "hire ahmed": ({ print }) => print([{ text: "permission denied. try: sudo hire ahmed", tone: "err" }]),
  sudo: ({ print }) => print([{ text: "usage: sudo hire ahmed", tone: "muted" }]),
  "rm -rf /": ({ print }) => print([{ text: "nice try 🙂 this portfolio is read-only.", tone: "err" }]),
  "rm -rf": ({ print }) => print([{ text: "nice try 🙂 this portfolio is read-only.", tone: "err" }]),
  date: ({ print }) => print([{ text: new Date().toString() }]),
  pwd: ({ print }) => print([{ text: "/home/ahmed/portfolio" }]),
  exit: ({ close }) => close(),
};

function findExact(text) {
  const typed = normalize(text);
  if (!typed) return null;
  const command = COMMANDS.find((item) => item.label === typed || item.aliases.includes(typed));
  if (command) return command.run;
  return SECRETS[typed] || null;
}

function filterCommands(text) {
  const typed = normalize(text);
  if (!typed) return COMMANDS;

  return COMMANDS.map((command) => {
    const label = command.label.toLowerCase();
    const haystack = (label + " " + command.hint + " " + command.keywords + " " + command.aliases.join(" ")).toLowerCase();
    let score = 0;
    if (label.startsWith(typed)) score = 3;
    else if (label.includes(typed)) score = 2;
    else if (typed.split(" ").every((word) => haystack.includes(word))) score = 1;
    return { command, score };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.command);
}

const WELCOME = [
  {
    command: null,
    lines: [
      { text: "Type a command, or pick one below.", tone: "muted" },
      { text: "new here? try: help", tone: "muted" },
    ],
  },
];

const toneClass = {
  ok: "text-ok",
  err: "text-[#ff7b72]",
  muted: "text-muted",
};

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [history, setHistory] = useState(WELCOME);
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);
  useModalAccessibility({ isOpen: open, onClose: close, dialogRef, initialFocusRef: inputRef });

  const results = useMemo(() => filterCommands(query), [query]);

  useEffect(() => {
    const show = () => {
      setQuery("");
      setActive(0);
      setOpen(true);
    };

    const onKeyDown = (event) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLElement &&
        (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) setOpen(false);
        else show();
      } else if (event.key === "/" && !isTyping && !open) {
        event.preventDefault();
        show();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener(OPEN_PALETTE_EVENT, show);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener(OPEN_PALETTE_EVENT, show);
    };
  }, [open]);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [history]);

  useEffect(() => {
    document.getElementById("palette-option-" + active)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const run = (typed, action) => {
    const context = {
      close,
      clear: () => setHistory([]),
      print: (lines) => setHistory((entries) => [...entries, { command: typed, lines }].slice(-20)),
    };

    if (action) {
      action(context);
    } else {
      context.print([
        { text: "command not found: " + typed, tone: "err" },
        { text: "type 'help' to see what I can do", tone: "muted" },
      ]);
    }

    setQuery("");
    setActive(0);
  };

  const onInputKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => (results.length ? (index + 1) % results.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => (results.length ? (index - 1 + results.length) % results.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const exact = findExact(query);
      if (exact) run(normalize(query), exact);
      else if (results[active]) run(results[active].label, results[active].run);
      else if (normalize(query)) run(normalize(query), null);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[120] flex items-start justify-center bg-black/75 px-3 pt-[8vh] sm:pt-[14vh]"
          onMouseDown={(event) => event.target === event.currentTarget && close()}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="flex max-h-[80vh] w-full max-w-2xl flex-col border border-line bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 text-xs text-muted">
              <span>
                <span className="text-accent">ahmed</span>@alnaji: ~ — command line
              </span>
              <button type="button" onClick={close} className="py-1 text-ink transition hover:text-accent">
                [esc]
              </button>
            </div>

            {history.length > 0 && (
              <div ref={outputRef} className="max-h-48 overflow-y-auto border-b border-line px-4 py-3 text-sm leading-6" aria-live="polite">
                {history.map((entry, index) => (
                  <div key={index} className="mb-1.5 last:mb-0">
                    {entry.command && (
                      <p>
                        <span className="text-accent">$</span> {entry.command}
                      </p>
                    )}
                    {entry.lines.map((line, lineIndex) => (
                      <p key={lineIndex} className={"whitespace-pre-wrap " + (toneClass[line.tone] || "text-ink/80")}>
                        {line.text}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <label className="flex items-center gap-3 border-b border-line px-4 py-3.5">
              <span className="text-accent" aria-hidden="true">$</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKeyDown}
                placeholder="type a command…  (try: help)"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                enterKeyHint="go"
                role="combobox"
                aria-label="Command"
                aria-expanded="true"
                aria-controls="palette-options"
                aria-activedescendant={results[active] ? "palette-option-" + active : undefined}
                className="min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-muted/60 sm:text-sm"
              />
            </label>

            <ul id="palette-options" role="listbox" aria-label="Commands" className="min-h-0 flex-1 overflow-y-auto py-1.5">
              {results.length === 0 && (
                <li className="px-4 py-3 text-sm text-muted">
                  no match — press enter to run it anyway
                </li>
              )}
              {results.map((command, index) => (
                <li
                  key={command.label}
                  id={"palette-option-" + index}
                  role="option"
                  aria-selected={index === active}
                  onMouseMove={() => setActive(index)}
                  onClick={() => run(command.label, command.run)}
                  className={
                    "flex cursor-pointer flex-col gap-0.5 px-4 py-2.5 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4 " +
                    (index === active ? "bg-bg text-accent" : "text-ink")
                  }
                >
                  <span className="whitespace-nowrap">
                    <span className={index === active ? "text-accent" : "text-line"}>▸ </span>
                    {command.label}
                  </span>
                  <span className="truncate pl-4 text-xs text-muted sm:pl-0">{command.hint}</span>
                </li>
              ))}
            </ul>

            <div className="hidden justify-between gap-3 border-t border-line px-4 py-2 text-[11px] text-muted sm:flex">
              <span>↑↓ navigate · enter run · esc close</span>
              <span>{shortcutLabel} to toggle</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
