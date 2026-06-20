import React from "react";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaDownload,
} from "react-icons/fa";

const JET = "'JetBrains Mono', 'Roboto Mono', monospace";
const DISPLAY = "'Space Grotesk', sans-serif";
const G = "#3DDC84";
const G_BORDER = "rgba(61,220,132,0.28)";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["React Native Developer.", "Software Engineer.", "Django + AWS Backend.", "Android Enthusiast."],
    loop: true,
    typeSpeed: 22,
    deleteSpeed: 10,
    delaySpeed: 2200,
  });

  return (
    <div style={{ maxWidth: "600px", color: "#e9f1ec" }}>

      {/* Availability badge */}
      <div style={{ marginBottom: "14px" }}>
        <span
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "5px 14px", borderRadius: "999px",
            background: "rgba(61,220,132,0.08)",
            border: "1px solid rgba(61,220,132,0.3)",
            fontFamily: JET, fontSize: "11px", color: G,
            letterSpacing: "0.06em",
          }}
        >
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span
              className="animate-ping"
              style={{
                position: "absolute", display: "inline-flex",
                width: "8px", height: "8px", borderRadius: "50%",
                background: G, opacity: 0.6,
              }}
            />
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: G, display: "inline-flex", flexShrink: 0 }} />
          </span>
          Available · Open to Full-Time &amp; Contract Roles
        </span>
      </div>

      {/* "HI," */}
      <div style={{
        fontFamily: JET, fontSize: "13px", letterSpacing: "0.42em",
        color: G, marginBottom: "10px", textTransform: "uppercase",
      }}>
        Hi,
      </div>

      {/* Name + role */}
      <h1 style={{
        margin: 0, fontFamily: DISPLAY, fontWeight: 700,
        fontSize: "clamp(34px, 4.4vw, 60px)",
        lineHeight: 1.0, letterSpacing: "-0.02em", color: "#f4f9f6",
      }}>
        I'm Rohit Raut
        <span style={{
          display: "block", marginTop: "6px",
          fontSize: "clamp(22px, 2.8vw, 40px)",
          fontWeight: 600, color: "#f4f9f6",
        }}>
          a <span style={{ color: G }}>{text}</span>
          <Cursor cursorBlinking cursorStyle="|" cursorColor={G} />
        </span>
      </h1>

      {/* Body */}
      <p style={{
        margin: "14px 0 0", maxWidth: "480px",
        fontSize: "15px", lineHeight: 1.6, color: "#92a59b",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}>
        Full Stack Engineer with 1.5 years across mobile and backend. Built a
        sports tech platform for athlete monitoring — live on both stores —
        using React Native and Django. Own features from database schema to
        production release.
      </p>

      {/* Ships on pills */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "12px", flexWrap: "wrap" }}>
        <span style={{ fontFamily: JET, fontSize: "12px", letterSpacing: "0.08em", color: "#6f8278" }}>
          Ships on
        </span>
        {["iOS", "Android"].map(label => (
          <span key={label} style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            padding: "5px 12px", border: `1px solid ${G_BORDER}`,
            borderRadius: "999px", fontFamily: JET, fontSize: "12px", color: "#cfe9da",
          }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: G, flexShrink: 0 }} />
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
              background: G, color: "#04130b",
              fontWeight: 600, fontSize: "14px",
              boxShadow: "0 6px 24px rgba(61,220,132,0.28)",
              transition: "transform .18s ease, box-shadow .18s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(61,220,132,0.42)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(61,220,132,0.28)"; }}
          >
            Hire Me
          </button>
        </Link>

        <a href="/Rohit_Raut_Resume.pdf" download="Rohit_Raut_Resume.pdf">
          <button
            style={{
              cursor: "pointer", fontFamily: DISPLAY,
              padding: "10px 22px", borderRadius: "10px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(180,210,195,0.22)",
              color: "#d7e7df", fontWeight: 600, fontSize: "14px",
              display: "inline-flex", alignItems: "center", gap: "8px",
              transition: "border-color .18s ease, background .18s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(61,220,132,0.5)"; e.currentTarget.style.background = "rgba(61,220,132,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(180,210,195,0.22)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
          >
            <FaDownload style={{ fontSize: "12px", opacity: 0.7 }} />
            Download CV
          </button>
        </a>
      </div>

      {/* Stats row */}
      <div style={{
        display: "flex", alignItems: "center", gap: "14px", marginTop: "10px",
        fontFamily: JET, fontSize: "12px", color: "#6f8278", flexWrap: "wrap",
      }}>
        <span><span style={{ color: "#cfe9da" }}>2</span> stores</span>
        <span style={{ opacity: 0.35 }}>/</span>
        <span><span style={{ color: "#cfe9da" }}>1</span> codebase</span>
        <span style={{ opacity: 0.35 }}>/</span>
        <span><span style={{ color: "#cfe9da" }}>1.5</span> yrs shipping</span>
      </div>

      {/* Social links */}
      <div style={{ marginTop: "12px" }}>
        <div style={{ fontFamily: JET, fontSize: "10px", letterSpacing: "0.12em", color: "rgba(61,220,132,0.5)", marginBottom: "8px", textTransform: "uppercase" }}>
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
