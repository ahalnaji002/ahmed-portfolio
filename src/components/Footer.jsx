import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import ahLogo from "../assets/logo/ah-logo.webp";

const footerLinks = ["About", "Skills", "Projects", "Journey", "Certificates"];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ahalnaji002", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-hashem-alnaji/", icon: LinkedinIcon },
  { label: "Email", href: "mailto:ahalnaji002@gmail.com", icon: Mail },
];

function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 pb-8 pt-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/5 pb-10 md:grid-cols-[1.1fr_1fr_auto] md:items-start">
          <div>
            <a href="#home" className="group inline-flex items-center gap-3">
              <img src={ahLogo} alt="Ahmed Hashem Logo" className="h-11 w-11 object-contain transition group-hover:scale-105" />
              <span className="text-2xl font-black tracking-[-0.04em] text-white">AH<span className="text-violet-500">.</span></span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
              Full-Stack Developer building practical web, backend, and mobile solutions with an engineering mindset.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 md:pt-3">
            {footerLinks.map((item) => (
              <a key={item} href={"#" + item.toLowerCase()} className="text-sm text-white/45 transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:justify-end">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/45 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ahmed Hashem Alnaji. All rights reserved.</p>
          <a href="#home" className="group inline-flex items-center gap-2 self-start transition hover:text-white sm:self-auto">
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 transition group-hover:border-violet-400/40">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
