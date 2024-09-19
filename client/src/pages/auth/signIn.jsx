import React, { useState } from "react";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { setToken, setUser } from "../../Global/Slice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url = `${import.meta.env.VITE_DEVE_URL}/auth/sign-in`;

  const handleSignIn = async (e) => {
    e.preventDefault();
    const toastLoadingId = toast.loading("Please wait...");

    // Validate input fields
    if (!email || !password) {
      toast.error("All fields are required");
      toast.dismiss(toastLoadingId);
      return;
    }

    const data = { email, password };

    try {
      setLoading(true);
      const response = await axios.post(url, data);
      const accessToken = response?.data?.access;
      // console.log(accessToken);

      toast.success("Login successful!", { duration: 3000 });
      setEmail("");
      setPassword("");
      dispatch(setUser(response.data.user));
      dispatch(setToken(accessToken));
      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response?.data?.message || "An error occurred";
        toast.error(errorMsg);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="flex flex-col gap-[20px]">
        <InputField
          placeholder="Enter your email address…"
          type="email"
          value={email}
          onChange={setEmail}
          required
        />
        <InputField
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={setPassword}
          required
        />
        <Button
          type="submit"
          text={loading ? "Logging in..." : "Login to your account"}
          full
          border
          disabled={loading} // Disable button while loading
        />
      </div>
      <div className="mt-[40px] text-center text-[14px] text-[#969799] leading-[24px] [&_a]:text-[#FFFFFF]">
        <p>
          By signing up, you agree to our <a href="#">Terms of Service</a> and{" "}
          <a href="#">Data Processing Agreement</a>
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
