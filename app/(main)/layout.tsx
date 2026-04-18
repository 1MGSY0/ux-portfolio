// app/(main)/layout.tsx
import React from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white md:bg-gray-100 min-h-dvh flex items-start md:items-center justify-center font-sans">
      <div className="w-full h-dvh md:max-w-[400px] md:h-[800px] md:max-h-screen bg-white md:shadow-2xl overflow-hidden relative md:border md:border-gray-200 md:rounded-[40px]">
        {children}
      </div>
    </div>
  );
}
