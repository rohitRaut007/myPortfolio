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
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Accomplishment</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Core Member"
            subTitle="Google Developer Student Clubs (GDSC)."
            result="Success"
            des="As a dedicated core member of GDSC, actively participated in various tech-related initiatives, collaborated
with fellow members, and contributed to the success of the club. "
          />
          <ResumeCard
            title="Android Development Domain Lead"
            subTitle="Google Developer Student Clubs (GDSC)"
            result="Success"
            des="Demonstrated leadership as the Android Development Domain Lead at GDSC, overseeing and coordinating
projects within the domain"
          />
          <ResumeCard
            title="1-week cyber security student development program."
            subTitle="CyberSanskar."
            result="Success"
            des="Contributed as a volunteer in a comprehensive cybersecurity program by Cybersanskar in collaboration with
GDSC held at Deogiri Institute of Engineering and Management Studies Gaining valuable insights into the
latest trends in cybersecurity."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold"> </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
