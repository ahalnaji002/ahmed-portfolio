// Shared helpers for scripts that render HTML with headless Chrome/Edge.
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export const fileUrl = (relativePath) => pathToFileURL(resolve(root, relativePath)).href;

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

// Runs headless Chrome with the given flags, then the page URL.
export function runHeadless(flags, url) {
  const browser = candidates.find((path) => existsSync(path));
  if (!browser) {
    console.error("No Chrome/Edge found. Set CHROME_PATH to your browser binary.");
    process.exit(1);
  }
  execFileSync(
    browser,
    ["--headless=new", "--disable-gpu", "--allow-file-access-from-files", "--virtual-time-budget=8000", ...flags, url],
    { stdio: "inherit" },
  );
}
