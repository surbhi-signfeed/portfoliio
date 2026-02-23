"use client"
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBar from "@/components/ui/SkillBar";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10" style={{ padding: "80px 5%", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Tech Stack" title="Skills &" highlight="Technologies" />
        {/* RESPONSIVE: 1 col mobile, 2 col md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
