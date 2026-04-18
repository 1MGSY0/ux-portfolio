import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CursorGradient } from "@/app/components/cursor-gradient";
import { SiteHeader } from "@/app/components/site-header";

const nunito = localFont({
  src: "../public/duo-chat/fonts/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
  display: "swap",
});

const duoDisplay = localFont({
  src: "../public/duo-chat/fonts/Duolingo Feather Bold.ttf",
  variable: "--font-duo-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GU Shiyuan | Portfolio",
  description:
    "Portfolio by GU Shiyuan featuring a Duolingo case study and student design work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${nunito.variable} ${duoDisplay.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground">
        <CursorGradient />
        <SiteHeader />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
