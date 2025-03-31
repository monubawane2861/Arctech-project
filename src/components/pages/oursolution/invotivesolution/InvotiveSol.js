import React from "react";

const InnovativeSolutions = () => {
  const expertiseAreas = [
    [
      "IT",
      "Contracts & Claims",
      "Sales & Account Management",
      "Branding & Marketing",
      "Underwriting & Claims",
    ],
    [
      "Administrative & Clerical",
      "Creative",
      "Business Operations Support",
      "Human Resources",
      "Procurement",
    ],
    [
      "Call Center Support",
      "Communications",
      "Legal",
      "Data Analysis & Documentation",
      "Training & Development",
    ],
    [
      "Quality Assurance",
      "Accounting & Finance",
      "Benefits & Compensation Support",
      "Compliance",
      "Loan Processing",
    ],
  ];

  return (
    <div className="w-full">
      {/* Top section - White background */}
      <div className="bg-white py-8 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">
          Innovative Solutions
        </h2>
        <div className="w-32 h-1 bg-yellow-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-800">
          Enhance Your Business with Artech
        </p>
      </div>

      {/* Blue background section */}
      <div className="bg-blue-800 py-6 text-center">
        <h3 className="text-2xl font-semibold text-white">
          Expertise Across Professional Verticals
        </h3>
      </div>

      {/* Lists section */}
      <div className="py-8 px-4 md:px-12">
        <div className="flex flex-wrap justify-center">
          {expertiseAreas.map((column, index) => (
            <div key={index} className="w-full md:w-1/4 mb-6 md:mb-0">
              <ul className="space-y-2">
                {column.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-black mr-2">◦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovativeSolutions;
