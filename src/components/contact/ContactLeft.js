import React from 'react'
import {  FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rohit Raut</h3>
        <p className="text-lg font-normal text-gray-400">
          Web AND Android Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Connect with Me
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7769977012</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">rohit.raut2612@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
           <a href="https://www.instagram.com/raut.rohit_/" target="blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://x.com/rohit_raut007" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
          <a href="https://www.linkedin.com/in/rohit-raut-91369a27a/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft