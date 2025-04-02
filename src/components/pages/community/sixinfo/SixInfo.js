import React from "react";
import BuildingImage from "../../../../assets/03.png";
import Image1 from "../../../../assets/Eid.jpg";
import Image3 from "../../../../assets/jude.png";
import Image4 from "../../../../assets/waterboy.png";
import Image5 from "../../../../assets/Ekal.png";
import Image6 from "../../../../assets/06.png";
import Image7 from "../../../../assets/hack.png";
import Image2 from "../../../../assets/communnity.png";

const SixInfo = () => {
  const sixInfoData = {
    title: "Yale School of Medicine",
    paragraphs: [
      "In November 2015, Artech donated $1 million to the Yale School of Medicine to fund Dermatology-Autoimmune Research.",
      "With this donation, Artech established the Artech Resource Fund for Dermatology Diseases, thus, re-iterating its commitment towards advanced research in the field of science and medicine.",
      "The funds provided by the Ranjini and Ajay Poddar Resource Fund for Dermatologic Diseases Research aided in studies that led the researchers to theorize that Janus Kinase (JAK) – signal transducer and activator of transcription (STAT) signaling could play a role in treating certain forms of sarcoidosis.",
    ],
    image: BuildingImage,
    alt: "Yale School of Medicine",
  };

  const hackensackData = {
    title: "Hackensack University Medical Center",
    paragraphs: [
      "Funding Autoimmune Research",
      'In August 2015, Artech donated $1 million to the Hackensack University Medical Center Foundation to fund the "Artech Autoimmune Cell Re-Education Study." This study established the world\'s first NIH trial for an autoimmune disease, and clinical trials on Type One Diabetes have been expanded to cover a wide range of autoimmune diseases.',
      "Artech believes that this funding will help millions of Americans who are afflicted with autoimmune diseases such as Type One Diabetes, Alopecia Areata, Multiple Sclerosis, Rheumatoid Arthritis, and Inflammatory Bowel Disease. This will in turn help advance this research to find a cure that will help millions of children in the U.S. and across the world.",
    ],
    image: Image7,
    alt: "Hackensack University Medical Center",
  };

  const ekalVidyalayaData = {
    title: "Ekal Vidyalaya",
    paragraphs: [
      "Eradicating illiteracy from rural and tribal India",
      "Artech is a long-term supporter of Ekal Vidyalaya, and the company to date has donated more than $350,000 to the organization.",
      "In February 2020, Artech invested in Ekal's Gramothan Resource Center in Jharkhand, India. The Ekal Gramothan Centers work towards positively transforming rural lives by creating micro-entrepreneurs across the country to create economically self-reliant village communities.",
      "In November 2017, Artech donated $250,000 to Ekal Vidyalaya which is working towards providing basic primary education to children in rural & tribal India, to bring them into the mainstream of development through integrated village development, adult education, health care education and organic farming techniques to rural and tribal children in various remote locations in India.",
    ],
    image: Image5,
    alt: "Ekal Vidyalaya",
  };

  const dalmiaData = {
    title: "The Artech-Dalmia Center for IT",
    paragraphs: [
      "In 2007, Artech's diversity commitment went global with the construction of the Artech-Dalmia Center for IT, a state-of-the-art facility in Rajasthan, India.",
      "The Center was inaugurated in January 2008. The facility, located at the prestigious all-women Banasthali University, provides women with training in software, hardware, and communication technologies necessary to obtain employment in IT. The primary purpose of the Artech-Dalmia Center is to empower women with cutting-edge technology skills and to improve the quality of life for its community.",
      "The Center is equipped with smart classrooms and high-end computing laboratories for Computer Aided Design, Computer Computing, Multimedia Design, and Microprocessor testing.",
      "As part of a 2018-2020 grant of $500,000 USD, Artech funded an expansion of the Athletic Center at the University. The facility will include racquet sports such as Squash, Badminton, and Table Tennis. Additionally, a gymnasium, running track as well as yoga/meditation area will also be a part of the facility.",
    ],
    image: Image2,
    alt: "The Artech-Dalmia Center for IT",
  };

  const communityFourData = {
    mainHeading: "Contributing as One Artech",
    introText: [
      "At Artech, we believe that each of us is equally invested in creating a better tomorrow. As a part of our various efforts, our employees collectively walked more than 50 million steps to raise money for various charities.",
      "As part of our health and wellness program, Artech instituted a 100 Days of Summer Challenge in 2017 for employees to walk a collective 50 million steps. At the end of the successful program, Artech donated $5,000 to various charitable organizations including St. Jude Children's Research Hospital, The Waterboys Foundation, and the Wounded Warrior Project. Artech has continued this program for the past four years.",
    ],
    sections: [
      {
        title: "St. Jude Children's Research Hospital",
        text: "St. Jude Children's Research Hospital is dedicated to advancing cures and prevention for childhood cancer and other life-threatening diseases through research and treatment. It strongly believes that no child should be denied treatment based on race, religion, or a family's ability to pay.",
        image: Image3,
        alt: "St. Jude Children's Research Hospital",
        imageFirst: false,
      },
      {
        title: "Waterboys",
        text: "Named for one of the most overlooked but integral positions on any team, Waterboys unites professional athletes and fans in support of a single shared cause: providing clean, accessible drinking water to communities in need. Waterboys Foundation teams up with local crews domestically and internationally to provide sustainable water access that communities rely on.",
        image: Image4,
        alt: "Waterboys charity",
        imageFirst: true,
      },
      {
        title: "Wounded Warrior Project",
        text: "Wounded Warrior Project is a charity and veterans service organization that offers a variety of programs, services, and events for wounded veterans of the military actions following September 11, 2011. They run a variety of support programs for veterans like family support programs, helping them find work that fits their skill sets, and mental wellness programs.",
        image: Image6,
        alt: "Wounded Warrior Project",
        imageFirst: false,
      },
      {
        title: "Vision Aid",
        text: "Artech contributed to the Vision Aid Charitable Society, which works to help the visually challenged lead near-normal lives. Such initiatives reflect our intent as an organization to contribute positively and meaningfully to society.",
        image: Image1,
        alt: "Vision Aid",
        imageFirst: true,
      },
    ],
  };

  return (
    <>
      {/* Yale School of Medicine Section */}
      <section className="bg-white max-w-6xl mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              {" "}
              {/* Adjusted for responsiveness */}
              <img
                src={sixInfoData.image}
                alt={sixInfoData.alt}
                className="w-full h-auto object-cover rounded-lg" // Make image responsive
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-900 p-4  mb-2">
              {sixInfoData.title}
            </h2>
            <div className="w-12 h-1 bg-yellow-500 mt-2 mb-4 "></div>
            {sixInfoData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base mb-4 p-4 font-normal text-gray-700 text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Hackensack University Medical Center Section */}
      <section className="bg-gray-50 max-w-6xl mx-auto py-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              {" "}
              {/* Adjusted for responsiveness */}
              <img
                src={hackensackData.image}
                alt={hackensackData.alt}
                className="w-full h-auto object-cover rounded-lg" // Make image responsive
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-900 mb-2 p-4 ">
              {hackensackData.title}
            </h2>
            <div className="w-12 h-1 bg-yellow-500 mt-2 mb-4"></div>
            {hackensackData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base mb-4 font-normal text-gray-700 text-justify p-4 "
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Ekal Vidyalaya Section */}
      <section className="bg-white max-w-6xl mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              {" "}
              {/* Adjusted for responsiveness */}
              <img
                src={ekalVidyalayaData.image}
                alt={ekalVidyalayaData.alt}
                className="w-full h-auto object-cover rounded-lg" // Make image responsive
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-900 mb-2 p-4 ">
              {ekalVidyalayaData.title}
            </h2>
            <div className="w-12 h-1 bg-yellow-500 mt-2 mb-4"></div>
            {ekalVidyalayaData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base mb-4 font-normal text-gray-700 text-justify p-4 "
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* The Artech-Dalmia Center for IT Section */}
      <section className="bg-gray-50 max-w-6xl mx-auto py-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              {" "}
              {/* Adjusted for responsiveness */}
              <img
                src={dalmiaData.image}
                alt={dalmiaData.alt}
                className="w-full h-auto " // Make image responsive
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-900 mb-2 p-4 ">
              {dalmiaData.title}
            </h2>
            <div className="w-12 h-1 bg-yellow-500 mt-2 mb-4"></div>
            {dalmiaData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base mb-4 font-normal text-gray-700 text-justify p-4 "
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Contributing as One Artech Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-blue-800 border-b-2 border-yellow-400 inline-block pb-2">
            {communityFourData.mainHeading}
          </h1>
        </div>

        {/* Intro Text */}
        <div className="mb-10 text-gray-700">
          {communityFourData.introText.map((text, index) => (
            <p key={index} className="mb-4 text-justify font-normal">
              {text}
            </p>
          ))}
        </div>

        {/* Charity Sections */}
        {communityFourData.sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center mb-16 gap-6 ${
              section.imageFirst ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:w-1/2 w-full">
              {" "}
              {/* Make image container responsive */}
              <div>
                <img
                  src={section.image}
                  alt={section.alt}
                  className="w-full h-auto object-cover" // Make image responsive
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              {" "}
              {/* Make text container responsive */}
              <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-yellow-400 inline-block pb-1">
                {section.title}
              </h2>
              <p className="text-gray-700 text-justify font-normal">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SixInfo;
