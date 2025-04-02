import React, { useState } from "react";
import About1 from "../../../../assets/weoffer1.jpg";
import About2 from "../../../../assets/weoff2.jpg";
import About3 from "../../../../assets/weoff3.jpg";

// Styled Components or CSS Modules would be better for buttonStyle in real app.
const buttonStyle =
  "bg-blue-800 text-white py-3 px-5 rounded-full border border-blue-800 transition-all duration-300 hover:bg-white hover:text-blue-800";

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-full max-w-md mb-6">
        <img
          src={service.image}
          alt={service.altText}
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold text-red-600 text-center">
        {service.title}
      </h3>
      {service.subtitle && (
        <p className="text-lg font-semibold text-gray-700 text-center mt-4">
          {service.subtitle}
        </p>
      )}
      <p className="text-center mt-4 flex-grow">{service.description}</p>
      {service.additionalDescription && (
        <p className="text-center mt-4">{service.additionalDescription}</p>
      )}
      {service.additionalDescription2 && (
        <p className="text-center mt-4">{service.additionalDescription2}</p>
      )}
      {service.details.length > 0 && (
        <div className="space-y-2">
          {service.details.map((detail, detailIndex) => (
            <p
              key={detailIndex}
              className="text-center text-red-600 font-semibold"
            >
              {detail}
            </p>
          ))}
        </div>
      )}
      <button className={`mt-8 ${buttonStyle}  px-8`}>Know More</button>
    </div>
  );
};

const WhatWeOffer = () => {
  const initialServicesData = [
    {
      image: About1,
      altText: "Business meeting",
      title: "Managed Services and Project Delivery",
      subtitle: "Value/Flexibility/Predictability",
      description:
        "Artech Solutions leverages the larger talent-sourcing engine to build optimized delivery teams to achieve exceptional business results for our customers. We provide you with a combination of people, processes, tools and technologies that can help you maximize productivity, improve operations, facilitate agility and scale, reshape spending, and deliver innovation.",
      details: [
        "Application Services",
        "Cloud and Infrastructure",
        "Business Resiliency",
        "Digital Experience",
      ],
    },
    {
      image: About2,
      altText: "Team collaboration",
      title: "Workforce Solutions",
      description:
        "Our Workforce Solutions Teams don't just deliver staffing solutions – they provide business solutions. Our understanding of client's needs, unique talent supply chain, high-performing teams, and flexible engagement models help us empower businesses by delivering human intellect that can make a difference to an organization.",
      details: [
        "Contingent Staffing",
        "Project staffing",
        "Master Vendor",
        "RPO – Projects and Programs",
        "Direct Hire",
        "Payroll and Transition Services",
      ],
    },
    {
      image: About3,
      altText: "Diverse team celebrating",
      title: "Diversity and Inclusion Programs",
      description:
        "At Artech, Diversity is in our DNA and is an organizing principle in how we do business. As a certified minority and women-owned business, we are at the forefront of diverse hiring in the United States for 3 decades.",
      additionalDescription:
        "We are committed to inclusive hiring practices internally, with our suppliers, and for our clients and outperform the national average by leaps and bounds.",
      additionalDescription2:
        "By partnering with Artech, clients benefit from the workforce representation we have already attained.",
      details: [],
    },
  ];

  const [servicesData, setServicesData] = useState(initialServicesData);

  // Example: Function to update a service card's description
  const updateServiceDescription = (title, newDescription) => {
    setServicesData((prevData) =>
      prevData.map((service) =>
        service.title === title
          ? { ...service, description: newDescription }
          : service
      )
    );
  };

  return (
    <div className="container mx-auto px-[10%] py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-blue-800">What We Offer</h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => {
          // Hide cards beyond the first one on small screens
          if (index > 0) {
            return (
              <div key={index} className="md:block hidden">
                <ServiceCard service={service} />
              </div>
            );
          }

          return <ServiceCard key={index} service={service} />;
        })}
      </div>

      {/* Example: Button to trigger a state update */}
      <button
        onClick={() =>
          updateServiceDescription(
            "Managed Services and Project Delivery",
            "This description has been updated dynamically!"
          )
        }
      ></button>
    </div>
  );
};

export default WhatWeOffer;
