import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 5%" }}
    >
      {/* Stack on mobile, row on md+ */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="font-bold text-lg" style={{ fontFamily: "var(--font-syne)" }}>
          <span style={{ color: "#00f5c4" }}>S</span>
          <span className="text-white">urbhi</span>
          <span style={{ color: "#00f5c4" }}>.</span>
        </div>

        <p className="text-xs md:text-sm" style={{ color: "rgba(226,232,240,0.4)" }}>
          © {year} {personalInfo.name}
        </p>

        <div className="flex gap-4">
          {[
            { label: "LinkedIn", href: personalInfo.linkedin },
            { label: "Email",    href: `mailto:${personalInfo.email}` },
            { label: "GitHub",   href: personalInfo.github },
          ].map((l) => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="text-xs md:text-sm font-medium hover:text-white transition-colors"
              style={{ color: "rgba(226,232,240,0.5)", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
