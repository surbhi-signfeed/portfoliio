import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "@/styles/globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Surbhi Gulhana | Full Stack Developer",
  description:
    "Full Stack Developer with expertise in ReactJS, Next.js, and Node.js. Building high-performance, responsive web applications.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Surbhi Gulhana",
  ],
  openGraph: {
    title: "Surbhi Gulhana | Full Stack Developer",
    description:
      "Building high-performance web apps with ReactJS, Next.js & Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased">{children}</body>
    </html>
  );
}
