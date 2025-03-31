import React from "react";
import threeclient from "../../../../assets/three.png";

const EmpoweringClient = () => {
  return (
    <div className="bg-amber-500 py-8 flex flex-col md:flex-row items-center justify-between px-[10%] container">
      {/* Added left and right padding for the 10% gap on all screen sizes */}
      <div className="w-full md:w-1/2 pr-0 md:pr-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">
          <span className="relative">
            Empowering Clients. Empowering Talent.
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-red-500"></span>
          </span>
        </h1>

        <div className="space-y-6 text-gray-800">
          <p>
            Artech is a proud employer of diverse, talented, and hard-working
            individuals. Our employees are the reason behind our global success.
          </p>

          <p className="font-[500]">
            We believe what defines every human is not just the physicality, but
            the core quality of intellect. We provide clients and talent, the
            opportunities that are a perfect fit for each other.
          </p>

          <p className="font-[500]">
            We don't just deliver staffing solutions but business solutions
            through the art of applied human intelligence.
          </p>

          <p className="font-[500]">
            Our understanding of clients' needs, unique talent supply chain,
            high-performing teams, and flexible engagement models help us
            empower businesses by delivering not just resources but the human
            intellect that can make a difference to an organization.
          </p>

          <div className="flex space-x-4 pt-4">
            <button className="bg-blue-900 text-white px-14 py-2 rounded-full hover:bg-white hover:text-blue-900 hover:outline outline-blue-900 outline-0 hover:outline-2 transition duration-200">
              For Clients
            </button>

            <button className="bg-blue-900 text-white px-14 py-2 rounded-full hover:bg-white hover:text-blue-900 hover:outline outline-blue-900 outline-0 hover:outline-2 transition duration-200">
              For Talent
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        {/* Center the image */}
        <div>
          <div>
            <div className="flex justify-center">
              <img
                src={threeclient}
                alt="Professional woman with blonde hair smiling" // Improved alt text
                className="w-[90%]" // Added shadow and rounded corners
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpoweringClient;
