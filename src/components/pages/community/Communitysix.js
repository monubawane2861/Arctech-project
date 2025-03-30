import React from "react";

const CommunitySix = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left Column - Committed to a Sustainable Future */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              Committed to
            </h2>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              a Sustainable Future
            </h2>
            <div className="w-64 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <p className="text-gray-800 mb-4 text-justify font-[500]">
            We are proud to announce that Artech LLC has developed ambitious
            targets in line with the{" "}
            <span className="text-indigo-600 text-justify font-[500]">
              SBTi criteria
            </span>
            . The near-term target covers our Scope 1 and 2 GHG emissions. We
            are currently finalizing our Scope 3 target and will be submitting
            both to the SBTi for validation shortly. Stay tuned for further
            updates as we continue to work towards a more sustainable future.
          </p>

          <div className="w-full h-1 bg-yellow-400 mt-12"></div>
        </div>

        {/* Right Column - Environmentally Sustainable Practices */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              Environmentally Sustainable Practices
            </h2>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">(ESP)</h2>
            <div className="w-64 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <p className="text-gray-800 mb-6 text-justify font-[500]">
            Artech has embarked on an initiative to align each of its
            Operational and Service Delivery (OSD) processes with current
            environmentally sustainable practices. The "Artech Green OSD"
            initiative is an executive order with strict definitions and
            deployment action items.
          </p>

          <p className="text-gray-800 mb-6 text-justify font-[500]">
            Artech Green OSD is driven by the firm's leadership team, which has
            fervently communicated the significance of this initiative to all
            senior staff, line managers, and employees throughout Artech's
            global operations.
          </p>

          <p className="text-gray-800 mb-6 text-justify font-[500]">
            Much like the ecology, Artech OSD is dynamic and intertwined across
            many activities; therefore, Artech's employees play an important
            role.
          </p>

          <div className="w-full h-1 bg-yellow-400 mt-8"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Operations & Service Delivery */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              Operations & Service Delivery
            </h2>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">(OSD)</h2>
            <div className="w-64 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <p className="text-gray-800 mb-4 text-justify font-[500]">
            At Artech, each task is carried out to conserve energy in one form
            or another. Artech is an ISO 9001 certified company and has
            developed its global practices based on QMS methodologies. Within
            this quality framework, Artech continues to review each of its
            processes and determine which physical actions, usable materials,
            etc. can be refined to conserve energy.
          </p>

          <div className="w-full h-1 bg-yellow-400 mt-12"></div>
        </div>

        {/* Right Column - Supply Chain Practices */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              Supply Chain Practices
            </h2>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">(SCP)</h2>
            <div className="w-64 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <p className="text-gray-800 mb-6 text-justify font-[500]">
            As a global IT service provider, Artech is compliant with various
            social responsibility and environmentally sustainable programs and
            publicly discloses its status and progress at portals managed by the
            Carbon Disclosure Project, EcoVadis, and others.
          </p>

          <p className="text-gray-800 mb-6 text-justify font-[500]">
            Artech's supply chain compliance is bidirectional and applicable to
            both clients and suppliers.
          </p>

          <div className="w-full h-1 bg-yellow-400 mt-12"></div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySix;
