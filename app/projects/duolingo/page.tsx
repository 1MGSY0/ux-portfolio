import Image from "next/image";
import Link from "next/link";
import { PrototypeTabs } from "@/app/components/prototype-tabs";
import { Reveal } from "@/app/components/reveal";
import {
  caseStudyAnchors,
  caseStudyMeta,
  findings,
  ideationSteps,
  impactPoints,
  insightCards,
  iterationPoints,
  keyInsights,
  learningsProcess,
  overviewParagraphs,
  prototypeDirections,
  researchCards,
  testingNotes,
} from "@/app/data/duolingo-case-study";

function SectionTitle({
  id,
  eyebrow,
  title,
  body,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
        {body}
      </p>
    </div>
  );
}

function ChatBubble({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`relative w-full rounded-[22px] border-2 border-b-[4px] border-[#e5e5e5] bg-white px-5 py-4 text-sm font-semibold leading-7 text-[#4b4b4b] shadow-[0_10px_24px_rgba(15,23,42,0.06)] ${
        align === "right" ? "ml-auto" : ""
      }`}
    >
      <div
        className={`absolute top-4 h-3 w-3 border-[#e5e5e5] bg-white ${
          align === "right"
            ? "right-[-8px] rotate-45 border-r-2 border-t-2"
            : "left-[-8px] rotate-[-45deg] border-l-2 border-t-2"
        }`}
      />
      <div className={`flex items-start gap-3 ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
        <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#58cc02]" />
        <p>{children}</p>
      </div>
    </div>
  );
}

function TestingSetupIcon({ index }: { index: number }) {
  const commonClassName = "h-5 w-5 stroke-[2.2] text-sky-700";

  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={commonClassName} aria-hidden="true">
        <path d="M4 6h16v9H8l-4 4V6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10h8M8 7.5h5" stroke="currentColor" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={commonClassName} aria-hidden="true">
        <path d="M4 7.5h16M7.5 4v3.5M16.5 4v3.5M6 20h12a2 2 0 0 0 2-2V7.5H4V18a2 2 0 0 0 2 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12h3M8 15h6" stroke="currentColor" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={commonClassName} aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" />
        <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={commonClassName} aria-hidden="true">
      <path d="M10 17a7 7 0 1 1 5.2-2.3L20 19.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 10h6M9 13h4" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function OutcomeCardIcon({ type, index }: { type: "iteration" | "impact"; index: number }) {
  const commonClassName =
    type === "iteration"
      ? "h-5 w-5 stroke-[2.2] text-sky-700"
      : "h-5 w-5 stroke-[2.2] text-emerald-700";

  const iterationIcons = [
    <svg key="calendar" viewBox="0 0 24 24" fill="none" className={commonClassName} aria-hidden="true">
      <path d="M4 7.5h16M7.5 4v3.5M16.5 4v3.5M6 20h12a2 2 0 0 0 2-2V7.5H4V18a2 2 0 0 0 2 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12h3M8 15h6" stroke="currentColor" strokeLinecap="round" />
    </svg>,
    <svg key="chat" viewBox="0 0 24 24" fill="none" className={commonClassName} aria-hidden="true">
      <path d="M4 6h16v9H8l-4 4V6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 10h8M8 7.5h5" stroke="currentColor" strokeLinecap="round" />
    </svg>,
    <svg key="branch" viewBox="0 0 24 24" fill="none" className={commonClassName} aria-hidden="true">
      <path d="M7 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM17 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM7 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8h4a4 4 0 0 1 4 4v2M9 16h6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ];

  const impactIcons = [
    <svg key="spark" viewBox="0 0 24 24" fill="none" className={commonClassName} aria-hidden="true">
      <path d="m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8L12 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="message" viewBox="0 0 24 24" fill="none" className={commonClassName} aria-hidden="true">
      <path d="M4 6h16v9H8l-4 4V6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 10h8M8 7.5h5" stroke="currentColor" strokeLinecap="round" />
    </svg>,
    <svg key="shield" viewBox="0 0 24 24" fill="none" className={commonClassName} aria-hidden="true">
      <path d="M12 4 6 6.5V12c0 3.7 2.5 6.8 6 7.7 3.5-.9 6-4 6-7.7V6.5L12 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9.5 12 1.7 1.7L14.8 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="loop" viewBox="0 0 24 24" fill="none" className={commonClassName} aria-hidden="true">
      <path d="M7 7h8a4 4 0 1 1 0 8H9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m7 7 2.5-2.5M7 7l2.5 2.5M17 15l-2.5 2.5M17 15l-2.5-2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ];

  return type === "iteration" ? iterationIcons[index] : impactIcons[index];
}

export default function DuolingoProjectPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#eff6ff_0%,#f8fbff_18%,#ffffff_50%,#ecfdf5_100%)]">
      <section className="relative overflow-hidden border-b border-sky-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(132,204,22,0.18),transparent_24%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[minmax(0,1.02fr)_420px] lg:px-12 lg:py-20">
          <Reveal>
            <Link href="/projects" className="text-sm font-medium text-sky-800 hover:text-sky-950">
              Back to projects
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
              Case Study
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 md:text-7xl">
              {caseStudyMeta.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {caseStudyMeta.summary}
            </p>
            <div className="mt-6">
              <a
                href="https://chat-prototype-duolingo.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium !text-white transition hover:bg-slate-800"
              >
                Open live demo
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/80 bg-white/80 p-5 text-sm leading-6 text-slate-700 shadow-[0_16px_42px_rgba(15,23,42,0.05)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Process
                </p>
                <p className="mt-2">{caseStudyMeta.role}</p>
              </div>
              <div className="rounded-[22px] border border-white/80 bg-white/80 p-5 text-sm leading-6 text-slate-700 shadow-[0_16px_42px_rgba(15,23,42,0.05)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Project detail
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The team developed a more sustainable Duolingo direction through research,
                  ideation, and testing, with the chat practice prototype built to show how
                  contextual conversation could feel more useful in real life.
                </p>
              </div>
              <div className="rounded-[22px] border border-white/80 bg-white/80 p-5 text-sm leading-6 text-slate-700 shadow-[0_16px_42px_rgba(15,23,42,0.05)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Timeline
                </p>
                <p className="mt-2">{caseStudyMeta.timeline}</p>
              </div>
              <div className="rounded-[22px] border border-white/80 bg-white/80 p-5 text-sm leading-6 text-slate-700 shadow-[0_16px_42px_rgba(15,23,42,0.05)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Tools
                </p>
                <p className="mt-2">{caseStudyMeta.tools}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {caseStudyAnchors.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-950 transition hover:border-sky-300 hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="self-center">
            <div className="overflow-hidden rounded-[36px] border border-sky-100 bg-white p-4 shadow-[0_30px_90px_rgba(37,99,235,0.16)]">
              <div className="rounded-[30px] bg-[linear-gradient(180deg,#58cc02_0%,#84cc16_100%)] p-3">
                <div className="mx-auto w-full max-w-[290px] overflow-hidden rounded-[32px] border-[10px] border-slate-950 bg-slate-950 shadow-[0_18px_50px_rgba(15,23,42,0.22)]">
                  <div className="flex justify-center py-2">
                    <div className="h-1.5 w-20 rounded-full bg-white/25" />
                  </div>
                  <div className="relative aspect-[9/18.9] overflow-hidden rounded-[24px] bg-white">
                      <video
                        className="h-full w-full scale-[1.06] bg-white object-cover object-[51.6%_top]"
                        src="/duo-chat/chat-demo.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:px-12 lg:py-20">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-[28px] border border-sky-100 bg-white/85 p-5 shadow-[0_18px_44px_rgba(15,23,42,0.05)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Case study flow
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {caseStudyAnchors.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-full px-3 py-2 transition hover:bg-sky-50 hover:text-sky-950"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-20 md:space-y-24">
          <Reveal>
            <SectionTitle
              id="overview"
              eyebrow="Overview"
              title="Why this project mattered"
              body="This project looked at how Duolingo could encourage sustained language learning without relying so heavily on streak pressure."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-5 text-base leading-8 text-slate-600">
                {overviewParagraphs.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="rounded-[30px] border border-[#b8f28b] bg-[linear-gradient(180deg,#f7ffe9_0%,#ffffff_100%)] p-6 shadow-[0_18px_44px_rgba(88,204,2,0.1)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f6f43]">
                  Core problem
                </p>
                <div className="mt-5 space-y-4">
                  <ChatBubble>Learning did not feel close enough to real-world conversation.</ChatBubble>
                  <ChatBubble>
                    Motivation depended too much on maintaining a streak.
                  </ChatBubble>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <SectionTitle
              id="research"
              eyebrow="Research"
              title="Research showed a gap between activity and meaningful progress"
              body="We focused on what users felt they were getting from Duolingo, where the pressure came from, and what would make practice feel more worthwhile."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {researchCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.08}>
                  <div className="h-full rounded-[28px] border border-sky-100 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
              <div className="rounded-[30px] border border-sky-100 bg-white p-7 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-semibold text-slate-950">Key findings</p>
                <div className="mt-5 grid gap-4">
                  {keyInsights.map((item) => (
                    <ChatBubble key={item} align="right">
                      {item}
                    </ChatBubble>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[30px] border border-sky-100 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/duo-chat/angry-duo.png"
                    alt="Angry Duolingo owl illustration"
                    fill
                    className="object-contain bg-[linear-gradient(180deg,#ecfccb,#ffffff)] p-8"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <SectionTitle
              id="ideation"
              eyebrow="Ideation"
              title="The team explored broadly before narrowing down"
              body="We used brainstorming, affinity mapping, and effort-impact thinking to compare ideas before committing to prototype directions."
            />
            <div className="mt-8 grid gap-6">
              {ideationSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.06}>
                  <div className="grid gap-5 rounded-[30px] border border-sky-100 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.05)] md:grid-cols-[100px_minmax(0,1fr)]">
                    <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/75">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[30px] border border-sky-100 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/duo-chat/Assignment 2 Brainstorming.png"
                  alt="Brainstorming and effort impact board"
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
                Focused problems
              </p>
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              {insightCards.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="rounded-[28px] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <SectionTitle
              id="prototypes"
              eyebrow="Prototypes"
              title="Two concepts moved forward into mid-fi exploration"
              body="The selected directions addressed the core problem most effectively while remaining practical to prototype and evaluate. I developed the mid-fidelity prototypes in Figma, focusing on clearly illustrating user flows and key interactions."
            />
            <PrototypeTabs directions={prototypeDirections} />
          </Reveal>

          <Reveal>
            <SectionTitle
              id="testing"
              eyebrow="Testing"
              title="The concepts were validated through moderated user testing"
              body="We used think-aloud sessions and semi-structured interviews to understand usefulness, intuitiveness, confidence, and long-term learning fit."
            />
            <div className="mt-8">
              <div className="rounded-[30px] border border-sky-100 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-semibold text-slate-950">Testing setup</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {testingNotes.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[24px] bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-5 py-5 text-sm leading-6 text-slate-700 shadow-[inset_0_0_0_1px_rgba(186,230,253,0.55)]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100/80">
                        <TestingSetupIcon index={index} />
                      </div>
                      <p className="mt-4">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[30px] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-7 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
                High-fi prototypes for testing
              </p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
                <div className="space-y-4 text-base leading-7 text-slate-600">
                  <p>
                    High-fi prototypes were created for user testing so participants could react to
                    more realistic interaction flows instead of only static concept screens.
                  </p>
                  <p>
                    I created the chat prototype using Next.js, with a focus on making the user
                    actions and message flow clear enough for testing and discussion.
                  </p>
                </div>
                <div className="flex lg:justify-end">
                  <a
                    href="https://chat-prototype-duolingo.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3"
                  >
                    <div className="relative h-20 w-20 shrink-0">
                      <Image
                        src="/duo-chat/duo-happy.png"
                        alt="Happy Duo mascot"
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    </div>
                    <div className="relative whitespace-nowrap rounded-[22px] border-2 border-b-[4px] border-[#b7e88d] bg-[#f7ffe9] px-5 py-3 text-xs font-semibold leading-5 text-[#1f6f43] shadow-[0_10px_24px_rgba(88,204,2,0.12)] transition group-hover:border-[#9fdb6c] group-hover:bg-[#f1ffe0]">
                      <div className="absolute left-[-8px] top-4 h-3 w-3 rotate-[-45deg] border-l-2 border-t-2 border-[#b7e88d] bg-[#f7ffe9] transition group-hover:border-[#9fdb6c] group-hover:bg-[#f1ffe0]" />
                      Open live demo
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
                User test insights
              </p>
            </div>

            <div className="mt-5 grid gap-6">
              {findings.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="grid gap-6 rounded-[30px] border border-sky-100 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.05)] xl:grid-cols-[minmax(0,1fr)_320px]">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-slate-600">{item.body}</p>
                    </div>
                    <div className="rounded-[24px] bg-sky-50/70 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
                        Quote
                      </p>
                      <div className="mt-4 flex items-start gap-3">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-sky-100 bg-white">
                          <Image
                            src={item.avatar}
                            alt={item.avatarAlt}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div className="relative w-full rounded-[22px] border-2 border-b-[4px] border-[#e5e5e5] bg-white px-5 py-4 text-base leading-8 text-[#4b4b4b] shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                          <div className="absolute left-[-8px] top-4 h-3 w-3 rotate-[-45deg] border-l-2 border-t-2 border-[#e5e5e5] bg-white" />
                          <p>{item.quote}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <SectionTitle
              id="outcome"
              eyebrow="Outcome"
              title="The final direction focuses on a healthier, more sustainable learning loop"
              body="It combines flexibility, contextual real-life practice, and clearer progress cues into a more balanced Duolingo experience."
            />
            <div className="mt-8 space-y-6">
              <div className="rounded-[30px] border border-sky-100 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Iteration highlights
                </h3>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {iterationPoints.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[24px] bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-5 py-5 text-sm leading-6 text-slate-700 shadow-[inset_0_0_0_1px_rgba(186,230,253,0.55)]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100/80">
                        <OutcomeCardIcon type="iteration" index={index} />
                      </div>
                      <p className="mt-4">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-emerald-100 bg-[linear-gradient(180deg,#f7fff8_0%,#ffffff_100%)] p-7 shadow-[0_18px_40px_rgba(16,185,129,0.08)]">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Impact
                </h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {impactPoints.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[24px] bg-white px-5 py-5 text-sm leading-6 text-slate-700 shadow-[inset_0_0_0_1px_rgba(187,247,208,0.85),0_12px_24px_rgba(16,185,129,0.05)]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100/80">
                        <OutcomeCardIcon type="impact" index={index} />
                      </div>
                      <p className="mt-4">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[34px] border border-sky-100 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
                    Learnings & Process
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                    {learningsProcess.heading}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                    {learningsProcess.intro}
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {learningsProcess.takeaways.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[24px] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 shadow-[inset_0_0_0_1px_rgba(186,230,253,0.55)]"
                      >
                        <h4 className="text-lg font-semibold tracking-tight text-slate-950">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="rounded-[24px] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700/75">
                      Tools & technologies
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {learningsProcess.tools.map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-sky-100 bg-white px-3 py-2 text-sm leading-5 text-slate-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-sky-100 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700/75">
                      UX methods used
                    </p>
                    <div className="mt-4 space-y-2">
                      {learningsProcess.methods.map((item) => (
                        <div
                          key={item}
                          className="rounded-[18px] bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-emerald-100 bg-[linear-gradient(180deg,#f7fff8_0%,#ffffff_100%)] p-5 shadow-[0_18px_40px_rgba(16,185,129,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                      Future directions
                    </p>
                    <div className="mt-4 space-y-2">
                      {learningsProcess.futureDirections.map((item) => (
                        <div
                          key={item}
                          className="rounded-[18px] bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-[inset_0_0_0_1px_rgba(187,247,208,0.85)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
