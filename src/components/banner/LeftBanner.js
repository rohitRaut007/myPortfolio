import React from "react";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaDownload,
} from "react-icons/fa";

const JET = "'JetBrains Mono', 'Roboto Mono', monospace";
const DISPLAY = "'Space Grotesk', sans-serif";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["React Native Developer.", "Software Engineer.", "Django + AWS Backend.", "Android Enthusiast."],
    loop: true,
    typeSpeed: 22,
    deleteSpeed: 10,
    delaySpeed: 2200,
  });

  return (
    <div style={{ maxWidth: "600px", color: "var(--c-text-2)" }}>

      {/* Availability badge */}
      <div style={{ marginBottom: "14px" }}>
        <span
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "5px 14px", borderRadius: "999px",
            background: "var(--c-border)",
            border: "1px solid var(--c-border-s)",
            fontFamily: JET, fontSize: "11px", color: "var(--c-accent)",
            letterSpacing: "0.06em",
          }}
        >
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span
              className="animate-ping"
              style={{
                position: "absolute", display: "inline-flex",
                width: "8px", height: "8px", borderRadius: "50%",
                background: "var(--c-accent)", opacity: 0.6,
              }}
            />
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--c-accent)", display: "inline-flex", flexShrink: 0 }} />
          </span>
          Available &middot; Open to Full-Time &amp; Contract Roles
        </span>
      </div>

      {/* "HI," */}
      <div style={{
        fontFamily: JET, fontSize: "13px", letterSpacing: "0.42em",
        color: "var(--c-accent)", marginBottom: "10px", textTransform: "uppercase",
      }}>
        Hi,
      </div>

      {/* Name + role */}
      <h1 style={{
        margin: 0, fontFamily: DISPLAY, fontWeight: 700,
        fontSize: "clamp(34px, 4.4vw, 60px)",
        lineHeight: 1.0, letterSpacing: "-0.02em", color: "var(--c-text-1)",
      }}>
        I'm Rohit Raut
        <span style={{
          display: "block", marginTop: "6px",
          fontSize: "clamp(22px, 2.8vw, 40px)",
          fontWeight: 600, color: "var(--c-text-1)",
        }}>
          a <span style={{ color: "var(--c-accent)" }}>{text}</span>
          <Cursor cursorBlinking cursorStyle="|" cursorColor="var(--c-accent)" />
        </span>
      </h1>

      {/* Body */}
      <p style={{
        margin: "14px 0 0", maxWidth: "480px",
        fontSize: "15px", lineHeight: 1.6, color: "var(--c-text-3)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}>
        Full stack engineer, 1.5 years shipping mobile and backend. Built a
        sports tech platform for athlete monitoring that's live on both stores,
        using React Native and Django. I own features from database schema
        to production release.
      </p>

      {/* Ships on pills */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "12px", flexWrap: "wrap" }}>
        <span style={{ fontFamily: JET, fontSize: "12px", letterSpacing: "0.08em", color: "var(--c-text-4)" }}>
          Ships on
        </span>
        {["iOS", "Android"].map(label => (
          <span key={label} style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            padding: "5px 12px", border: "1px solid var(--c-border-s)",
            borderRadius: "999px", fontFamily: JET, fontSize: "12px", color: "var(--c-text-2)",
          }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--c-accent)", flexShrink: 0 }} />
            {label}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", gap: "14px", marginTop: "14px", flexWrap: "wrap" }}>
        <Link to="contact" smooth offset={-70} duration={500}>
          <button
            style={{
              border: "none", cursor: "pointer", fontFamily: DISPLAY,
              padding: "11px 26px", borderRadius: "10px",
              background: "var(--c-accent)", color: "#ffffff",
              fontWeight: 600, fontSize: "14px",
              boxShadow: "0 6px 24px var(--c-border-s)",
              transition: "transform .18s ease, box-shadow .18s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px var(--c-border-s)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 24px var(--c-border-s)"; }}
          >
            Hire Me
          </button>
        </Link>

        <a href="/Rohit_Raut_Resume_FINAL.pdf" download="Rohit_Raut_Resume_FINAL.pdf">
          <button
            style={{
              cursor: "pointer", fontFamily: DISPLAY,
              padding: "10px 22px", borderRadius: "10px",
              background: "var(--c-bg-card-2)",
              border: "1px solid var(--c-border-s)",
              color: "var(--c-text-2)", fontWeight: 600, fontSize: "14px",
              display: "inline-flex", alignItems: "center", gap: "8px",
              transition: "border-color .18s ease, background .18s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--c-accent)"; e.currentTarget.style.background = "var(--c-border)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--c-border-s)"; e.currentTarget.style.background = "var(--c-bg-card-2)"; }}
          >
            <FaDownload style={{ fontSize: "12px", opacity: 0.7 }} />
            Download CV
          </button>
        </a>
      </div>

      {/* Stats row */}
      <div style={{
        display: "flex", alignItems: "center", gap: "14px", marginTop: "10px",
        fontFamily: JET, fontSize: "12px", color: "var(--c-text-4)", flexWrap: "wrap",
      }}>
        <span><span style={{ color: "var(--c-text-2)" }}>2</span> stores</span>
        <span style={{ opacity: 0.35 }}>/</span>
        <span><span style={{ color: "var(--c-text-2)" }}>1</span> codebase</span>
        <span style={{ opacity: 0.35 }}>/</span>
        <span><span style={{ color: "var(--c-text-2)" }}>1.5</span> yrs shipping</span>
      </div>

      {/* Social links */}
      <div style={{ marginTop: "12px" }}>
        <div style={{ fontFamily: JET, fontSize: "10px", letterSpacing: "0.12em", color: "var(--c-border-s)", marginBottom: "8px", textTransform: "uppercase" }}>
          Find me in
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            { href: "https://github.com/rohitRaut007", icon: <FaGithub /> },
            { href: "https://www.instagram.com/raut.rohit_/", icon: <FaInstagram /> },
            { href: "https://x.com/rohit_raut007", icon: <FaTwitter /> },
            { href: "https://www.linkedin.com/in/rohit-raut-91369a27a/", icon: <FaLinkedinIn /> },
          ].map(({ href, icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
