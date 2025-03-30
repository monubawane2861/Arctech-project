import React from "react";
import About1 from "../../../assets/weoffer1.jpg";
import About2 from "../../../assets/weoff2.jpg";
import About3 from "../../../assets/weoff3.jpg";

const HomeThird = () => {
  return (
    <div className="container mx-auto px-[10%] py-16">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-blue-800">What We Offer</h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2"></div>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Managed Services Card */}
        <div className="flex flex-col items-center h-full">
          {" "}
          {/* Added h-full */}
          <div className="w-full max-w-md mb-6">
            <img
              src={About1}
              alt="Business meeting"
              className="w-full h-auto object-cover"
            />{" "}
            {/* Make image responsive */}
          </div>
          <h3 className="text-2xl font-bold text-red-600 text-center">
            Managed Services and
            <br />
            Project Delivery
          </h3>
          <p className="text-lg font-semibold text-gray-700 text-center mt-4">
            Value/Flexibility/Predictability
          </p>
          <p className="text-center mt-4 flex-grow">
            {" "}
            {/* Added flex-grow */}
            Artech Solutions leverages the larger talent-sourcing engine to
            build optimized delivery teams to achieve exceptional business
            results for our customers. We provide you with a combination of
            people, processes, tools and technologies that can help you maximize
            productivity, improve operations, facilitate agility and scale,
            reshape spending, and deliver innovation.
          </p>
          <div className=" space-y-2">
            <p className="text-center text-red-600  font-semibold">
              Application Services
            </p>
            <p className="text-center text-red-600 font-semibold">
              Cloud and Infrastructure
            </p>
            <p className="text-center text-red-600 font-semibold">
              Business Resiliency
            </p>
            <p className="text-center text-red-600 font-semibold">
              Digital Experience
            </p>
          </div>
          <button className="mt-8 bg-blue-800 text-white py-3 px-5 rounded-full border border-blue-800 transition-all duration-300 hover:bg-white hover:text-blue-800">
            Know More
          </button>
        </div>

        {/* Workforce Solutions Card */}
        <div className="flex flex-col items-center h-full">
          {" "}
          {/* Added h-full */}
          <div className="w-full max-w-md mb-6">
            <img
              src={About2}
              alt="Team collaboration"
              className="w-full h-auto object-cover"
            />{" "}
            {/* Make image responsive */}
          </div>
          <h3 className="text-2xl font-bold text-red-600 text-center">
            Workforce Solutions
          </h3>
          <p className="text-center mt-4 flex-grow">
            {" "}
            {/* Added flex-grow */}
            Our Workforce Solutions Teams don't just deliver staffing solutions
            – they provide business solutions. Our understanding of client's
            needs, unique talent supply chain, high-performing teams, and
            flexible engagement models help us empower businesses by delivering
            human intellect that can make a difference to an organization.
          </p>
          <div>
            <p className="text-center text-red-600 font-semibold">
              Contingent Staffing
            </p>
            <p className="text-center text-red-600 font-semibold">
              Project staffing
            </p>
            <p className="text-center text-red-600 font-semibold">
              Master Vendor
            </p>
            <p className="text-center text-red-600 font-semibold">
              RPO – Projects and Programs
            </p>
            <p className="text-center text-red-600 font-semibold">
              Direct Hire
            </p>
            <p className="text-center text-red-600 font-semibold">
              Payroll and Transition Services
            </p>
          </div>
          <button className="mt-8 bg-blue-800 text-white py-3 px-5 rounded-full border border-blue-800 transition-all duration-300 hover:bg-white hover:text-blue-800">
            Know More
          </button>
        </div>

        {/* Diversity and Inclusion Card */}
        <div className="flex flex-col items-center h-full">
          {" "}
          {/* Added h-full */}
          <div className="w-full max-w-md mb-6">
            <img
              src={About3}
              alt="Diverse team celebrating"
              className="w-full h-auto object-cover"
            />{" "}
            {/* Make image responsive */}
          </div>
          <h3 className="text-2xl font-bold text-red-600 text-center">
            Diversity and Inclusion
            <br />
            Programs
          </h3>
          <p className="text-center mt-4 flex-grow">
            {" "}
            {/* Added flex-grow */}
            At Artech, Diversity is in our DNA and is an organizing principle in
            how we do business. As a certified minority and women-owned
            business, we are at the forefront of diverse hiring in the United
            States for 3 decades.
          </p>
          <p className="text-center ">
            We are committed to inclusive hiring practices internally, with our
            suppliers, and for our clients and outperform the national average
            by leaps and bounds.
          </p>
          <p className="text-center ">
            By partnering with Artech, clients benefit from the workforce
            representation we have already attained.
          </p>
          <button className="mt-8 bg-blue-800 text-white py-3 px-5 rounded-full border border-blue-800 transition-all duration-300 hover:bg-white hover:text-blue-800">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeThird;
