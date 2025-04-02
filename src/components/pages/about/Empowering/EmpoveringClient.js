import React from "react";
import threeclient from "../../../../assets/three.png";

const EmpoweringClient = () => {
  // Content data
  const content = [
    {
      text: "Artech is a proud employer of diverse, talented, and hard-working individuals. Our employees are the reason behind our global success.",
      className: "font-normal",
    },
    {
      text: "We believe what defines every human is not just the physicality, but the core quality of intellect. We provide clients and talent, the opportunities that are a perfect fit for each other.",
      className: "font-[500]",
    },
    {
      text: "We don't just deliver staffing solutions but business solutions through the art of applied human intelligence.",
      className: "font-[500]",
    },
    {
      text: "Our understanding of clients' needs, unique talent supply chain, high-performing teams, and flexible engagement models help us empower businesses by delivering not just resources but the human intellect that can make a difference to an organization.",
      className: "font-[500]",
    },
  ];

  const buttons = [{ text: "For Clients" }, { text: "For Talent" }];

  return (
    <div className="bg-amber-500 py-8 px-6 md:px-[10%] flex flex-col md:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          <span className="relative inline-block">
            Empowering Clients. Empowering Talent.
            <span className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-24 h-1 bg-red-500"></span>
          </span>
        </h1>

        <div className="space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">
          {/* Map through content */}
          {content.map((item, index) => (
            <p key={index} className={item.className}>
              {item.text}
            </p>
          ))}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 pt-4 space-y-3 sm:space-y-0">
            {buttons.map((button, index) => (
              <button
                key={index}
                className="w-full sm:w-auto bg-blue-900 text-white px-8 py-2 rounded-full hover:bg-white hover:text-blue-900 border border-blue-900 transition duration-200"
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={threeclient}
          alt="Professional woman with blonde hair smiling"
          className="w-[100%] md:w-[100%] lg:w-[100%] max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default EmpoweringClient;
