import React, { useState } from "react";
import Button from "../../components/button";
import toast from "react-hot-toast";
import axios from "axios";
import InputField from "../../components/inputField";

const ResendOtp = () => {
  const [email, setEmail] = useState("");

  const url = `${import.meta.env.VITE_DEVE_URL}/auth/request-otp`;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }

    const toastLoadingId = toast.loading("Resending OTP...");

    try {
      await axios.post(url, { email });
      toast.success("OTP sent successfully!", { duration: 3000 });
    } catch (error) {
      const errorMsg = axios.isAxiosError(error)
        ? error.response?.data?.message || "Failed to resend OTP"
        : "An unknown error occurred";
      toast.error(errorMsg);
    } finally {
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex flex-col gap-[20px]">
        <InputField
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
          required
        />
        <Button text="Resend OTP" type="submit" full border />
      </div>
    </form>
  );
};

export default ResendOtp;
