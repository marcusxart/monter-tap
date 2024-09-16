import React, { useState } from "react";
import Button from "../../components/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField";

const ResetPassword = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_DEVE_URL}/auth/reset-password`;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password, confirmPassword };

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const toastLoadingId = toast.loading("Resetting password...");

    try {
      await axios.post(url, data);
      toast.success("Password reset successfully!", { duration: 3000 });
      navigate("/auth/sign-in");
    } catch (error) {
      const errorMsg = axios.isAxiosError(error)
        ? error.response?.data?.message || "Password reset failed"
        : "An unknown error occurred";
      toast.error(errorMsg);
    } finally {
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[20px]">
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={setemail}
          required
        />
        <InputField
          type="password"
          name="password"
          placeholder="New Password"
          value={password}
          onChange={setpassword}
          required
        />
        <InputField
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={setconfirmPassword}
          required
        />
        <Button text="Reset Password" type="submit" full border />
      </div>
    </form>
  );
};

export default ResetPassword;
