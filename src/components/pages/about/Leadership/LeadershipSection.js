import React from "react";
import First from "../../../../assets/mam.png";
import Second from "../../../../assets/ajay-about-us.png";

const LeadershipSection = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="bg-blue-900 py-12 text-center">
        <h1 className="text-3xl font-bold text-white">
          Our Leadership
          <div className="h-1 w-32 bg-orange-500 mx-auto mt-2"></div>
        </h1>
      </div>

      {/* Leadership Profiles */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Ranjini Poddar */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-gray-300">
                <img
                  src={First}
                  alt="Leadership portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div></div>
            </div>

            <h2 className="text-2xl font-bold text-blue-900 text-center">
              Ranjini Poddar
            </h2>
            <p className="text-gray-700 text-center mb-4">CEO & Co-Founder</p>

            <p className="text-gray-800 mb-6">
              CEO and Founder of Artech, America's largest women-owned IT
              staffing company, Ranjini Poddar is used to rewriting the rules,
              not only on gender expectations in the IT sector but on the
              innovation...
            </p>

            <button className="bg-blue-900 text-white py-3 px-8 rounded-full w-full max-w-xs hover:bg-gray-800">
              Read More
            </button>

            <div className="h-1 w-full bg-blue-900 mt-10"></div>
          </div>

          {/* Ajay Poddar */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-gray-300">
                <img
                  src={Second}
                  alt="Leadership portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-blue-900 text-center">
              Ajay Poddar
            </h2>
            <p className="text-gray-700 text-center mb-4">
              Co-Founder & Executive Vice President
            </p>

            <p className="text-gray-800 mb-6">
              Co-Founder and Executive Vice President at Artech, Ajay possesses
              a B.S., M.S., in Computer Engineering and Science and an MBA in
              Finance from the Stern School of Business (NYU)...
            </p>

            <button className="bg-blue-900 text-white py-3 px-8 rounded-full w-full max-w-xs hover:bg-gray-800">
              Read More
            </button>

            <div className="h-1 w-full bg-blue-900 mt-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
