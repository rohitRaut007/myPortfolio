import React from "react";

const GridBackground = () => {
  return (
    <>
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(61,220,132,0.18) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 90% 85% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 85% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      {/* Subtle green glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(61,220,132,0.4), transparent)",
        }}
      />
      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(61,220,132,0.06), transparent 70%)",
        }}
      />
    </>
  );
};

export default GridBackground;
