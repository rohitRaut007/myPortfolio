import React from "react";

const FooterBottom = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full py-8 flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="text-sm" style={{ color: "var(--c-text-4)" }}>
        © {year} <span className="font-medium" style={{ color: "var(--c-text-3)" }}>Rohit Raut</span>. All rights reserved.
      </p>
      <p className="text-xs" style={{ color: "var(--c-text-4)" }}>
        Built with React · Tailwind CSS · Three.js
      </p>
    </div>
  );
};

export default FooterBottom;
