import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Ping = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-family: DigitalNumber !important;
  font-size: ${({ size }) => size || "12px"};
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 36px */
  text-transform: capitalize;
  @media (min-width: 1024px) {
    font-size: ${({ size }) => size || "15px"};
  }
  border-right: 2px solid #000;
  padding-right: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px; /* Adjust the max-width as per your design */
`;

const Watch = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-family: DigitalNumber !important;
  font-size: 12px;
  font-style: normal;
  text-transform: capitalize;
  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;

const Status = () => {
  const [ping, setPing] = useState(0);
  const [clock, setClock] = useState("12:00:00");

  const calculateFontSize = (ping) => {
    if (ping.toString().length > 5) {
      return "10px"; // Smaller font for larger numbers
    }
    return "12px";
  };

  useEffect(() => {
    const getPing = async () => {
      try {
        const startTime = new Date().getTime();
        const response = await fetch("https://rgb.irpsc.com/metaverse");
        const endTime = new Date().getTime();
        const pingTime = endTime - startTime;

        if (response.ok) {
          setPing(pingTime);
        } else {
          console.error("Error in fetching the data:", response.status);
        }
      } catch (error) {
        console.error("Error in fetching the data:", error);
      }
    };

    const interval = setInterval(getPing, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date().toLocaleTimeString().split(" ")[0]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Watch>{clock}</Watch>
      <Ping size={calculateFontSize(ping)}>{`${ping}ms`}</Ping>
    </>
  );
};

export default Status;
