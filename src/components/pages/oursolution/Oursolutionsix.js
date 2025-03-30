import React from "react";

const OurSolutionSix = () => {
  // Service card data
  const services = [
    {
      id: 1,
      title: "Contingent Staffing",
      color: "orange",
      image:
        "https://www.artech.com/wp-content/uploads/2021/06/contingent-staffing-img1.png",
    },
    {
      id: 2,
      title: "Project Staffing",
      color: "red",
      image:
        "https://www.artech.com/wp-content/uploads/2021/07/bilk-project-staffing-img-1.png",
    },
    {
      id: 3,
      title: "Master Vendor",
      color: "teal",
      image:
        "https://www.artech.com/wp-content/uploads/2021/07/master-vendor-program-img1.png",
    },
    {
      id: 4,
      title: "RPO - Projects & Programs",
      color: "blue",
      image: "https://www.artech.com/wp-content/uploads/2021/06/RPO.png",
    },
    {
      id: 5,
      title: "Direct Hire",
      color: "purple",
      image:
        "https://www.artech.com/wp-content/uploads/2021/06/direct-hire.png",
    },
    {
      id: 6,
      title: "Payroll & Transition Services",
      color: "blue",
      image:
        "https://www.artech.com/wp-content/uploads/2021/06/payroll-transition.png",
    },
  ];

  // Function to get border color based on service color
  const getBorderColorClass = (color) => {
    switch (color) {
      case "orange":
        return "border-orange-400";
      case "red":
        return "border-red-500";
      case "teal":
        return "border-teal-500";
      case "blue":
        return "border-blue-500";
      case "purple":
        return "border-purple-500";
      default:
        return "border-blue-500";
    }
  };

  // Function to get text color based on service color
  const getTextColorClass = (color) => {
    switch (color) {
      case "orange":
        return "text-orange-400";
      case "red":
        return "text-red-500";
      case "teal":
        return "text-teal-500";
      case "blue":
        return "text-blue-500";
      case "purple":
        return "text-purple-500";
      default:
        return "text-blue-500";
    }
  };

  return (
    <div className="max-w-[80%] mx-auto py-10">
      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center mb-8">
            {/* Card with curved bottom */}
            <div className="w-full relative mb-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              {/* Curved overlay */}
              <div
                className={`absolute bottom-0 left-0 w-full h-16 overflow-hidden ${getBorderColorClass(
                  service.color
                )}`}
              >
                <div
                  className={`w-full h-32 rounded-full bg-white border-b-4 ${getBorderColorClass(
                    service.color
                  )} transform translate-y-16`}
                ></div>
              </div>
            </div>

            {/* Service title */}
            <h3
              className={`text-xl font-bold mb-3 ${getTextColorClass(
                service.color
              )}`}
            >
              {service.title}
            </h3>

            {/* Read More button */}
            <button className="bg-blue-800 text-white px-8 py-2 rounded-full hover:bg-blue-900 transition mb-4">
              Read More
            </button>

            {/* Colored line */}
            <div
              className={`w-4/5 h-1 ${getBorderColorClass(service.color)}`}
            ></div>
          </div>
        ))}
      </div>

      {/* Contact section */}
      <div className="text-center mt-8">
        <p className="text-lg mb-4">To find out how we can help you</p>
        <button className="bg-blue-800 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition">
          CONTACT US TODAY!
        </button>
      </div>
    </div>
  );
};

export default OurSolutionSix;
