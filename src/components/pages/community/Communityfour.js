import React from "react";
import Image3 from "../../../assets/03.png";
import Image4 from "../../../assets/04.png";
import Image5 from "../../../assets/05.png";
import Image6 from "../../../assets/06.png";

const CommunityFour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-blue-800 border-b-2 border-yellow-400 inline-block pb-2">
          Contributing as One Artech
        </h1>
      </div>

      {/* Intro Text */}
      <div className="mb-10 text-gray-700">
        <p className="mb-4 text-justify font-[500]">
          At Artech, we believe that each of us is equally invested in creating
          a better tomorrow. As a part of our various efforts, our employees
          collectively walked more than 50 million steps to raise money for
          various charities.
        </p>
        <p className="text-justify font-[500]">
          As part of our health and wellness program, Artech instituted a 100
          Days of Summer Challenge in 2017 for employees to walk a collective 50
          million steps. At the end of the successful program, Artech donated
          $5,000 to various charitable organizations including St. Jude
          Children's Research Hospital, The Waterboys Foundation, and the
          Wounded Warrior Project. Artech has continued this program for the
          past four years.
        </p>
      </div>

      {/* St. Jude Section */}
      <div className="flex flex-col lg:flex-row items-center mb-16 gap-6">
        <div className="lg:w-1/2">
          <div>
            <img
              src={Image6}
              alt="St. Jude Children's Research Hospital"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            St. Jude Children's Research Hospital
          </h2>
          <p className="text-gray-700 text-justify font-[500]">
            St. Jude Children's Research Hospital is dedicated to advancing
            cures and prevention for childhood cancer and other life-threatening
            diseases through research and treatment. It strongly believes that
            no child should be denied treatment based on race, religion, or a
            family's ability to pay.
          </p>
        </div>
      </div>

      {/* Waterboys Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center mb-16 gap-6">
        <div className="lg:w-1/2">
          <div>
            <img
              src={Image4}
              alt="Waterboys charity"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Waterboys
          </h2>
          <p className="text-gray-700 text-justify font-[500]">
            Named for one of the most overlooked but integral positions on any
            team, Waterboys unites professional athletes and fans in support of
            a single shared cause: providing clean, accessible drinking water to
            communities in need. Waterboys Foundation teams up with local crews
            domestically and internationally to provide sustainable water access
            that communities rely on.
          </p>
        </div>
      </div>

      {/* Wounded Warrior Project Section */}
      <div className="flex flex-col lg:flex-row items-center mb-16 gap-6">
        <div className="lg:w-1/2">
          <div>
            <img
              src={Image5}
              alt="Wounded Warrior Project"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Wounded Warrior Project
          </h2>
          <p className="text-gray-700 text-justify font-[500]">
            Wounded Warrior Project is a charity and veterans service
            organization that offers a variety of programs, services, and events
            for wounded veterans of the military actions following September 11,
            2011. They run a variety of support programs for veterans like
            family support programs, helping them find work that fits their
            skill sets, and mental wellness programs.
          </p>
        </div>
      </div>

      {/* Vision Aid Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center mb-16 gap-6">
        <div className="lg:w-1/2">
          <div>
            <img src={Image6} alt="Vision Aid" className="w-full h-auto" />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Vision Aid
          </h2>
          <p className="text-gray-700 text-justify font-[500]">
            Artech contributed to the Vision Aid Charitable Society, which works
            to help the visually challenged lead near-normal lives. Such
            initiatives reflect our intent as an organization to contribute
            positively and meaningfully to society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityFour;
