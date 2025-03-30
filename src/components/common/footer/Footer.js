import React from "react";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Our Solutions Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">OUR SOLUTIONS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contingent Staffing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Recruitment Process
                  <br />
                  Outsourcing(RPO)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Direct Hire
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Master Vendor Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Payroll & Transition Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Managed Services and Project
                  <br />
                  Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Diversity & Inclusion / Careers Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              DIVERSITY & INCLUSION
            </h3>

            <h3 className="text-xl font-semibold mb-6 mt-10">CAREERS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Corporate Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Consultant Jobs
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-6 mt-10">
              COMMUNITY FIRST
              <br />
              INITIATIVES
            </h3>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Notices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Web Stories
                </a>
              </li>
            </ul>
          </div>

          {/* About Us / Contact Us Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">ABOUT US</h3>
            <ul className="space-y-3 mb-10">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Artech Advantage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Great Place to Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Awards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Certifications & Accolades
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-6">CONTACT US</h3>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-t border-gray-700 pt-8">
          {/* Contact Locations */}
          <div className="flex flex-col md:flex-row items-start md:items-center mb-6 lg:mb-0">
            <span className="text-xl font-semibold mr-4">CONTACT US</span>
            <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
              <a href="#" className="flex items-center hover:text-gray-300">
                <MapPin size={18} className="mr-1" /> USA
              </a>
              <a href="#" className="flex items-center hover:text-gray-300">
                <MapPin size={18} className="mr-1" /> Canada
              </a>
              <a href="#" className="flex items-center hover:text-gray-300">
                <MapPin size={18} className="mr-1" /> India
              </a>
              <a href="#" className="flex items-center hover:text-gray-300">
                <MapPin size={18} className="mr-1" /> Philippines
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-start lg:items-end">
            <span className="text-xl font-semibold mb-3">FOLLOW US</span>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
