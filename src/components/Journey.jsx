import { Container, Reveal, SectionHeader, Tag, Window } from "./ui";

const milestones = [
  { year: "2021", type: "init", title: "The beginning", text: "Started Computer Engineering at the Islamic University of Gaza." },
  { year: "2022–23", type: "build", title: "Engineering foundations", text: "Built strong foundations in programming, algorithms, databases, and computer systems." },
  { year: "2024–25", type: "feat", title: "From learning to building", text: "Turned knowledge into full-stack, backend, and mobile products solving real problems." },
  { year: "2027", type: "next", title: "Ready for what’s next", text: "One semester from graduation and growing into a production-minded Full-Stack Developer." },
];

const technologies = ["React", "Node.js", "Express.js", "Laravel", "MySQL", "PostgreSQL", "Flutter", "Firebase"];

function Journey() {
  return (
    <section id="journey" className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeader
          index="04"
          path="git log --reverse"
          title="Every step added a new layer."
          intro="My journey at the Islamic University of Gaza shaped the engineering mindset behind my work — understand deeply, build practically, and keep improving."
        />

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <Window title="git log --reverse" meta="branch: main">
              <ol>
                {milestones.map((item, index) => {
                  const isHead = index === milestones.length - 1;
                  return (
                    <li key={item.year} className="relative grid grid-cols-[18px_1fr] gap-3 px-4 py-5 sm:grid-cols-[18px_80px_1fr] sm:gap-4">
                      {index < milestones.length - 1 && (
                        <span className="absolute bottom-0 left-[24px] top-[30px] w-px bg-line" aria-hidden="true" />
                      )}
                      <span
                        className={
                          "relative mt-1 h-[11px] w-[11px] rounded-full border-2 " +
                          (isHead ? "border-ok bg-ok" : "border-accent bg-bg")
                        }
                        aria-hidden="true"
                      />
                      <span className="hidden text-sm text-muted sm:block">{item.year}</span>
                      <div>
                        <p className="text-xs text-muted sm:hidden">{item.year}</p>
                        <p className="mt-1 sm:mt-0">
                          <span className="text-accent">{item.type}:</span>{" "}
                          <span className="font-medium">{item.title}</span>
                          {isHead && <span className="ml-2 text-xs text-ok">(HEAD → main)</span>}
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-muted">{item.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </Window>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <Window title="status">
              <div className="p-4">
                <p className="text-xs text-muted">current</p>
                <p className="mt-1 font-display text-xl font-bold">One semester to graduation</p>
                <p className="mt-4 text-xs text-muted">education</p>
                <p className="mt-1 text-sm">Computer Engineering</p>
                <p className="text-sm text-muted">Islamic University of Gaza · 2021–2027</p>
              </div>
            </Window>
            <Window title="toolbox">
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
              download cv.pdf ↓
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Journey;
