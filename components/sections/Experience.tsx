"use client";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences, education } from "@/lib/data";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

export default function Experience() {
  const [ref, visible] = useInView();

  return (
    <section id="experience" className="relative z-10" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Work History" title="Professional" highlight="Experience" />

        {/* Timeline */}
        <div ref={ref} style={{ position: "relative", paddingLeft: 40 }}>
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              style={{
                position: "relative",
                marginBottom: 48,
                paddingLeft: 28,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
                transition: `opacity 0.7s ease ${i * 0.2}s, transform 0.7s ease ${i * 0.2}s`,
              }}
            >
              {/* Timeline dot */}
              <div
                className="timeline-dot"
                style={{
                  background: exp.color,
                  boxShadow: `0 0 20px ${exp.color}`,
                }}
              />

              {/* Card */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${exp.color}25`,
                  borderRadius: 20,
                  padding: 32,
                }}
              >
                {/* Header */}
                <div
                  className="flex justify-between items-start flex-wrap gap-3 mb-5"
                >
                  <div>
                    <h3
                      className="text-xl font-extrabold text-white mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="font-semibold text-base" style={{ color: exp.color }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex gap-3 items-center flex-wrap">
                    <span
                      className="text-xs font-semibold tracking-wide px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "rgba(226,232,240,0.6)",
                      }}
                    >
                      {exp.type}
                    </span>
                    <span
                      className="text-sm font-semibold px-4 py-1.5 rounded-full"
                      style={{
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}40`,
                        color: exp.color,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Highlights grid */}
                <ul
                  className="grid gap-2.5"
                  style={{ gridTemplateColumns: "1fr 1fr", listStyle: "none" }}
                >
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2.5 text-sm leading-relaxed"
                      style={{ color: "rgba(226,232,240,0.7)" }}
                    >
                      <span
                        className="mt-1 flex-shrink-0"
                        style={{ color: exp.color }}
                      >
                        ▸
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginTop: 64 }}>
          <h3
            className="text-2xl font-bold text-white text-center mb-8"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Education 🎓
          </h3>
          <div className="grid grid-cols-2 gap-5">
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="card flex items-center gap-5 p-7"
              >
                <div className="text-4xl flex-shrink-0">{ed.icon}</div>
                <div>
                  <div
                    className="font-bold text-white text-base mb-1"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {ed.degree}
                  </div>
                  <div className="text-sm mb-1" style={{ color: "#a78bfa" }}>
                    {ed.school}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(226,232,240,0.5)" }}>
                    {ed.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
