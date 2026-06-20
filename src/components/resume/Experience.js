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
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full pb-10 flex flex-col gap-10" style={{ borderLeft: "6px solid rgba(61,220,132,0.15)" }}>
          <ResumeCard
            title="Software Engineer"
            subTitle="Agnotic Technology, Pune — (Apr 2025 – Jun 2026)"
            result="Full-time"
            des="Built a sports tech platform for athlete monitoring and performance analysis from scratch, now live on the App Store and Play Store, using React Native on the frontend and Django on the backend. Brought app load time from ~2s to under 1s by resolving rendering bottlenecks, adding React Query caching, and cleaning up unnecessary API calls — cutting total requests by ~30%. Set up Django REST Framework with Celery for async jobs (notifications and report generation), and designed the database schema around athlete data querying patterns. Implemented offline support via SQLite and Hive for users in low-connectivity areas. Containerised the stack with Docker and wired up a GitHub Actions CI/CD pipeline (lint → test → build → deploy to EC2). Used AWS S3 with presigned URLs, EC2 for backend hosting, and Lambda for post-upload processing triggered by S3 events. Integrated the OpenAI API to build a content recommendation feature that shipped to production."
          />
          <ResumeCard
            title="Associate Software Engineer"
            subTitle="CleverPe, Pune — Fintech Startup (Oct 2024 – Mar 2025)"
            result="Full-time"
            des="Worked on the merchant dashboard for a BNPL platform, building out transaction views, settlement records, and customer data screens using React.js and Tailwind CSS. Built a shared component library that the team reused across features, noticeably shortening time-to-ship on new screens. Fixed rendering performance issues in data-heavy views by addressing unnecessary re-renders and cleaning up state management. Worked in two-week sprints with a product manager, designer, and backend engineers."
          />
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Experience;
