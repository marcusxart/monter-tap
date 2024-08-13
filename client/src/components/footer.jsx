import React from "react";
import MaxContainer from "./maxContainer";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="h-[150px] w-full flex items-center">
      <MaxContainer>
        <ul className="flex w-full items-center justify-evenly text-[14px] text-[#FFEFE8A3]">
          <li>© {date.getFullYear()} Monstertap. All rights reserved.</li>
          <li>Privacy policy</li>
          <ul>
            <li>Instagram</li>
          </ul>
        </ul>
      </MaxContainer>
    </footer>
  );
};

export default Footer;
