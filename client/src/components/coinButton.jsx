import React from "react";
import { coin } from "../assets/images";

const CoinButton = () => {
  const url = `${import.meta.env.VITE_DEVE_URL}/increment/${id}`;

  const HandleTap = async () => {};

  return (
    <button className="active:scale-90">
      <img src={coin} alt="" />
    </button>
  );
};

export default CoinButton;
