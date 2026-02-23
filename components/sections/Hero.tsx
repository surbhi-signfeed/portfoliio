"use client";
import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import Image from "next/image";  

const floatingChips = [
  { label: "⚛️ React",   style: { top: "5%",  left: "-22%"  }, delay: "0s"   },
  { label: "▲ Next.js",  style: { top: "30%", right: "-24%" }, delay: "0.3s" },
  { label: "🟢 Node.js", style: { bottom: "12%", left: "-20%" }, delay: "0.6s" },
  { label: "🔷 TypeScript", style: { bottom: "28%", right: "-18%" }, delay: "0.9s" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center relative z-10"
      style={{ padding: "100px 5% 60px" }}
    >
      <div
        className="w-full grid gap-16 items-center"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* Left — Text */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Available badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full mb-6"
            style={{
              background: "rgba(0,245,196,0.08)",
              border: "1px solid rgba(0,245,196,0.2)",
              padding: "6px 16px",
            }}
          >
            <div
              className="animate-pulse-ring rounded-full"
              style={{ width: 8, height: 8, background: "#00f5c4" }}
            />
            <span
              className="text-xs font-semibold tracking-widest"
              style={{ color: "#00f5c4" }}
            >
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-extrabold leading-tight mb-5"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.8rem, 5vw, 4.4rem)",
              letterSpacing: "-0.03em",
            }}
          >
            <span className="text-white">Hi, I'm </span>
            <br />
            <span className="glow-text">{personalInfo.name}</span>
          </h1>

          <p
            className="font-semibold mb-4"
            style={{
              fontFamily: "var(--font-syne)",
              color: "#a78bfa",
              fontSize: 20,
            }}
          >
            {personalInfo.title}
          </p>

          <p
            className="leading-relaxed text-base mb-9"
            style={{ color: "rgba(226,232,240,0.65)", maxWidth: 480 }}
          >
            {personalInfo.tagline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "linear-gradient(135deg,#00f5c4,#a78bfa)",
                color: "#050a12",
                padding: "14px 32px",
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.04em",
              }}
            >
              View Projects →
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                background: "transparent",
                border: "1px solid rgba(0,245,196,0.4)",
                color: "#00f5c4",
                padding: "14px 32px",
                borderRadius: 100,
                textDecoration: "none",
                fontFamily: "var(--font-syne)",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10">
            {personalInfo.stats.map((s) => (
              <div key={s.label}>
                <div
                  className="font-extrabold leading-none"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 32,
                    color: "#00f5c4",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-sm mt-1"
                  style={{ color: "rgba(226,232,240,0.5)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Avatar blob */}
        <div
          className="flex justify-center items-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 1.1s ease 0.2s, transform 1.1s ease 0.2s",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* Blob */}
            <div
              className="animate-blob"
              style={{
                width: 340,
                height: 340,
                background: "linear-gradient(135deg,#00f5c4,#a78bfa,#38bdf8)",
                padding: 3,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  background: "#0d1421",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <div style={{ fontSize: 80 }}>
                  <Image
  src="/profile.jpg"       // ← path relative to /public
  alt="Surbhi Gulhana"
  width={260}
  height={260}
  priority                        // ← loads fast (above the fold)
  style={{ borderRadius: "50%", objectFit: "cover" }}
/></div>
                <div
                  className="font-bold text-white text-lg"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {personalInfo.name}
                </div>
                <div className="text-sm" style={{ color: "#00f5c4" }}>
                  Full Stack Dev
                </div>
              </div>
            </div>

            {/* Floating chips */}
            {floatingChips.map(({ label, style, delay }) => (
              <div
                key={label}
                className="animate-float"
                style={{
                  position: "absolute",
                  ...style,
                  background: "rgba(13,20,33,0.95)",
                  border: "1px solid rgba(0,245,196,0.3)",
                  borderRadius: 100,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#e2e8f0",
                  whiteSpace: "nowrap",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  animationDelay: delay,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
