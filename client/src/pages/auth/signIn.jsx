import React from "react";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <form>
      <div className="flex flex-col gap-[20px]">
        <InputField placeholder="Enter your email address…" type="email" />
        <InputField placeholder="Enter your password" type="password" />
        <Button text="Login your account" full border />
      </div>
      <div className="mt-[40px] text-center  text-[14px] text-[#969799] leading-[24px] [&_a]:text-[#FFFFFF]">
        <p>
          By signing up, you agree to our <a href="#">Terms of Service</a>
          <br /> and <a href="#">Data Processing Agreement</a>
        </p>
        <p className="mt-[40px] mb-[32px]">
          Don’t have an account? <Link to="/auth/sign-up"> Sign up -{">"}</Link>
        </p>
        <Link to="/auth/forgetten-password">Forgot password?</Link>
      </div>
    </form>
  );
};

export default SignIn;
