import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { useModalAccessibility } from "../hooks/useModalAccessibility";

function ProjectModal({ project, onClose }) {
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02040c]/85 p-4 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => event.target === event.currentTarget && onClose()} role="presentation">
          <motion.div initial={{ opacity: 0, y: 35, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.98 }} transition={{ type: "spring", stiffness: 280, damping: 28 }}
            role="dialog" aria-modal="true" aria-labelledby="project-modal-title"
            ref={dialogRef}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-[#080b18] shadow-2xl shadow-violet-950/40">
            <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close project details"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#080b18]/90 text-white/70 backdrop-blur-xl transition hover:border-violet-400/50 hover:text-white">
              <X size={21} />
            </button>
            <div className="relative overflow-hidden rounded-t-3xl bg-[#050816]">
              {project.image ? (
                <img src={project.image} alt={project.title} className="max-h-[430px] w-full object-cover" />
              ) : (
                <div className="flex h-56 items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.18),transparent_48%),linear-gradient(135deg,#0b1727,#10102a)] sm:h-80">
                  <span className="text-center text-3xl font-black tracking-[0.3em] text-white/85">{project.title.toUpperCase()}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b18] via-transparent to-transparent" />
            </div>
            <div className="relative px-6 pb-8 sm:px-10 sm:pb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">{project.category}</span>
              <h2 id="project-modal-title" className="mt-3 text-3xl font-black text-white sm:text-5xl">{project.title}</h2>
              <p className="mt-5 max-w-3xl leading-8 text-white/55">{project.description || project.overview}</p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <InfoCard title="Overview" text={project.overview} /><InfoCard title="My Role" text={project.role} />
                <InfoCard title="The Challenge" text={project.challenge} /><InfoCard title="The Solution" text={project.solution} />
              </div>
              <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"><h3 className="font-bold text-white">Technologies</h3>
                  <div className="mt-4 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-lg border border-violet-400/15 bg-violet-500/10 px-3 py-1.5 text-xs text-white/70">{tech}</span>)}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"><h3 className="font-bold text-white">Key Features</h3>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">{project.features.map((feature) => <div key={feature} className="rounded-lg border border-white/5 bg-black/20 px-3 py-2 text-sm text-white/55">{feature}</div>)}</div>
                </div>
              </div>
              {(project.liveDemo || project.github || project.githubBackend || project.githubFrontend) && <div className="mt-8 flex flex-wrap gap-3">
                {project.liveDemo && <ProjectLink href={project.liveDemo}>Live Website</ProjectLink>}{project.github && <ProjectLink href={project.github}>GitHub</ProjectLink>}{project.githubBackend && <ProjectLink href={project.githubBackend}>Backend Repository</ProjectLink>}{project.githubFrontend && <ProjectLink href={project.githubFrontend}>Frontend Repository</ProjectLink>}
              </div>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InfoCard({ title, text }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"><h3 className="font-bold text-violet-300">{title}</h3><p className="mt-3 text-sm leading-7 text-white/55">{text}</p></div>;
}

function ProjectLink({ href, children }) {
  return <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500/20">{children}<ArrowUpRight size={16} /></a>;
}

export default ProjectModal;
