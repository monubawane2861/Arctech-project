import React from "react";
import mission from "../../../../assets/mission.png";
import vision from "../../../../assets/vision.png";
import purpose from "../../../../assets/purpuse.png";

const MissionVisionPurpose = () => {
  const items = [
    {
      title: "Our Mission",
      image: mission,
      altText: "Illustration representing Our Mission",
      description:
        "To be the ecosystem connecting people, technology, and opportunities through applied human intelligence.",
    },
    {
      title: "Our Vision",
      image: vision,
      altText: "Illustration representing Our Vision",
      description:
        "Transforming our world by empowering global businesses through applied human intelligence.",
    },
    {
      title: "Our Purpose",
      image: purpose,
      altText: "Illustration representing Our Purpose",
      description:
        "We empower businesses and talent by providing not just the right solutions and opportunities, but human intellect which makes THE difference.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <article
              key={index}
              className="flex flex-col items-center justify-between h-full"
            >
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">
                  {item.title}
                </h2>
                <div className="h-1 w-16 bg-yellow-400 mb-6 mx-auto"></div>
                <div className="w-full relative mb-6">
                  <div>
                    <img
                      src={item.image}
                      alt={item.altText}
                      className="w-full object-contain aspect-w-16 aspect-h-9"
                    />
                  </div>
                </div>
                <p className="text-center text-gray-800 mb-6 font-[500]">
                  {item.description}
                </p>
              </div>
              <div className="h-1 w-full bg-yellow-400"></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionVisionPurpose;
