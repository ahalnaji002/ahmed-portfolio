// Renders scripts/og-image.html to public/og-image.png (1200x630) with headless Chrome/Edge.
// Usage: npm run og   (set CHROME_PATH to use a specific browser binary)
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = pathToFileURL(resolve(root, "scripts/og-image.html")).href;
const output = resolve(root, "public/og-image.png");

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));
if (!browser) {
  console.error("No Chrome/Edge found. Set CHROME_PATH to your browser binary.");
  process.exit(1);
}

execFileSync(
  browser,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--allow-file-access-from-files",
    "--window-size=1200,630",
    "--virtual-time-budget=8000",
    "--screenshot=" + output,
    source,
  ],
  { stdio: "inherit" },
);

console.log("wrote " + output);
