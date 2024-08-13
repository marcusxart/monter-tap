import React from "react";

const Range = ({ percentage }) => {
  return (
    <div className="w-full  h-[56px] relative  inner grid place-items-center">
      <div className="w-full bg-[#292929] h-[24px] rounded-[48px]"></div>
      <div
        style={{
          width: `${percentage || 0}%`,
        }}
        className="absolute top-1/2 h-[24px] -translate-y-1/2 left-0  rounded-r-[48px] rounded-[48px] "
      >
        <div className="glow w-full h-full bg-base-gradient rounded-[48px]"></div>
      </div>
    </div>
  );
};

export default Range;
