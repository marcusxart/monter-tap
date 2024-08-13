import React from "react";
import { pointingLeft } from "../assets/images/dog";
import { manyCoin } from "../assets/images";

const Banner = ({ img1, img2, children }) => {
  return (
    <div className="h-[154px] bg-base-gradient w-full rounded-[10px] overflow-hidden relative grid place-items-center">
      <img
        src={img1 ?? pointingLeft}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 left-0"
      />
      <img
        src={img2 ?? manyCoin}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 right-0"
      />
      {children}
    </div>
  );
};

export default Banner;
