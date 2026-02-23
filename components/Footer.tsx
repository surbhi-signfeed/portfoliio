import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 flex justify-between items-center flex-wrap gap-4"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 5%",
      }}
    >
      <div
        className="font-bold text-lg"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        <span style={{ color: "#00f5c4" }}>S</span>
        <span className="text-white">urbhi</span>
        <span style={{ color: "#00f5c4" }}>.</span>
      </div>

      <p className="text-sm" style={{ color: "rgba(226,232,240,0.4)" }}>
        © {year} {personalInfo.name}
      </p>

      <div className="flex gap-4">
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium transition-colors hover:text-white"
          style={{ color: "rgba(226,232,240,0.5)", textDecoration: "none" }}
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-sm font-medium transition-colors hover:text-white"
          style={{ color: "rgba(226,232,240,0.5)", textDecoration: "none" }}
        >
          Email
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium transition-colors hover:text-white"
          style={{ color: "rgba(226,232,240,0.5)", textDecoration: "none" }}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
