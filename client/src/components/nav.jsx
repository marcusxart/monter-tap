import React from "react";
import { Link } from "react-router-dom";
import MaxContainer from "./maxContainer";
import Button from "./button";
import LKeyIcon from "../assets/svgs/lKey";
import LogoAndText from "../assets/svgs/logoAndText";

const Navbar = ({ isLoggin }) => {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-30 h-[90px] w-full flex items-center bg-[#0A0A0AB2] border-b border-[#FFFFFF14] border-solid nav-shadow">
      <MaxContainer>
        <div className="w-full flex items-center justify-between relative">
          <Link to="/">
            <LogoAndText />
          </Link>

          {isLoggin && (
            <>
              <ul className="flex items-center text-[14px] gap-[40px] font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <li>Mine</li>
                <li>Task</li>
                <li>Referrals</li>
                <li>Wallet</li>
                <li>Listing</li>
              </ul>
              <div className="flex items-center gap-[20px]">
                <p className="text-[18px] font-semibold">samantha@gmail.com</p>
                <span className="grid place-items-center bg-[#E8C726] w-[52px] h-[52px] rounded-full text-[32px] font-bold text-black">
                  S
                </span>
              </div>
            </>
          )}
          {!isLoggin && (
            <div className="hidden items-center gap-[8px] md:flex">
              <Button
                text="Log in"
                sm
                icon={{
                  element: <LKeyIcon />,
                  position: "right",
                }}
              />
              <Button text="Sign up" sm type="secondary" />
            </div>
          )}
        </div>
      </MaxContainer>
    </nav>
  );
};

export default Navbar;
