import React, { useState } from "react";
import Button from "../../components/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_DEVE_URL}/auth/reset-password`;

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const toastLoadingId = toast.loading("Resetting password...");

    try {
      await axios.post(url, { email, password });
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
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          type="password"
          name="password"
          placeholder="New Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <InputField
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button text="Reset Password" type="submit" full border />
      </div>
    </form>
  );
};

export default ResetPassword;
