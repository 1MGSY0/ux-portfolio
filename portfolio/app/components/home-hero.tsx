"use client";

import Image from "next/image";
import Link from "next/link";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { Reveal } from "@/app/components/reveal";

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 120, damping: 18, mass: 0.5 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 18, mass: 0.5 });

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set(-((x - centerX) / centerX) * 7);
    rotateX.set(((y - centerY) / centerY) * 7);
  }

  function handlePointerLeave() {
    if (reduceMotion) return;

    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <section
      className="relative overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 md:px-8 lg:min-h-[calc(100vh-88px)] lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center lg:px-12 lg:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
            Portfolio
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 md:text-7xl">
            Transforming ideas into design experiences.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;m Gu Shiyuan, a NTU Information Engineering and Media graduate who enjoys taking
            ideas from concept stage into actual software-like experiences through research,
            interaction design, prototyping, and implementation-aware thinking.
          </p>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              href="/projects/duolingo"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium !text-white transition hover:bg-slate-800"
            >
              View featured project
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-sky-200 bg-sky-50 px-6 py-3 text-sm font-medium text-sky-950 transition hover:border-sky-300 hover:bg-white"
            >
              Browse projects
            </Link>
          </div>
        </Reveal>

        <Reveal className="self-center lg:justify-self-end">
          <motion.div
            className="relative mx-auto w-full max-w-[460px] rounded-[34px] border border-white/70 bg-white/65 p-4 shadow-[0_30px_90px_rgba(37,99,235,0.14)] backdrop-blur-sm"
            style={{
              rotateX: reduceMotion ? 0 : rotateX,
              rotateY: reduceMotion ? 0 : rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="pointer-events-none absolute -inset-3 rounded-[40px] border border-white/55 shadow-[0_0_70px_rgba(96,165,250,0.18)]" />
            <div className="overflow-hidden rounded-[26px] bg-[linear-gradient(180deg,#fdf2f8,#eef2ff)]">
              <Image
                src="/digital-poster.jpg"
                alt="Digital poster artwork"
                width={840}
                height={1050}
                sizes="(min-width: 1024px) 460px, (min-width: 768px) 60vw, 92vw"
                className="block h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
