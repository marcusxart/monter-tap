import React from "react";
import { coin } from "../assets/images";

const CoinButton = () => {
  return (
    <button className="active:scale-90">
      <img src={coin} alt="" />
    </button>
  );
};

export default CoinButton;
