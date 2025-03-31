import React from "react";
import Image2 from "../../../../assets/02.png";

const FirstInitives = () => {
  return (
    <>
      {/* Community Initiatives Section */}
      <div className="mx-auto px-4 py-3 flex flex-col md:flex-row items-center md:mx-[5%] lg:mx-[10%]">
        {/* Text Content */}
        <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Community First Initiatives
          </h2>
          <div className="border-b-4 border-orange-400 w-24 md:w-36 mb-4"></div>
          <p className="text-gray-600 leading-relaxed font-semibold text-sm md:text-base">
            Discover how we prioritize and contribute to the betterment of our
            communities, making a positive impact through various initiatives.
            Together, we strive to create a brighter future for all.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0  rounded-full"></div>
          <img
            src={Image2}
            alt="Students working on technical project"
            className="w-full h-auto md:h-[300px] object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* Community Building Section */}
      <section className="bg-blue-900 text-white text-center py-12 md:py-16 px-6 mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Community Building
        </h2>
        <div className="w-12 h-1 bg-yellow-500 mx-auto mt-2 mb-4"></div>
        <p className="max-w-5xl mx-auto text-base">
          We believe that real change and progress can only come from a change
          in thinking at every level of society. Our community building
          initiatives aim to educate and empower the underprivileged to dream
          big and achieve more.
        </p>
      </section>
    </>
  );
};

export default FirstInitives;
