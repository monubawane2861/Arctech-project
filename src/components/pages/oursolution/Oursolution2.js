import React from "react";

const OurSolutionSecond = () => {
  return (
    <div className="w-full h-64 flex relative overflow-hidden">
      {/* Left section with team image */}
      <div className="w-3/5 h-full relative">
        {/* Using placeholder since we can't use external images */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-transparent opacity-10"></div>
        <img
          src="/api/placeholder/800/300"
          alt="Business team"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Curved divider with yellow accent */}
      <div className="absolute h-full" style={{ left: "58%" }}>
        <div className="h-full">
          <div className="h-full w-16 overflow-hidden">
            <div className="h-full w-32 bg-blue-800 transform translate-x-5 rounded-l-full"></div>
          </div>
        </div>
      </div>

      {/* Yellow accent line */}
      <div className="absolute h-full" style={{ left: "60%" }}>
        <div className="h-full w-1 bg-yellow-500"></div>
      </div>

      {/* Right section with blue background and content */}
      <div className="w-2/5 bg-blue-800 h-full flex flex-col justify-center px-8">
        <h2 className="text-white text-2xl font-bold leading-tight mb-6">
          Empowering businesses through
          <br />
          applied human intelligence
        </h2>

        <div className="space-y-2 mb-8">
          <p className="text-yellow-500 font-semibold text-lg">
            Innovative Talent Supply Chain
          </p>
          <p className="text-yellow-500 font-semibold text-lg">
            High Performing Teams
          </p>
          <p className="text-yellow-500 font-semibold text-lg">
            Flexible Engagement Models
          </p>
        </div>

        <div className="text-white text-sm mb-3">
          To find out how we can help you
        </div>

        <div>
          <button className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold">
            CONTACT US TODAY!
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurSolutionSecond;
