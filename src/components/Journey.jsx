import { useLanguage } from "../i18n/context";
import { Code, Container, Reveal, SectionHeader, Tag, Window } from "./ui";

const technologies = ["React", "Next.js", "Node.js", "NestJS", "Express.js", "Laravel", "MySQL", "PostgreSQL", "Flutter", "Firebase"];

function Journey() {
  const { t } = useLanguage();
  const milestones = t.journey.milestones;

  return (
    <section id="journey" className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeader index="04" path={t.journey.path} title={t.journey.title} intro={t.journey.intro} />

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <Window title="git log --reverse" meta={<Code>branch: main</Code>}>
              <ol>
                {milestones.map((item, index) => {
                  const isHead = index === milestones.length - 1;
                  return (
                    <li key={item.year} className="relative grid grid-cols-[18px_1fr] gap-3 px-4 py-5 sm:grid-cols-[18px_80px_1fr] sm:gap-4">
                      {index < milestones.length - 1 && (
                        <span className="absolute bottom-0 start-[24px] top-[30px] w-px bg-line" aria-hidden="true" />
                      )}
                      <span
                        className={
                          "relative mt-1 h-[11px] w-[11px] rounded-full border-2 " +
                          (isHead ? "border-ok bg-ok" : "border-accent bg-bg")
                        }
                        aria-hidden="true"
                      />
                      <Code className="hidden text-sm text-muted sm:block">{item.year}</Code>
                      <div>
                        <p className="text-xs text-muted sm:hidden">
                          <Code>{item.year}</Code>
                        </p>
                        <p className="mt-1 sm:mt-0">
                          <Code className="text-accent">{item.type}:</Code>{" "}
                          <span className="font-medium">{item.title}</span>
                          {isHead && (
                            <Code className="ms-2 text-xs text-ok">(HEAD → main)</Code>
                          )}
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-muted rtl:leading-7">{item.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </Window>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <Window title={t.journey.status}>
              <div className="p-4">
                <p className="text-xs text-muted">{t.journey.current}</p>
                <p className="mt-1 font-display text-xl font-bold">{t.journey.currentValue}</p>
                <p className="mt-4 text-xs text-muted">{t.journey.education}</p>
                <p className="mt-1 text-sm">{t.journey.degree}</p>
                <p className="text-sm text-muted">
                  {t.journey.university} · <Code>{t.journey.years}</Code>
                </p>
              </div>
            </Window>
            <Window title={t.journey.toolbox}>
              <div className="flex flex-wrap gap-2 p-4">
                {technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Window>
            <a
              href="/Ahmed_Al_Naji_CV.pdf"
              download="Ahmed_Al_Naji_CV.pdf"
              className="bg-accent px-4 py-3 text-center font-bold text-bg transition hover:bg-ink"
            >
              {t.journey.cv}
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Journey;
