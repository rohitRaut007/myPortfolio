import React from "react";

const JET = "'JetBrains Mono', 'Roboto Mono', monospace";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      {title && (
        <h3
          className="text-sm uppercase tracking-widest"
          style={{ fontFamily: JET, color: "var(--c-accent)", letterSpacing: "0.18em" }}
        >
          {title}
        </h3>
      )}
      <h1
        className="text-4xl md:text-5xl font-bold capitalize"
        style={{ color: "var(--c-text-1)" }}
      >
        {des}
      </h1>
    </div>
  );
};

export default Title;
