// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// OpenDyslexic from your public/fonts folder
const openDyslexic = localFont({
  src: [
    {
      path: "../../public/fonts/OpenDyslexic3-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenDyslexic3-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-open-dyslexic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mootoo Portfolio",
  description: "My personal site showcasing my CV, projects, and blog",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`
        ${openDyslexic.variable}
        ${geistSans.variable}
        ${geistMono.variable}
        antialiased
      `}
    >
      <body>
        {children}
        <footer style={{ padding: '1rem', fontSize: '0.8rem', color: '#666' }}>
          © {new Date().getFullYear()} Joshua Mootoo — Font: 
          <a href="https://opendyslexic.org" target="_blank" rel="noopener noreferrer">
            OpenDyslexic
          </a>
        </footer>
      </body>
    </html>
  );
}
