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
        background: hovered
          ? "linear-gradient(145deg, #0f180f, #111a11)"
          : "linear-gradient(145deg, #0c140c, #0f160f)",
        border: hovered
          ? "1px solid rgba(61,220,132,0.35)"
          : "1px solid rgba(61,220,132,0.1)",
        boxShadow: hovered
          ? "0 0 30px rgba(61,220,132,0.1)"
          : "10px 10px 19px #050a05, -10px -10px 19px #0f170f",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
        style={{
          background: "linear-gradient(90deg, #3DDC84, transparent)",
          width: hovered ? "100%" : "0%",
        }}
      />

      {/* Icon */}
      <span
        className="text-4xl transition-all duration-300"
        style={{
          color: hovered ? "#3DDC84" : "rgba(61,220,132,0.45)",
          filter: hovered ? "drop-shadow(0 0 8px rgba(61,220,132,0.4))" : "none",
        }}
      >
        {icon ? (
          icon
        ) : (
          <div className="w-10 flex flex-col gap-1">
            <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
            <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
            <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
          </div>
        )}
      </span>

      {/* Title */}
      <h2
        className="text-xl font-titleFont font-bold transition-colors duration-300"
        style={{ color: hovered ? "#ffffff" : "#e5e7eb" }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className="text-sm font-bodyFont leading-7 transition-colors duration-300"
        style={{ color: hovered ? "#c4cfde" : "#6b7280" }}
      >
        {des}
      </p>

      {/* Arrow */}
      <span
        className="text-xl transition-all duration-300"
        style={{
          color: hovered ? "#3DDC84" : "#374151",
          transform: hovered ? "translateX(8px)" : "translateX(0)",
        }}
      >
        <HiArrowRight />
      </span>
    </div>
  );
};

export default Card;
