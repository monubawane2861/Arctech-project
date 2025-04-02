import React, { useState } from "react";
import about1 from "../../../../assets/about1.jpg";
import about2 from "../../../../assets/about2.png";
import about3 from "../../../../assets/about3.jpg";
import about5 from "../../../../assets/about5.jpg";
import about6 from "../../../../assets/about6.jpg";
import about7 from "../../../../assets/about7.jpg";
import about8 from "../../../../assets/about8.jpg";
import about9 from "../../../../assets/about9.jpg";

const Certification = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // Calculate cards per slide based on screen size
  // 2 for mobile, 2 for small screens, 4 for medium and up
  const getCardsPerSlide = () => {
    // Using window width for client-side rendering
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 640) return 2; // xs screens: 2 cards
      if (width < 768) return 2; // sm screens: 2 cards
      return 4; // md screens and up: 4 cards
    }
    return 4; // Default for server-side rendering
  };

  const cardsPerSlide = getCardsPerSlide();
  const totalSlides = Math.ceil(certifications.length / cardsPerSlide);

  // Update currentSlide when window is resized
  React.useEffect(() => {
    const handleResize = () => {
      const newCardsPerSlide = getCardsPerSlide();
      const newTotalSlides = Math.ceil(
        certifications.length / newCardsPerSlide
      );
      // Ensure current slide is still valid
      if (currentSlide >= newTotalSlides) {
        setCurrentSlide(newTotalSlides - 1);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide, certifications.length]);

  const handleDotClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const startIndex = currentSlide * cardsPerSlide;
  const currentCertifications = certifications.slice(
    startIndex,
    startIndex + cardsPerSlide
  );

  return (
    <div className="font-sans">
      <div className="bg-blue-800 text-white py-8">
        <h2 className="text-3xl font-bold text-center">Certifications</h2>
      </div>

      <div className="mx-4 md:mx-16 lg:mx-24 py-8 md:py-12">
        {/* Grid with 2 columns on small screens, 4 on medium+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center">
          {currentCertifications.map((cert, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={cert.img}
                alt={cert.alt}
                className="h-32 w-40 sm:h-40 sm:w-48 md:h-48 md:w-56 lg:h-56 lg:w-60 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                currentSlide === index ? "bg-blue-800" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
