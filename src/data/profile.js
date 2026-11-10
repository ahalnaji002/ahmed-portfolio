import { certificates } from "./certificates.js";
import { projects } from "./projects.js";
import { skillGroups } from "./skills.js";

export const API_PATH = "/api/ahmed";

export const profile = {
  name: "Ahmed Hashem Al Naji",
  role: "Full-Stack Developer",
  focus: "backend",
  available: true,
  education: {
    degree: "Computer Engineering",
    university: "Islamic University of Gaza",
    years: "2021–2027",
    status: "One semester to graduation",
  },
  contact: {
    email: "ahalnaji002@gmail.com",
    github: "https://github.com/ahalnaji002",
    linkedin: "https://www.linkedin.com/in/ahmed-hashem-alnaji/",
    cv: "/Ahmed_Al_Naji_CV.pdf",
  },
};

// Short summary shown in the hero's JSON panel.
export const heroSummary = [
  ["role", [profile.role]],
  ["focus", [profile.focus]],
  ["stack", ["Node", "Express", "Laravel", "React", "Flutter"]],
  ["databases", ["MySQL", "PostgreSQL"]],
];

function projectLinks(project) {
  const links = {
    live: project.liveDemo,
    github: project.github,
    github_backend: project.githubBackend,
    github_frontend: project.githubFrontend,
  };
  return Object.fromEntries(Object.entries(links).filter(([, url]) => url));
}

export const API_SECTIONS = ["profile", "stack", "projects", "certificates", "contact"];

export function buildApiResponse(origin) {
  const absolute = (path) => (path.startsWith("/") ? origin + path : path);

  return {
    profile: {
      name: profile.name,
      role: profile.role,
      focus: profile.focus,
      available: profile.available,
      education: profile.education,
    },
    stack: Object.fromEntries(skillGroups.map((group) => [group.id, group.skills])),
    projects: projects.map((project) => ({
      id: project.id,
      title: project.title,
      category: project.category,
      role: project.role,
      featured: Boolean(project.featured),
      summary: project.description,
      tech: project.tech,
      features: project.features,
      links: projectLinks(project),
    })),
    certificates: certificates.map((certificate) => ({
      title: certificate.title,
      issuer: certificate.issuer,
      date: certificate.date,
    })),
    contact: { ...profile.contact, cv: absolute(profile.contact.cv) },
  };
}
