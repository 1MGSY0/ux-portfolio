'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, BookText, Dumbbell, Star, UserRound, Video } from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex justify-center bg-white h-dvh md:h-full min-h-0 font-sans text-[#4b4b4b] p-4">
      <div className="w-full h-full min-h-0 flex flex-col relative overflow-hidden bg-white">
        <div className="mt-8 mx-4 bg-[#58cc02] pl-5 pr-3 py-3 rounded-2xl border-b-[6px] border-[#46a302] flex justify-between items-center z-30 relative shrink-0 shadow-sm">
          <div className="flex flex-col flex-1 border-r-[3px] border-[#46a302]/30 pr-4 mr-2">
            <span className="text-white/90 font-extrabold text-[13px] tracking-wide uppercase">
              Section 1, Unit 7
            </span>
            <span className="font-feather-title font-feather-white text-[22px] leading-tight mt-0.5">
              Celebrate a birthday
            </span>
          </div>
          <button className="p-2 active:translate-y-[2px] transition-all hover:brightness-105 cursor-pointer" aria-label="Open unit notes">
            <BookText className="w-7 h-7 text-white" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar relative bg-white">
          <div className="relative w-full min-h-[1040px] pt-8 pb-16">
            <PathNode top={34} left="50%" icon={Star} />

            <TreasureChest top={90} left="40%" />
            <MessageBird top={220} left="73%" />

            <PathNode top={274} left="31%" icon={Star} />
            <PathNode top={390} left="40%" icon={Video} />
            <PathNode top={506} left="50%" icon={Dumbbell} />
            <PathNode top={622} left="60%" icon={Video} />
            <PathNode top={738} left="66%" icon={Star} />

            <HeadphoneBird top={842} left="24%" />
          </div>
        </div>

        <div className="absolute bottom-[96px] right-6 z-40">
          <ArrowButton />
        </div>

        <div className="h-[85px] bg-white border-t-2 border-gray-200 flex items-center justify-between px-10 shrink-0 z-30">
          <button className="p-2 border-[3px] border-[#84d8ff] rounded-2xl bg-[#ddf4ff] flex items-center justify-center cursor-pointer hover:bg-[#cbeaff] transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffc800" stroke="#ff4b4b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </button>

          <button className="cursor-pointer hover:scale-110 transition-transform" aria-label="Open rewards">
            <div className="relative w-[30px] h-[30px]">
              <Image
                src="/chest-close.png"
                alt="Reward chest"
                fill
                className="object-contain"
                sizes="30px"
              />
            </div>
          </button>

          <button className="cursor-pointer hover:scale-110 transition-transform" aria-label="Open profile">
            <UserRound className="w-8 h-8 text-[#1cb0f6] fill-[#1cb0f6]" strokeWidth={1.5} />
          </button>

          <button className="cursor-pointer hover:scale-110 transition-transform" aria-label="Open shield">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#ff7db8" stroke="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </button>

          <button className="cursor-pointer hover:scale-110 transition-transform relative" aria-label="Open chat duo">
            <div className="relative w-[34px] h-[34px] rounded-full overflow-hidden">
              <Image
                src="/chat-duo.jpg"
                alt="Chat Duo"
                fill
                className="object-cover"
                sizes="34px"
              />
            </div>
          </button>

          <button className="w-[34px] h-[34px] rounded-full bg-[#ce82ff] flex items-center justify-center gap-[3px] cursor-pointer hover:scale-110 transition-transform" aria-label="More">
            <div className="w-[5px] h-[5px] bg-white rounded-full" />
            <div className="w-[5px] h-[5px] bg-white rounded-full" />
            <div className="w-[5px] h-[5px] bg-white rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
}

function PathNode({
  top,
  left,
  icon: Icon,
}: {
  top: number;
  left: string;
  icon: typeof Star;
}) {
  return (
    <div
      className="absolute flex items-center justify-center cursor-pointer group"
      style={{ top: `${top}px`, left, transform: 'translateX(-50%)' }}
    >
      <button className="relative w-[92px] h-[76px] bg-[#58cc02] rounded-[50%] flex items-center justify-center border-b-[8px] border-[#46a302] active:border-b-[0px] active:translate-y-[8px] transition-all hover:brightness-105 shadow-[0_3px_0_0_#46a302] drop-shadow-[0_10px_10px_rgba(0,0,0,0.14)]">
        <Icon className="text-white w-[34px] h-[34px] mb-1" fill="white" strokeWidth={0} />
      </button>
    </div>
  );
}

function MessageBird({ top, left }: { top: number; left: string }) {
  return (
    <div
      className="absolute flex flex-col items-center z-10"
      style={{ top: `${top}px`, left, transform: 'translateX(-50%)' }}
    >
      <div className="relative">
        <Link
          href="/messages"
          className="absolute -top-[52px] -left-[18px] z-20 animate-bounce cursor-pointer hover:scale-110 active:scale-95 transition-transform"
          aria-label="Open messages"
        >
          <div className="bg-white rounded-full shadow-sm">
            <div className="bg-white rounded-full p-[4px]">
              <div className="bg-[#58cc02] rounded-full px-5 py-3.5 flex gap-2 items-center relative">
                <div className="w-[8px] h-[8px] bg-white rounded-full" />
                <div className="w-[8px] h-[8px] bg-white rounded-full" />
                <div className="w-[8px] h-[8px] bg-white rounded-full" />
                <div className="absolute -bottom-[9px] right-[16px] w-0 h-0 border-l-[9px] border-l-transparent border-t-[12px] border-t-[#58cc02] border-r-[9px] border-r-transparent z-10" />
              </div>
            </div>
          </div>
        </Link>

        <div className="relative z-10 flex items-end justify-center w-[92px] h-[92px] p-1">
          <Image
            src="/chat-duo.jpg"
            alt="Duo mascot"
            width={82}
            height={82}
            className="object-contain scale-120"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
        </div>
      </div>

      <div className="w-[58px] h-[18px] bg-gray-200/80 rounded-[50%] mt-1" />
      <div className="flex gap-[6px] mt-2">
        <Star size={20} fill="#e5e7eb" strokeWidth={0} />
        <Star size={20} fill="#e5e7eb" strokeWidth={0} />
        <Star size={20} fill="#e5e7eb" strokeWidth={0} />
      </div>
    </div>
  );
}

function TreasureChest({ top, left }: { top: number; left: string }) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ top: `${top}px`, left, transform: 'translateX(-50%)' }}
    >
      <div className="relative w-[180px] h-[180px] mt-2 cursor-pointer hover:scale-105 transition-transform">
        <Image
          src="/chest-open.png"
          alt="Open treasure chest"
          fill
          className="object-contain drop-shadow-sm"
          loading="eager"
          sizes="200px"
        />
      </div>
    </div>
  );
}

function HeadphoneBird({ top, left }: { top: number; left: string }) {
  return (
    <div
      className="absolute flex flex-col items-center z-10"
      style={{ top: `${top}px`, left, transform: 'translateX(-50%)' }}
    >
      <div className="relative">
          <Image
            src="/chat-duo2.jpg"
            alt="Duo mascot"
            width={90}
            height={90}
            className="object-contain scale-150"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
      </div>
    </div>
  );
}

function ArrowButton() {
  return (
    <div>
      <button className="w-[65px] h-[65px] bg-white border-[3px] border-gray-200 border-b-[5px] rounded-[20px] flex items-center justify-center active:border-b-[3px] active:translate-y-[2px] hover:bg-gray-50 transition-all text-[#1cb0f6] cursor-pointer">
        <ArrowDown strokeWidth={3.5} size={32} />
      </button>
    </div>
  );
}
