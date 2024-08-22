import MaxContainer from "../../components/maxContainer";
import { wolfBlue } from "../../assets/images/dog";
import Button from "../../components/button";
import tokenBranded from "../../assets/images/tokenBranded.png";
import Wolf from "../../components/wolf";

function Withdraw() {
  return (
    <>
      <MaxContainer>
        <div className="w-[100%] h-[35rem] flex items-center justify-between">
          <Wolf Wolf={wolfBlue} />
          <div className="flex flex-col gap-[20px] w-[50%] h-[100%]  items-center justify-center  max-md:w-full">
            <p className="font-bold text-[25px]">Withdraw successful</p>
            <span className="text-[14px] font-normal max-w-[300px] text-center">
              Your USDT is on its way and should arrive within 24 hours.
            </span>
            <img src={tokenBranded} alt="token branded" />
            <div className="w-[50%]">
              <Button text="Back to wallet" full border />
            </div>
          </div>
        </div>
      </MaxContainer>
    </>
  );
}

export default Withdraw;
