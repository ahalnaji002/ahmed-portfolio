import { createContext, useContext } from "react";
import { projectsAr } from "../data/projects.ar";

export const LanguageContext = createContext(null);

export const SET_LANG_EVENT = "lang:set";
export const LANGS = ["en", "ar"];

export function useLanguage() {
  return useContext(LanguageContext);
}

// A project's display text in the given language (falls back to English).
export function localizeProject(project, lang) {
  if (!project || lang !== "ar") return project;
  return { ...project, ...projectsAr[project.id] };
}
