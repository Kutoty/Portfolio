import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francis Kisio | Software Engineer — Full-Stack Systems & AI Evaluation",
  description:
    "Software engineer specializing in full-stack systems, reproducible engineering, and AI evaluation. Building production applications and high-quality datasets for model training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-mt-20">
      {/* Added bg-background and text-foreground here */}
      <body className={`${geistSans.variable} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
