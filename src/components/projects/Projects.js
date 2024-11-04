import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,shotEasy } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

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
        <ProjectsCard
          title="THE COMPLETE MEAL"
          des=" The Complete Meal App is Fitness app developed in Kotlin.
          It is a MVVM Architecture app that uses Spoonacular API for the Meals and Retrofit for API Integration."
          src={projectOne}
        />
        <ProjectsCard
          title="News App"
          des=" It is the News Application Developed using mvvm, coroutines, room database, navigation component and retrofit in android studio kotlin "
          src={projectTwo}
        />
        <ProjectsCard
          title="RS EDITOR"
          des="Online code Editor college project that can compile and run up to 6 languages. Use of API JUDGE0, developed in HTML,
CSS, JavaScript, and PHP for database"
          src={projectThree}
        />
        <ProjectsCard
          title="CryptoTracker"
          des="CryptoTracker is an app designed to provide real-time cryptocurrency status updates, including detailed information on various cryptocurrencies. Built with Jetpack Compose and adhering to the MVI (Model-View-Intent) architecture, the app leverages Ktor for efficient API integration to fetch up-to-date crypto data. A streamlined Material UI design ensures a smooth and user-friendly experience, making it easy for users to stay informed about the latest crypto trends directly from their device."
          src={shotEasy}
        />
       
      </div>
    </section>
  );
}

export default Projects