'use client';

import React, { useState, use, useRef, useEffect } from 'react';
import { ChevronLeft, Search, Settings, Volume2, Check, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Avatar } from '@/components/Avatar';
import { FeedbackDrawer } from '@/components/FeedbackDrawer';
import { Pills } from '@/components/Pills';
import { CONVERSATIONS_BY_ID, INBOX_DATA } from '@/lib/data';

export default function ChatScreen({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const goBack = () => { window.history.back(); };
  const resolvedParams = use(params);
  const chatData = INBOX_DATA.find((c) => c.id === resolvedParams.id) || INBOX_DATA[0];
  const conversationSteps =
    CONVERSATIONS_BY_ID[resolvedParams.id as keyof typeof CONVERSATIONS_BY_ID] ??
    CONVERSATIONS_BY_ID.laura;
  const isHistoryOnlyChat = resolvedParams.id === 'alexander' || resolvedParams.id === 'kay';
  
  const [currentStepIndex, setCurrentStepIndex] = useState(isHistoryOnlyChat ? -1 : 0);
  const [completedSteps, setCompletedSteps] = useState<any[]>(
    isHistoryOnlyChat ? conversationSteps.map((step) => ({ ...step, userSelection: [...step.correctIds] })) : []
  );
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomAnchorRef = useRef<HTMLDivElement>(null);
  const currentStep = conversationSteps[currentStepIndex];
  const correctAnswer = currentStep?.correctIds
    ?.map((id: string) => currentStep.bank.find((item: { id: string; text: string }) => item.id === id)?.text)
    .filter(Boolean)
    .join(' ');
  const isReplySelecting =
    currentStepIndex !== -1 &&
    currentStep?.type === 'exercise_reply' &&
    selectedIds.length > 0;
  const shouldShowUserTyping = isReplySelecting;
  const shouldShowReceiverTyping = isTyping;
  const shouldReserveUserTypingSpace =
    currentStepIndex !== -1 && currentStep?.type === 'exercise_reply';
  const isInputPanelOpen = currentStepIndex !== -1 && !isTyping;
  const playSfx = (src: string) => {
    const audio = new Audio(src);
    void audio.play().catch(() => {});
  };

  useEffect(() => {
    if (bottomAnchorRef.current) {
      bottomAnchorRef.current.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
      });
    }
  }, [completedSteps, currentStepIndex, isTyping, selectedIds]);

  useEffect(() => {
    if (showWrongAnswer) {
      playSfx('/wrong.mp3');
    }
  }, [showWrongAnswer]);

  const handlePillToggle = (id: string) => {
    if (showWrongAnswer) return;

    if (selectedIds.includes(id)) {
      setSelectedIds(prev => prev.filter(i => i !== id));
    } else {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  const handleSubmit = () => {
    if (selectedIds.length === 0) return;
    const isCorrect =
      selectedIds.length === currentStep.correctIds.length &&
      selectedIds.every((id, index) => id === currentStep.correctIds[index]);

    if (!isCorrect) {
      setShowWrongAnswer(true);
      return;
    }

    if (currentStep.type === 'exercise_reply') {
      playSfx('/message-sent.mp3');
      window.setTimeout(() => {
        playSfx('/correct.mp3');
      }, 140);
    } else {
      playSfx('/correct.mp3');
    }

    const finishedStep = { ...currentStep, userSelection: [...selectedIds] };
    setCompletedSteps(prev => [...prev, finishedStep]);
    setSelectedIds([]);
    setShowWrongAnswer(false);
    
    if (currentStepIndex < conversationSteps.length - 1) {
      if (currentStep.type === 'exercise_reply') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setCurrentStepIndex(prev => prev + 1);
        }, 1200);
      } else {
        setCurrentStepIndex(prev => prev + 1);
      }
    } else {
      setCurrentStepIndex(-1);
      setTimeout(() => {
        router.push('/complete');
      }, 250);
    }
  };

  const handleWrongAnswerContinue = () => {
    setShowWrongAnswer(false);
    setSelectedIds([]);
  };

  return (
    <div className="flex flex-col h-dvh md:h-full min-h-0 bg-white font-sans relative overflow-hidden">
      {/* Header */}
      <div className="bg-[#58cc02] text-white p-5 pt-13 flex items-center shadow-sm z-30">
        <button onClick={() => router.push('/messages')} className="mr-2 p-1 active:opacity-70">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <div className="flex items-center gap-3">
          <Avatar type={chatData.avatarFace} size="md" />
          <div className="leading-tight">
            <h2 className="font-feather-title font-feather-white text-xl leading-none">{chatData.name}</h2>
            <span className="text-sm font-bold opacity-90 lowercase">online</span>
          </div>
        </div>
        <div className="ml-auto flex gap-5 pr-4">
          <Search className="w-6 h-6" />
          <Settings className="w-6 h-6" />
        </div>
      </div>

      {/* Chat Area */}
      <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto overscroll-y-contain px-8 py-6 pb-60 md:pb-8 space-y-5 scroll-smooth">
        <div className="text-center text-[#777] text-xs font-black uppercase tracking-widest mb-4">Today</div>
        
        {completedSteps.map((step, idx) => (
          <div key={idx} className={`flex ${step.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`relative max-w-[85%] p-4 border-2 border-[#e5e5e5] border-b-[4px] rounded-2xl bg-white`}>
              <div className={`absolute top-4 w-3 h-3 border-l-2 border-t-2 border-[#e5e5e5] bg-white rotate-[-45deg] ${step.sender === 'user' ? '-right-[8px] rotate-[135deg]' : '-left-[8px]'}`}></div>
              
              <div className="flex items-start gap-3">
                <Volume2 className="text-[#1cb0f6] w-5 h-5 shrink-0 mt-1" />
                <div className="flex flex-col flex-1">
                  <div className="text-[#4b4b4b] font-bold text-lg leading-tight whitespace-pre-line">
                    {step.type === 'exercise_translate' ? step.text : step.displayText.split('\n')[0]}
                  </div>
                  <div className="mt-2 text-[#777] font-bold text-lg border-t border-gray-100 pt-2 opacity-60">
                    {step.type === 'exercise_translate' ? step.translation : step.displayText.split('\n').slice(1).join('\n')}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end items-center gap-1 mt-1">
                <span className="text-[10px] font-bold text-[#777] uppercase">{step.time}</span>
                <Check className="w-4 h-4 text-[#58cc02]" strokeWidth={4} />
              </div>
            </div>
          </div>
        ))}

        {/* Current Active Bubble */}
        {currentStepIndex !== -1 && !isTyping && currentStep.sender === 'laura' && (
          <div className="flex justify-start">
            <div className="relative max-w-[85%] p-4 border-2 border-[#e5e5e5] border-b-[4px] rounded-2xl bg-white min-w-[200px]">
              <div className="absolute top-4 w-3 h-3 border-l-2 border-t-2 border-[#e5e5e5] bg-white rotate-[-45deg] -left-[8px]"></div>
              <div className="flex items-start gap-3">
                <Volume2 className="text-[#1cb0f6] w-5 h-5 shrink-0 mt-1" />
                <div className="flex flex-col flex-1">
                  <span className="text-[#4b4b4b] font-bold text-lg leading-tight mb-2">{currentStep.text}</span>
                  
                  {/* Active bubble answer area */}
                  <Pills
                    mode="answer"
                    bank={currentStep.bank}
                    selectedIds={selectedIds}
                    correctIds={currentStep.correctIds}
                    onToggle={handlePillToggle}
                    size="md"
                    className="flex flex-wrap gap-x-1 gap-y-2 min-h-10 content-end"
                    dashBorderClass="border-[#e5e5e5]"
                  />
                </div>
              </div>
              <div className="text-right text-[10px] font-bold text-[#777] mt-4 uppercase">{currentStep.time}</div>
            </div>
          </div>
        )}

        {(shouldShowUserTyping || shouldReserveUserTypingSpace) && (
          <div
            className={`flex justify-end pl-4 transition-opacity duration-150 ${
              shouldShowUserTyping ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
             <div className="flex gap-1 bg-gray-100 p-3 rounded-2xl">
              <div className="w-2 h-2 bg-[#777] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#777] rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-[#777] rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}

        {shouldShowReceiverTyping && (
          <div className="flex justify-start pl-4">
             <div className="flex gap-1 bg-gray-100 p-3 rounded-2xl">
              <div className="w-2 h-2 bg-[#777] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#777] rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-[#777] rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}

        <div
          ref={bottomAnchorRef}
          className="h-px scroll-mt-0 scroll-mb-44 md:scroll-mb-8"
          aria-hidden="true"
        />
      </div>

      {/* Input Area */}
      {!isHistoryOnlyChat && (
        <div
          className={`absolute inset-x-0 bottom-0 bg-white border-t-2 border-[#e5e5e5] p-6 px-14 pb-10 z-20 transition-transform duration-300 ease-out md:static md:translate-y-0 ${
            isInputPanelOpen && !showWrongAnswer ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          {currentStepIndex !== -1 && !isTyping ? (
            <div className="flex flex-col gap-5">
              <div className="text-[#777] text-sm font-black text-left">
                {currentStep.guide}
              </div>
              
              {currentStep.type === 'exercise_reply' && (
                <div className="bg-[#f0f2f5] rounded-3xl p-5 min-h-[70px] flex items-end relative mb-2">
                  <Pills
                    mode="answer"
                    bank={currentStep.bank}
                    selectedIds={selectedIds}
                    correctIds={currentStep.correctIds}
                    onToggle={handlePillToggle}
                    size="md"
                    className="flex-1 flex flex-wrap gap-x-1 gap-y-2 items-end min-h-10 content-end"
                    dashBorderClass="border-gray-400"
                  />
                  <button 
                    onClick={handleSubmit}
                    disabled={selectedIds.length === 0 || showWrongAnswer}
                    className={`ml-4 p-2.5 rounded-full transition-all ${selectedIds.length > 0 && !showWrongAnswer ? 'text-[#58cc02]' : 'text-[#dce0e6]'}`}
                  >
                    <Send className="w-6 h-6 transform rotate-20" fill={selectedIds.length > 0 ? "currentColor" : "none"} />
                  </button>
                </div>
              )}

              <Pills
                mode="bank"
                bank={currentStep.bank}
                selectedIds={selectedIds}
                onToggle={handlePillToggle}
                size="bank"
                className="flex flex-wrap gap-2 justify-center"
              />

              {currentStep.type === 'exercise_translate' && (
                 <div className="flex justify-center pt-2">
                    <button onClick={handleSubmit} disabled={selectedIds.length === 0 || showWrongAnswer}
                      className={`inline-flex w-full justify-center items-center gap-2 px-5 py-4 rounded-2xl transition-all ${selectedIds.length > 0 && !showWrongAnswer ? 'bg-[#58cc02] text-white shadow-[0_4px_0_0_#46a302]' : 'bg-[#e5e5e5] text-white'}`}
                    >
                      <span className="text-base font-black leading-none">SUBMIT</span>
                    </button>
                 </div>
              )}
            </div>
          ) : (
            <div className="bg-[#f0f2f5] rounded-3xl p-5 flex items-center justify-between text-[#777] font-bold opacity-60">
              <span>Messages</span>
              <Send className="w-7 h-7 " />
            </div>
          )}
        </div>
      )}

      {showWrongAnswer && currentStepIndex !== -1 && (
        <FeedbackDrawer
          isCorrect={false}
          correctAnswer={correctAnswer || ''}
          onAction={handleWrongAnswerContinue}
        />
      )}
    </div>
  );
}
