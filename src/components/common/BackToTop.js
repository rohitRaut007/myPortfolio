import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: visible ? "var(--c-border)" : "transparent",
        border: "1px solid",
        borderColor: visible ? "var(--c-border-s)" : "transparent",
        color: "var(--c-accent)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(16px)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "var(--c-border-s)";
        e.currentTarget.style.borderColor = "var(--c-accent)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "var(--c-border)";
        e.currentTarget.style.borderColor = "var(--c-border-s)";
      }}
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
};

export default BackToTop;
