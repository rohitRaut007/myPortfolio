import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Leadership</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full pb-10 flex flex-col gap-10" style={{ borderLeft: "6px solid var(--c-border)" }}>
          <ResumeCard
            title="Android Lead"
            subTitle="Google Developer Student Clubs (GDSC) — DIEMS (2023 – 2024)"
            result="Lead"
            des="Ran the Android track for the full academic year, helping 100+ students get started with mobile development. Organised hands-on sessions covering Jetpack Compose, Kotlin, and Firebase integration. Managed the domain roadmap and mentored members throughout."
          />
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Achievement;
