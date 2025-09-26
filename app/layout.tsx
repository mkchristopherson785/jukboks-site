import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
  description: "Create a party, add songs, and vote in real time.",
  openGraph: { images: ["/og.png"], title: "JukBoks", description: "Crowd-powered music queues" },
  twitter: { card: "summary_large_image", images: ["/og.png"], title: "JukBoks", description: "Crowd-powered music queues" },
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
