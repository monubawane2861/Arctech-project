import BuildingImage from "../../../assets/03.png";

const CommunityThird = () => {
  return (
    <section className="bg-white  max-w-6xl mx-auto ">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-[80%] md:w-1/2 flex justify-center">
          {/* Image container adjustments for full visibility */}
          <div className="w-96 h-96 md:w-[30rem] md:h-[30rem]">
            <img
              src={BuildingImage}
              alt="Yale School of Medicine"
              className=" w-[120%] h-[80%] mt-8 " // Changed object-cover to object-contain
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-semibold text-blue-900 ">
            Yale School of Medicine
          </h2>
          <div className="w-12 h-1 bg-yellow-500 mt-2 mb-4"></div>
          <p className=" text-[15px] mb-4 font-[500] text-justify ">
            In November 2015, Artech donated $1 million to the Yale School of
            Medicine to fund Dermatology-Autoimmune Research.
          </p>
          <p className=" text-[15px] mb-4 font-[500] text-justify">
            With this donation, Artech established the Artech Resource Fund for
            Dermatology Diseases, thus, re-iterating its commitment towards
            advanced research in the field of science and medicine.
          </p>
          <p className=" text-[15px] font-[500] text-justify">
            The funds provided by the Ranjini and Ajay Poddar Resource Fund for
            Dermatologic Diseases Research aided in studies that led the
            researchers to theorize that Janus Kinase (JAK) – signal transducer
            and activator of transcription (STAT) signaling could play a role in
            treating certain forms of sarcoidosis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityThird;
