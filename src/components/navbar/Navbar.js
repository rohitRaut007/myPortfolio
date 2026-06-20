import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { navLinksdata } from "../../constants";

const JET = "'JetBrains Mono', 'Roboto Mono', monospace";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className="w-full sticky top-0 z-50"
      style={{
        background: "#04070a",
        borderBottom: "1px solid rgba(61,220,132,0.12)",
      }}
    >
      {/* Inner content — constrained to max-width */}
      <div className="max-w-screen-xl mx-auto px-4 lgl:px-8 h-20 flex justify-between items-center font-titleFont">

        {/* Brand */}
        <span
          style={{
            fontFamily: JET,
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#3DDC84",
          }}
        >
          &lt; rr /&gt;
        </span>

        {/* Desktop nav */}
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-sm font-normal tracking-wide cursor-pointer duration-300"
              style={{ color: "#92a59b" }}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-designColor transition-colors duration-300"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden w-10 h-10 inline-flex items-center justify-center rounded-full cursor-pointer"
          style={{ color: "#3DDC84", background: "rgba(61,220,132,0.08)", border: "1px solid rgba(61,220,132,0.2)" }}
        >
          <FiMenu />
        </span>

        {/* Mobile drawer */}
        {showMenu && (
          <div
            className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 p-4 scrollbar-hide z-50"
            style={{ background: "#04070a", borderRight: "1px solid rgba(61,220,132,0.12)" }}
          >
            <div className="flex flex-col gap-8 py-2 relative">
              {/* Brand in drawer */}
              <span
                style={{
                  fontFamily: JET,
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#3DDC84",
                  letterSpacing: "0.04em",
                }}
              >
                &lt; rr /&gt;
              </span>

              {/* Links */}
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal tracking-wide cursor-pointer duration-300"
                    style={{ color: "#92a59b" }}
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="hover:text-designColor transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social links */}
              <div className="flex flex-col gap-4">
                <h2
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: JET, color: "rgba(61,220,132,0.5)" }}
                >
                  Find me in
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

              {/* Close button */}
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-2xl cursor-pointer duration-300"
                style={{ color: "#92a59b" }}
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
