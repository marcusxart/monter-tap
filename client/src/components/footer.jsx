import React from "react";
import MaxContainer from "./maxContainer";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const date = new Date();

  const navigate = useNavigate();

  return (
    <footer className="min-h-[150px] w-full flex items-center py-4">
      <MaxContainer>
        <ul className="flex w-full items-center justify-evenly text-[14px] text-[#FFEFE8A3] max-md:flex-col max-md:gap-4">
          <li className="max-md:order-3 cursor-pointer">
            © {date.getFullYear()} Monstertap. All rights reserved.
          </li>
          <li
            className="max-md:order-2 cursor-pointer"
            onClick={() => navigate("/privacy")}
          >
            Privacy policy
          </li>
          <li className="max-md:order-1 cursor-pointer">Instagram</li>
        </ul>
      </MaxContainer>
    </footer>
  );
};

export default Footer;
