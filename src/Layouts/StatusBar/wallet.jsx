import React from "react";
import { WalletContext } from "../../Services/Reducers/WalletContext";
import { useContext } from "react";

const wallet = () => {
  const [wallet] = useContext(WalletContext);
  return <div></div>;
};

export default wallet;
