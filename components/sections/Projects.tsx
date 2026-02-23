"use client";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

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

export default function Projects() {
  const [ref, visible] = useInView();
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const displayed = filter === "featured"
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section
      id="projects"
      className="relative z-10"
      style={{ padding: "100px 5%", background: "rgba(255,255,255,0.015)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Portfolio" title="Featured" highlight="Projects" />

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {(["all", "featured"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "8px 24px",
                borderRadius: 100,
                border: filter === f ? "none" : "1px solid rgba(255,255,255,0.1)",
                background:
                  filter === f
                    ? "linear-gradient(135deg,#00f5c4,#a78bfa)"
                    : "transparent",
                color: filter === f ? "#050a12" : "rgba(226,232,240,0.6)",
                cursor: "pointer",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.04em",
                textTransform: "capitalize",
                transition: "all 0.2s ease",
              }}
            >
              {f === "all" ? `All (${projects.length})` : `Featured (${projects.filter((p) => p.featured).length})`}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {displayed.map((project, i) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={i * 0.08}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
