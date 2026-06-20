import React, { useState } from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import HeroCanvas from "../ui/HeroCanvas";

const Banner = () => {
  const [platform, setPlatform] = useState("ios");

  return (
    <section
      id="home"
      className="relative overflow-x-hidden font-titleFont"
      style={{
        paddingTop: "20px",
        paddingBottom: "72px",
        background: "var(--c-bg)",
      }}
    >
      <style>{`
        @keyframes livepulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }
        .live-dot { animation: livepulse 1.6s ease-in-out infinite; }
      `}</style>

      {/* Full-bleed particle canvas */}
      <HeroCanvas onPlatformChange={setPlatform} />

      {/* Vignette */}
      <div style={{ position:"absolute", inset:0, zIndex:1, pointerEvents:"none",
        background:"radial-gradient(120% 90% at 50% 40%, transparent 55%, var(--c-overlay) 100%)" }} />

      {/* Scanlines */}
      <div style={{ position:"absolute", inset:0, zIndex:1, pointerEvents:"none", opacity:0.6,
        background:"repeating-linear-gradient(0deg, var(--c-scanline) 0px, var(--c-scanline) 1px, transparent 1px, transparent 3px)" }} />

      {/* Content wrapper */}
      <div
        className="relative"
        style={{ zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}
      >
        {/* Hero grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "48px",
            alignItems: "flex-start",
          }}
          className="max-mdl:grid-cols-1 max-mdl:pt-6 max-mdl:pb-12"
        >
          <LeftBanner />
          <RightBanner platform={platform} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
