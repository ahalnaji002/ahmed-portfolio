import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useModalAccessibility } from "../hooks/useModalAccessibility";
import { Code, Tag } from "./ui";
import { useLanguage } from "../i18n/context";

function ProjectModal({ project, onClose }) {
  const { t, lang } = useLanguage();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  useModalAccessibility({
    isOpen: Boolean(project),
    onClose,
    dialogRef,
    initialFocusRef: closeButtonRef,
  });

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 sm:p-6"
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            ref={dialogRef}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-line bg-panel"
          >
            <div className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-line bg-panel px-4 py-2.5 text-xs text-muted">
              <Code className="truncate">~/projects/{project.id}/README.md</Code>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label={t.modal.closeLabel}
                className="shrink-0 py-1 text-ink transition hover:text-accent"
              >
                {t.modal.close}
              </button>
            </div>

            {project.image && (
              <div className="border-b border-line bg-bg">
                <img src={project.image} alt={project.title} className="max-h-[420px] w-full object-cover object-top" />
              </div>
            )}

            <div className="p-5 sm:p-8">
              <span className="text-xs text-muted">
                {lang === "ar" ? project.category : project.category.toLowerCase()} · {t.modal.role} <span className="text-accent">{project.role}</span>
              </span>
              <h2 id="project-modal-title" className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
                {project.title}
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-ink/75 rtl:leading-8">{project.description || project.overview}</p>

              <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2">
                <Block title={t.modal.blocks.overview} text={project.overview} />
                <Block title={t.modal.blocks.role} text={project.role} />
                <Block title={t.modal.blocks.challenge} text={project.challenge} />
                <Block title={t.modal.blocks.solution} text={project.solution} />
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                <div>
                  <h3 className="text-sm text-accent">{t.modal.stack}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm text-accent">{t.modal.features}</h3>
                  <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm leading-6 text-ink/75">
                        <span className="text-ok">✓ </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {(project.liveDemo || project.github || project.githubBackend || project.githubFrontend) && (
                <div className="mt-8 flex flex-wrap gap-2.5 border-t border-line pt-6">
                  {project.liveDemo && <ProjectLink href={project.liveDemo} primary>{t.modal.links.live}</ProjectLink>}
                  {project.github && <ProjectLink href={project.github}>{t.modal.links.github}</ProjectLink>}
                  {project.githubBackend && <ProjectLink href={project.githubBackend}>{t.modal.links.backend}</ProjectLink>}
                  {project.githubFrontend && <ProjectLink href={project.githubFrontend}>{t.modal.links.frontend}</ProjectLink>}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Block({ title, text }) {
  return (
    <div className="bg-panel p-5">
      <h3 className="text-sm text-key">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted rtl:leading-7">{text}</p>
    </div>
  );
}

function ProjectLink({ href, primary = false, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        "px-4 py-2.5 text-sm transition " +
        (primary ? "bg-accent font-bold text-bg hover:bg-ink" : "border border-line hover:border-ink")
      }
    >
      {children}
    </a>
  );
}

export default ProjectModal;
