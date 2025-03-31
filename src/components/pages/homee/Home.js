import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import Cetification from "./certification/Certifications";
import HomeBg from "./Homebg/HomeBg";
import WhatWeOffer from "./whatweoffer/WhatWeOffer";
import ArchTech from "./archtech/ArchTech";
import AchiveOptimized from "./achiveoptimze/AchiveOptimized";

const Home = () => {
  return (
    <>
      <Header />
      <HomeBg />
      <AchiveOptimized />
      <WhatWeOffer />
      <ArchTech />
      <Cetification />
      <Footer />
    </>
  );
};

export default Home;
