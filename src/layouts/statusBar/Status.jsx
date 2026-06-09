import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
`;

const Watch = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-family: DigitalNumber !important;
  font-size: 12px;
  font-style: normal;
  text-transform: capitalize;
  min-width: 65px;
  margin: 0;
  @media (min-width: 1024px) {
    font-size: 15px;
    min-width: 75px;
  }
`;

const Ping = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-family: DigitalNumber !important;
  font-size: ${({ size }) => size || "12px"};
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  text-transform: capitalize;
  border-right: 2px solid #000;
  padding-right: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 70px;
  max-width: 100px;
  margin: 0;
  @media (min-width: 1024px) {
    font-size: ${({ size }) => size || "15px"};
  }
`;

const Status = () => {
  const [ping, setPing] = useState(0);
  const [clock, setClock] = useState("12:00:00");

  const calculateFontSize = useCallback((pingValue) => {
    if (pingValue.toString().length > 5) {
      return "10px";
    }
    return "12px";
  }, []);

  const PING_URLS = ["https://world.metarang.com"];

  const measurePing = useCallback(async () => {
    const startTime = performance.now();

    const tryPing = async (url) => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3000);

      try {
        await fetch(url, {
          method: "HEAD",
          signal: controller.signal,
          cache: "no-cache",
          mode: "no-cors", 
        });

        clearTimeout(timeout);
        const pingTime = Math.round(performance.now() - startTime);

        if (pingTime > 10 && pingTime < 2000) {
          setPing(pingTime);
          return true;
        }
        return false;
      } catch (error) {
        clearTimeout(timeout);
        return false;
      }
    };

    for (const url of PING_URLS) {
      const success = await tryPing(url);
      if (success) return;
    }

    setPing(-1);
  }, []);

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setClock(new Date().toLocaleTimeString().split(" ")[0]);
    }, 1000);

    measurePing();
    const pingInterval = setInterval(measurePing, 5000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(pingInterval);
    };
  }, [measurePing]);

  return (
    <StatusWrapper>
      <Watch>{clock}</Watch>
      <Ping size={calculateFontSize(ping)}>
        {ping >= 0 ? `${ping} ms` : "Error"}
      </Ping>
    </StatusWrapper>
  );
};

export default Status;
