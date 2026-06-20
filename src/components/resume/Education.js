import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full pb-10 flex flex-col gap-10" style={{ borderLeft: "6px solid rgba(61,220,132,0.15)" }}>
          <ResumeCard
            title="Bachelor of Technology"
            subTitle="Computer Science & Engineering — Deogiri Institute of Engineering and Management Studies, DIEMS (2021 – 2025)"
            result="8.37 CGPA"
            des="Graduated 2025, B.Tech CSE. Dr. Babasaheb Ambedkar Technological University, Chh. Sambhajinagar."
          />
          <ResumeCard
            title="Higher Secondary Certificate (12th)"
            subTitle="Maulana Azad College, Aurangabad, Maharashtra (2019 – 2021)"
            result="91.3%"
            des="Maharashtra State Board of Secondary and Higher Secondary Education."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
