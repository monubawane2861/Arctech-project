import React from "react";
import Image7 from "../../../../assets/07.png";
import Image9 from "../../../../assets/09.png";

const StemInitives = () => {
  return (
    <>
      <div className="bg-blue-300 py-7 px-2 ">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-3 ">
          STEM Initiatives
          <div className="w-36 h-1 bg-yellow-400 mx-auto"></div>
        </h2>
        <p className="text-center mb-8 max-w-4xl mx-auto font-justify font-[500]">
          Beyond its own ecosystem, Artech is also impacting Diversity &
          Inclusion by implementing a social responsibility program with a
          strong focus on STEM initiatives, as well as supporting and mentoring
          women in STEM careers.
        </p>
      </div>
      <div className="font-sans">
        <div>
          <div>
            {/* Added padding here for 10% gap on each side */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              {" "}
              {/* Adjusted max-w and added padding */}
              <div className="flex flex-col lg:flex-row items-center gap-10 mt-8">
                <div className="lg:w-1/2">
                  <div>
                    <img
                      src={Image9}
                      alt="Ranjini Poddar"
                      className="w-[90%]"
                    />
                    <div className="absolute bottom-4 right-4">
                      <img
                        src={Image7}
                        alt="NMSDC Logo"
                        className="w-24 h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <p className="mb-4 text-justify font-[500]">
                    On behalf of Artech, Ranjini Poddar is involved with several
                    clients as a mentor to women-owned businesses. One of the
                    significant programs is the NMSDC's Emerging Young
                    Entrepreneurs program. This program was created to support a
                    commitment by the National Minority Supplier Development
                    Council (NMSDC) to advance business opportunities for
                    certified minority and women business enterprises and
                    connect them to corporate members. A uniquely designed
                    year-long program, EYE provides the next generation of
                    minority and women millennial entrepreneurs who support the
                    needs of corporate members, MBEs, and additional
                    stakeholders.
                  </p>
                  <p className="mb-4 text-justify font-[500]">
                    Informally, Ranjini Poddar has been mentoring smaller
                    minority and women business owners for years.
                  </p>
                  <p className="text-justify font-[500]">
                    In 2008, she engaged the Artech team in a program called AIM
                    (Ask Impressive MBE) organized by the NY-NJ Minority
                    Supplier Development Council. Artech currently has a formal
                    supplier diversity program or Vendors-in-Partnership (VIP)
                    program where the company works with its clients and many
                    minority agencies in mentor-protégé programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StemInitives;
