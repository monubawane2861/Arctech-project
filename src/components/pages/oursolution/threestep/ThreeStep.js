import React from "react";

const stepsData = [
  {
    title: "BUILD",
    colorClass: "border-red-500",
    lineColorClass: "bg-red-500",
    description:
      "Design, build and support custom technology solutions, delivered on-time and budget. Our customer-centric solutions include custom web and application development, content management, commerce, mobile apps and cloud or on-premise hosting infrastructure. Upon launch, partner with our team for ongoing support.",
  },
  {
    title: "OPERATE",
    colorClass: "border-teal-500",
    lineColorClass: "bg-teal-500",
    description:
      "Manage complex IT infrastructure, projects or programs using skilled teams of specialized resources, tuned to supporting your application portfolio, infrastructure or both. Manage performance and security, provide updates and patches to existing applications, and ensure that your organization never has downtime or embarrassing outages.",
  },
  {
    title: "OPTIMIZE",
    colorClass: "border-blue-500",
    lineColorClass: "bg-blue-500",
    description:
      "Deliver innovative services including contract compliance, marketing optimization process automation, SOW procurement bundling for spend optimization or custom sales and support solutions, delivered on-site or using our global centers. We tailor each unique business solution to the specific requirements of our client.",
  },
];

const Line = ({ colorClass }) => (
  <div className={`w-16 h-1 ${colorClass} mb-6`}></div>
);

const StepCard = ({ title, colorClass, lineColorClass, description }) => {
  return (
    <div
      className={`border-4 ${colorClass} rounded-lg p-6 flex flex-col items-center`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <Line colorClass={lineColorClass} />
      <p className="text-center">{description}</p>
    </div>
  );
};

const ThreeStep = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header with lines on sides */}
      <div className="flex items-center justify-center mb-12">
        <div className="h-2 bg-yellow-500 flex-grow"></div>
        <h2 className="text-blue-800 text-3xl font-bold px-6 text-center">
          Our Three Step Approach
        </h2>
        <div className="h-2 bg-yellow-500 flex-grow"></div>
      </div>

      {/* Three cards layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stepsData.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default ThreeStep;
