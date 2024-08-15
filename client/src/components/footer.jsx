import React from "react";
import MaxContainer from "./maxContainer";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="min-h-[150px] w-full flex items-center py-4">
      <MaxContainer>
        <ul className="flex w-full items-center justify-evenly text-[14px] text-[#FFEFE8A3] max-md:flex-col max-md:gap-4">
          <li className="max-md:order-3">
            © {date.getFullYear()} Monstertap. All rights reserved.
          </li>
          <li className="max-md:order-2">Privacy policy</li>
          <li className="max-md:order-1">Instagram</li>
        </ul>
      </MaxContainer>
    </footer>
  );
};

export default Footer;
