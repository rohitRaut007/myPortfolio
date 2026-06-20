import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import PhoneFeatured from './PhoneFeatured'

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Selected Work"
          des="My Projects"
        />
      </div>

      {/* Featured: Sports Tech Platform — 3D phone case study */}
      <PhoneFeatured />

      {/* Remaining projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        {/* React Native Meditation App */}
        <ProjectsCard
          title="Meditation App"
          des="Cross-platform meditation app with breathing exercises, session timers, and a daily streak system. Fully offline: all data stored locally with SQLite and Hive, no server needed. Spent a lot of time on the animation layer with Reanimated and Skia to get fluid 60fps transitions on mid-range Android devices."
          video="/videos/numa_mockup.mp4"
          link="https://github.com/rohitRaut007"
        />

        {/* Real-Time Chat App */}
        <ProjectsCard
          title="Real-Time Chat App"
          des="Full-stack chat application with real-time messaging via WebSockets. Built with Node.js, Express, Socket.IO, and MongoDB. Features presence tracking, typing indicators, and paginated chat history. Frontend in React.js with state management tuned for high-frequency updates."
          video="/videos/mern_demo.mp4"
          link="https://realtime-chat-application-ebjb.onrender.com/"
        />

        {/* News App */}
        <ProjectsCard
          title="News App: Kotlin + MVVM"
          des="Android news reader built in Kotlin with a clean MVVM pattern: ViewModel, LiveData, and a Repository layer. News data via Retrofit REST API, articles bookmarked locally with Room DB. Followed standard Android architecture guidelines with Material Design UI."
          video="/videos/news_demo.mp4"
          link="https://github.com/rohitRaut007/NewsApp"
        />

      </div>
    </section>
  )
}

export default Projects
