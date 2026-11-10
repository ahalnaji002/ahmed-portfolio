import { motion } from "motion/react";

export function Container({ className = "", children }) {
  return <div className={"mx-auto w-full max-w-6xl px-4 sm:px-6 " + className}>{children}</div>;
}

export function Reveal({ className = "", delay = 0, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Inline code-like text (commands, file names) that must stay left-to-right inside Arabic.
export function Code({ className = "", children }) {
  return (
    <bdi dir="ltr" className={className}>
      {children}
    </bdi>
  );
}

export function SectionHeader({ index, path, title, intro }) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <p className="text-xs text-muted">
        <Code>
          <span className="text-accent">{index}</span> — {path}
        </Code>
      </p>
      <h2 className="mt-4 max-w-4xl font-display text-[clamp(34px,7vw,64px)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink rtl:leading-[1.25]">
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-2xl leading-7 text-muted rtl:leading-8">{intro}</p>}
    </Reveal>
  );
}

export function Window({ title, meta, className = "", children }) {
  return (
    <div className={"border border-line bg-panel " + className}>
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 text-xs text-muted">
        <Code className="truncate">{title}</Code>
        {meta && <span className="shrink-0">{meta}</span>}
      </div>
      {children}
    </div>
  );
}

export function Tag({ children }) {
  return (
    <span dir="ltr" className="border border-line bg-bg px-2.5 py-1 text-xs text-ink/80">
      {children}
    </span>
  );
}
