import React from "react";
import Img1 from "../../../../assets/card1.png";
import Img2 from "../../../../assets/card2.png";
import Img3 from "../../../../assets/card3.png";
import Img4 from "../../../../assets/card4.png";
import Img5 from "../../../../assets/card5.png";

const categoriesData = [
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
    image: Img1,
    curveColor: "from-blue-200",
  },
  {
    id: 2,
    title: "Technical Development",
    underlineColor: "bg-red-500",
    borderColor: "border-red-500",
    services: ["Application Services", "Application & Cloud Modernization"],
    image: Img2,
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
    image: Img3,
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
    image: Img4,
    curveColor: "from-blue-500",
  },
  {
    id: 5,
    title: "Adobe Platforms",
    underlineColor: "bg-purple-600",
    borderColor: "border-purple-600",
    services: ["Adobe Platform Services"],
    image: Img5,
    curveColor: "from-purple-300",
  },
];

// Reusable CategoryCard Component
const CategoryCard = ({ category }) => {
  return (
    <div key={category.id} className="flex flex-col items-center">
      <div>
        <img src={category.image} alt={category.title} className="mb-2" />
        <div className={` ${category.curveColor} `}></div>
      </div>
      <h3 className="text-xl font-bold text-center mb-1">{category.title}</h3>
      <div
        className={`w-16 h-1 ${category.underlineColor} mb-4 ml-0`}
      ></div>{" "}
      {/* Modified: ml-0 to left-align */}
      <div className="text-center text-indigo-700">
        {category.services.map((service, idx) => (
          <p key={idx} className="mb-1">
            {service}
          </p>
        ))}
      </div>
      <div className={`w-full h-1 ${category.borderColor} mt-6`}></div>
    </div>
  );
};

const ServiceCategories = () => {
  const firstRow = categoriesData.slice(0, 3);
  const secondRow = categoriesData.slice(3, 5);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* First row - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {firstRow.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* Second row - 2 columns and contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {secondRow.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}

        {/* Contact section */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg mb-4">To find out how we can help you</p>
          <button className="bg-blue-800 text-white font-bold py-2 px-8 rounded-full hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800 text transition duration-300">
            CONTACT US TODAY!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;
