import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0c140c] to-[#0f160f] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="Rohit Raut"
      />
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-3xl font-bold text-white">Rohit Raut</h3>
          <p className="text-sm font-medium mt-1" style={{ color: "#3DDC84" }}>
            React Native &amp; Mobile Developer
          </p>
        </div>

        {/* Status badge */}
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium w-fit"
          style={{
            background: "rgba(61,220,132,0.1)",
            color: "#3DDC84",
            border: "1px solid rgba(61,220,132,0.25)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#3DDC84" }}></span>
          Open to opportunities
        </span>

        <div className="flex flex-col gap-3 mt-2">
          <a
            href="mailto:rohit.raut2612@gmail.com"
            className="flex items-center gap-3 text-sm text-gray-400 hover:text-designColor duration-300 group"
          >
            <FaEnvelope className="text-designColor flex-shrink-0" />
            <span className="group-hover:underline">rohit.raut2612@gmail.com</span>
          </a>
          <a
            href="tel:+917769977012"
            className="flex items-center gap-3 text-sm text-gray-400 hover:text-designColor duration-300"
          >
            <FaPhone className="text-designColor flex-shrink-0" />
            +91 77699 77012
          </a>
          <p className="flex items-center gap-3 text-sm text-gray-400">
            <FaMapMarkerAlt className="text-designColor flex-shrink-0" />
            Pune, Maharashtra, India
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xs uppercase font-titleFont tracking-widest text-gray-400">
          Find me on
        </h2>
        <div className="flex gap-3">
          <a href="https://github.com/rohitRaut007" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon"><FaGithub /></span>
          </a>
          <a href="https://www.linkedin.com/in/rohit-raut-91369a27a/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon"><FaLinkedinIn /></span>
          </a>
          <a href="https://x.com/rohit_raut007" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon"><FaTwitter /></span>
          </a>
          <a href="https://www.instagram.com/raut.rohit_/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon"><FaInstagram /></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
