import React from "react";
import BrightFuture from "../community/brightfuture/BrightFuture";
import StemInitives from "./steminitiatives/StemInitives";
import Sustainbility from "./sustainability/Sustainbility";
import FirstInitives from "./firstinitive/FirstInitives";
import EndSection from "./endsection/EndSection";
import SixInfo from "./sixinfo/SixInfo";
import Footer from "../../common/footer/Footer";
const CommunityInitiativesPage = () => {
  return (
    <>
      <BrightFuture />
      <FirstInitives />
      <SixInfo />
      <StemInitives />

      <Sustainbility />
      <EndSection />
      <Footer />
    </>
  );
};
export default CommunityInitiativesPage;
