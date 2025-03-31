import React from "react";
import Vedio2 from "../../../../assets/vedio2.mp4";

import Logo from "../../../../assets/logo(3).jpg";
import Logo2 from "../../../../assets/925-Million.jpg";
import Logo3 from "../../../../assets/11500.jpg";
import Logo4 from "../../../../assets/Preferred.jpg";
import Logo5 from "../../../../assets/logo(5).jpg";
import Logo6 from "../../../../assets/logo(6).jpg";
import Logo7 from "../../../../assets/Global.jpg";
import Logo8 from "../../../../assets/proven.jpg";
import Logo9 from "../../../../assets/great.jpg";

// Define a standard size for the logos
const logoSize = "w-16 h-16"; // You can adjust this as needed

const ArcAdvantage = () => {
  // Data structure for advantages
  const advantages = [
    {
      id: 1,
      logo: Logo5,
      text: "Largest Women-Owned IT Staffing Firm in the US",
    },
    { id: 2, logo: Logo6, text: "NMSDC, WBENC, WEConnect, and CPUC Certified" },
    { id: 3, logo: Logo2, text: "$925+ Million Global Revenue Run Rate" },
    {
      id: 4,
      logo: Logo8,
      text: "Proven Expertise and Insightful Market Intelligence",
    },
    { id: 5, logo: Logo3, text: "11,500+ Global Workforce" },
    { id: 6, logo: Logo, text: "National Service Delivery" }, // Use a different logo or update if needed
    {
      id: 7,
      logo: Logo4,
      text: "Preferred Supplier to 100+ Fortune 500 Clients",
    },
    { id: 8, logo: Logo9, text: "Great Place To Work Certified" },
    {
      id: 9,
      logo: Logo7,
      text: "Global Footprint: USA, Canada, India, China, Mexico, Ireland and Poland",
    },
    {
      id: 10,
      logo: Logo6,
      text: "Industry Recognitions",
      subText:
        "SIA – Featured amongst the top 10 IT Staffing Firms in the US, the Largest Staffing Firms in the US, and the Global Power 150 Women in Staffing. Honored as the Diversity Supplier of Distinction for 2021 by TAPFIN, and many more",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-purple-800 mb-2">
              About Us
              <div className="h-1 w-16 bg-yellow-400 mt-1"></div>
            </h2>

            <p className="text-gray-800 mt-6 mb-4 font-semibold text-[15px] ">
              At the forefront of the staffing industry, Artech is a
              minority-and women-owned business enterprise (MWBE) committed to
              maximizing global workforce solutions on behalf of its clients,
              empowering businesses and talent through applied human
              intelligence.
            </p>

            <p className="text-gray-800 mb-6 font-semibold text-[15px] ">
              We are a preferred go-to supplier across multiple regions and
              countries providing consistent deliverables, terms, rates, and
              cost savings.
            </p>
          </div>

          {/* Video Controls */}
          <div className="flex items-center justify-center  text-white">
            <div className=" text-white  text-right mb-4">
              <video src={Vedio2} width="100%" controls>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* The Artech Advantage Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-6 ">
            The Artech Advantage
            <div className="h-1 w-16 bg-yellow-400 mt-1"></div>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-800 mb-6 font-semibold text-[15px]">
                Artech employs over 11,000 industry professionals, supported by
                over 35 national and global locations across the United States,
                Canada, India, and China.
              </p>

              {/* Advantage Icons Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((advantage) => (
                  <div key={advantage.id} className="flex items-start">
                    <div className="mr-3">
                      <img
                        src={advantage.logo}
                        alt={advantage.text} // IMPORTANT: Add alt attribute
                        className={logoSize} // Apply consistent size
                      />
                    </div>
                    <div>
                      <h3 className="text-blue-900 font-semibold">
                        {advantage.text}
                      </h3>
                      {advantage.subText && (
                        <p className="text-sm text-gray-600 font-semibold text-[15px]">
                          {advantage.subText}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white ">
                <p className="text-gray-800 font-semibold text-[16px]">
                  At Artech, we take pride in our diverse, talented, and
                  diligent workforce.
                </p>

                <p className="text-gray-800 mb-4 font-semibold text-[15px]">
                  Our employees are the driving force behind our global
                  achievements. We believe that true human essence goes beyond
                  physical attributes; it lies within intellectual capabilities.
                  By connecting clients and talented individuals, we create
                  opportunities that align perfectly. Our focus is not merely on
                  providing staffing solutions, but on delivering business
                  solutions through the application of human intelligence.
                </p>

                <p className="text-gray-800 mb-6 font-semibold text-[15px]">
                  With our deep understanding of client requirements, unique
                  talent supply chain, high-performing teams, and flexible
                  engagement models, we empower businesses. Our goal is to
                  provide organizations with not just resources, but the
                  transformative power of also human intellect that can truly
                  make a difference.
                </p>

                <div className="flex justify-center">
                  <button className="bg-blue-900 text-white px-12 py-2 rounded-full font-medium transition-all duration-300 hover:text-blue-900 hover:bg-white hover:border hover:border-blue-900">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcAdvantage;
