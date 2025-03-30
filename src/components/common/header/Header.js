import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Logo from "../../../assets/logo.png";

const Header = () => {
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Reusable style for navigation links
  const navLinkStyle =
    "px-4 py-2 h-14 text-[14px] flex items-center justify-center rounded-full hover:bg-blue-100 hover:text-blue-700 right-0 transition duration-300 cursor-pointer hover:text-white hover:bg-blue-900 hover:h-14 hover:flex hover:items-center hover:justify-between";

  const dropdownStyle =
    "absolute left-0 mt-2 py-2 w-48 bg-gray-100 rounded-md shadow-xl z-10";

  const dropdownItemStyle = "block px-4 py-2 text-gray-800 hover:bg-blue-100";

  // Check screen size and set mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Check initial screen size
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile Menu Dropdown Component
  const MobileDropdown = ({ isOpen, items, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className={dropdownStyle}>
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path || "#"}
            className={dropdownItemStyle}
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </div>
    );
  };

  // Navigation Items
  const navItems = [
    {
      label: "Home",
      dropdown: false,
      active: true,
      path: "/",
    },
    {
      label: "About Us",
      dropdown: true,
      state: aboutUsOpen,
      setState: setAboutUsOpen,
      path: "/about",
      items: [
        { label: "Our Team", path: "/about/team" },
        { label: "Our History", path: "/about/history" },
      ],
    },
    {
      label: "Our Solutions",
      dropdown: true,
      state: solutionsOpen,
      setState: setSolutionsOpen,
      path: "/solutions",
      items: [
        { label: "Solution 1", path: "/solutions/solution-1" },
        { label: "Solution 2", path: "/solutions/solution-2" },
      ],
    },
    {
      label: "Careers",
      dropdown: true,
      state: careersOpen,
      setState: setCareersOpen,
      path: "/careers",
      items: [
        { label: "Open Positions", path: "/careers/positions" },
        { label: "Benefits", path: "/careers/benefits" },
      ],
    },
    {
      label: "Community First Initiatives",
      dropdown: false,
      path: "/community",
    },
    {
      label: "Resources",
      dropdown: true,
      state: resourcesOpen,
      setState: setResourcesOpen,
      path: "/resources",
      items: [
        { label: "Blog", path: "/resources/blog" },
        { label: "Downloads", path: "/resources/downloads" },
      ],
    },
    {
      label: "Contact Us",
      dropdown: false,
      path: "/contact",
    },
  ];

  // Render Navigation Items
  const renderNavItems = (mobile = false) => {
    return navItems.map((item, index) => (
      <li
        key={index}
        className={`
          ${navLinkStyle} 
          ${item.active ? "bg-blue-900 text-white" : ""} 
          ${mobile ? "w-full text-center" : ""} 
          relative
        `}
      >
        {item.dropdown ? (
          <div
            className="w-full h-full flex items-center justify-center"
            onClick={() => {
              if (item.dropdown && item.setState) {
                item.setState(!item.state);
              }
              if (mobile) {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            {item.label} {item.dropdown && "⌄"}
          </div>
        ) : (
          <Link
            to={item.path}
            className="w-full h-full flex items-center justify-center"
            onClick={() => {
              if (mobile) {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            {item.label}
          </Link>
        )}

        {item.dropdown && item.state && (
          <MobileDropdown
            isOpen={item.state}
            items={item.items}
            onClose={() => item.setState(false)}
          />
        )}
      </li>
    ));
  };

  // Render Social Icons
  const renderSocialIcons = () => (
    <div className="flex items-center space-x-3 text-gray-600">
      <FiSearch
        className="cursor-pointer text-blue-900 transition duration-300"
        size={18}
      />
      <FaLinkedinIn
        className="cursor-pointer text-blue-900 transition duration-300"
        size={18}
      />
      <FaFacebookF
        className="cursor-pointer text-blue-900 transition duration-300"
        size={18}
      />
      <FaInstagram
        className="cursor-pointer text-blue-900 transition duration-300"
        size={18}
      />
    </div>
  );

  // Mobile Menu
  const renderMobileMenu = () => {
    if (!isMobileMenuOpen) return null;

    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-4 py-4 shadow-md">
            <Link to="/">
              <img src={Logo} alt="Company Logo" className="h-12" />
            </Link>
            <FaTimes
              className="text-blue-900 cursor-pointer"
              size={24}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex-grow">{renderNavItems(true)}</ul>

          {/* Mobile Social Icons */}
          <div className="p-4 flex justify-center">{renderSocialIcons()}</div>
        </div>
      </div>
    );
  };

  // Main Render
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white relative">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="Company Logo" className="h-20" />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      {isMobile && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <FaBars
            className="text-blue-900 cursor-pointer"
            size={24}
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </div>
      )}

      {/* Right Section: Navigation Links and Icons */}
      {!isMobile ? (
        <div className="flex items-center">
          {/* Navigation Links */}
          <ul className="flex items-center text-gray-600 text-sm font-medium mr-4">
            {renderNavItems()}
          </ul>

          {/* Icons */}
          <div>{renderSocialIcons()}</div>
        </div>
      ) : null}

      {/* Mobile Menu */}
      {renderMobileMenu()}
    </nav>
  );
};

export default Header;
