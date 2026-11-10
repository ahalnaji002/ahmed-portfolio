import { Container, Reveal, SectionHeader, Tag, Window } from "./ui";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Creating modern, responsive interfaces with clean architecture and smooth user experiences.",
    skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design", "React Router"],
  },
  {
    title: "Backend",
    description: "Developing APIs, business logic, and secure backend systems.",
    skills: ["Node.js", "Express.js", "Laravel", "PHP", "REST APIs", "JWT Authentication", "API Design", "MVC Architecture"],
  },
  {
    title: "Database",
    description: "Designing structured and reliable data solutions.",
    skills: ["MySQL", "PostgreSQL", "Firebase", "Database Design", "ERD Modeling", "SQL Queries", "Migrations", "Data Modeling"],
  },
  {
    title: "Mobile & Cloud",
    description:
      "Building cross-platform mobile applications integrated with modern cloud services.",
    skills: ["Flutter", "Dart", "Firebase", "Flutter Widgets", "State Management", "Firebase Authentication", "Cloud Firestore", "Mobile UI Design"],
  },
];

function folderName(title) {
  return title.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-") + "/";
}

function Skills() {
  return (
    <section id="skills" className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeader
          index="02"
          path="ls ~/stack"
          title="The tools I reach for."
          intro="A practical stack for building complete web and mobile solutions, from user interfaces and APIs to databases and cloud services."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <Window
                title={<span className="text-ink">{folderName(group.title)}</span>}
                meta={group.skills.length + " items"}
                className="h-full transition hover:border-accent/50"
              >
                <div className="p-4 sm:p-5">
                  <p className="text-sm leading-6 text-muted">{group.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>
              </Window>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
