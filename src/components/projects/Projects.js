import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
        {/* React Native Meditation App */}
        <ProjectsCard
          title="React Native Meditation App (Numa)"
          des="Developed a guided meditation app with 95% crash-free sessions. Implemented advanced animations using Reanimated 2 + Skia, improving render time by 40%. Designed responsive UI serving both iOS and Android."
          video="/videos/numa_mockup.mp4"
          link="https://github.com/rohitRaut007" // replace with actual repo if available
        />

        {/* MERN Stack Real-Time Chat Application */}
        <ProjectsCard
          title="MERN Stack Real-Time Chat App"
          des="Built a real-time messaging platform with React.js, Node.js, Express, and MongoDB. Implemented Socket.IO for instant messaging and status tracking. Fully responsive with Tailwind CSS."
          video="/videos/mern_demo.mp4"
          link="https://realtime-chat-application-ebjb.onrender.com/"
        />

        {/* Enterprise POS System */}
        <ProjectsCard
          title="Enterprise POS System (Flutter + Hive)"
          des="Production-ready POS solution with Flutter 3.16 and Hive for offline DB. Achieved 99.9% inventory data accuracy and managed ₹50,000+ monthly transactions. Features include real-time stock management and invoice printing."
          video="/videos/entc_demo.mp4"
          link="https://github.com/rohitRaut007" // replace with actual repo if available
        />

        {/* The News App */}
        <ProjectsCard
          title="The News App (Kotlin + MVVM)"
          des="Modern news reader app with latest headlines, live updates via REST APIs, bookmarking, and personalized reading history. Built with MVVM architecture, Room DB, and Material UI design."
          video="/videos/news_demo.mp4"
          link="https://github.com/rohitRaut007/NewsApp"
        />

        {/* Portfolio Website with GSAP */}
        <ProjectsCard
          title="Interactive Landing Website"
          des="A modern Shampagne website built with React.js and Tailwind CSS, enhanced with GSAP animations for smooth scrolling, transitions, and interactive elements. Optimized for performance and responsive across all devices."
          video="/videos/gsap_demo.mp4"
          link="https://rohitraut.vercel.app/"
        />
        
      </div>
    </section>
  )
}

export default Projects
