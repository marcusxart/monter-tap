import React, { useEffect } from "react";
import Cookies from "js-cookie";
import HeroSection from "./containers/hero";
import OfferSection from "./containers/offers";
import MaxContainer from "../../components/maxContainer";
import CoinSection from "./containers/coin";
import CookieComponent from "../../components/Cookies";

const Landing = () => {
  useEffect(() => {
    // Set a cookie for the user's session or preferences
    Cookies.set("visitedLandingPage", "true", { expires: 30 }); // Cookie expires in 30 days
  }, []);

  return (
    <div className="flex w-full gap-[90px] flex-col">
      <MaxContainer>
        <HeroSection />
      </MaxContainer>
      <OfferSection />
      <MaxContainer>
        <CoinSection />
      </MaxContainer>
      <CookieComponent />
    </div>
  );
};

export default Landing;
