"use client";
import { useState, useEffect } from "react";

const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[70px]"
      style={{
        backdropFilter: "blur(20px)",
        background: scrolled ? "rgba(5,10,18,0.95)" : "rgba(5,10,18,0.7)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        transition: "background 0.3s ease",
      }}
    >
      {/* Logo */}
      <div
        className="text-[22px] font-extrabold tracking-tight cursor-pointer"
        style={{ fontFamily: "var(--font-syne)" }}
        onClick={() => scrollTo("Home")}
      >
        <span style={{ color: "#00f5c4" }}>S</span>
        <span className="text-white">urbhi</span>
        <span style={{ color: "#00f5c4" }}>.</span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="nav-link text-sm font-medium tracking-wide transition-colors hover:text-white"
            style={{
              background: "none",
              border: "none",
              color: "rgba(226,232,240,0.7)",
              cursor: "pointer",
              fontFamily: "var(--font-dm-sans)",
              padding: 0,
            }}
          >
            {link}
          </button>
        ))}
        <a
          href="mailto:surbhigulhana3@gmail.com"
          style={{
            background: "linear-gradient(135deg,#00f5c4,#a78bfa)",
            color: "#050a12",
            padding: "8px 22px",
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 700,
            textDecoration: "none",
            fontFamily: "var(--font-syne)",
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
          }}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="flex md:hidden flex-col gap-1.5 cursor-pointer p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{ background: "none", border: "none" }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#00f5c4",
              borderRadius: 2,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              opacity: mobileOpen && i === 1 ? 0 : 1,
              transform:
                mobileOpen && i === 0
                  ? "rotate(45deg) translate(3px, 3px)"
                  : mobileOpen && i === 2
                  ? "rotate(-45deg) translate(3px, -3px)"
                  : "none",
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="absolute top-[70px] left-0 right-0 flex flex-col items-center gap-4 py-6"
          style={{
            background: "rgba(5,10,18,0.98)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium"
              style={{
                background: "none",
                border: "none",
                color: "rgba(226,232,240,0.75)",
                cursor: "pointer",
              }}
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:surbhigulhana3@gmail.com"
            style={{
              background: "linear-gradient(135deg,#00f5c4,#a78bfa)",
              color: "#050a12",
              padding: "8px 22px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
