import React from "react";
import AboutImage from "../../../../assets/banner.png";

const AboutBg = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image */}
      <img
        src={AboutImage}
        alt="About Hero"
        className="w-full h-auto object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-end pr-12 text-white">
        <div className="p-8 rounded-lg max-w-xl flex flex-col items-center">
          {" "}
          {/* Modified this div */}
          <h2 className="text-3xl font-bold text-center ">
            The Largest Women-Owned IT Staffing Firm in the US with
          </h2>
          <h1 className="text-2xl text-yellow-500 mt-12 text-center font-bold">
            Expertise in most Non-IT
            <h1> Professional Verticals</h1>
          </h1>
          <p className="mt-12 text-lg text-center font-[500]">
            To find out how we can help you
          </p>
          <button className="mt-4 px-9 py-2 bg-yellow-500 text-black font-semibold rounded-full cursor-pointer">
            CONTACT US TODAY!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBg;

// import React from "react";
// import AboutImage from "../../../../assets/banner.png";

// const AboutBg = () => {
//   return (
//     <div className="relative w-full h-auto">
//       {/* Background Image */}
//       <img
//         src={AboutImage}
//         alt="About Hero"
//         className="w-full h-auto object-cover"
//       />

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex justify-end items-center px-4 sm:px-8 md:px-12 lg:px-20">
//         <div className="max-w-lg text-white text-right">
//           {/* Heading */}
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
//             The Largest Women-Owned IT Staffing Firm in the US with
//           </h2>

//           {/* Subheading */}
//           <h1 className="text-lg sm:text-xl md:text-2xl text-yellow-500 font-bold mt-6 leading-snug">
//             Expertise in most Non-IT <br /> Professional Verticals
//           </h1>

//           {/* Description */}
//           <p className="mt-6 text-base sm:text-lg md:text-xl font-medium">
//             To find out how we can help you
//           </p>

{
  /* Button */
}
//           <button className="mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition">
//             CONTACT US TODAY!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutBg;
