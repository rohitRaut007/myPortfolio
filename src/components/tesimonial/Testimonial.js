import React, { useState } from "react";
import Title from "../layouts/Title";

const JET = "'JetBrains Mono', 'Roboto Mono', monospace";
const G = "var(--c-accent)";

const HIGHLIGHTS = [
  "Full-stack frontend & backend development",
  "API integrations & database management",
  "Adapted quickly in a fast-paced environment",
  "Quality work delivered within every deadline",
];

const Testimonial = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="recognition"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Verified by Industry" des="Recognition" />
      </div>

      {/* Main card */}
      <div
        className="max-w-6xl mx-auto rounded-2xl overflow-hidden"
        style={{
          background: "var(--c-bg-card)",
          border: "1px solid var(--c-border)",
          boxShadow: "none",
        }}
      >
        <div className="flex flex-col lgl:flex-row">

          {/* ── LEFT: LOR content ── */}
          <div className="w-full lgl:w-[55%] p-5 sml:p-8 lgl:p-12 flex flex-col gap-5 sml:gap-7">

            {/* Company header */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                {/* Apex Labs wordmark */}
                <div
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "6px 14px", borderRadius: "8px",
                    background: "var(--c-border)",
                    border: "1px solid var(--c-border-s)",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>🚀</span>
                  <span
                    style={{
                      fontFamily: JET, fontWeight: 700, fontSize: "14px",
                      color: G, letterSpacing: "0.12em",
                    }}
                  >
                    APEX LABS
                  </span>
                </div>

                {/* Verified badge */}
                <span
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    padding: "4px 10px", borderRadius: "999px",
                    background: "var(--c-border)",
                    border: "1px solid var(--c-border-s)",
                    fontFamily: JET, fontSize: "10px", color: G,
                    letterSpacing: "0.08em",
                  }}
                >
                  <span style={{ fontSize: "10px" }}>✓</span>
                  Verified · US Company
                </span>
              </div>

              {/* Location + date */}
              <div
                style={{
                  fontFamily: JET, fontSize: "11px",
                  color: "var(--c-text-4)", letterSpacing: "0.06em",
                }}
              >
                📍 Key Biscayne, Florida, USA &nbsp;·&nbsp; Letter of Recommendation &nbsp;·&nbsp; 9 May 2026
              </div>
            </div>

            {/* Pull quote */}
            <blockquote style={{ margin: 0 }}>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(18px, 2vw, 22px)",
                  fontWeight: 600, color: "var(--c-text-1)",
                  lineHeight: 1.55, letterSpacing: "-0.01em",
                }}
              >
                "I am confident that he will continue to perform exceptionally
                well in his future endeavors and will be{" "}
                <span style={{ color: G }}>
                  a valuable asset to any organization.
                </span>
                "
              </p>
            </blockquote>

            {/* Highlight chips */}
            <div className="flex flex-col gap-2">
              {HIGHLIGHTS.map((text, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "8px 12px", borderRadius: "8px",
                    background: "var(--c-bg-card-2)",
                    border: "1px solid var(--c-border)",
                  }}
                >
                  <span
                    style={{
                      width: "16px", height: "16px", borderRadius: "50%",
                      background: "var(--c-border)",
                      border: "1px solid var(--c-border-s)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, fontSize: "9px", color: G,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontFamily: JET, fontSize: "12px",
                      color: "var(--c-text-2)", letterSpacing: "0.02em",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Signatory */}
            <div
              style={{
                paddingTop: "16px",
                borderTop: "1px solid var(--c-border)",
              }}
            >
              <p
                style={{
                  fontFamily: JET, fontSize: "12px",
                  color: "var(--c-text-3)", letterSpacing: "0.04em",
                }}
              >
                — Utkarsh &nbsp;·&nbsp; Chief Operating Officer &nbsp;·&nbsp; Apex Labs
              </p>
              <a
                href="https://apexbytetech.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: JET, fontSize: "10px",
                  color: "var(--c-text-4)", letterSpacing: "0.06em",
                  textDecoration: "none", marginTop: "4px", display: "block",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--c-text-4)")}
              >
                apexbytetech.io ↗
              </a>
            </div>
          </div>

          {/* ── RIGHT: Document preview + CTA ── */}
          <div
            className="w-full lgl:w-[45%] p-5 sml:p-8 lgl:p-12 flex flex-col items-center justify-center gap-6 border-t lgl:border-t-0 lgl:border-l"
            style={{ borderColor: "var(--c-border)" }}
          >
            {/* Document card */}
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                width: "100%", maxWidth: "340px",
                background: "#f8f9fa",
                borderRadius: "12px",
                padding: "24px 28px",
                boxShadow: hovered
                  ? "0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px var(--c-border-s)"
                  : "0 12px 40px rgba(0,0,0,0.4)",
                transform: hovered ? "translateY(-4px)" : "none",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
            >
              {/* Letterhead */}
              <div
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  marginBottom: "16px", paddingBottom: "12px",
                  borderBottom: "1.5px solid #dee2e6",
                }}
              >
                <div
                  style={{
                    width: "28px", height: "28px", borderRadius: "6px",
                    background: "#0c140c", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: "14px",
                  }}
                >
                  🚀
                </div>
                <div>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#212529", letterSpacing: "0.08em" }}>
                    APEX LABS
                  </div>
                  <div style={{ fontSize: "8px", color: "#868e96" }}>apexbytetech.io</div>
                </div>
              </div>

              {/* Doc title */}
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#212529", marginBottom: "8px" }}>
                Letter of Recommendation
              </p>
              <p style={{ fontSize: "9px", color: "#868e96", marginBottom: "12px" }}>
                9 May 2026 &nbsp;·&nbsp; Rohit Raut
              </p>

              {/* Excerpt lines */}
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "12px" }}>
                <p style={{ fontSize: "9px", color: "#495057", lineHeight: 1.6 }}>
                  <em>
                    "I am pleased to recommend Mr. Rohit Raut for future
                    professional opportunities. During his time at Apex Labs,
                    Rohit worked as a valuable member of our Engineering Team..."
                  </em>
                </p>
              </div>

              {/* Redacted lines (decorative) */}
              {[100, 92, 96, 85, 100, 78].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: "6px", borderRadius: "3px",
                    background: i < 3 ? "#dee2e6" : "#e9ecef",
                    width: `${w}%`, marginBottom: "5px",
                  }}
                />
              ))}

              {/* Signature area */}
              <div style={{ marginTop: "14px", paddingTop: "10px", borderTop: "1px solid #dee2e6" }}>
                <div style={{ fontSize: "8px", color: "#868e96", marginBottom: "4px" }}>Sincerely,</div>
                <div
                  style={{
                    fontSize: "16px", fontFamily: "Georgia, serif",
                    color: "#343a40", letterSpacing: "0.05em",
                    marginBottom: "2px", fontStyle: "italic",
                  }}
                >
                  Utkarsh
                </div>
                <div style={{ fontSize: "8px", color: "#868e96" }}>Chief Operating Officer · Apex Labs</div>
              </div>
            </div>

            {/* CTA button */}
            <a
              href="/Rohit_Raut_LOR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  cursor: "pointer",
                  fontFamily: JET,
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  padding: "12px 28px",
                  borderRadius: "8px",
                  background: "var(--c-border)",
                  border: "1px solid var(--c-border-s)",
                  color: G,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--c-border-s)";
                  e.currentTarget.style.borderColor = G;
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--c-border)";
                  e.currentTarget.style.borderColor = "var(--c-border-s)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                📄 View Full Letter ↗
              </button>
            </a>

            <p
              style={{
                fontFamily: JET, fontSize: "10px",
                color: "var(--c-border-s)", letterSpacing: "0.06em",
                textAlign: "center",
              }}
            >
              Original PDF · Issued May 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
