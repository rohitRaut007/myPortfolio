import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold"> Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Android Developer Intern"
            subTitle="Webmobi360: B2B AIML Solution - (19th june 2024 - 20th Sept 2024)"
            result="Completed"
            des="From 19th June 2024 to 20th September 2024, I had the incredible opportunity to work on various projects including:

- Developing and enhancing mobile applications for Android, iOS, and cross-platform.

- Contributing to the development and improvement of app features and functionalities.

- Debugging and resolving complex issues during the development process.

- Collaborating in team discussions, code reviews, and applying agile methodologies.

- Designing and implementing UI/UX for enhanced user experiences.

- Utilizing version control systems like Git to manage projects.

This internship has been a tremendous learning experience, allowing me to strengthen my skills in Kotlin, Java and Dart while adapting to challenges and staying updated with the latest trends in mobile development."

          />
         
        </div>
      </div>
      <div>
        
       
      </div>
    </motion.div>
  );
};

export default Experience;
