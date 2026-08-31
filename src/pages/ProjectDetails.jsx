import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectGallery from "../components/ProjectGallery";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-32 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute right-[10%] top-[40%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Back */}
        <Link
          to="/#projects"
          className="mb-10 flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Header */}
        <div className="max-w-4xl">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            {project.category}
          </span>

          <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/50">
            {project.description}
          </p>
        </div>

        {/* Image */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8">
            <h2 className="text-2xl font-bold text-white">Overview</h2>

            <p className="mt-5 leading-8 text-white/60">{project.overview}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8">
            <h2 className="text-2xl font-bold text-white">My Role</h2>

            <p className="mt-5 leading-8 text-white/60">{project.role}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8">
            <h2 className="text-2xl font-bold text-white">The Challenge</h2>

            <p className="mt-5 leading-8 text-white/60">{project.challenge}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8">
            <h2 className="text-2xl font-bold text-white">The Solution</h2>

            <p className="mt-5 leading-8 text-white/60">{project.solution}</p>
          </div>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <ProjectGallery images={project.gallery} />
        )}

        {/* Info Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h3 className="text-sm font-bold text-violet-400">Role</h3>

            <p className="mt-4 text-white/60">{project.role}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h3 className="text-sm font-bold text-violet-400">Technologies</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h3 className="text-sm font-bold text-violet-400">Category</h3>

            <p className="mt-4 text-white/60">{project.category}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.035] p-8">
          <h3 className="text-xl font-bold text-white">Key Features</h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/60"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        {(project.liveDemo || project.github) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500/20"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="mt-14">
          <button className="flex items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold transition hover:bg-violet-500/20">
            Explore Project
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
