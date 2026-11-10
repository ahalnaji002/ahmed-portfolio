// Window events let any component open the command palette or a project case study
// without sharing React state.
export const OPEN_PALETTE_EVENT = "palette:open";
export const OPEN_PROJECT_EVENT = "project:open";

export function openPalette() {
  window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));
}

export function openProject(id) {
  window.dispatchEvent(new CustomEvent(OPEN_PROJECT_EVENT, { detail: id }));
}

export const isMac =
  typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

export const shortcutLabel = isMac ? "⌘K" : "ctrl+k";
