import React, { useState, useRef } from "react";
import Button from "../../components/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField";

const VerifyOtp = () => {
  const [email, setEmail] = useState(""); // State to hold the email
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);

  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_DEVE_URL}/auth/verify-otp`;

  // Handle OTP input change and auto-focus next input
  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input field if available
    if (element.value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace to move to the previous input
  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastLoadingId = toast.loading("Verifying OTP...");

    if (!email) {
      toast.error("Please enter your email");
      toast.dismiss(toastLoadingId);
      return;
    }

    if (otp.includes("")) {
      toast.error("Please enter a complete OTP");
      toast.dismiss(toastLoadingId);
      return;
    }

    try {
      const enteredOtp = otp.join(""); // Combine OTP digits
      await axios.post(url, { email, otp: enteredOtp }); // Send email and OTP
      toast.success("OTP verified successfully!", { duration: 3000 });
      navigate("/auth/reset-password"); // Navigate to reset password page
    } catch (error) {
      const errorMsg = axios.isAxiosError(error)
        ? error.response?.data?.message || "Invalid OTP"
        : "An unknown error occurred";
      toast.error(errorMsg);
    } finally {
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <div className="verify-otp-container flex flex-col items-center justify-center gap-6 p-4">
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
      >
        {/* Email input field */}
        <InputField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
          required
        />

        {/* OTP input fields */}
        <div className="flex gap-2">
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={otp[index]}
              onChange={(e) => handleOtpChange(e.target, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-center border bg-transparent border-gray-300 text-2xl rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <Button text="Verify OTP" type="submit" full border />
      </form>

      <div className="text-gray-600 text-sm">
        <p>
          Did not receive the OTP?{" "}
          <span
            className="text-[#79D4D0] cursor-pointer"
            onClick={() => navigate("/auth/resend-otp")}
          >
            Resend OTP
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
