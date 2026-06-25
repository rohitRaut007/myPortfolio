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
        paddingTop: "clamp(12px, 2vw, 20px)",
        paddingBottom: "clamp(40px, 8vw, 72px)",
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
        className="relative px-4 sml:px-8 lgl:px-12"
        style={{ zIndex: 2, maxWidth: "1280px", margin: "0 auto" }}
      >
        {/* Hero grid */}
        <div
          className="grid grid-cols-1 mdl:grid-cols-[1.05fr_0.95fr] pt-8 mdl:pt-4 pb-10 mdl:pb-0"
          style={{ gap: "clamp(16px, 4vw, 48px)", alignItems: "flex-start" }}
        >
          <LeftBanner />
          {/* Code terminal — desktop only */}
          <div className="hidden mdl:block">
            <RightBanner platform={platform} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
