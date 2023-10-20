import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Ping = styled.p`
  color: #c1c1c1;
  font-family: DigitalNumber;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 36px */
  text-transform: capitalize;
  @media (min-width: 1024px) {
    font-size: 15px;
  }
  border-right: 2px solid #000;
  padding-right: 5px;
`;
const Watch = styled.p`
  color: #c1c1c1;
  font-family: DigitalNumber;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 36px */
  text-transform: capitalize;
  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;

const Status = () => {
  const [ping, setPing] = useState(0);
  const [clock, setClock] = useState("12:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const xhr = new XMLHttpRequest();

        let startTime, endTime;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            endTime = new Date().getTime();
            const pingTime = endTime - startTime;
            setPing(pingTime);
          }
        };

        xhr.open("GET", `https://rgb.irpsc.com/metaverse`, true);

        startTime = new Date().getTime();

        xhr.send();
      } catch (error) {
        console.error("Error in sending HTTP request:", error);
      }
    }, 7000);

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
      <Ping>{`${ping}ms`}</Ping>
    </>
  );
};

export default Status;
