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
          title="UI/UX Design"
          des=""
         
        />
        <Card
          title="App Development"
          des="Building intuitive and user-friendly Android applications using Kotlin and Java
Specialized in creating apps that deliver a seamless user experience with smooth navigation, robust performance, and modern UI design
Experience with implementing RESTful APIs for dynamic data retrieval and integration."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Web Development"
          des="Developing interactive and responsive websites using React and Next.js.Crafting efficient and maintainable front-end architectures for web applications, ensuring compatibility across various devices and browsers."
          icon={<SiGoogleplay />}
        />
        <Card
          title="Backend Integration & APIs"
          des="Integrating Firebase and RESTful APIs to manage data and authentication, ensuring apps work seamlessly with cloud-based services.
          Experience with Room and SQLite for local data storage, enabling offline functionality and fast data access."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Designing user interfaces with a focus on simplicity and ease of use, ensuring that every app is not only functional but also visually appealing
          Creating wireframes, mockups, and prototypes to streamline the user journey and enhance app usability."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features