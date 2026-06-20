import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: visible ? "rgba(61,220,132,0.12)" : "transparent",
        border: "1px solid",
        borderColor: visible ? "rgba(61,220,132,0.4)" : "transparent",
        color: "#3DDC84",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(16px)",
        boxShadow: visible ? "0 4px 20px rgba(61,220,132,0.2)" : "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(61,220,132,0.22)";
        e.currentTarget.style.borderColor = "#3DDC84";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(61,220,132,0.12)";
        e.currentTarget.style.borderColor = "rgba(61,220,132,0.4)";
      }}
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
};

export default BackToTop;
