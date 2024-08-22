import MaxContainer from "../../components/maxContainer";
import Banner from "../../components/banner";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import info from "../../assets/images/info.png";
import { wolfCross } from "../../assets/images/dog";
import moneyCash from "../../assets/images/moneyCash.png";

function Verify() {
  return (
    <>
      <MaxContainer>
        <div className="flex flex-col gap-[35px] w-full pt-[48px]">
          <Banner img1={wolfCross} img2={moneyCash}>
            <p className="flex items-start font-bold max-md:text-[12px] max-md:text-center">
              Withdraw as low as $1 to your OKX or Bybit Account (Email
              Required)
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
          <div className="flex justify-center">
            <div className="flex flex-col gap-[20px]  justify-center items-center w-[30%] max-md:w-full">
              <div className="border-t border-[#23252A] w-full "></div>
              <form className="w-full flex flex-col gap-[20px]">
                <InputField
                  placeholder="Input your bybit email address"
                  type="email"
                />
                <Button full text="Proceed" />
              </form>
            </div>
          </div>
          <div className="font-medium flex justify-center items-center gap-[5px] text-[13px] text-center max-md:gap-[0px]">
            <img src={info} alt="info icon" />
            Verify Email! Incorrect addresses during crypto withdrawals result
            in unrecoverable funds.
          </div>
        </div>
      </MaxContainer>
    </>
  );
}

export default Verify;
