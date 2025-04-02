import React from "react";
import consultative from "../../../../assets/consult.png";
import mature from "../../../../assets/mature.png";
import financial from "../../../../assets/financial.png";
import national from "../../../../assets/national.png";
import state from "../../../../assets/state.png";

const featuresData = [
  {
    id: 1,
    title: "CONSULTATIVE PARTNER",
    description:
      "ASA Board, WBENC Board, Frequent Speaker at SIA Forums and Conferences, Federal Reserve Small and Medium Sized Advisory Board Member",
    icon: consultative,
    titleColor: "text-red-500",
  },
  {
    id: 2,
    title: "MATURE OPERATIONS PROCESS CONTROLS",
    description:
      "Daily/Weekly Productivity Reporting, MRMs, Bi-weekly Business Review meetings, Monthly Market Review, QBR's, Recruitment and Sales Training Academy",
    icon: mature,
    titleColor: "text-teal-500",
  },
  {
    id: 3,
    title: "FINANCIAL STABILITY",
    description:
      "Financial strength and stability; scalable, flexible, privately held and willing to invest",
    icon: financial,
    titleColor: "text-yellow-500",
  },
  {
    id: 4,
    title: "STATE OF THE ART TECHNOLOGY INFRASTRUCTURE INVESTMENTS",
    description:
      "Innovative technology infrastructure and operational backbone",
    icon: state,
    titleColor: "text-purple-500",
  },
  {
    id: 5,
    title: "NATIONAL AND GLOBAL GEOGRAPHIC PRESENCE",
    description:
      "Financial strength and stability; scalable, flexible, privately held, and willing to invest",
    icon: national,
    titleColor: "text-blue-500",
  },
];

const PreferredChoice = () => {
  return (
    <div className="w-full">
      {/* Header Section with blue background */}
      <div className="bg-blue-900 py-8 text-center">
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
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <div>
                <h3 className={`font-bold mb-2 ${feature.titleColor}`}>
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}

          {/* Contact CTA - Modified for alignment */}
          <div className="md:col-span-2 mt-8 flex flex-col items-end lg:relative bottom-40 right-40 justify-end">
            <p className="text-lg mr-4">To find out how we can help you</p>
            <button className="bg-blue-900 mt-6 text-white  py-2 px-8  lg:relative  right-10  rounded-full hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900 transition duration-300  ">
              CONTACT US TODAY!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferredChoice;
