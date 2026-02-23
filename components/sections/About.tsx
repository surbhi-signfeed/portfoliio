"use client"
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/lib/data";

const specializations = [
  { icon: "🔐", title: "Auth & Security", sub: "RBAC, JWT, Encryption" },
  { icon: "💳", title: "Payments",         sub: "Razorpay, Gateways"  },
  { icon: "📊", title: "Dashboards",       sub: "Analytics & Reports" },
  { icon: "☁️", title: "Cloud",            sub: "AWS EC2, Firebase"   },
];

const contactDetails = [
  { icon: "📧", value: personalInfo.email  },
  { icon: "📍", value: personalInfo.location },
  { icon: "📱", value: personalInfo.phone  },
  { icon: "🎓", value: "M.Sc. Computer Science" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10"
      style={{ padding: "100px 5%" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          label="About Me"
          title="The Developer Behind"
          highlight="The Code"
        />

        <div
          className="grid gap-16 items-center"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Left */}
          <div>
            <p
              className="text-base leading-loose mb-5"
              style={{ color: "rgba(226,232,240,0.75)" }}
            >
              I'm a{" "}
              <strong style={{ color: "#00f5c4" }}>Full Stack Developer</strong>{" "}
              based in Delhi, India with over 3 years of experience crafting
              end-to-end web solutions. I specialize in building scalable
              applications using the modern JavaScript ecosystem.
            </p>
            <p
              className="text-base leading-loose mb-8"
              style={{ color: "rgba(226,232,240,0.75)" }}
            >
              From complex RBAC systems and payment gateways to real-time
              dashboards and loyalty programs — I love turning challenging
              requirements into elegant, performant solutions.
            </p>

            {/* Contact info grid */}
            <div className="grid grid-cols-2 gap-4">
              {contactDetails.map(({ icon, value }) => (
                <div key={value} className="flex gap-3 items-start">
                  <span className="text-base mt-0.5">{icon}</span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(226,232,240,0.6)" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — specialization cards */}
          <div className="grid grid-cols-2 gap-4">
            {specializations.map((s) => (
              <div
                key={s.title}
                className="card text-center p-6"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <div
                  className="font-bold text-white text-sm mb-1.5"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {s.title}
                </div>
                <div className="text-xs" style={{ color: "#00f5c4" }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
