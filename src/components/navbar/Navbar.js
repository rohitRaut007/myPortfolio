import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { navLinksdata } from "../../constants";
import { useTheme } from "../../context/ThemeContext";

const JET = "'JetBrains Mono', 'Roboto Mono', monospace";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";

  return (
    <nav
      className="w-full sticky top-0 z-50"
      style={{
        background: "var(--c-bg-card)",
        borderBottom: "1px solid var(--c-border)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 lgl:px-8 h-20 flex justify-between items-center font-titleFont">

        {/* Brand */}
        <span
          style={{
            fontFamily: JET,
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "var(--c-accent)",
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
              style={{ color: "var(--c-text-3)" }}
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

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              border: "1px solid var(--c-border-s)",
              background: "var(--c-bg-card-2)",
              color: "var(--c-accent)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "15px",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--c-border)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--c-bg-card-2)"; }}
          >
            {isLight ? <BsMoonFill /> : <BsSunFill />}
          </button>

          {/* Mobile hamburger */}
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden w-10 h-10 inline-flex items-center justify-center rounded-full cursor-pointer"
            style={{
              color: "var(--c-accent)",
              background: "var(--c-border)",
              border: "1px solid var(--c-border-s)",
            }}
          >
            <FiMenu />
          </span>
        </div>

        {/* Mobile drawer */}
        {showMenu && (
          <div
            className="w-full sml:w-[80%] h-screen overflow-scroll absolute top-0 left-0 p-4 scrollbar-hide z-50"
            style={{
              background: "var(--c-bg-card)",
              borderRight: "1px solid var(--c-border)",
            }}
          >
            <div className="flex flex-col gap-8 py-2 relative">
              {/* Brand in drawer */}
              <span
                style={{
                  fontFamily: JET,
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--c-accent)",
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
                    style={{ color: "var(--c-text-3)" }}
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

              {/* Theme toggle in drawer */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggle}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "8px 14px", borderRadius: "8px",
                    border: "1px solid var(--c-border-s)",
                    background: "var(--c-bg-card-2)",
                    color: "var(--c-accent)",
                    cursor: "pointer", fontSize: "13px",
                    fontFamily: JET, letterSpacing: "0.05em",
                  }}
                >
                  {isLight ? <BsMoonFill /> : <BsSunFill />}
                  {isLight ? "Dark mode" : "Light mode"}
                </button>
              </div>

              {/* Social links */}
              <div className="flex flex-col gap-4">
                <h2
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: JET, color: "var(--c-border-s)" }}
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
                style={{ color: "var(--c-text-3)" }}
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
