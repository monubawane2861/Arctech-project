import React from "react";
import AboutImage from "../../../../assets/outBg.png";

const AboutBg = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image */}
      <img
        src={AboutImage}
        alt="About Hero"
        className="w-full h-auto object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-end pr-12 text-white">
        <div className="p-8 rounded-lg max-w-xl flex flex-col items-center">
          {" "}
          {/* Modified this div */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Empowering businesses through applied human intelligence
          </h2>
          <div className="mb-8 flex flex-col items-center">
            <p className="text-2xl text-yellow-500 font-semibold mb-2">
              Innovative Talent Supply Chain
            </p>

            <p className="text-2xl text-yellow-500 font-semibold mb-2">
              High Performing Teams
            </p>

            <p className="text-2xl text-yellow-500 font-semibold mb-2">
              Flexible Engagement Models
            </p>
          </div>
          <p className="text-lg mb-4">To find out how we can help you</p>
          <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors">
            CONTACT US TODAY!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBg;
