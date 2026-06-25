import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center" style={{ background: "var(--c-bg-card)", border: "1px solid var(--c-border)" }}>
      <img
        className="w-full h-44 sml:h-52 lgl:h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="Rohit Raut"
      />
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-2xl sml:text-3xl font-bold" style={{ color: "var(--c-text-1)" }}>Rohit Raut</h3>
          <p className="text-sm font-medium mt-1" style={{ color: "var(--c-accent)" }}>
            React Native &amp; Mobile Developer
          </p>
        </div>

        {/* Status badge */}
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium w-fit"
          style={{
            background: "var(--c-border)",
            color: "var(--c-accent)",
            border: "1px solid var(--c-border-s)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--c-accent)" }}></span>
          Open to opportunities
        </span>

        <div className="flex flex-col gap-3 mt-2">
          <a
            href="mailto:rohit.raut2612@gmail.com"
            className="flex items-center gap-3 text-sm hover:text-designColor duration-300 group" style={{ color: "var(--c-text-3)" }}
          >
            <FaEnvelope className="text-designColor flex-shrink-0" />
            <span className="group-hover:underline">rohit.raut2612@gmail.com</span>
          </a>
          <a
            href="tel:+917769977012"
            className="flex items-center gap-3 text-sm hover:text-designColor duration-300" style={{ color: "var(--c-text-3)" }}
          >
            <FaPhone className="text-designColor flex-shrink-0" />
            +91 77699 77012
          </a>
          <p className="flex items-center gap-3 text-sm" style={{ color: "var(--c-text-3)" }}>
            <FaMapMarkerAlt className="text-designColor flex-shrink-0" />
            Pune, Maharashtra, India
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xs uppercase font-titleFont tracking-widest" style={{ color: "var(--c-text-4)" }}>
          Find me on
        </h2>
        <div className="flex gap-3 flex-wrap">
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
