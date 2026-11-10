import { Container } from "./ui";
import { sections } from "../data/sections";

const socialLinks = [
  { label: "github", href: "https://github.com/ahalnaji002", external: true },
  { label: "linkedin", href: "https://www.linkedin.com/in/ahmed-hashem-alnaji/", external: true },
  { label: "email", href: "mailto:ahalnaji002@gmail.com" },
];

function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-muted">
              <span className="text-accent">ahmed</span>@alnaji:~$ exit <span className="cursor" aria-hidden="true" />
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
              Full-Stack Developer building practical web, backend, and mobile solutions with an engineering mindset.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:flex sm:gap-14">
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              <span className="text-xs text-muted">// sections</span>
              {sections.map((item) => (
                <a key={item.id} href={"#" + item.id} className="text-ink/80 transition hover:text-accent">
                  /{item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted">// elsewhere</span>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="text-ink/80 transition hover:text-accent"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ahmed Hashem Al Naji</p>
          <a href="#home" className="transition hover:text-accent">
            cd ~ ↑ back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
