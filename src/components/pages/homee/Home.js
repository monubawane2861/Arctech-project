import React from "react";
import HomeFirst from "./Homefirst";
import HomeSecond from "./Homesecond";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import HomeThird from "./Homethird";
import HomeFour from "./Homefour";

const Home = () => {
  return (
    <>
      <Header />
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
      <HomeFour />
      <Footer />
    </>
  );
};

export default Home;
