import MaxContainer from "../../components/maxContainer";
import Banner from "../../components/banner";
import exchangeBy from "../../assets/images/exchangeBy.png";
import Button from "../../components/button";
import { wolfCross } from "../../assets/images/dog";
import moneyCash from "../../assets/images/moneyCash.png";

function Bybit() {
  return (
    <>
      <MaxContainer>
        <div className="flex flex-col gap-[35px] w-full pt-[48px]">
          <Banner img1={wolfCross} img2={moneyCash}>
            <p className="flex items-start font-bold max-md:text-[12px] max-md:text-center">
              Withdraw as low as $1 to your Bybit Account (Email Required)
            </p>
          </Banner>
          <div className="w-[500px] h-fit flex justify-between items-center max-md:w-full">
            <div className="flex flex-col gap-[7px]">
              <p className="font-bold text-[22px]">Hi, Samantha</p>
              <span className="text-[#999999] font-normal text-[16px]">
                Your available balance
              </span>
            </div>
            <div className="font-semibold text-[25px]">$500.00</div>
          </div>
          <div className="flex justify-center mt-[30px]">
            <div className="flex flex-col gap-[30px] justify-center items-center w-[25%] max-md:w-[90%]">
              <p className="font-bold text-[22px]">Select Exchange</p>
              <img src={exchangeBy} alt="bybit" />
              <Button text="Proceed" full />
            </div>
          </div>
        </div>
      </MaxContainer>
    </>
  );
}

export default Bybit;
