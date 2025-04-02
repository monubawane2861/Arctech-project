import React from "react";
import Greateplace from "../../../../assets/grate-place.png";
import work from "../../../../assets/about2.png";

const GreatPlaceSection = () => {
  return (
    <div className="w-full bg-blue-900 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        {/* Left Side - Image (Hidden on small devices) */}
        <div className="hidden md:block md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            <div>
              <img
                src={Greateplace}
                alt="Team collaborating around a laptop"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 md:pl-12 mb-12">
          {/* Certification Badges - Top Right */}
          <div className="flex justify-end mb-2">
            <div className="flex">
              <div className="w-[70%]">
                <img src={work} alt="Certification Badge" />{" "}
                {/* Added alt text */}
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Great Place to Work™ Certification
          </h2>
          <div className="h-1 w-16 bg-yellow-400 mb-6"></div>

          {/* Description */}
          <p className="text-white mb-8 font-[500]">
            We take great pride in being certified as a Great Place to Work in
            both the US and India. Our organization is dedicated to providing
            outstanding opportunities. We embrace diversity, foster
            collaboration, appreciate innovation, and actively support personal
            and professional growth. Join us and experience a workplace that
            empowers and uplifts.
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-white text-blue-800 px-8 py-2 rounded-full font-medium hover:bg-blue-900 hover:border transition duration-300 hover:border-white hover:text-white">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreatPlaceSection;
