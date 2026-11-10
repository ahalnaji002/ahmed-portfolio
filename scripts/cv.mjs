// Renders scripts/cv.html to public/Ahmed_Al_Naji_CV.pdf (US Letter, selectable text).
// Usage: npm run cv   (set CHROME_PATH to use a specific browser binary)
import { resolve } from "node:path";
import { fileUrl, root, runHeadless } from "./browser.mjs";

const output = resolve(root, "public/Ahmed_Al_Naji_CV.pdf");

runHeadless(["--no-pdf-header-footer", "--print-to-pdf=" + output], fileUrl("scripts/cv.html"));

console.log("wrote " + output);
