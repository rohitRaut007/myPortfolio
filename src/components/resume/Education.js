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
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology"
            subTitle="Computer Science & Engineering, Deogiri Institute Of Engineering and Management Studies (2021 - 2025) "
            result="7.02 CGPA"
            des="Currently persuing my final year at DIEMS in computer Science and Engineering Branch"
          />
           <ResumeCard
            title="12th (Senior Secondary Education)"
            subTitle="Mulana Aazd college (2019 - 2021)"
            result="91 %"
            des="Maharashtra State
              Board of Seconda ry Education At Mulana Aazd college of
              science, Arts and Commerce, Aurangabad"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="82.20 %"
            des="Maharashtra State Board of Secondary Education At Baliram
              Patil Vidyalaya, cidco Aurangabad"
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold"> </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
       
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
