import { useLanguage } from "../i18n/context";
import { Code, Container, Reveal, SectionHeader, Window } from "./ui";

const FACT_KEYS = ["education", "full_stack", "backend", "approach"];

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeader index="01" path={t.about.path} title={t.about.title} />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <Reveal className="space-y-5 leading-7 text-ink/75 rtl:leading-8">
            <p>{t.about.paragraphs[0]}</p>
            <p className="text-muted">{t.about.paragraphs[1]}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <Window title="about.yml" meta={FACT_KEYS.length + " " + t.about.keys}>
              <dl>
                {FACT_KEYS.map((key) => {
                  const [title, text] = t.about.facts[key];
                  return (
                    <div key={key} className="border-b border-line px-4 py-4 last:border-0">
                      <dt className="text-sm">
                        <Code>
                          <span className="text-key">{key}</span>
                          <span className="text-muted">:</span>
                        </Code>{" "}
                        <span className="font-medium text-str">{title}</span>
                      </dt>
                      <dd className="mt-1.5 ps-4 text-sm leading-6 text-muted rtl:leading-7">{text}</dd>
                    </div>
                  );
                })}
              </dl>
            </Window>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default About;
