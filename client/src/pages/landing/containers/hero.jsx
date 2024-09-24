import React from "react";
import Button from "../../../components/button";
import { happy } from "../../../assets/images/dog";
import InputField from "../../../components/inputField";

const HeroSection = () => {
  return (
    <header className="h-[calc(100dvh-90px)] flex w-full items-center justify-between">
      <div className="w-[100%] flex-grow-0  max-md:flex max-md:flex-col max-md:items-center">
        <h1 className="text-[60px] font-black leading-[72px] text-[#E4E1F8] max-md:text-[25px] max-md:text-center max-md:leading-[40px]">
          Tap Your Way To Exicting <span className="text-gradient">Perks.</span>
        </h1>
        <p className="mt-[8px] text-[20px] font-semibold text-[#FFFFFFB2] mb-[32px] max-md:text-center max-md:text-[18px]">
          Unlock unique perks and rewards with just a tap. Collect coins and
          enjoy benefits within our platform—quick, simple, and fun
        </p>
        <div className="max-w-[250px] max-md:w-[80%]">
          <Button text="Start Tapping" type="secondary" border full />
        </div>
      </div>
      <div className=" flex-shrink-0 flex-grow-1 max-md:hidden">
        <img src={happy} alt="" className="w-full mb-[100px]" />
      </div>
    </header>
  );
};

export default HeroSection;
