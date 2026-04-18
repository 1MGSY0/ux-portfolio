import Link from "next/link";
import { HomeHero } from "@/app/components/home-hero";
import { Reveal } from "@/app/components/reveal";
import { ProjectCard } from "@/app/components/project-card";
import {
  aboutPoints,
  contactDetails,
  projectCards,
} from "@/app/data/site-content";

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-12" id="about">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
                About Me
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Turning ideas into software-ready design experiences.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {aboutPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-sky-100 bg-white p-6 text-base leading-7 text-slate-600 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-12" id="projects">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Projects
              </h2>
            </div>
            <Link href="/projects" className="text-sm font-medium text-sky-800 hover:text-sky-950">
              See all projects
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projectCards.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-12" id="contact">
        <Reveal>
          <div className="rounded-[32px] border border-sky-100 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
              Contact Me
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Open to entry-level, graduate roles, and discussions about collaboration in digital products.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  If you&apos;d like to discuss my work or a project opportunity, I will be happy to connect!
                </p>
              </div>
              <div className="space-y-3">
                {contactDetails.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-[22px] bg-slate-50 px-5 py-4 transition hover:bg-sky-50"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-900">{item.value}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
