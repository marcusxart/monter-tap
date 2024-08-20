import MaxContainer from "../../components/maxContainer";
import { wolfWait } from "../../assets/images/dog";
import Wolf from "../../components/wolf";
import bybitLogo from "../../assets/images/bybitLogo.png";

function Waitlist() {
  return (
    <>
      <MaxContainer>
        <div className="w-[100%] h-[35rem] flex items-center justify-between">
          <Wolf Wolf={wolfWait} />
          <div className="flex flex-col gap-[20px] w-[50%] h-[100%]  items-center justify-start pt-[80px]  max-md:w-full">
            <img src={bybitLogo} alt="bybit logo" />
            <p
              style={{
                background:
                  "linear-gradient(85.98deg, #0B9D9A 21.68%, #CB9C22 58.8%)",
                backgroundClip: "text",
                color: "transparent",
              }}
              className="font-normal text-[40px]"
            >
              {" "}
              Launching Soon
            </p>
          </div>
        </div>
      </MaxContainer>
    </>
  );
}

export default Waitlist;
