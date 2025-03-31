import React from "react";
import Img1 from "../../../../assets/card1.png";
import Img2 from "../../../../assets/card2.png";
import Img3 from "../../../../assets/card3.png";
import Img4 from "../../../../assets/card4.png";
import Img5 from "../../../../assets/card5.png";

const ServiceCategories = () => {
  // Data for service categories
  const categories = [
    {
      id: 1,
      title: "Digital Experience",
      underlineColor: "bg-blue-300",
      borderColor: "border-blue-300",
      services: [
        "Digital Content Management",
        "UI/UX Design",
        "Accessibility Compliance and Conformance",
        "Collaboration & Productivity",
      ],
      image: Img1, // Corrected: Directly assign the imported image
      curveColor: "from-blue-200",
    },
    {
      id: 2,
      title: "Technical Development",
      underlineColor: "bg-red-500",
      borderColor: "border-red-500",
      services: ["Application Services", "Application & Cloud Modernization"],
      image: Img2, // Corrected: Directly assign the imported image
      curveColor: "from-red-200",
    },
    {
      id: 3,
      title: "Technical Operations",
      underlineColor: "bg-yellow-500",
      borderColor: "border-yellow-500",
      services: [
        "Application Performance Monitoring",
        "DevOps & Application Maintenance",
        "Data Center Operations",
        "Workplace Services",
        "Enterprise Monitoring & NOC",
      ],
      image: Img3, // Corrected: Directly assign the imported image
      curveColor: "from-yellow-200",
    },
    {
      id: 4,
      title: "Business Optimization",
      underlineColor: "bg-blue-800",
      borderColor: "border-blue-800",
      services: [
        "Contract Compliance & Support",
        "Marketing Operations",
        "SOW Optimization for Procurement Organizations",
        "Travel & Immigration",
      ],
      image: Img4, // Corrected: Directly assign the imported image
      curveColor: "from-blue-500",
    },
    {
      id: 5,
      title: "Adobe Platforms",
      underlineColor: "bg-purple-600",
      borderColor: "border-purple-600",
      services: ["Adobe Platform Services"],
      image: Img5, // Corrected: Directly assign the imported image
      curveColor: "from-purple-300",
    },
  ];

  // First row of categories (3 columns)
  const firstRow = categories.slice(0, 3);
  // Second row of categories (2 columns)
  const secondRow = categories.slice(3, 5);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* First row - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {firstRow.map((category) => (
          <div key={category.id} className="flex flex-col items-center">
            {/* Image with curved bottom */}
            <div>
              <img
                src={category.image} // Use category.image directly
                alt={category.title}
              />
              <div
                className={`absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b ${category.curveColor} to-white rounded-b-full`}
              ></div>
            </div>

            {/* Title with underline */}
            <h3 className="text-xl font-bold text-center mb-1">
              {category.title}
            </h3>
            <div className={`w-16 h-1 ${category.underlineColor} mb-4`}></div>

            {/* Services list */}
            <div className="text-center text-indigo-700">
              {category.services.map((service, idx) => (
                <p key={idx} className="mb-1">
                  {service}
                </p>
              ))}
            </div>

            {/* Bottom border */}
            <div className={`w-full h-1 ${category.borderColor} mt-6`}></div>
          </div>
        ))}
      </div>

      {/* Second row - 2 columns and contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {secondRow.map((category) => (
          <div key={category.id} className="flex flex-col items-center">
            {/* Image with curved bottom */}
            <div>
              <img
                src={category.image} // Use category.image directly
                alt={category.title}
              />
              <div
                className={`absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b ${category.curveColor} to-white rounded-b-full`}
              ></div>
            </div>

            {/* Title with underline */}
            <h3 className="text-xl font-bold text-center mb-1">
              {category.title}
            </h3>
            <div className={`w-16 h-1 ${category.underlineColor} mb-4`}></div>

            {/* Services list */}
            <div className="text-center text-indigo-700">
              {category.services.map((service, idx) => (
                <p key={idx} className="mb-1">
                  {service}
                </p>
              ))}
            </div>

            {/* Bottom border */}
            <div className={`w-full h-1 ${category.borderColor} mt-6`}></div>
          </div>
        ))}

        {/* Contact section */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg mb-4">To find out how we can help you</p>
          <button className="bg-blue-800 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
            CONTACT US TODAY!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;
