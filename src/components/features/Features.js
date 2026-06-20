import React from "react";
import { FaMobile, FaCloud } from "react-icons/fa";
import { SiDjango, SiDocker } from "react-icons/si";
import { AiFillRobot } from "react-icons/ai";
import Title from "../layouts/Title";

const featureData = [
  {
    icon: <FaMobile />,
    title: "React Native Development",
    des: "Cross-platform iOS and Android apps shipped to both stores. Built the full mobile lifecycle, from architecture all the way to App Store and Play Store release.",
    large: true,
    accent: "#3DDC84",
  },
  {
    icon: <SiDocker />,
    title: "Cloud & DevOps",
    des: "AWS (S3, EC2, Lambda), Docker containerisation, and GitHub Actions CI/CD pipelines covering lint, test, build, and deploy to production.",
    large: true,
    accent: "#3DDC84",
  },
  {
    icon: <SiDjango />,
    title: "Django + Backend APIs",
    des: "REST APIs with Django REST Framework, async task queues via Celery, and database schema design built around real query patterns.",
    large: false,
    accent: "#3DDC84",
  },
  {
    icon: <AiFillRobot />,
    title: "AI Integration",
    des: "OpenAI API integration for production apps, covering prompt design through to live deployment.",
    large: false,
    accent: "#3DDC84",
  },
  {
    icon: <FaCloud />,
    title: "Frontend Engineering",
    des: "React.js dashboards and component libraries with Tailwind CSS. Focus on performance, re-render optimisation, and clean state management.",
    large: false,
    accent: "#3DDC84",
  },
];

const BentoCard = ({ icon, title, des, large, accent }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col gap-5 rounded-xl p-6 lgl:p-8 overflow-hidden transition-all duration-500 cursor-default group ${
        large ? "lgl:col-span-1" : ""
      }`}
      style={{
        background: hovered
          ? "var(--c-bg-card-2)"
          : "var(--c-bg-card)",
        border: hovered
          ? "1px solid var(--c-border-s)"
          : "1px solid var(--c-border)",
        boxShadow: hovered
          ? "0 0 30px var(--c-border-s), inset 0 0 30px var(--c-border)"
          : "10px 10px 19px var(--c-shadow), -10px -10px 19px var(--c-shadow-inv)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, var(--c-border-s) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          maskImage: hovered
            ? "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)"
            : "none",
          WebkitMaskImage: hovered
            ? "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)"
            : "none",
          transition: "all 0.5s ease",
        }}
      />

      {/* Glow corner */}
      <div
        className="absolute top-0 left-0 w-32 h-32 pointer-events-none transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at top left, var(--c-border), transparent 70%)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center text-xl transition-all duration-300"
        style={{
          background: hovered ? "var(--c-border-s)" : "var(--c-border)",
          border: "1px solid var(--c-border-s)",
          color: hovered ? "var(--c-accent)" : "var(--c-border-s)",
          boxShadow: hovered ? "0 0 12px var(--c-border-s)" : "none",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-lg lgl:text-xl font-bold font-titleFont transition-colors duration-300"
        style={{ color: hovered ? "var(--c-text-1)" : "var(--c-text-2)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm font-bodyFont leading-7 transition-colors duration-300"
        style={{ color: hovered ? "var(--c-text-2)" : "var(--c-text-4)" }}
      >
        {des}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
        style={{
          background: "linear-gradient(90deg, var(--c-accent), transparent)",
          width: hovered ? "100%" : "0%",
        }}
      />
    </div>
  );
};

const STATS = [
  { value: "1.5 yrs", label: "Shipping to Production" },
  { value: "2 stores", label: "iOS & Android Live" },
  { value: "5+ projects", label: "Delivered End-to-End" },
  { value: "US LOR", label: "Apex Labs · Florida" },
];

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="What I Build" des="Capabilities" />

      {/* At-a-glance stats strip */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-px mb-10 rounded-xl overflow-hidden"
        style={{ border: "1px solid var(--c-border)" }}
      >
        {STATS.map(({ value, label }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-5 px-4 text-center"
            style={{ background: "var(--c-bg-card)" }}
          >
            <span
              className="text-2xl font-bold font-titleFont"
              style={{ color: "var(--c-accent)" }}
            >
              {value}
            </span>
            <span
              className="text-xs font-bodyFont mt-1 tracking-wide"
              style={{ color: "var(--c-text-4)" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {/* Row 1: two large cards spanning full col each */}
        <div className="md:col-span-2 xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
          <BentoCard {...featureData[0]} />
          <BentoCard {...featureData[1]} />
        </div>

        {/* Row 1 col 3: Mini phone mockup card */}
        <div
          className="hidden xl:flex flex-col gap-4 rounded-xl p-6 lgl:p-8 relative overflow-hidden"
          style={{
            background: "var(--c-bg-card)",
            border: "1px solid var(--c-border)",
            boxShadow: "none",
          }}
        >
          <div className="flex flex-col items-center justify-center flex-1 gap-5">
            <MiniPhoneMockup />
            {/* Badges row */}
            <div className="flex items-center gap-2">
              <span
                className="text-xs px-3 py-1 rounded-full font-bodyFont"
                style={{ background: "var(--c-border)", color: "var(--c-accent)", border: "1px solid var(--c-border-s)" }}
              >
                🍎 App Store
              </span>
              <span
                className="text-xs px-3 py-1 rounded-full font-bodyFont"
                style={{ background: "var(--c-border)", color: "var(--c-accent)", border: "1px solid var(--c-border-s)" }}
              >
                ▶ Play Store
              </span>
            </div>
            <p className="text-xs text-center font-bodyFont tracking-widest uppercase" style={{ color: "var(--c-border-s)" }}>
              Cross-Platform · One Codebase
            </p>
          </div>
        </div>

        {/* Row 2: three smaller cards */}
        {featureData.slice(2).map((f, i) => (
          <BentoCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
};

const MiniPhoneMockup = () => {
  const G = "#3DDC84";
  const circumference = 2 * Math.PI * 28; // r=28
  const progress = circumference * 0.72;   // 72% fill

  return (
    <>
      <style>{`
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>
      <div
        style={{
          animation: "phoneFloat 3s ease-in-out infinite",
          filter: "drop-shadow(0 0 18px var(--c-border-s))",
        }}
      >
        {/* Phone frame */}
        <div
          style={{
            width: "108px",
            height: "220px",
            borderRadius: "22px",
            border: "2px solid var(--c-border-s)",
            background: "#0d1117",
            overflow: "hidden",
            position: "relative",
            boxShadow: "inset 0 0 20px rgba(61,220,132,0.05)",
          }}
        >
          {/* Status bar */}
          <div style={{ background: "#0d1117", padding: "6px 10px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "7px", color: "#8b949e", fontFamily: "monospace" }}>9:41</span>
            <div style={{ width: "16px", height: "6px", borderRadius: "3px", background: "#0d1117", border: "1px solid rgba(61,220,132,0.4)", display: "flex", alignItems: "center", padding: "0 1px" }}>
              <div style={{ width: "70%", height: "3px", borderRadius: "2px", background: G }} />
            </div>
          </div>

          {/* App name */}
          <div style={{ textAlign: "center", fontSize: "8px", fontFamily: "monospace", color: "#f0f6fc", fontWeight: 700, padding: "2px 0 4px", letterSpacing: "0.05em" }}>
            Sports Tech
          </div>

          {/* Circular ring */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2px" }}>
            <svg width="70" height="70" viewBox="0 0 70 70">
              {/* Track */}
              <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(61,220,132,0.12)" strokeWidth="6" />
              {/* Progress */}
              <circle
                cx="35" cy="35" r="28"
                fill="none"
                stroke={G}
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${progress} ${circumference - progress}`}
                strokeDashoffset={circumference * 0.25}
              />
              {/* Centre text */}
              <text x="35" y="32" textAnchor="middle" fill={G} fontSize="12" fontWeight="bold" fontFamily="monospace">72%</text>
              <text x="35" y="43" textAnchor="middle" fill="#8b949e" fontSize="6" fontFamily="monospace">Daily Goal</text>
            </svg>
          </div>

          {/* Stat row */}
          <div style={{ display: "flex", justifyContent: "space-around", padding: "4px 6px" }}>
            {[["8.2k", "Steps"], ["47m", "Active"], ["124", "BPM"]].map(([val, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "9px", fontWeight: 700, color: "#f0f6fc", fontFamily: "monospace" }}>{val}</div>
                <div style={{ fontSize: "6px", color: "#8b949e", fontFamily: "monospace" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div style={{ padding: "4px 8px 2px" }}>
            <div style={{ fontSize: "6px", color: "#8b949e", fontFamily: "monospace", marginBottom: "3px" }}>Weekly</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "28px" }}>
              {[60, 40, 75, 50, 85, 45, 30].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: "2px",
                    background: i === 4 ? G : "rgba(61,220,132,0.25)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Session card */}
          <div style={{ margin: "4px 6px 0", padding: "4px 6px", background: "rgba(61,220,132,0.07)", borderRadius: "6px", border: "1px solid rgba(61,220,132,0.15)" }}>
            <div style={{ fontSize: "7px", color: "#f0f6fc", fontFamily: "monospace", fontWeight: 600 }}>Strength · 45 min</div>
            <div style={{ fontSize: "6px", color: G, fontFamily: "monospace", marginTop: "1px" }}>★ 4.8</div>
          </div>

          {/* Bottom nav */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "22px", background: "#161b22", borderTop: "1px solid rgba(61,220,132,0.12)", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            {["⌂", "↗", "◎", "○"].map((ic, i) => (
              <span key={i} style={{ fontSize: "9px", color: i === 0 ? G : "#8b949e" }}>{ic}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
