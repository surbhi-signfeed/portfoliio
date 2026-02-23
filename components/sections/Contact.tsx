"use client"
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/lib/data";

const contactLinks = [
  {
    label: "📧 Email Me",
    href: `mailto:${personalInfo.email}`,
    primary: true,
  },
  {
    label: "💼 LinkedIn",
    href: personalInfo.linkedin,
    primary: false,
  },
  {
    label: `📱 ${personalInfo.phone}`,
    href: `tel:${personalInfo.phone}`,
    primary: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <SectionHeader label="Get In Touch" title="Let's" highlight="Work Together" />

        <p
          className="text-base leading-loose mx-auto mb-12"
          style={{ color: "rgba(226,232,240,0.65)", maxWidth: 500 }}
        >
          I'm open to exciting opportunities. Whether it's a full-time role,
          freelance project, or just a tech chat — let's connect!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                padding: "14px 32px",
                borderRadius: 100,
                textDecoration: "none",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.03em",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                ...(link.primary
                  ? {
                      background: "linear-gradient(135deg,#00f5c4,#a78bfa)",
                      color: "#050a12",
                    }
                  : {
                      background: "transparent",
                      border: "1px solid rgba(0,245,196,0.4)",
                      color: "#00f5c4",
                    }),
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
