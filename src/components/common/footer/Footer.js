import React from "react";
import { MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
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
          <div className="flex flex-row items-start lg:items-end ">
            <span className="text-xl font-semibold mb-3 mr-6">FOLLOW US</span>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
