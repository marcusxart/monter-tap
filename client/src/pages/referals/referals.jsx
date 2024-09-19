import React, { useEffect, useState } from "react";
import Wolf from "../../components/wolf";
import { standing } from "../../assets/images/dog";
import { useSelector } from "react-redux";
import { MdContentCopy } from "react-icons/md";
import { coin } from "../../assets/images";

const Referals = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [copySuccess, setCopySuccess] = useState("");
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to handle copying referral code to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(userInfo.referralCode).then(() => {
      setCopySuccess("Copied!");
      setTimeout(() => {
        setCopySuccess(""); // Clear message after 2 seconds
      }, 2000);
    });
  };

  return (
    <div className="w-full h-[55rem] flex justify-around items-center px-9">
      <Wolf Wolf={standing} />
      <div className="w-[30%] h-[20%]  flex mr-3 justify-center items-center flex-col max-md:hidden">
        <p>{userInfo.email}</p>
        <p className="text-[14px] font-medium max-md:text-center">
          {currentDateTime.toLocaleString()}
        </p>
      </div>
      <div className="flex flex-col gap-[10px] w-[50%] h-[100%]  items-center justify-start pt-[0px]  max-md:w-full">
        <div className="w-full h-[20%] flex  flex-col px-4 justify-center items-center">
          <p className=" font-semibold text-3xl">Refer and Earn</p>
          <p className="text-center text-sm">
            Earn monstercoins every time someone signs up with your referral
            link! You'll get 20,000 monstercoins for each referral.
          </p>
        </div>
        <div className="flex  h-[50%] justify-center flex-col items-center mx-auto">
          <div className="[&>img]:w-[30px] [&>img]:h-[30px]  [&>img]:object-contain flex items-center gap-[10px] max-md:[&>img]:w-[36px] max-md:[&>img]:h-[36px] max-md:gap-[12px]"></div>
          <img src={coin} alt="coin" />
        </div>
        <div className="w-full h-[15%]  flex justify-center items-center">
          <div className="w-[45%] h-[60%] bg-transparent border border-gray-600 rounded flex justify-center items-center max-md:w-[60%]">
            <p className=" font-semibold text-lg">{userInfo.referralCode}</p>
          </div>
          <div className="w-[15%] h-[60%]  flex justify-center items-center">
            <MdContentCopy
              size={25}
              className="cursor-pointer"
              onClick={handleCopy}
            />
          </div>
        </div>
        {copySuccess && (
          <p className="text-green-500 font-medium mt-2">{copySuccess}</p>
        )}
      </div>
    </div>
  );
};

export default Referals;
