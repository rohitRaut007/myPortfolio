import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full px-8 py-8 rounded-xl flex flex-col gap-6 transition-all duration-400 cursor-default relative overflow-hidden"
      style={{
        background: hovered ? "var(--c-bg-card-2)" : "var(--c-bg-card)",
        border: hovered ? "1px solid var(--c-border-s)" : "1px solid var(--c-border)",
        boxShadow: "none",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
        style={{
          background: "linear-gradient(90deg, var(--c-accent), transparent)",
          width: hovered ? "100%" : "0%",
        }}
      />

      {/* Icon */}
      <span
        className="text-4xl transition-all duration-300"
        style={{ color: hovered ? "var(--c-accent)" : "var(--c-border-s)" }}
      >
        {icon ? (
          icon
        ) : (
          <div className="w-10 flex flex-col gap-1">
            <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex" />
            <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex" />
            <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex" />
          </div>
        )}
      </span>

      {/* Title */}
      <h2
        className="text-xl font-titleFont font-bold transition-colors duration-300"
        style={{ color: hovered ? "var(--c-text-1)" : "var(--c-text-2)" }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className="text-sm font-bodyFont leading-7 transition-colors duration-300"
        style={{ color: hovered ? "var(--c-text-2)" : "var(--c-text-4)" }}
      >
        {des}
      </p>

      {/* Arrow */}
      <span
        className="text-xl transition-all duration-300"
        style={{
          color: "var(--c-accent)",
          transform: hovered ? "translateX(8px)" : "translateX(0)",
        }}
      >
        <HiArrowRight />
      </span>
    </div>
  );
};

export default Card;
