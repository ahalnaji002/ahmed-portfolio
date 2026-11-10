import { skillGroups } from "../data/skills";
import { useLanguage } from "../i18n/context";
import { Container, Reveal, SectionHeader, Tag, Window } from "./ui";

function folderName(title) {
  return title.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-") + "/";
}

function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeader index="02" path={t.skills.path} title={t.skills.title} intro={t.skills.intro} />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.05}>
              <Window
                title={<span className="text-ink">{folderName(group.title)}</span>}
                meta={group.skills.length + " " + t.skills.items}
                className="h-full transition hover:border-accent/50"
              >
                <div className="p-4 sm:p-5">
                  <p className="text-sm leading-6 text-muted rtl:leading-7">
                    {t.skills.descriptions[group.id] || group.description}
                  </p>
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
