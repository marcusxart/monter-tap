import React from "react";
import HeroSection from "./containers/hero";
import OfferSection from "./containers/offers";
import MaxContainer from "../../components/maxContainer";
import CoinSection from "./containers/coin";

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
    </div>
  );
};

export default Landing;
