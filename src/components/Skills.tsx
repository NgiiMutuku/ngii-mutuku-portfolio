
import { skills } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const experiencedSkills = skills.filter(
    (skill) => skill.status === "experienced"
  );

  const learningSkills = skills.filter(
    (skill) => skill.status === "learning"
  );

  return (
    <section id="skills" className="container-mono py-24 md:py-32">
      <SectionHeading eyebrow="Toolbox" title="Skills & tools" />

      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-4">
          Skills & professional experience
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {experiencedSkills.map(({ name, Icon }) => (
            <div
              key={name}
              className="reveal group flex items-center gap-3 px-4 py-3 rounded-md border border-border bg-card transition-colors hover:bg-accent"
            >
              <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Currently developing
        </h3>

        <p className="text-sm text-muted-foreground mb-4">
          Building practical skills through continued learning and hands-on exercises.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {learningSkills.map(({ name, Icon }) => (
            <div
              key={name}
              className="reveal group flex items-center gap-3 px-4 py-3 rounded-md border border-border bg-card transition-colors hover:bg-accent"
            >
              <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
