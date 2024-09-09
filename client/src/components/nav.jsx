import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import MaxContainer from "./maxContainer";
import Button from "./button";
import LKeyIcon from "../assets/svgs/lKey";
import LogoAndText from "../assets/svgs/logoAndText";

const Navbar = ({ isLoggin }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 h-[90px] w-full flex items-center bg-[#0A0A0AB2] border-b border-[#FFFFFF14] border-solid nav-shadow">
      <MaxContainer>
        <div className="w-full flex items-center justify-between relative">
          <Link to="/">
            <LogoAndText />
          </Link>

          {isLoggin ? (
            <>
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white text-2xl">
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              {/* Mobile dropdown menu */}
              <div
                className={`${
                  menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                } transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden md:hidden w-full bg-[#0A0A0AB5] absolute top-full left-0 right-0 z-20`}
              >
                <ul className="flex flex-col items-center text-[14px] gap-[20px] font-semibold py-4">
                  <li>Mine</li>
                  <li>Task</li>
                  <li>Referrals</li>
                  <li>Wallet</li>
                  <li>Listing</li>
                </ul>
              </div>

              {/* Desktop menu */}
              <ul className="hidden md:flex items-center text-[14px] gap-[40px] font-semibold">
                <li>Mine</li>
                <li>Task</li>
                <li>Referrals</li>
                <li>Wallet</li>
                <li>Listing</li>
              </ul>

              {/* User info */}
              <div className="hidden md:flex items-center gap-[20px]">
                <p className="text-[18px] font-semibold">samantha@gmail.com</p>
                <span className="grid place-items-center bg-[#E8C726] w-[52px] h-[52px] rounded-full text-[32px] font-bold text-black">
                  S
                </span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-[8px] md:flex relative">
              <FaBars className="text-2xl text-white" onClick={toggleMenu} />

              {/* Animated dropdown for login/signup */}
              <div
                className={`w-[10rem] h-[9rem] bg-[#0A0A0AB5] flex justify-center gap-4 flex-col items-center absolute top-full right-0 transition-transform duration-500 ease-in-out transform ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0 pointer-events-none"
                }`}
              >
                <Button
                  text="Log in"
                  sm
                  icon={{
                    element: <LKeyIcon />,
                    position: "right",
                  }}
                  link="/auth/sign-in"
                />
                <Button
                  text="Sign up"
                  sm
                  type="secondary"
                  link="/auth/sign-up"
                />
              </div>
            </div>
          )}
        </div>
      </MaxContainer>
    </nav>
  );
};

export default Navbar;
