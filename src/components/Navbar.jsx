import { useEffect, useState } from "react";
import { sections } from "../data/sections";
import { openPalette, shortcutLabel } from "../lib/palette";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const targets = ["home", ...sections.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-muted" aria-label="Ahmed Al Naji — back to top">
          <span className="font-medium text-accent">ahmed</span>@alnaji:~$ <span className="cursor" aria-hidden="true" />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {sections.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={"#" + item.id}
                aria-current={isActive ? "true" : undefined}
                className={"transition " + (isActive ? "text-accent" : "text-muted hover:text-ink")}
              >
                <span className="text-line">/</span>
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              openPalette();
            }}
            aria-label={"Open command line (" + shortcutLabel + ")"}
            title={"Command line · " + shortcutLabel}
            className="border border-line px-2.5 py-1.5 text-xs text-muted transition hover:border-accent hover:text-accent"
          >
            <span className="text-accent">&gt;_</span>
            <span className="ml-2 hidden md:inline">{shortcutLabel}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="py-2 text-muted transition hover:text-ink lg:hidden"
          >
            {mobileOpen ? "[close]" : "[menu]"}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-line bg-bg lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {sections.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={"#" + item.id}
                    onClick={() => setMobileOpen(false)}
                    className={
                      "flex items-center justify-between border-b border-line py-3.5 last:border-0 " +
                      (isActive ? "text-accent" : "text-ink")
                    }
                  >
                    <span>
                      <span className="text-muted">cd </span>~/{item.label}
                    </span>
                    <span className="text-xs text-muted">0{index + 1}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
