import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarBackground from "./StarBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Luis Kerch",
  description: "Luis Kerch - Full Stack Software Engineer",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Luis Kerch",
    description: "Luis Kerch - Full Stack Software Engineer",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Kerch",
    description: "Luis Kerch - Full Stack Software Engineer",
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen bg-[#0d1117] text-white`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <StarBackground />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}