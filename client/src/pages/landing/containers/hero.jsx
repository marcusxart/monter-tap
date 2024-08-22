import React from "react";
import Button from "../../../components/button";
import { happy } from "../../../assets/images/dog";
import InputField from "../../../components/inputField";

const HeroSection = () => {
  return (
    <header className="h-[calc(100dvh-90px)] flex w-full items-center justify-between">
      <div className="w-[100%] flex-grow-0 flex-shrink-0 max-md:flex max-md:flex-col max-md:items-center">
        <h1 className="text-[60px] font-black leading-[72px] text-[#E4E1F8] max-md:text-[25px] max-md:text-center max-md:leading-[40px]">
          The Money-Making Game: Simple Tapping, Real{" "}
          <span className="text-gradient">Rewards.</span>
        </h1>
        <p className="mt-[8px] text-[20px] font-semibold text-[#FFFFFFB2] mb-[32px] max-md:text-center max-md:text-[18px]">
          Busy life, extra cash? Tap your way to real rewards with The
          Money-Making Game. No sweat, just simple taps for the things you want.
        </p>
        <div className="max-w-[250px] max-md:w-[80%]">
          <Button text="Start earning" type="secondary" border full />
        </div>
      </div>
      <div className=" flex-shrink-0 flex-grow-1">
        <img src={happy} alt="" className="w-full mb-[100px]" />
      </div>
    </header>
  );
};

export default HeroSection;
