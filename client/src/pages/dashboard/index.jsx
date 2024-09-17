import React, { useEffect, useState } from "react";
import MaxContainer from "../../components/maxContainer";
import Banner from "../../components/banner";
import Button from "../../components/button";
import { coin, diamond } from "../../assets/images";
import CoinButton from "../../components/coinButton";
import Range from "./components/range";
import AxeIcon from "../../assets/svgs/axe";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userInfo = useSelector((state) => state.user);
  // console.log(userInfo.account);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <MaxContainer>
      <div className="pt-[48px] max-md:pt-[24px] ">
        <Banner>
          <div className="flex flex-col items-center">
            <h2 className="text-[24px] font-bold max-md:text-[20px]">
              Want to boost earning?
            </h2>
            <div className="w-[150px] max-md:w-full max-md:mt-2">
              <Button text="Go to task" full />
            </div>
          </div>
        </Banner>
        <div className="mt-[48px] mb-[64px] flex justify-between items-center gap-[24px] w-full h-fit relative max-md:flex-col max-md:mt-[24px] max-md:mb-[32px] max-md:gap-[16px]">
          <h1 className="text-[20px] font-bold max-md:text-[18px] max-md:text-center">
            {userInfo.email}
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:static max-md:transform-none">
            <p className="text-[#999999] max-md:text-center">
              Your Total diamond
            </p>
            <p className="text-[32px] font-semibold text-center max-md:text-[28px]">
              <div className="w-[100%] h-[20%] flex justify-center gap-2 items-center">
                <img src={diamond} alt="" />
                <p>{userInfo.account.bonus}</p>
              </div>
            </p>
          </div>
          <p className="text-[14px] font-medium max-md:text-center">
            {currentDateTime.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col items-center mx-auto">
          <div className="[&>img]:w-[48px] [&>img]:h-[48px] [&>img]:object-contain flex items-center gap-[16px] max-md:[&>img]:w-[36px] max-md:[&>img]:h-[36px] max-md:gap-[12px]">
            <img src={coin} alt="" />
            <h2 className="text-[40px] font-bold max-md:text-[32px]">
              {userInfo.account.coinCount}
            </h2>
            <img src={coin} alt="" />
          </div>
          <CoinButton />
        </div>
      </div>
    </MaxContainer>
  );
};

export default Dashboard;
