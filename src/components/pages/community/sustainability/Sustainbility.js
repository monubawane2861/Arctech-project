import React from "react";
import Image7 from "../../../../assets/07.png";
import Image9 from "../../../../assets/09.png";

const Sustainbility = () => {
  return (
    <>
      <div className="font-sans">
        {/* Sustainability Initiatives Section */}
        <div className="bg-amber-400 py-10 px-6 mt-10">
          {/* Added padding here for 10% gap on each side */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {" "}
            {/* Adjusted max-w and added padding */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-yellow-600 inline-block pb-1">
                  Sustainability Initiatives
                </h2>
                <p className="text-justify font-[500]">
                  At Artech we are committed to building a sustainable future,
                  through a multitude of interventions, aimed at creating a
                  better tomorrow for the generations to come.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div>
                  <img
                    src={Image7}
                    alt="Sustainability Initiative"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sustainbility;
