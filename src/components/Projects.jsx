import { useCallback, useEffect, useState } from "react";
import { projects } from "../data/projects";
import { OPEN_PROJECT_EVENT } from "../lib/palette";
import ProjectModal from "./ProjectModal";
import { Container, Reveal, SectionHeader, Tag } from "./ui";

const FILTERS = ["all", "web", "backend", "mobile"];

// Tags come from the stack, so new projects are filtered without extra data.
function projectTags(project) {
  const tech = project.tech.map((item) => item.toLowerCase());
  const has = (...names) => names.some((name) => tech.some((item) => item.startsWith(name)));
  const tags = [];
  const backendOnly = project.category.toLowerCase().startsWith("backend");
  if (has("react", "next.js") && !has("flutter") && !backendOnly) tags.push("web");
  if (has("node.js", "express", "laravel")) tags.push("backend");
  if (has("flutter")) tags.push("mobile");
  return tags;
}

// Featured first, then the rest; numbers stay stable while filtering.
const orderedProjects = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)];
const numberOf = (project) => orderedProjects.indexOf(project) + 1;

function fileName(project) {
  return project.image ? project.image.split("/").pop() : project.id + ".md";
}

function ProjectCard({ project, number, featured = false, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={"Open case study: " + project.title}
      className={
        "group block h-full w-full border border-line bg-panel text-left transition hover:border-accent/60 " +
        (featured ? "lg:grid lg:grid-cols-[1.1fr_0.9fr]" : "")
      }
    >
      <div className={"border-b border-line bg-bg " + (featured ? "lg:border-b-0 lg:border-r" : "")}>
        <div className="flex justify-between gap-3 border-b border-line px-3 py-2 text-[11px] text-muted">
          <span className="truncate">{fileName(project)}</span>
          <span className="shrink-0">{project.role}</span>
        </div>
        <div className={"overflow-hidden " + (featured ? "aspect-video lg:aspect-auto lg:h-[calc(100%-33px)]" : "aspect-video")}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-6 text-center font-display text-2xl font-extrabold text-muted">
              {project.title}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col p-5 sm:p-6">
        <span className="text-xs text-muted">
          <span className="text-accent">{String(number).padStart(2, "0")}</span> · {project.category.toLowerCase()}
        </span>
        <h3
          className={
            "mt-3 font-display font-extrabold leading-tight tracking-tight transition group-hover:text-accent " +
            (featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl")
          }
        >
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, featured ? 8 : 5).map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
        <span className="mt-6 text-sm text-accent">
          open case_study <span className="inline-block transition group-hover:translate-x-1">→</span>
        </span>
      </div>
    </button>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  // The command palette's `open <project>` command.
  useEffect(() => {
    const onOpenProject = (event) => {
      const project = projects.find((item) => item.id === event.detail);
      if (!project) return;
      document.getElementById("projects")?.scrollIntoView();
      setSelectedProject(project);
    };

    window.addEventListener(OPEN_PROJECT_EVENT, onOpenProject);
    return () => window.removeEventListener(OPEN_PROJECT_EVENT, onOpenProject);
  }, []);

  const [filter, setFilter] = useState("all");
  const matches = (project) => filter === "all" || projectTags(project).includes(filter);
  const featuredProjects = orderedProjects.filter((project) => project.featured && matches(project));
  const otherProjects = orderedProjects.filter((project) => !project.featured && matches(project));

  return (
    <section id="projects" className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeader
          index="03"
          path="ls ~/projects"
          title="Things I've built to solve real problems."
          intro={projects.length + " projects across web, backend and mobile. Open any of them for the full case study."}
        />

        <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((option) => {
            const count = option === "all" ? projects.length : projects.filter((p) => projectTags(p).includes(option)).length;
            const isActive = filter === option;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(option)}
                className={
                  "border px-3.5 py-2 text-sm transition " +
                  (isActive
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-line text-muted hover:border-ink hover:text-ink")
                }
              >
                --{option} <span className={isActive ? "text-accent/70" : "text-muted/60"}>({count})</span>
              </button>
            );
          })}
        </div>

        {featuredProjects.length > 0 && (
          <>
            <p className="mb-4 text-xs text-muted">// featured</p>
            <div className="space-y-4">
              {featuredProjects.map((project) => (
                <Reveal key={project.id}>
                  <ProjectCard project={project} number={numberOf(project)} featured onOpen={setSelectedProject} />
                </Reveal>
              ))}
            </div>
          </>
        )}

        {otherProjects.length > 0 && (
          <>
            <p className={"mb-4 text-xs text-muted " + (featuredProjects.length > 0 ? "mt-12" : "")}>// more</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.05}>
                  <ProjectCard project={project} number={numberOf(project)} onOpen={setSelectedProject} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </Container>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
}

export default Projects;
