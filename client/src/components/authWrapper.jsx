import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./nav";
import Footer from "./footer";
import MaxContainer from "./maxContainer";
import BlueLogo from "../assets/svgs/blueLogo";

const AuthWrapper = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full justify-between gap-[56px]">
      <Navbar />
      <div className="flex-1 pt-[90px]">
        <MaxContainer>
          <div className="max-w-[380px] w-full mx-auto pt-[48px] pb-[24px] flex flex-col gap-[32px] items-center">
            <BlueLogo />
            <div className="border-t border-[#23252A] w-full "></div>
            <div className="flex-1 w-full">
              <Outlet />
            </div>
          </div>
        </MaxContainer>
      </div>
      <Footer />
    </div>
  );
};

export default AuthWrapper;
