import React from "react";
import EmpoweringClient from "./Empowering/EmpoveringClient";
import LeadershipSection from "./Leadership/LeadershipSection";
import GreatPlaceSection from "./Greatplace/GreatPlaceSection";
import MissionVisionPurpose from "./mis-vis-pur/MissionVisionPurpose";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import ArcAdvantage from "./ArchAdv/ArchAdvantages";
import AboutBg from "./AboutBg/AboutBg";
import WinningLife from "./Winning/WinningLife";
const About = () => {
  return (
    <>
      <Header />
      <AboutBg />
      <ArcAdvantage />
      <GreatPlaceSection />
      <MissionVisionPurpose />
      <EmpoweringClient />
      <LeadershipSection />
      <WinningLife />
      <Footer />
    </>
  );
};

export default About;
