import React from "react";
import { Link } from "react-scroll";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import { logo } from "../../assets/index";

const navLinks = [
  { title: "Home", to: "home" },
  { title: "What I Do", to: "features" },
  { title: "Projects", to: "projects" },
  { title: "Resume", to: "resume" },
  { title: "Contact", to: "contact" },
];

const Footer = () => {
  return (
    <div className="w-full pt-16 pb-10 border-b-[1px] border-b-black">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

        {/* ── Col 1: Brand ── */}
        <div className="flex flex-col gap-6">
          <img className="w-28" src={logo} alt="Rohit Raut" />
          <p className="text-sm leading-6 max-w-xs" style={{ color: "var(--c-text-3)" }}>
            React Native &amp; Full Stack Engineer. Building production mobile
            apps with Django, AWS, and OpenAI integrations.
          </p>
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium w-fit"
            style={{
              background: "var(--c-border)",
              color: "var(--c-accent)",
              border: "1px solid var(--c-border-s)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--c-accent)" }} />
            Available for opportunities
          </span>
        </div>

        {/* ── Col 2: Quick Links ── */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xs uppercase tracking-widest font-titleFont font-semibold"
            style={{ color: "var(--c-accent)" }}>
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ title, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm hover:text-designColor duration-300 cursor-pointer flex items-center gap-2 group"
                  style={{ color: "var(--c-text-3)" }}
                >
                  <span className="w-0 group-hover:w-3 h-px bg-designColor transition-all duration-300 flex-shrink-0" />
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3: Contact Info ── */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xs uppercase tracking-widest font-titleFont font-semibold"
            style={{ color: "var(--c-accent)" }}>
            Contact
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="mailto:rohit.raut2612@gmail.com"
                className="flex items-start gap-3 text-sm hover:text-designColor duration-300"
                style={{ color: "var(--c-text-3)" }}
              >
                <FaEnvelope className="mt-0.5 text-designColor flex-shrink-0" />
                rohit.raut2612@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+917769977012"
                className="flex items-center gap-3 text-sm hover:text-designColor duration-300"
                style={{ color: "var(--c-text-3)" }}
              >
                <FaPhone className="text-designColor flex-shrink-0" />
                +91 77699 77012
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm" style={{ color: "var(--c-text-3)" }}>
              <FaMapMarkerAlt className="text-designColor flex-shrink-0" />
              Pune, Maharashtra, India
            </li>
          </ul>
        </div>

        {/* ── Col 4: Social + Download ── */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest font-titleFont font-semibold"
              style={{ color: "var(--c-accent)" }}>
              Find Me
            </h3>
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

          <a
            href="/Rohit_Raut_Resume.pdf"
            download="Rohit_Raut_Resume.pdf"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium font-bodyFont transition-all duration-300 w-full"
            style={{
              background: "var(--c-border)",
              color: "var(--c-accent)",
              border: "1px solid var(--c-border-s)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--c-border-s)";
              e.currentTarget.style.borderColor = "var(--c-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--c-border)";
              e.currentTarget.style.borderColor = "var(--c-border-s)";
            }}
          >
            <FaDownload className="text-xs" />
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
