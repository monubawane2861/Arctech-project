import React from "react";
import Image from "../../../../assets/manageser.png"; // Consider optimizing image loading

const ManagedServicesSection = () => {
  return (
    <div className="w-full bg-blue-900 py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side with image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-6">
            <div className="relative">
              <div>
                <img
                  src={Image}
                  alt="Business professionals collaborating"
                  className="w-full h-full object-cover"
                  loading="lazy" // Add lazy loading for performance
                />
              </div>
            </div>
          </div>

          {/* Right side with text content */}
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-3xl font-bold text-yellow-500 mb-2">
              Managed Services and Project Delivery
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>

            <p className="text-lg font-semibold mb-6">
              Delivering Innovation at the Intersection of
              <br />
              BUSINESS + EXPERIENCE + TECHNOLOGY
            </p>

            <div className="space-y-4">
              <p>
                At Artech, we provide intelligent consulting solutions to our
                clients, for a wide range of requirements.
              </p>

              <p>
                With extensive experience in consulting and access to the latest
                technology platforms, we provide customized solutions that
                leverage the best of traditional consulting, combined with the
                industry's most powerful staffing engine.
              </p>
            </div>

            {/* Centered Text and Button */}
            <div className="mt-8 flex flex-col items-center">
              <p className="mb-4 font-semibold text-center">
                To find out how we can help you
              </p>
              <button
                className="bg-white text-blue-800 px-10 py-2 rounded-full 
                    transition duration-300
                    hover:bg-blue-900 hover:text-white hover:border hover:border-white
                     "
              >
                CONTACT US TODAY!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedServicesSection;
