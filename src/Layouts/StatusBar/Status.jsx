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

  // Function to calculate ping to a website
  const measurePing = async () => {
    const startTime = Date.now();
    try {
      await fetch(
        "https://middle.irpsc.com/app/?url=https://rgb.irpsc.com/metaverse/",
        {
          method: "HEAD",
        }
      ); // Replace with your URL
      const endTime = Date.now();
      const pingTime = endTime - startTime;
      setPing(pingTime);
    } catch (error) {
      console.error("Error fetching site:", error);
      setPing(-1); // Indicating error in fetching
    }
  };

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setClock(new Date().toLocaleTimeString().split(" ")[0]);
    }, 1000);

    const pingInterval = setInterval(() => {
      measurePing();
    }, 5000); // Measure ping every 5 seconds

    return () => {
      clearInterval(clockInterval);
      clearInterval(pingInterval);
    };
  }, []);

  return (
    <>
      <Watch>{clock}</Watch>
      <Ping size={calculateFontSize(ping)}>
        {ping >= 0 ? `${ping} ms` : "Error"}
      </Ping>
    </>
  );
};

export default Status;
