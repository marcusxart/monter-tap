import React from "react";

const MaxContainer = ({ children }) => {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-[32px] 2xl:px-0">
      {children}
    </div>
  );
};

export default MaxContainer;
