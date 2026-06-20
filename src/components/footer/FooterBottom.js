import React from "react";

const FooterBottom = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full py-8 flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="text-sm text-gray-500">
        © {year} <span className="text-gray-400 font-medium">Rohit Raut</span>. All rights reserved.
      </p>
      <p className="text-xs text-gray-600">
        Built with React · Tailwind CSS · Three.js
      </p>
    </div>
  );
};

export default FooterBottom;
