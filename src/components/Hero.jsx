import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroImage from "../assets/ahmed-hero-cutout.webp";
import { API_PATH, heroSummary } from "../data/profile";
import { Container } from "./ui";

const links = [
  { label: "cv.pdf ↓", href: "/Ahmed_Al_Naji_CV.pdf", download: "Ahmed_Al_Naji_CV.pdf" },
  { label: "github", href: "https://github.com/ahalnaji002", external: true },
  { label: "linkedin", href: "https://www.linkedin.com/in/ahmed-hashem-alnaji/", external: true },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

function JsonValue({ values }) {
  const items = values.map((value, index) => (
    <span key={value}>
      <span className="text-str">"{value}"</span>
      {index < values.length - 1 && ", "}
    </span>
  ));

  return values.length === 1 ? items : <>[{items}]</>;
}

function Hero() {
  const photoRef = useRef(null);
  // scrollYProgress: 0 when the photo enters from the bottom, 1 once it has left through the top.
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const { scrollY } = useScroll();
  // Fade to black & white once the photo passes the middle of the screen...
  const photoGray = useTransform(scrollYProgress, [0.36, 0.5], [0, 1]);
  // ...but keep it in color at the very top of the page, where desktop shows it on load.
  const pageGate = useTransform(scrollY, [0, 200], [0, 1]);
  const progress = useTransform([photoGray, pageGate], ([photo, page]) => photo * page);

  // A scan line sweeps down the photo; everything above it is already black & white.
  const grayClip = useTransform(progress, (value) => `inset(0 0 ${(1 - value) * 100}% 0)`);
  const scanTop = useTransform(progress, (value) => `calc(8% + ${value * 92}%)`);
  const scanOpacity = useTransform(progress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);
  const photoLabel = useTransform(progress, (value) => {
    if (value <= 0) return "IMG_001 · ahmed.webp";
    if (value >= 1) return "IMG_001 · grayscale ✓";
    return "processing… " + Math.round(value * 100) + "%";
  });

  return (
    <section id="home">
      <Container className="grid gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 lg:pb-24 lg:pt-20">
        <div>
          <motion.p {...fadeUp(0)} className="text-xs text-muted">
            // full-stack developer · status: <span className="text-ok">● open_to_work</span>
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-5 font-display text-[clamp(44px,11.5vw,108px)] font-extrabold lg:text-[72px] xl:text-[80px] leading-[0.95] tracking-[-0.035em]"
          >
            I build the part
            <br />
            you <span className="text-accent">don&apos;t see.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} lang="ar" dir="rtl" className="mt-4 w-fit font-ar text-xl text-muted">
            أحمد هاشم الناجي
          </motion.p>

          <motion.p {...fadeUp(0.22)} className="mt-6 max-w-[54ch] leading-7 text-ink/75">
            Ahmed Hashem Al Naji — Computer Engineering student. I design REST
            APIs, databases and auth flows, then ship the React &amp; Flutter apps
            on top of them.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-7 flex flex-wrap gap-2.5">
            <a
              href="#projects"
              className="bg-accent px-4 py-3 font-bold text-bg transition hover:bg-ink"
            >
              ./view-work
            </a>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="border border-line px-4 py-3 transition hover:border-ink"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.2)} className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
          <div ref={photoRef} className="relative flex aspect-[4/5] items-end sm:aspect-square justify-center overflow-hidden border border-line bg-panel">
            <span className="absolute left-2 top-2 z-10 h-3.5 w-3.5 border-l-2 border-t-2 border-accent" />
            <span className="absolute right-2 top-2 z-10 h-3.5 w-3.5 border-r-2 border-t-2 border-accent" />
            <span className="absolute bottom-2 left-2 z-10 h-3.5 w-3.5 border-b-2 border-l-2 border-accent" />
            <span className="absolute bottom-2 right-2 z-10 h-3.5 w-3.5 border-b-2 border-r-2 border-accent" />
            <div className="relative h-[92%]">
              <img
                src={heroImage}
                alt="Ahmed Hashem Al Naji"
                fetchPriority="high"
                className="h-full w-auto object-contain object-bottom"
              />
              <motion.img
                src={heroImage}
                alt=""
                aria-hidden="true"
                style={{ clipPath: grayClip }}
                className="absolute inset-0 h-full w-full object-contain object-bottom grayscale contrast-110"
              />
            </div>
            <motion.span
              aria-hidden="true"
              style={{ top: scanTop, opacity: scanOpacity }}
              className="absolute inset-x-0 z-10 h-0.5 -translate-y-1/2 bg-accent shadow-[0_0_12px_2px_rgba(255,178,36,0.55)]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-bg/60" />
            <motion.span className="absolute bottom-3 left-4 z-10 text-[11px] text-muted">
              {photoLabel}
            </motion.span>
          </div>

          <div className="border border-line bg-panel">
            <a
              href={API_PATH}
              target="_blank"
              rel="noreferrer"
              title="Open the live API response"
              className="group flex justify-between gap-3 border-b border-line px-4 py-2.5 text-xs text-muted transition hover:bg-bg"
            >
              <span>
                <span className="text-accent">GET</span> <span className="group-hover:text-ink">{API_PATH}</span>
              </span>
              <span>
                <span className="text-ok">200 OK</span>{" "}
                <span className="text-accent">· try it ↗</span>
              </span>
            </a>
            <pre className="whitespace-pre-wrap p-4 text-[12.5px] leading-[1.7]">
              {"{\n"}
              {heroSummary.map(([key, values]) => (
                <span key={key}>
                  {"  "}
                  <span className="text-key">"{key}"</span>: <JsonValue values={values} />
                  {",\n"}
                </span>
              ))}
              {"  "}
              <span className="text-key">"available"</span>: <span className="text-ok">true</span>
              {"\n}"}
            </pre>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
