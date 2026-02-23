"use client";

interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  icon: string;
  color: string;
  delay?: number;
  visible?: boolean;
}

export default function ProjectCard({
  title,
  desc,
  tags,
  icon,
  color,
  delay = 0,
  visible = true,
}: ProjectCardProps) {
  return (
    <div
      className="card p-7 flex flex-col gap-4 cursor-pointer h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        borderColor: `${color}15`,
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center text-2xl rounded-2xl"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}30`,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-white font-bold text-base leading-snug"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-grow" style={{ color: "rgba(226,232,240,0.6)" }}>
        {desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="skill-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
