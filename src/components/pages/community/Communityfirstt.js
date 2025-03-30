import React from "react";
import Img from "../../../assets/communnity.png";

const CommunityFirst = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left section - Text content */}
        <div className="md:w-1/2">
          <h1 className="text-3xl text-blue-800 font-bold mb-2">
            The Artech-Dalmia Center for IT
          </h1>
          <div className="border-t-2 border-yellow-500 w-64 mb-6"></div>

          <p className="mb-6 text-justify font-[500]">
            In 2007, Artech's diversity commitment went global with the
            construction of the Artech-Dalmia Center for IT, a state-of-the-art
            facility in Rajasthan, India.
          </p>

          <p className="mb-6 text-justify font-[500]">
            The Centre was inaugurated in January 2008. The facility, located at
            the prestigious all-women Banasthali University, provides women with
            training in software, hardware, and communication technologies
            necessary to obtain bachelor's and master's degrees in the field of
            IT. The goal of the Center is to empower women with cutting-edge
            technology skills and to improve the quality of life for its
            community.
          </p>

          <p className="mb-6 text-justify font-[500]">
            The Center is equipped with smart classrooms and high-end computing
            laboratories for Computer Aided Design, Scientific Computing,
            Microelectronics & VLSI design, and Computational Biology.
          </p>

          <p className="mb-6 text-justify font-[500]">
            As part of a 2019-2020 grant of $500,000 USD, Artech funded an
            expansion of the Athletic Center at the University. The facility
            will include racquet sports such as Squash, Badminton, and Table
            Tennis. Additionally, a gymnasium, running track as well as
            yoga/meditation area will also be a part of the expansion.
          </p>
        </div>

        {/* Right section - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div></div>
            <div>
              <img
                src={Img}
                alt="Artech-Dalmia Center for IT facility"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityFirst;
