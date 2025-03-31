import React, { useState } from "react";
import about1 from "../../../../assets/about1.jpg";
import about2 from "../../../../assets/about2.png";
import about3 from "../../../../assets/about3.jpg";

import about5 from "../../../../assets/about5.jpg";
import about6 from "../../../../assets/about6.jpg";
import about7 from "../../../../assets/about7.jpg";
import about8 from "../../../../assets/about8.jpg";
import about9 from "../../../../assets/about9.jpg";

const Cetification = () => {
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

export default Cetification;
