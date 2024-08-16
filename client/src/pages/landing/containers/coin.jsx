import React from "react";
import CoinButton from "../../../components/coinButton";

const CoinSection = () => {
  return (
    <section className="flex w-full flex-col items-center min-h-[70dvh] justify-center">
      <h2 className="text-[60px] leading-[72px] text-gradient font-bold max-md:text-center">
        Start tapping
      </h2>
      <CoinButton />
    </section>
  );
};

export default CoinSection;
