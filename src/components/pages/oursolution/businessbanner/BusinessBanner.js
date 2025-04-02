import React from "react";
import AboutImage from "../../../../assets/outBg.png";

const AboutBg = () => {
  return (
    <div className="relative">
      {/* Image */}
      <img
        src={AboutImage}
        alt="About Hero"
        className="w-full h-auto object-cover min-h-[300px]"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex justify-start items-center text-white">
        {/*  Changed justify-end to justify-start */}
        <div className="p-4 md:p-8 lg:p-12 rounded-lg max-w-full md:max-w-2xl lg:max-w-3xl flex flex-col items-start ml-auto mr-0">
          {/* ml-auto to push content to the right, removed items-center and added items-start */}
          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center">
            {/* Removed text-left */}
            Empowering businesses through <h2>applied human intelligence</h2>
          </h2>
          {/* Key Features */}
          <div className="mb-4 md:mb-8 flex flex-col items-center text-center w-full">
            {/* Added w-full to ensure it takes the full width available, and kept text-center*/}
            <p className="text-lg md:text-xl text-yellow-500 font-semibold mb-1 md:mb-2">
              Innovative Talent Supply Chain
            </p>
            <p className="text-lg md:text-xl text-yellow-500 font-semibold mb-1 md:mb-2">
              High Performing Teams
            </p>
            <p className="text-lg md:text-xl text-yellow-500 font-semibold mb-1 md:mb-2">
              Flexible Engagement Models
            </p>
            <p className="text-base mt-6 md:text-lg  md:mb-4 text-center">
              {/* Removed text-left, applied text-center */}
              To find out how we can help you
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-blue-900 px-4 md:px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors text-sm md:text-base">
                CONTACT US TODAY!
              </button>
            </div>
          </div>
          {/* Call to Action */}
        </div>
      </div>
    </div>
  );
};

export default AboutBg;
