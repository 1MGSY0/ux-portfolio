import { Reveal } from "@/app/components/reveal";
import { ProjectCard } from "@/app/components/project-card";
import { projectCards } from "@/app/data/site-content";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
          Projects
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          Portfolio projects and case studies
        </h1>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projectCards.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
