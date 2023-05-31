import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 33%;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.color || "black"};
  filter: drop-shadow(0 2px 2px ${(props) => props.color || "black"});
  background-color: white;
  color: ${(props) => props.color || "black"};
`;

const BtnHourProfitAll = ({ value, color }) => {
  return <Btn color={color}>{value}</Btn>;
};

export default BtnHourProfitAll;
