import React from "react";

const featuresData = [
  {
    id: 1,
    title: "CONSULTATIVE PARTNER",
    description:
      "ASA Board, WBENC Board, Frequent Speaker at SIA Forums and Conferences, Federal Reserve Small and Medium Sized Advisory Board Member",
    icon: "/images/consultative.png", // Replace with your image path
    color: "red-500",
  },
  {
    id: 2,
    title: "MATURE OPERATIONS PROCESS CONTROLS",
    description:
      "Daily/Weekly Productivity Reporting, MRMs, Bi-weekly Business Review meetings, Monthly Market Review, QBR's, Recruitment and Sales Training Academy",
    icon: "/images/operations.png", // Replace with your image path
    color: "teal-500",
  },
  {
    id: 3,
    title: "FINANCIAL STABILITY",
    description:
      "Financial strength and stability; scalable, flexible, privately held and willing to invest",
    icon: "/images/financial.png", // Replace with your image path
    color: "yellow-500",
  },
  {
    id: 4,
    title: "STATE OF THE ART TECHNOLOGY INFRASTRUCTURE INVESTMENTS",
    description:
      "Innovative technology infrastructure and operational backbone",
    icon: "/images/technology.png", // Replace with your image path
    color: "purple-600",
  },
  {
    id: 5,
    title: "NATIONAL AND GLOBAL GEOGRAPHIC PRESENCE",
    description:
      "Financial strength and stability; scalable, flexible, privately held, and willing to invest",
    icon: "/images/global.png", // Replace with your image path
    color: "blue-600",
  },
];

const PreferredChoice = () => {
  return (
    <div className="w-full">
      {/* Header Section with blue background */}
      <div className="bg-blue-800 py-8 text-center">
        <h2 className="text-white text-3xl font-bold mb-2">
          Preferred Choice for Clients
        </h2>
        <div className="w-64 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuresData.map((feature) => (
            <div className="flex items-start" key={feature.id}>
              <div className="flex-shrink-0 mr-6">
                <div
                  className={`w-20 h-20 rounded-full bg-${feature.color} flex items-center justify-center`}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div>
                <h3 className={`text-${feature.color} font-bold mb-2`}>
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="md:col-span-2 mt-8 flex flex-col md:flex-row md:items-center md:justify-end">
            <p className="text-lg mr-4 mb-4 md:mb-0">
              To find out how we can help you
            </p>
            <button className="bg-blue-800 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
              CONTACT US TODAY!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferredChoice;
