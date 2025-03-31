import React from "react";
import Worksol from "../../../../assets/worksol.png";

const WorkforceSolutions = () => {
  return (
    <div className="w-full bg-yellow-600 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side with text content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">
              Workforce Solutions
            </h2>
            <div className="w-24 h-1 bg-blue-800 mb-6"></div>

            <div className="space-y-6">
              <p className="text-black">
                Artech understands that attracting and deploying specialized
                professionals is essential to meeting clients' evolving business
                demands. The Artech team anticipates the needs of its clients
                and provides smart, effective, and proven workforce staffing
                solutions that deliver significant results.
              </p>

              <p className="text-black">
                We pride ourselves on high quality and timely deliverables. Our
                proven delivery models and unrivaled execution enable us to
                interpret and effectively respond to clients' high-volume
                staffing requirements.
              </p>

              <p className="text-black">
                We have secured long-term partnerships with Fortune 500 and
                Government clients as a preferred go-to supplier across multiple
                regions and countries, offering consistent deliverables, terms,
                rates and cost savings.
              </p>
            </div>

            <div className="mt-8 text-center md:text-left">
              <p className="mb-4">To find out how we can help you</p>
              <button className="bg-blue-800 text-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-blue-900 hover:outline hover:outline-blue-900 hover:outline-2 transition-colors">
                CONTACT US TODAY!
              </button>
            </div>
          </div>

          {/* Right side with image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div>
                <img
                  src={Worksol}
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceSolutions;
