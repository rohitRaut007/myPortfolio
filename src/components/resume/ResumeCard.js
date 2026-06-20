import React from 'react'

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-1/3 group flex">
      {/* Timeline dot */}
      <div className="w-10 h-[6px] mt-16 relative flex-shrink-0" style={{ background: "var(--c-border)" }}>
        <span
          className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center"
          style={{ background: "var(--c-bg-card-2)", border: "2px solid var(--c-border-s)" }}
        >
          <span
            className="w-3 h-3 rounded-full inline-flex duration-300 group-hover:scale-110"
            style={{ background: "var(--c-accent)" }}
          />
        </span>
      </div>

      {/* Card */}
      <div
        className="w-full duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10"
        style={{
          background: "var(--c-bg-card)",
          border: "1px solid var(--c-border)",
        }}
      >
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3
              className="text-xl md:text-2xl font-semibold duration-300"
              style={{ color: "var(--c-text-1)" }}
            >
              {title}
            </h3>
            <p
              className="text-sm mt-2 duration-300"
              style={{ color: "var(--c-text-3)" }}
            >
              {subTitle}
            </p>
          </div>
          <div>
            <p
              className="px-4 py-2 rounded-lg flex justify-center items-center text-sm font-semibold"
              style={{
                color: "var(--c-accent)",
                background: "var(--c-border)",
                border: "1px solid var(--c-border-s)",
              }}
            >
              {result}
            </p>
          </div>
        </div>
        <p
          className="text-sm md:text-base font-medium duration-300"
          style={{ color: "var(--c-text-3)" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard
