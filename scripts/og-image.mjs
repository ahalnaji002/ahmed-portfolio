// Renders scripts/og-image.html to public/og-image.png (1200x630).
// Usage: npm run og   (set CHROME_PATH to use a specific browser binary)
import { resolve } from "node:path";
import { fileUrl, root, runHeadless } from "./browser.mjs";

const output = resolve(root, "public/og-image.png");

runHeadless(
  ["--hide-scrollbars", "--force-device-scale-factor=1", "--window-size=1200,630", "--screenshot=" + output],
  fileUrl("scripts/og-image.html"),
);

console.log("wrote " + output);
