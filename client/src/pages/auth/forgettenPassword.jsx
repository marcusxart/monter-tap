import React, { useState } from "react";
import InputField from "../../components/inputField";
import Button from "../../components/button";

const ForgettenPassword = () => {
  const [isSend, setIsSend] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    setIsSend(true);
  };
  return (
    <>
      {!isSend ? (
        <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
          <InputField
            placeholder="Enter your email address…"
            type="email"
            required
          />
          <Button text="Reset password" full border />
        </form>
      ) : (
        <p className="text-center text-[14px] leading-[24px] text-[#969799]">
          Password resent link sent to <br />
          <span className="text-[16px] font-semibold text-white">
            edubrakata@gmail.com
          </span>
        </p>
      )}
    </>
  );
};

export default ForgettenPassword;
