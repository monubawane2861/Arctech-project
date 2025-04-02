import React from "react";
import Card1 from "../../../../assets/cont1.png";
import Card2 from "../../../../assets/project2.png";
import Card3 from "../../../../assets/master3.png";
import Card4 from "../../../../assets/RPO4.png";
import Card5 from "../../../../assets/direct5.png";
import Card6 from "../../../../assets/payroll6.png";

const ServiceCardsGrid = () => {
  // Service card data
  const services = [
    {
      id: 1,
      title: "Contingent Staffing",
      borderColor: "border-yellow-500",
      backgroundColor: "bg-yellow-500", // Added background color
      imagePath: Card1,
      textColor: "text-indigo-600",
    },
    {
      id: 2,
      title: "Project Staffing",
      borderColor: "border-red-500",
      backgroundColor: "bg-red-500", // Added background color
      imagePath: Card2,
      textColor: "text-indigo-600",
    },
    {
      id: 3,
      title: "Master Vendor",
      borderColor: "border-teal-500",
      backgroundColor: "bg-teal-500", // Added background color
      imagePath: Card3,
      textColor: "text-indigo-600",
    },
    {
      id: 4,
      title: "RPO - Projects & Programs",
      borderColor: "border-blue-300",
      backgroundColor: "bg-blue-300", // Added background color
      imagePath: Card4,
      textColor: "text-purple-600",
    },
    {
      id: 5,
      title: "Direct Hire",
      borderColor: "border-purple-500",
      backgroundColor: "bg-purple-500", // Added background color
      imagePath: Card5,
      textColor: "text-purple-600",
    },
    {
      id: 6,
      title: "Payroll & Transition Services",
      borderColor: "border-blue-500",
      backgroundColor: "bg-blue-500", // Added background color
      imagePath: Card6,
      textColor: "text-purple-600",
    },
  ];

  const buttonStyle =
    "bg-blue-800 text-white px-8 py-2 rounded-full hover:bg-blue-900 transition-colors";

  return (
    <div className="mx-[10%] px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center">
            {/* Image with curved bottom border */}
            <div className={`relative w-full mb-4 ${service.borderColor}`}>
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={service.imagePath}
                  alt={service.title}
                  className="w-full"
                />
              </div>
            </div>

            {/* Service title */}
            <h3
              className={`${service.textColor} text-xl font-semibold text-center mb-3`}
            >
              {service.title}
            </h3>

            {/* Read More button */}
            <button
              className={`${buttonStyle} mb-7 transition-all duration-300 ease-in-out hover:text-blue-900 hover:bg-white hover:border hover:border-blue-900`}
              aria-label={`Read more about ${service.title}`}
            >
              Read More
            </button>

            {/* Bottom border */}
            <div
              className={`w-full h-1 ${service.backgroundColor}`} // Using backgroundColor
            ></div>
          </div>
        ))}
      </div>

      {/* Contact us section */}
      <div className="text-center mt-12">
        <p className="mb-4">To find out how we can help you</p>
        <button
          className={`${buttonStyle} transition-all duration-300 ease-in-out hover:text-blue-900 hover:bg-white hover:border hover:border-blue-900`}
          aria-label="Contact us today"
        >
          CONTACT US TODAY!
        </button>
      </div>
    </div>
  );
};

export default ServiceCardsGrid;
