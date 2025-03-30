import React from "react";

const OurSolutionSeven = () => {
  return (
    <div className="w-full bg-blue-800 text-white">
      {/* Header section */}
      <div className="py-6 text-center">
        <h2 className="text-3xl font-bold mb-1">
          Preferred Choice for Clients
        </h2>
        <div className="w-64 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      {/* Benefits grid */}
      <div className="bg-white text-gray-800 py-12 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Consultative Partner */}
          <div className="flex">
            <div className="mr-6">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 10h1v2h-1zm-7 2h1v-2H9zm14.24 1.03l-1.85 5.1a1.98 1.98 0 01-1.86 1.32H6.5a2 2 0 01-1.88-1.31l-1.87-5.11A2.98 2.98 0 013 12.02v-1.72c0-1.47 1.13-2.61 2.6-2.6H8V5.5C8 4.12 9.12 3 10.5 3h3c1.38 0 2.5 1.12 2.5 2.5V7.7h2.4c1.47 0 2.6 1.13 2.6 2.6v1.72c0 .5-.13.98-.36 1.41L14 15l2-2-2-3h-1v2H9v-2H8l-2 3 2 2-6.64-2.39zM10 5.5v2h4v-2c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-red-500 font-bold text-lg mb-2">
                CONSULTATIVE PARTNER
              </h3>
              <p className="text-sm">
                ASA Board, WBENC Board, Frequent Speaker at SIA Forums and
                Conferences, Federal Reserve Small and Medium Sized Advisory
                Board Member
              </p>
            </div>
          </div>

          {/* Mature Operations */}
          <div className="flex">
            <div className="mr-6">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-teal-500 font-bold text-lg mb-2">
                MATURE OPERATIONS PROCESS CONTROLS
              </h3>
              <p className="text-sm">
                Daily/Weekly Productivity Reporting, MRMs, Bi-weekly Business
                Review meetings, Monthly Market Review, QBR's, Recruitment and
                Sales Training Academy
              </p>
            </div>
          </div>

          {/* Financial Stability */}
          <div className="flex">
            <div className="mr-6">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-yellow-500 font-bold text-lg mb-2">
                FINANCIAL STABILITY
              </h3>
              <p className="text-sm">
                Financial strength and stability; scalable, flexible, privately
                held and willing to invest
              </p>
            </div>
          </div>

          {/* Technology Infrastructure */}
          <div className="flex">
            <div className="mr-6">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-purple-600 font-bold text-lg mb-2">
                STATE OF THE ART TECHNOLOGY INFRASTRUCTURE INVESTMENTS
              </h3>
              <p className="text-sm">
                Innovative technology infrastructure and operational backbone
              </p>
            </div>
          </div>

          {/* Global Presence */}
          <div className="flex">
            <div className="mr-6">
              <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-blue-700 font-bold text-lg mb-2">
                NATIONAL AND GLOBAL GEOGRAPHIC PRESENCE
              </h3>
              <p className="text-sm">
                Financial strength and stability; scalable, flexible, privately
                held, and willing to invest
              </p>
            </div>
          </div>

          {/* Contact Section - Empty cell + CTA */}
          <div className="flex"></div>
          <div className="flex flex-col items-end justify-center">
            <p className="text-sm mb-3">To find out how we can help you</p>
            <button className="bg-blue-800 text-white px-6 py-3 rounded-full font-bold text-sm">
              CONTACT US TODAY!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutionSeven;
