interface SectionHeaderProps {
  label: string;
  title: string;
  highlight: string;
  center?: boolean;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      <p className="section-label">{label}</p>
      <h2
        className="section-title"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
      >
        {title} <span className="glow-text">{highlight}</span>
      </h2>
    </div>
  );
}
