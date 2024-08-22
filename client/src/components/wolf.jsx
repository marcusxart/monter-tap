import React from "react";

function Wolf({ Wolf }) {
  return (
    <>
      <div className="w-[50%] h-[100%]  pt-[40px] max-md:hidden">
        <img
          src={Wolf}
          alt="wolf blue"
          className="w-full object-contain h-[100%]"
        />
      </div>
    </>
  );
}

export default Wolf;
