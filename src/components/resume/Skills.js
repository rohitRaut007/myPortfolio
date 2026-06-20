import React from "react";
import { motion } from "framer-motion";

const JET = "'JetBrains Mono', 'Roboto Mono', monospace";

const skillBar = (label, pct, delay = 0.3) => (
  <div className="overflow-x-hidden">
    <div className="flex justify-between items-center mb-2">
      <p className="text-sm uppercase font-medium tracking-wide" style={{ fontFamily: JET, color: "#92a59b" }}>
        {label}
      </p>
      <span className="text-xs" style={{ fontFamily: JET, color: "#3DDC84" }}>{pct}%</span>
    </div>
    <span
      className="w-full h-[3px] rounded-full inline-flex"
      style={{ background: "rgba(61,220,132,0.1)" }}
    >
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: `${pct}%`, opacity: 1 }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: "linear-gradient(90deg, #3DDC84, rgba(61,220,132,0.4))" }}
      />
    </span>
  </div>
);

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left column — Mobile & Languages */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm uppercase tracking-widest" style={{ fontFamily: JET, color: "#3DDC84" }}>
            Core Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#f4f9f6" }}>
            Mobile &amp; Languages
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {skillBar("React Native", 95, 0.2)}
          {skillBar("Python / Django", 90, 0.3)}
          {skillBar("Kotlin / Android SDK", 85, 0.4)}
          {skillBar("TypeScript / JavaScript", 85, 0.5)}
        </div>
      </div>

      {/* Right column — Backend & DevOps */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm uppercase tracking-widest" style={{ fontFamily: JET, color: "#3DDC84" }}>
            Infrastructure
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#f4f9f6" }}>
            Backend &amp; DevOps
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {skillBar("Django REST + Celery", 90, 0.2)}
          {skillBar("AWS (S3, EC2, Lambda)", 80, 0.3)}
          {skillBar("Docker + CI/CD", 80, 0.4)}
          {skillBar("PostgreSQL / MongoDB", 75, 0.5)}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
