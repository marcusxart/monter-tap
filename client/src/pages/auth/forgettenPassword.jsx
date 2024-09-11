import React, { useState } from "react";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgettenPassword = () => {
  const [isSend, setIsSend] = useState(false);
  const [email, setEmail] = useState("");

  // API URL for the forgotten password
  const url = `${import.meta.env.VITE_DEVE_URL}/auth/forget-password`;

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastLoadingId = toast.loading("Please wait...");

    if (!email) {
      toast.error("Email is required");
      toast.dismiss(toastLoadingId);
      return;
    }

    try {
      await axios.post(url, { email });
      setIsSend(true);
      setEmail("");
      toast.success("Password reset link sent!", { duration: 3000 });
      navigate("/auth/verify-otp");
    } catch (error) {
      const errorMsg = axios.isAxiosError(error)
        ? error.response?.data?.message || "An error occurred"
        : "An unknown error occurred";
      toast.error(errorMsg);
    } finally {
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <>
      {!isSend ? (
        <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
          <InputField
            placeholder="Enter your email address…"
            type="email"
            value={email}
            onChange={setEmail}
            required
          />
          <Button type="submit" text="Send Mail" full border />
        </form>
      ) : (
        <p className="text-center text-[14px] leading-[24px] text-[#969799]">
          Password reset link sent! Please check your inbox.
        </p>
      )}
    </>
  );
};

export default ForgettenPassword;
