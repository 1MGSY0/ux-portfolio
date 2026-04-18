'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CompletePage() {
  const router = useRouter();
  const [isFilled, setIsFilled] = useState(false);
  const [showXp, setShowXp] = useState(false);
  const fillDurationMs = 1800;

  useEffect(() => {
    const completionAudio = new Audio('/completed.mp3');
    void completionAudio.play().catch(() => {});

    const fillDelayMs = 250;
    const xpPopMs = fillDelayMs + fillDurationMs * 0.9;

    const fillTimer = window.setTimeout(() => {
      setIsFilled(true);
    }, fillDelayMs);

    const xpTimer = window.setTimeout(() => {
      setShowXp(true);
    }, xpPopMs);

    return () => {
      window.clearTimeout(fillTimer);
      window.clearTimeout(xpTimer);
    };
  }, []);

  return (
    <div className="flex flex-col h-dvh md:h-full bg-white animate-in fade-in duration-500">
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className="mb-12 w-64 h-64 relative animate-[lesson-complete-pop_900ms_cubic-bezier(0.22,1,0.36,1)]">
          <Image
            src="/complete-bird.jpg"
            alt="Lesson complete bird"
            fill
            priority
            className="object-contain"
            sizes="256px"
          />
        </div>

        <div className="w-full flex items-center mb-8 -pr-1">
          <div className="flex-1 h-6 bg-[#e5e5e5] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ffc800] rounded-full transition-[width]"
              style={{
                width: isFilled ? '100%' : '0%',
                transitionDuration: `${fillDurationMs}ms`,
                transitionTimingFunction: 'cubic-bezier(0.18, 0.9, 0.22, 1)',
              }}
            />
          </div>
          <div className="w-15 h-15 relative shrink-0">
            <Image
              src="/chest-close.png"
              alt="Reward chest"
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
        </div>

        <h1 className="font-feather-title text-[#4b4b4b] text-2xl mb-2">
          Lesson Complete!{' '}
          <span
            className={`inline-block text-[#ffc800] transition-all duration-500 ${
              showXp
                ? 'opacity-100 scale-100 animate-[lesson-xp-pop_700ms_cubic-bezier(0.18,0.9,0.25,1.2)]'
                : 'opacity-0 scale-50'
            }`}
          >
            +10 XP
          </span>
        </h1>
        <p className="text-[#777] font-bold text-lg">
          You&apos;ve met your daily goal!
        </p>
      </div>

      <div className="p-6 pb-12">
        <button
          onClick={() => router.push('/')}
          className="w-full bg-[#1cb0f6] hover:bg-[#14a0e1] text-white font-black py-4 rounded-2xl shadow-[0_4px_0_0_#1899d6] active:shadow-none active:translate-y-1 transition-all text-lg uppercase tracking-widest"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
