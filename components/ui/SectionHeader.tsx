interface SectionHeaderProps {
  label: string;
  title: string;
  highlight: string;
  center?: boolean;
}

export default function SectionHeader({ label, title, highlight, center = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      <p className="section-label">{label}</p>
      <h2
        className="section-title"
        style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: 1.4, paddingBottom: "0.15em" }}
      >
        {title} <span className="glow-text">{highlight}</span>
      </h2>
    </div>
  );
}
