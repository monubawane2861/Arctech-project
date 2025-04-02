import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import logo from "../../../assets/logo.png";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiChevronDown,
  FiLinkedin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

const menuItems = [
  {
    name: "About Us",
    hasDropdown: true,
    link: "/about",
    dropdownItems: [
      { name: "Artech Advantage", link: "/about/artech-advantage" },
      { name: "Great Place to Work", link: "/about/great-place-to-work" },
      { name: "Awards", link: "/about/awards" },
      { name: "Certifications and Accolades", link: "/about/certifications" },
    ],
  },
  {
    name: "Our Solutions",
    hasDropdown: true,
    link: "/solutions",
    dropdownItems: [
      { name: "Solution 1", link: "/our-solutions/solution-1" },
      { name: "Solution 2", link: "/our-solutions/solution-2" },
      { name: "Solution 3", link: "/our-solutions/solution-3" },
    ],
  },
  {
    name: "Careers",
    hasDropdown: true,
    link: "/career",
    dropdownItems: [
      { name: "Open Positions", link: "/career/open-positions" },
      { name: "Career Growth", link: "/career/growth" },
      { name: "Benefits", link: "/career/benefits" },
    ],
  },
  {
    name: "Community First Initiatives",
    hasDropdown: false,
    link: "/community",
  },
  {
    name: "Resources",
    hasDropdown: true,
    link: "/resources",
    dropdownItems: [
      { name: "Blog", link: "/resources/blog" },
      { name: "Case Studies", link: "/resources/case-studies" },
      { name: "Whitepapers", link: "/resources/whitepapers" },
    ],
  },
  { name: "Contact Us", hasDropdown: false, link: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [hoverDropdown, setHoverDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEscKey = useCallback(
    (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen]
  );

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen, handleEscKey]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const toggleItem = useCallback((item) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  }, []);

  const isActive = (path) => location.pathname === path;

  const headerClasses = clsx(
    "fixed top-0 left-0 w-full bg-white shadow-sm z-40 transition-all duration-300",
    {
      "py-3": !isScrolled,
      "py-2": isScrolled,
    }
  );

  const logoClasses = clsx("transition-all duration-300", {
    "h-16 w-48 sm:h-16 sm:w-52": !isScrolled,
    "h-10 w-32 sm:h-12 sm:w-36": isScrolled,
  });

  const menuItemClasses = (item) =>
    clsx(
      "px-2 lg:px-3 py-2 text-sm lg:text-xs xl:text-base rounded-full flex items-center transition-colors duration-200",
      {
        "bg-[#293b95] text-white": isActive(item.link),
        "text-gray-700 hover:bg-[#293b95] hover:text-white": !isActive(
          item.link
        ),
      }
    );

  return (
    <>
      <header className={headerClasses} ref={navbarRef}>
        <div className="px-4 py-2 flex items-center">
          <div className="mr-auto">
            <Link to="/">
              <img
                src={logo}
                alt="ARTECH Intelligence is Human"
                className={logoClasses}
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6">
            <Link
              to="/"
              className={clsx(
                "px-3 py-2 text-sm lg:text-xs xl:text-base rounded-full transition-colors duration-200",
                {
                  "bg-[#293b95] text-white": isActive("/"),
                  "text-gray-700 hover:bg-[#293b95] hover:text-white":
                    !isActive("/"),
                }
              )}
            >
              Home
            </Link>
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setHoverDropdown(item.name)
                }
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <Link to={item.link} className={menuItemClasses(item)}>
                  {item.name}
                  {item.hasDropdown && (
                    <FiChevronDown size={14} className="ml-1" />
                  )}
                </Link>

                {item.hasDropdown && hoverDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 lg:w-56 xl:w-64 bg-gray-700 shadow-lg rounded-md overflow-hidden z-50">
                    {item.dropdownItems &&
                      item.dropdownItems.map((dropdownItem, index) => (
                        <React.Fragment key={dropdownItem.name}>
                          <Link
                            to={dropdownItem.link}
                            className="block px-4 py-2 lg:py-3 text-xs lg:text-sm text-white hover:bg-[#293b95] hover:text-white"
                          >
                            {dropdownItem.name}
                          </Link>
                          {index < item.dropdownItems.length - 1 && (
                            <hr className="border-gray-500" />
                          )}
                        </React.Fragment>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden xl:flex items-center space-x-4 ml-4">
            <div className="flex space-x-3">
              <Link
                to="/search"
                className="text-[#293b95] hover:text-opacity-80 transition-opacity"
              >
                <FiSearch className="w-5 h-5" />
              </Link>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#293b95] hover:text-opacity-80 transition-opacity"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#293b95] hover:text-opacity-80 transition-opacity"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#293b95] hover:text-opacity-80 transition-opacity"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#293b95] hover:text-opacity-80 transition-opacity"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none z-50"
              aria-label="Toggle Menu"
            >
              <FiMenu size={29} />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          style={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          onClick={toggleMobileMenu}
          aria-hidden="true"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 bg-[#222222] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:w-1/2 w-full`}
      >
        <div className="flex bg-black justify-between items-center p-4 border-b border-[#333333]">
          <input
            type="text"
            placeholder="Search"
            className="bg-black text-gray-400 text-md font-semibold w-full h-full focus:outline-none"
          />
          <button
            className="text-white"
            onClick={toggleMobileMenu}
            aria-label="Close Menu"
          >
            <FiX size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <div className="flex flex-col">
            <Link
              to="/"
              className={clsx("px-6 py-3 border-b border-[#333333]", {
                "bg-[#293b95]": isActive("/"),
                "hover:bg-[#293b95]": !isActive("/"),
              })}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>

            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-[#333333]">
                {item.hasDropdown ? (
                  <div
                    className={clsx(
                      "px-6 py-3 flex justify-between items-center cursor-pointer",
                      {
                        "bg-[#293b95]": isActive(item.link),
                        "hover:bg-[#293b95]": !isActive(item.link),
                      }
                    )}
                    onClick={() => toggleItem(item.name)}
                    aria-expanded={expandedItems[item.name]}
                    role="button"
                  >
                    <span>{item.name}</span>
                    <FiChevronDown
                      size={24}
                      className={clsx("transition-transform duration-300", {
                        "rotate-180": expandedItems[item.name],
                      })}
                    />
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    className={clsx("px-6 py-4 block", {
                      "bg-[#293b95]": isActive(item.link),
                      "hover:bg-[#293b95]": !isActive(item.link),
                    })}
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}

                {item.hasDropdown && expandedItems[item.name] && (
                  <div className="bg-[#333333] px-6 py-3">
                    <ul className="space-y-2">
                      {item.dropdownItems &&
                        item.dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <Link
                              to={dropdownItem.link}
                              className="text-gray-300 hover:text-white hover:bg-[#293b95] block py-1 px-2 rounded"
                              onClick={toggleMobileMenu}
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div
        className="header-padding"
        style={{
          paddingTop: navbarRef.current
            ? navbarRef.current.offsetHeight
            : "80px",
        }}
      ></div>
    </>
  );
};

export default Header;
