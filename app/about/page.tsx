import Image from "next/image";
import { Reveal } from "@/app/components/reveal";
import { aboutPoints } from "@/app/data/site-content";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-8 lg:px-12">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
              About Me
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Turning ideas into software-ready design experiences.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              I&apos;m Gu Shiyuan, a NTU Information Engineering and Media graduate who enjoys translating
              ideas, research findings, and product goals into design experiences that feel clear,
              useful, and closer to real software implementation.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[32px] border border-sky-100 bg-[linear-gradient(180deg,#e0f2fe,#eff6ff)] p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
              <Image
                src="/profile-image.png"
                alt="Portrait of Gu Shiyuan"
                fill
                sizes="(min-width: 1024px) 320px, 70vw"
                className="object-cover object-top scale-[1.15]"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {aboutPoints.map((item, index) => (
          <Reveal key={item} delay={index * 0.08}>
            <div className="rounded-[28px] border border-sky-100 bg-white p-6 text-base leading-7 text-slate-600 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
              {item}
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
