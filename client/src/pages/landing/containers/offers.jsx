import React from "react";
import { jumping, laying, walking } from "../../../assets/images/dog";
import MaxContainer from "../../../components/maxContainer";
import { wolfHead } from "../../../assets/images";

const OfferSection = () => {
  return (
    <section>
      <MaxContainer>
        <h2 className="text-center text-[#E4E1F8] text-[48px] font-black max-md:text-[25px] max-md:text-center">
          What we have to offer
        </h2>
      </MaxContainer>

      <div className="w-full flex gap-[48px] flex-col mt-[56px] ">
        <div className="relative overflow-hidden h-fit ">
          <MaxContainer>
            <div className=" relative flex items-center justify-between w-full gap-[48px] ">
              <div className="w-[48%] h-[500px] bg-[#63BBC282] rounded-[44px] bg-purple-400 max-md:hidden">
                <img
                  src={walking}
                  alt=""
                  className="w-full  h-full object-contain"
                />
              </div>
              <div className="w-full flex-shrink-0 text-right pl-[32px] relative z-[2] max-md:text-center max-w-[500px] max-md:text-center max-md:pl-[0px]">
                <h3 className="text-[34px] font-bold text-[#E4E1F8] text-center">
                  Easy and fast payout
                </h3>
                <p className="text-[#969799] text-[20px]">
                  No complicated redemption processes or high minimums. Our easy
                  payout system lets you enjoy your rewards with minimal hassle.
                </p>
              </div>
            </div>
          </MaxContainer>
          <img
            src={wolfHead}
            alt=""
            className="opacity-60 absolute w-[700px] h-[500px] object-contain right-[-250px] top-[20px] max-md:right-[-100px] max-md:w-[400px] max-md:h-[200px]"
          />
        </div>
        <div className="relative overflow-hidden h-fit ">
          <MaxContainer>
            <div className=" relative flex items-center flex-row-reverse justify-between w-full gap-[48px]">
              <div className="w-[48%] h-[500px] overflow-hidden bg-[#63BBC282] rounded-[44px] relative max-md:hidden">
                <img
                  src={laying}
                  alt=""
                  className="w-full  absolute left-[calc(50%-50px)] -translate-x-1/2 top-[-100px] h-[500px] object-contain"
                />
              </div>
              <div className="w-full flex-shrink-0 text-left pl-[32px] relative z-[2]  max-w-[500px] max-md:text-center max-md:pl-[0px]">
                <h3 className="text-[34px] font-bold text-[#E4E1F8] text-center">
                  Mobile friendly
                </h3>
                <p className="text-[#969799] text-[20px]">
                  No complicated redemption processes or high minimums. Our easy
                  payout system lets you enjoy your rewards with minimal hassle.
                </p>
              </div>
            </div>
          </MaxContainer>
          <img
            src={wolfHead}
            alt=""
            className="opacity-60 absolute w-[700px] h-[500px] object-contain left-[-250px] top-[20px] scale-x-[-1] max-md:left-[-100px] max-md:w-[400px] max-md:h-[200px]"
          />
        </div>
        <div className="relative overflow-hidden h-fit">
          <MaxContainer>
            <div className=" relative flex items-center justify-between w-full gap-[48px]">
              <div className="relative w-[48%] h-[500px] bg-[#63BBC282] rounded-[44px] max-md:hidden">
                <img
                  src={jumping}
                  alt=""
                  className="w-full absolute top-[35px] h-[500px] object-contain"
                />
              </div>
              <div className="w-full flex-shrink-0 text-right pl-[32px] relative z-[2] max-w-[500px] max-md:text-center max-md:pl-[0px]">
                <h3 className="text-[34px] font-bold text-[#E4E1F8]">
                  Effortless earning
                </h3>
                <p className="text-[#969799] text-[20px]">
                  No complicated redemption processes or high minimums. Our easy
                  payout system lets you enjoy your rewards with minimal hassle.
                </p>
              </div>
            </div>
          </MaxContainer>
          <img
            src={wolfHead}
            alt=""
            className="opacity-60 absolute w-[700px] h-[500px]  object-contain right-[-250px] top-[20px] max-md:right-[-100px] max-md:w-[400px] max-md:h-[200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
