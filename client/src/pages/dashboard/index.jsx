import React from "react";
import MaxContainer from "../../components/maxContainer";
import Banner from "../../components/banner";
import Button from "../../components/button";
import { coin } from "../../assets/images";
import CoinButton from "../../components/coinButton";
import Range from "./components/range";
import AxeIcon from "../../assets/svgs/axe";

const Dashboard = () => {
  return (
    <MaxContainer>
      <div className="pt-[48px]">
        <Banner>
          <div className="flex flex-col items-center">
            <h2 className="text-[24px] font-bold">Want to boost earning?</h2>
            <div className="w-[150px]">
              <Button text="Go to task" full />
            </div>
          </div>
        </Banner>
        <div className="mt-[48px] mb-[64px] flex justify-between items-center gap-[24px] w-full h-fit relative">
          <h1 className="text-[20px] font-bold">Edubrakata@gmail.com</h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-[#999999]">Your available balance</p>
            <p className="text-[32px] font-semibold text-center">$499.00</p>
          </div>
          <p className="text-[14px] font-medium">Feb 12, 2024 - 12:29 PM</p>
        </div>
        <div className="flex flex-col items-center mx-auto">
          {" "}
          <div className="[&>img]:w-[48px] [&>img]:h-[48px] [&>img]:object-contain flex items-center gap-[16px]">
            <img src={coin} alt="" />
            <h2 className="text-[40px] font-bold">4,999,500</h2>
            <img src={coin} alt="" />
          </div>
          <CoinButton />
          <div className="w-full max-w-[360px]">
            <Range percentage={20} />
          </div>
          <div className="flex items-center gap-[16px] [&>svg]:w-[24px]">
            <AxeIcon />{" "}
            <p className="font-semibold text-[18px]">99500 / 10000</p>
          </div>
        </div>
      </div>
    </MaxContainer>
  );
};

export default Dashboard;
