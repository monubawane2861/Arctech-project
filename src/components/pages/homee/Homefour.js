import React, { useState } from "react";
import about1 from "../../../assets/about1.jpg";
import about2 from "../../../assets/about2.png";
import about3 from "../../../assets/about3.jpg";

import about5 from "../../../assets/about5.jpg";
import about6 from "../../../assets/about6.jpg";
import about7 from "../../../assets/about7.jpg";
import about8 from "../../../assets/about8.jpg";
import about9 from "../../../assets/about9.jpg";

const HomeFour = () => {
  // State to track the current slide (0 for first 4 cards, 1 for next 4 cards)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of all certification images
  const certifications = [
    { img: about1, alt: "SIA Certification" },
    { img: about2, alt: "Great Place to Work" },
    { img: about3, alt: "Great Place to Work" },
    { img: about5, alt: "50 Fastest Women-Owned Companies" },
    { img: about6, alt: "50 Fastest Women-Owned Companies" },
    { img: about7, alt: "50 Fastest Women-Owned Companies" },
    { img: about8, alt: "50 Fastest Women-Owned Companies" },
    { img: about9, alt: "WBENC Certification" },
  ];

  // Calculate the number of slides needed
  const totalSlides = Math.ceil(certifications.length / 4);

  // Function to handle dot click
  const handleDotClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Get current 4 cards to display based on currentSlide
  const currentCertifications = certifications.slice(
    currentSlide * 4,
    (currentSlide + 1) * 4
  );

  return (
    <div className="font-sans">
      {/* Why Artech Section */}
      <div className="bg-red-600 text-white py-8">
        <h1 className="text-3xl font-bold text-center">Why Artech?</h1>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto py-12 px-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {/* Largest Women-Owned */}
          <div className="flex flex-col items-center">
            <div className="bg-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-blue-800 font-bold text-lg mb-2">
              Largest Women-Owned IT Staffing Firm in the US
            </h2>
          </div>

          {/* Revenue */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-blue-800 font-bold text-lg mb-2">
              $925+ Million Global Revenue Run Rate
            </h2>
          </div>

          {/* Workforce */}
          <div className="flex flex-col items-center">
            <div className="bg-orange-400 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h2 className="text-blue-800 font-bold text-lg">11,500+</h2>
            <h2 className="text-blue-800 font-bold text-lg">
              Global Workforce
            </h2>
          </div>

          {/* Fortune 500 */}
          <div className="flex flex-col items-center">
            <div className="bg-purple-700 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-sm">FORTUNE 500</span>
            </div>
            <h2 className="text-blue-800 font-bold text-lg">
              Preferred Supplier to 100+ Fortune 500 Clients
            </h2>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-blue-800 text-white py-8">
        <h2 className="text-3xl font-bold text-center">Certifications</h2>
      </div>

      {/* Certification Cards with Swiper */}
      <div className="mx-[10%] py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Display current 4 certification cards */}
          {currentCertifications.map((cert, index) => (
            <div key={index} className="flex justify-center">
              <img src={cert.img} alt={cert.alt} className="h-56 w-60" />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                currentSlide === index ? "bg-gray-500" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFour;
