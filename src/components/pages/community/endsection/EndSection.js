import React from "react";

// Reusable Component for the Yellow Line
const YellowLine = () => {
  return <div className="w-full h-1 bg-yellow-400 my-4"></div>; // Using my-4 for consistent spacing
};

// Reusable Component for Section Heading
const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-semibold text-blue-800 mb-2">{title}</h2>
      {subtitle && (
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          {subtitle}
        </h2>
      )}
      <div className="w-64 h-1 bg-yellow-400 mx-auto"></div>
    </div>
  );
};

// Reusable Component for Paragraph
const SectionParagraph = ({ children }) => {
  return (
    <p className="text-gray-800 mb-6 text-justify font-[500]">{children}</p>
  );
};

const EndSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left Column - Committed to a Sustainable Future */}
        <div>
          <SectionHeading
            title="Committed to"
            subtitle="a Sustainable Future"
          />
          <SectionParagraph>
            We are proud to announce that Artech LLC has developed ambitious
            targets in line with the{" "}
            <span className="text-indigo-600 text-justify font-[500]">
              SBTi criteria
            </span>
            . The near-term target covers our Scope 1 and 2 GHG emissions. We
            are currently finalizing our Scope 3 target and will be submitting
            both to the SBTi for validation shortly. Stay tuned for further
            updates as we continue to work towards a more sustainable future.
          </SectionParagraph>
          <YellowLine />
        </div>

        {/* Right Column - Environmentally Sustainable Practices */}
        <div>
          <SectionHeading
            title="Environmentally Sustainable Practices"
            subtitle="(ESP)"
          />
          <SectionParagraph>
            Artech has embarked on an initiative to align each of its
            Operational and Service Delivery (OSD) processes with current
            environmentally sustainable practices. The "Artech Green OSD"
            initiative is an executive order with strict definitions and
            deployment action items.
          </SectionParagraph>
          <SectionParagraph>
            Artech Green OSD is driven by the firm's leadership team, which has
            fervently communicated the significance of this initiative to all
            senior staff, line managers, and employees throughout Artech's
            global operations.
          </SectionParagraph>
          <SectionParagraph>
            Much like the ecology, Artech OSD is dynamic and intertwined across
            many activities; therefore, Artech's employees play an important
            role.
          </SectionParagraph>
          <YellowLine />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Operations & Service Delivery */}
        <div>
          <SectionHeading
            title="Operations & Service Delivery"
            subtitle="(OSD)"
          />
          <SectionParagraph>
            At Artech, each task is carried out to conserve energy in one form
            or another. Artech is an ISO 9001 certified company and has
            developed its global practices based on QMS methodologies. Within
            this quality framework, Artech continues to review each of its
            processes and determine which physical actions, usable materials,
            etc. can be refined to conserve energy.
          </SectionParagraph>
          <YellowLine />
        </div>

        {/* Right Column - Supply Chain Practices */}
        <div>
          <SectionHeading title="Supply Chain Practices" subtitle="(SCP)" />
          <SectionParagraph>
            As a global IT service provider, Artech is compliant with various
            social responsibility and environmentally sustainable programs and
            publicly discloses its status and progress at portals managed by the
            Carbon Disclosure Project, EcoVadis, and others.
          </SectionParagraph>
          <SectionParagraph>
            Artech's supply chain compliance is bidirectional and applicable to
            both clients and suppliers.
          </SectionParagraph>
          <YellowLine />
        </div>
      </div>
    </div>
  );
};

export default EndSection;
