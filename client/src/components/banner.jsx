import React from "react";
import { pointingLeft } from "../assets/images/dog";
import { manyCoin } from "../assets/images";

const Banner = ({ img1, img2, children }) => {
  return (
    <div className="h-[154px] bg-base-gradient w-full rounded-[10px] overflow-hidden relative grid place-items-center max-md:h-[120px] max-md:rounded-[8px]">
      <img
        src={img1 ?? pointingLeft}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 left-0 max-md:w-[7rem] max-md:-left-2"
      />
      <img
        src={img2 ?? manyCoin}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 right-0 max-md:w-[6rem] max-md:-right-2"
      />
      <div className="max-md:text-sm">{children}</div>
    </div>
  );
};

export default Banner;
