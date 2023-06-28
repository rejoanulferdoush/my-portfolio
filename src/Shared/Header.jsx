import { useEffect, useState } from "react";
import NavLink from "../Components/NavLink";
import { animateScroll as scroll, scroller } from "react-scroll";
import {
  FaBriefcase,
  FaClipboardList,
  FaEnvelope,
  FaHome,
  FaUser,
} from "react-icons/fa";
const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const handleLinkClick = (element) => {
    scrollToElement(element);
    setActiveLink(element);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;
      const sections = ["home", "about", "skills", "portfolio", "contact"];

      // Determine the active section based on the scroll position
      let activeSection = "";

      sections.forEach((section) => {
        const sectionPos = document.getElementById(section)?.offsetTop;
        if (sectionPos && currentScrollPos >= sectionPos - 100) {
          activeSection = section;
        }
      });

      setActiveLink(activeSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar bg-primary justify-center hidden md:flex fixed top-0 z-50">
        <div className="navbar-center flex">
          <ul className="flex gap-4 px-1 ">
            <li>
              <NavLink
                href="#home"
                onClick={scrollToTop}
                className={activeLink === "home" ? "border-white" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#about"
                onClick={() => handleLinkClick("about")}
                className={activeLink === "about" ? "border-white" : ""}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#skills"
                onClick={() => handleLinkClick("skills")}
                className={activeLink === "skills" ? "border-white" : ""}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#portfolio"
                onClick={() => handleLinkClick("portfolio")}
                className={activeLink === "portfolio" ? "border-white" : ""}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                href="#contact"
                onClick={() => handleLinkClick("contact")}
                className={activeLink === "contact" ? "border-white" : ""}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-menu fixed z-[100] bottom-[2rem] left-[50%] -translate-x-[50%] glass rounded-full px-4 py-4 md:hidden">
        <ul className="flex gap-4">
          <li>
            <a
              href="#home"
              onClick={scrollToTop}
              className={`text-xl text-white flex items-center justify-center h-12 w-12 rounded-full  ${
                activeLink === "home" ? "bg-gray-900" : "bg-primary"
              }`}
            >
              <FaHome />
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleLinkClick("about")}
              className={`text-xl text-white flex items-center justify-center h-12 w-12 rounded-full ${
                activeLink === "about" ? "bg-gray-900" : "bg-primary"
              }`}
            >
              <FaUser />
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => handleLinkClick("skills")}
              className={`text-xl text-white flex items-center justify-center h-12 w-12 rounded-full ${
                activeLink === "skills" ? "bg-gray-900" : "bg-primary"
              }`}
            >
              <FaClipboardList />
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handleLinkClick("portfolio")}
              className={`text-xl text-white flex items-center justify-center h-12 w-12 rounded-full ${
                activeLink === "portfolio" ? "bg-gray-900" : "bg-primary"
              }`}
            >
              <FaBriefcase />
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#contact"
              onClick={() => handleLinkClick("contact")}
              className={`text-xl text-white flex items-center justify-center h-12 w-12 rounded-full ${
                activeLink === "contact" ? "bg-gray-900" : "bg-primary"
              }`}
            >
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
