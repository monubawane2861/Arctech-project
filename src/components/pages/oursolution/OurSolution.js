import React from "react";
import BusinessBanner from "./businessbanner/BusinessBanner";
import InnovativeSolutions from "./invotivesolution/InvotiveSol";
import WorkforceSolutions from "./workforcesol/WorkforceSolution";
import ServiceCardsGrid from "./servicecard/ServiceCards";
import ManagedServicesSection from "./manage/ManageSurvice";
import ThreeStep from "./threestep/ThreeStep";
import PreferredChoice from "./prefferdchoice/PreferredChoice";
import ServiceCategories from "./servicecategories/ServiceCategories";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";

const OurSolution = () => {
  return (
    <>
      <Header />
      <BusinessBanner />
      <InnovativeSolutions />
      <WorkforceSolutions />
      <ServiceCardsGrid />
      <ManagedServicesSection />
      <ThreeStep />
      <ServiceCategories />
      <PreferredChoice />
      <Footer />
    </>
  );
};

export default OurSolution;
