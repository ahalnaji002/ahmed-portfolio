import { Container, Reveal, SectionHeader, Window } from "./ui";

const facts = [
  {
    key: "education",
    title: "Computer Engineering",
    text: "Academic foundation in software, systems, and engineering problem-solving.",
  },
  {
    key: "full_stack",
    title: "Full-Stack Development",
    text: "Building modern web experiences with React, Node.js, Laravel, and more.",
  },
  {
    key: "backend",
    title: "Backend Focus",
    text: "REST APIs, authentication, databases, architecture, and scalable application logic.",
  },
  {
    key: "approach",
    title: "Problem Solving",
    text: "Turning requirements and real-world needs into practical digital solutions.",
  },
];

function About() {
  return (
    <section id="about" className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeader index="01" path="cat about.md" title="Understand the problem first. Then build it properly." />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <Reveal className="space-y-5 leading-7 text-ink/75">
            <p>
              I&apos;m a Computer Engineering student and Full-Stack Developer
              focused on building practical, maintainable, and user-centered
              digital products.
            </p>
            <p className="text-muted">
              My work spans frontend development, backend systems, REST APIs,
              database design, mobile applications, and real-world client
              projects. I enjoy understanding the problem first, then building a
              solution that is clear, reliable, and scalable.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Window title="about.yml" meta={facts.length + " keys"}>
              <dl>
                {facts.map((fact) => (
                  <div key={fact.key} className="border-b border-line px-4 py-4 last:border-0">
                    <dt className="text-sm">
                      <span className="text-key">{fact.key}</span>
                      <span className="text-muted">: </span>
                      <span className="font-medium text-str">{fact.title}</span>
                    </dt>
                    <dd className="mt-1.5 pl-4 text-sm leading-6 text-muted">{fact.text}</dd>
                  </div>
                ))}
              </dl>
            </Window>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default About;
