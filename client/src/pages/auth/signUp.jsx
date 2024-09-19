import React, { useState } from "react";
import InputField from "../../components/inputField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [referral_code, setreferral_code] = useState(""); // Handle referral code input
  const [loading, setloading] = useState(false);

  const url = `${import.meta.env.VITE_DEVE_URL}/auth/sign-up`;

  // Create the request payload based on whether referral_code is provided
  const data = {
    email,
    password,
    confirmPassword,
    ...(referral_code && { referral_code }), // Conditionally add referral_code if it's present
  };

  const passwordRegex =
    /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
  const isValidPassword = passwordRegex.test(password);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const toastLoadingId = toast.loading("Please wait...");

    // Validation checks
    if (!email || !password || !confirmPassword) {
      toast.error("All fields are required");
      toast.dismiss(toastLoadingId);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      toast.dismiss(toastLoadingId);
      return;
    }

    if (!isValidPassword) {
      toast.error("Password must contain at least one special character");
      toast.dismiss(toastLoadingId);
      return;
    }

    try {
      setloading(true); // Set loading state before the API call

      const response = await axios.post(url, data);

      // Show success message
      toast.success("Account created successfully!", { duration: 3000 });

      // Clear form fields after successful signup
      setemail("");
      setpassword("");
      setconfirmPassword("");
      setreferral_code("");

      // Navigate to sign-in page
      navigate("/auth/sign-in");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response?.data?.message || "An error occurred";
        toast.error(errorMsg);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setloading(false); // Stop loading state
      toast.dismiss(toastLoadingId); // Dismiss loading toast
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="flex flex-col gap-[20px]">
        <InputField
          placeholder="Enter your email address…"
          type="email"
          value={email}
          onChange={setemail}
        />
        <InputField
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={setpassword}
        />
        <InputField
          placeholder="Retype your password"
          type="password"
          value={confirmPassword}
          onChange={setconfirmPassword}
        />
        <InputField
          placeholder="Referral Code (Optional)"
          type="text"
          value={referral_code} // Update the referral code input field
          onChange={setreferral_code}
        />
        <Button
          text="Create your account"
          full
          border
          type="submit"
          disabled={loading}
        />
      </div>
      <div className="mt-[40px] text-center  text-[14px] text-[#969799] leading-[24px] [&_a]:text-[#FFFFFF]">
        <p>
          By signing up, you agree to our <a href="#">Terms of Service</a>
          <br /> and <a href="#">Data Processing Agreement</a>
        </p>
        <p className="mt-[40px] ">
          Already have an account?{" "}
          <Link to="/auth/sign-in"> Sign in -{">"}</Link>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
