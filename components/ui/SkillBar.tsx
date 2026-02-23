"use client";
import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  icon: string;
  delay?: number;
}

export default function SkillBar({ name, level, icon, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="card p-5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span
            className="font-semibold text-white text-sm"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {name}
          </span>
        </div>
        <span className="text-sm font-bold" style={{ color: "#00f5c4" }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          background: "rgba(255,255,255,0.07)",
          borderRadius: 100,
          height: 6,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 100,
            background: "linear-gradient(90deg, #00f5c4, #a78bfa)",
            width: visible ? `${level}%` : "0%",
            transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay + 0.2}s`,
            boxShadow: "0 0 12px rgba(0,245,196,0.5)",
          }}
        />
      </div>
    </div>
  );
}
