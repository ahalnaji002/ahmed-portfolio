import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// In production Vercel runs api/ahmed.js as a function. This serves the same
// handler during `npm run dev`, so the live API link works locally too.
function devApi() {
  return {
    name: "dev-api",
    configureServer(server) {
      server.middlewares.use("/api/ahmed", async (req, res, next) => {
        try {
          const handler = await server.ssrLoadModule("/api/ahmed.js");
          const method = req.method === "HEAD" ? "GET" : req.method;
          if (typeof handler[method] !== "function") {
            res.statusCode = 405;
            res.setHeader("Allow", "GET, OPTIONS");
            res.end();
            return;
          }

          const url = new URL(req.originalUrl, "http://" + req.headers.host);
          const response = await handler[method](new Request(url, { method }));
          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(await response.text());
        } catch (error) {
          next(error);
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), devApi()],
});
