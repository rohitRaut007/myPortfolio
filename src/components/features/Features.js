import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import {  SiAntdesign, SiGoogleplay } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
       
        <Card
          title="App Development"
          des="Building intuitive and user-friendly Android applications using Kotlin and Java."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Web Development"
          des="Developing interactive and responsive websites using React and Next.js."
          icon={<SiGoogleplay />}
        />
        <Card
          title="Backend Integration & APIs"
          des="Integrating Firebase and RESTful APIs to manage data and authentication, ensuring apps work seamlessly with cloud-based services."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Designing user interfaces with a focus on simplicity and ease of use, ensuring that every app is not only functional but also visually appealing."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Deploying the websites using Various technologies and platforms like Vercel."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features