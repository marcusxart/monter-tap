import React from "react";
import { coin } from "../assets/images";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { incrementCoin } from "../Global/Slice"; // Import the action

const CoinButton = () => {
  const userinfo = useSelector((state) => state.user);
  // console.log(userinfo.id);

  const usertoken = useSelector((state) => state.Token);
  // console.log(usertoken);

  const dispatch = useDispatch();

  const url = `${import.meta.env.VITE_DEVE_URL}/account/incrementCoin/${
    userinfo.id
  }`;
  const headers = {
    Authorization: `Bearer ${usertoken}`,
  };

  const HandleTap = async () => {
    try {
      const response = await axios.post(url, {}, { headers });
      if (response.status === 200) {
        console.log("Coin incremented successfully:", response.data);
        dispatch(incrementCoin()); // Dispatch Redux action to increment the coin count in account
      }
    } catch (err) {
      console.log("Error incrementing coin:", err);
    }
  };

  return (
    <button className="active:scale-90" onClick={HandleTap}>
      <img src={coin} alt="Coin" />
    </button>
  );
};

export default CoinButton;
