import React, { useEffect } from "react";
import Cookies from "js-cookie";
import HeroSection from "./containers/hero";
import OfferSection from "./containers/offers";
import MaxContainer from "../../components/maxContainer";
import CoinSection from "./containers/coin";
// import CookieComponent from "../../components/Cookies";

const Landing = () => {
  return (
    <div className="flex w-full gap-[90px] flex-col">
      <MaxContainer>
        <HeroSection />
      </MaxContainer>
      <OfferSection />
      <MaxContainer>
        <CoinSection />
      </MaxContainer>
      {/* <CookieComponent /> */}
    </div>
  );
};

export default Landing;
