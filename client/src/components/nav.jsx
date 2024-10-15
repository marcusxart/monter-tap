import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import MaxContainer from "./maxContainer";
import Button from "./button";
import LKeyIcon from "../assets/svgs/lKey";
import LogoAndText from "../assets/svgs/logoAndText";
import { useSelector } from "react-redux";

const Navbar = ({ isLoggin }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after navigation
  };

  // Reusable menu items
  const menuItems = (
    <>
      <li onClick={() => handleNavigate("/dashboard")}>Mine</li>
      <li onClick={() => handleNavigate("/task")}>Task</li>
      <li onClick={() => handleNavigate("/referals")}>Referrals</li>
      <li onClick={() => handleNavigate("/aboutus")}>About us</li>
      <li onClick={() => handleNavigate("/faq")}>FAQ</li>
      <li>Timer</li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 h-[90px] w-full flex items-center bg-[#0A0A0AB2] border-b border-[#FFFFFF14] border-solid nav-shadow">
      <MaxContainer>
        <div className="w-full flex items-center justify-between">
          <Link to="/">
            <LogoAndText />
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile dropdown menu */}
          <div
            className={`${
              menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            } transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden md:hidden w-full bg-[#0A0A0AB5] absolute top-full left-0 right-0 z-20`}
          >
            <ul className="flex flex-col items-center text-[14px] gap-[20px] font-semibold py-4">
              {menuItems}
            </ul>
            {!isLoggin && (
              <div className="flex flex-col items-center gap-[16px]">
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
            )}
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center text-[14px] gap-[40px] font-semibold cursor-pointer">
            {menuItems}
          </ul>

          {/* User info */}
          {isLoggin ? (
            <div className="hidden md:flex items-center gap-[20px]">
              <p className="text-[18px] font-semibold">
                {user.email || "User"}
              </p>
              <span className="grid place-items-center bg-[#E8C726] w-[52px] h-[52px] rounded-full text-[32px] font-bold text-black">
                {user.email ? user.email.slice(0, 1).toUpperCase() : "U"}
              </span>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-[16px]">
              <Button
                text="Log in"
                sm
                icon={{
                  element: <LKeyIcon />,
                  position: "right",
                }}
                link="/auth/sign-in"
              />
              <Button text="Sign up" sm type="secondary" link="/auth/sign-up" />
            </div>
          )}
        </div>
      </MaxContainer>
    </nav>
  );
};

export default Navbar;
