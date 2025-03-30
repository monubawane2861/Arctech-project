import React from "react";

import BackgroundImage from "../../../assets/bg.png";
import Header from "../../common/header/Header";
import Communitysecond from "../community/Communitysecond";
import CommunityThird from "../community/Communitythird";
import CommunityFour from "./Communityfour";
import CommunityFive from "./Communityfive";
import CommunitySix from "./Communitysix";
import Footer from "../../common/footer/Footer";
import ComunityFirst from "./Communityfirstt";
const CommunityInitiativesPage = () => {
  return (
    <>
      <Header />
      <div className="w-full">
        {/* Top Section */}
        <div
          className="relative flex w-full lg:h-[470px] items-center justify-center text-white"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute "></div> {/* Opacity for Background */}
          <div className="relative z-10 flex w-full h-full items-center">
            {/* Left Side - Empty (for background effect) */}
            {/* Hidden on smaller screens */}
            <div className="hidden md:w-1/2 h-full md:block"></div>

            {/* Right Side - Text Content */}
            {/* Full width on small screens, half width on medium and up */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="text-center md:text-right md:pr-16 p-4">
                {/* Adjusted text size for responsiveness */}
                <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-5 md:mb-10">
                  Creating a brighter future
                  <br />
                  for generations to come
                </h1>
                {/* Ensure the content is centered and responsive */}
                <div className="flex flex-col items-center">
                  {/* Adjusted text size and margin for responsiveness */}
                  <p className="text-black mb-2 text-center text-bold text-sm md:text-base">
                    To find out how we can help you
                  </p>
                  {/* Adjusted padding and font size for button responsiveness */}
                  <button className="bg-white text-blue-900 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-black hover:text-white transition text-sm md:text-base">
                    CONTACT US TODAY!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Communitysecond />
      <CommunityThird />
      <ComunityFirst />
      <CommunityFour />
      <CommunityFive />
      <CommunitySix />
      <Footer />
    </>
  );
};

export default CommunityInitiativesPage;
