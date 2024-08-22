import MaxContainer from "../../components/maxContainer";
import Wolf from "../../components/wolf";
import { wolfOne } from "../../assets/images/dog";
import BlueLogo from "../../assets/svgs/blueLogo";
import ads from "../../assets/images/ads.png";
import stocks from "../../assets/images/stocks.png";

function Task() {
  return (
    <>
      <MaxContainer>
        <div className="w-[100%] h-[35rem] flex items-center justify-between">
          <Wolf Wolf={wolfOne} />
          <div className="flex flex-col gap-[20px] w-[50%] h-[100%]  items-center justify-start pt-[80px]  max-md:w-full">
            <BlueLogo />
            <p className="font-bold text-[25px]"> Task (1)</p>
            <img src={ads} alt="ads" className="cursor-pointer" />
            <img src={stocks} alt="stocks" className="mt-[20px]" />
            <p className="font-normal text-center text-[16px]">
              To claim reward click an ad and provide proof on telegram{" "}
            </p>
            <a className="font-medium text-[13px] text-[#E3E4E6] text-center cursor-pointer">
              Upload video proof{" "}
            </a>
          </div>
        </div>
      </MaxContainer>
    </>
  );
}

export default Task;
