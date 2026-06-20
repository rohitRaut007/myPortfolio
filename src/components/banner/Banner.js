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
        background: [
          "radial-gradient(880px 620px at 78% 36%, rgba(61,220,132,0.11), transparent 62%)",
          "radial-gradient(1100px 760px at 6% 112%, rgba(61,220,132,0.06), transparent 60%)",
          "linear-gradient(180deg, #05080a 0%, #04070a 58%, #03060a 100%)",
        ].join(", "),
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
        background:"radial-gradient(120% 90% at 50% 40%, transparent 55%, rgba(2,5,7,0.55) 100%)" }} />

      {/* Scanlines */}
      <div style={{ position:"absolute", inset:0, zIndex:1, pointerEvents:"none", opacity:0.6,
        background:"repeating-linear-gradient(0deg, rgba(255,255,255,0.013) 0px, rgba(255,255,255,0.013) 1px, transparent 1px, transparent 3px)" }} />

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
