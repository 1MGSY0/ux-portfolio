"use client";

import { useState } from "react";
import Image from "next/image";

type PrototypeDirection = {
  title: string;
  points: readonly string[];
};

const prototypeMeta: Record<
  string,
  {
    images: { src: string; alt: string }[];
    label: string;
    frameClassName: string;
    imageClassName: string;
    note: string;
  }
> = {
  "Flexible streaks": {
    images: [
      { src: "/duo-chat/high-fi-streak-prototype.png", alt: "High-fi streak prototype" },
      { src: "/duo-chat/calendar-prototype.png", alt: "Calendar streak prototype" },
    ],
    label: "Mid-fi streak prototype",
    frameClassName: "bg-[linear-gradient(180deg,#58cc02_0%,#84cc16_100%)]",
    imageClassName: "object-contain bg-[linear-gradient(180deg,#ecfccb,#ffffff)] p-6",
    note: "This direction explored a gentler continuity system with more flexible learning habit customization.",
  },
  "Chat-based practice": {
    images: [{ src: "/duo-chat/mid-fi-chat-prototype.png", alt: "Mid-fi chat prototype screens" }],
    label: "Mid-fi chat prototype",
    frameClassName: "bg-[linear-gradient(180deg,#58cc02_0%,#84cc16_100%)]",
    imageClassName: "object-contain bg-white p-6",
    note: "This direction tested whether scenario inboxes, guided replies, and messaging patterns could make language practice feel more realistic.",
  },
};

export function PrototypeTabs({ directions }: { directions: readonly PrototypeDirection[] }) {
  const orderedDirections = [...directions].sort((a, b) => {
    if (a.title === "Chat-based practice") return -1;
    if (b.title === "Chat-based practice") return 1;
    return 0;
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDirection = orderedDirections[activeIndex];
  const activeMeta = prototypeMeta[activeDirection.title];

  return (
    <div className="mt-8 rounded-[34px] border border-sky-100 bg-white p-4 shadow-[0_24px_60px_rgba(37,99,235,0.12)] md:p-6">
      <div className="flex flex-wrap gap-3">
        {orderedDirections.map((direction, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={direction.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-slate-950 text-white shadow-[0_10px_24px_rgba(15,23,42,0.14)]"
                  : "border border-sky-200 bg-sky-50 text-sky-950 hover:border-sky-300 hover:bg-white"
              }`}
            >
              {direction.title}
            </button>
          );
        })}
      </div>

      <div className="mt-6 overflow-hidden rounded-[30px] border border-sky-100 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
        <div className={`p-4 ${activeMeta.frameClassName}`}>
          {activeMeta.images.length === 1 ? (
            <div className="relative aspect-[16/8] overflow-hidden rounded-[22px] bg-white">
              <Image
                src={activeMeta.images[0].src}
                alt={activeMeta.images[0].alt}
                fill
                sizes="(min-width: 1024px) 900px, 92vw"
                className={activeMeta.imageClassName}
              />
            </div>
          ) : (
            <div className="grid aspect-[16/8] overflow-hidden rounded-[22px] bg-white md:grid-cols-2">
              {activeMeta.images.map((image, index) => (
                <div
                  key={image.src}
                  className={`relative min-h-0 ${index > 0 ? "border-t border-sky-100 md:border-l md:border-t-0" : ""}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 450px, 92vw"
                    className={activeMeta.imageClassName}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-[28px] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {activeMeta.label}
          </p>
          <ul className="mt-5 space-y-3 text-base leading-7 text-slate-600">
            {activeDirection.points.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Prototype note
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">{activeMeta.note}</p>
        </div>
      </div>
    </div>
  );
}
