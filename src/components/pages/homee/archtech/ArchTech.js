import React from "react";
import Img from "../../../../assets/Largest.jpg";
import Img2 from "../../../../assets/925-Million.jpg";
import Img3 from "../../../../assets/11500.jpg";
import Img4 from "../../../../assets/Preferred.jpg";

const ArchTech = () => {
  const statsData = [
    {
      id: 1,
      imageUrl: Img, // Replace with your actual image path
      title: "Largest Women-Owned IT Staffing Firm in the US",
    },
    {
      id: 2,
      imageUrl: Img2, // Replace with your actual image path
      title: "$925+ Million Global Revenue Run Rate",
    },
    {
      id: 3,
      imageUrl: Img3, // Replace with your actual image path
      title: "11,500+ Global Workforce",
      value: "11,500+", // Added a separate value field
    },
    {
      id: 4,
      imageUrl: Img4, // Replace with your actual image path
      title: "Preferred Supplier to 100+ Fortune 500 Clients",
    },
  ];

  return (
    <div className="font-sans">
      {/* Why Artech Section */}
      <div className="bg-red-600 text-white py-8">
        <h1 className="text-3xl font-bold text-center">Why Artech?</h1>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto py-12 px-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={stat.imageUrl}
                  alt={stat.title}
                  className="w-full h-full object-contain"
                />
              </div>
              {stat.value ? (
                <>
                  <h2 className="text-blue-800 font-bold text-lg">
                    {stat.value}
                  </h2>
                  <h2 className="text-blue-800 font-bold text-lg">
                    {stat.title.replace(stat.value, "").trim()}
                  </h2>{" "}
                  {/* Adjust the replace logic as needed */}
                </>
              ) : (
                <h2 className="text-blue-800 font-bold text-lg">
                  {stat.title}
                </h2>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchTech;
