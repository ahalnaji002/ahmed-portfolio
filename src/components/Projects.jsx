import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

function ProjectCard({ project, featured = false }) {
  const isMobile = project.category === "Mobile Application";

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl transition duration-300 hover:border-violet-400/40 ${
        featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-[#050816] ${
          featured ? "min-h-[340px]" : "h-[240px]"
        }`}
      >
        {isMobile ? (
          // Mobile image (Landscape)
          <div className="group relative w-[85%] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-[#050816]/70 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
              <Link
                to={`/projects/${project.id}`}
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
              >
                View Case Study
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        ) : (
          // Web Laptop Frame
          <div className="relative w-[85%] overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
            <div className="absolute left-0 right-0 top-0 z-10 h-5 bg-white/5">
              <div className="ml-3 mt-2 flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              </div>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="mt-5 h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-[#050816]/70 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
              <Link
                to={`/projects/${project.id}`}
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl"
              >
                View Case Study
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-7">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
          {project.category}
        </span>

        <h3 className="mt-4 text-2xl font-black text-white">{project.title}</h3>

        <p className="mt-4 text-sm leading-7 text-white/50">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-white/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="text-sm font-bold tracking-[0.25em] text-violet-400">
              03 / WHAT I'VE BEEN BUILDING
            </span>

            <div className="h-px w-16 bg-gradient-to-r from-violet-500 to-transparent" />
          </div>

          <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building digital products that{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              solve real problems.
            </span>
          </h2>
        </motion.div>

        {/* Featured */}
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
