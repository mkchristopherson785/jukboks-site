import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JukBoks — Crowd-powered music queues",
  description: "Create a party, add songs, and vote in real time. iOS, Android, and web.",
  openGraph: {
    title: "JukBoks — Crowd-powered music queues",
    description: "Spin up a party in seconds. Friends join, add songs, and vote in real time.",
    url: "https://jukboks.com",
    siteName: "JukBoks",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "JukBoks preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JukBoks — Crowd-powered music queues",
    description: "Spin up a party in seconds. Friends join, add songs, and vote in real time.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
