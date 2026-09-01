import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 1400px) {
    gap: 4px;
  }
`;

const Watch = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-family: DigitalNumber !important;
  font-size: clamp(10px, 1.2vw, 15px);
  text-transform: capitalize;
  min-width: clamp(50px, 7vw, 75px);
  margin: 0;
`;

const Ping = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-family: DigitalNumber !important;
  font-size: ${({ size }) => size || "12px"};
  font-weight: 400;
  line-height: 180%;
  border-inline-start: 2px solid #000;
  padding-inline-start: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: clamp(55px, 8vw, 70px);
  max-width: clamp(55px, 8vw, 70px);
  margin: 0;

  @media (max-width: 1280px) {
    font-size: 11px;
    min-width: 60px;
    max-width: 60px;
  }

  @media (max-width: 1024px) {
    font-size: 10px;
    min-width: 55px;
    max-width: 55px;
  }
`;

const Status = () => {
  const [ping, setPing] = useState(null);
  const [clock, setClock] = useState("12:00:00");

  const PING_URL = "https://world.metarang.com";

  const calculateFontSize = useCallback((pingValue) => {
    if (pingValue === null || pingValue < 0) {
      return "12px";
    }

    return pingValue.toString().length > 5 ? "10px" : "12px";
  }, []);

  const measurePing = useCallback(async () => {
    const controller = new AbortController();

    // حداکثر زمان انتظار
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 3000);

    // زمان شروع همین درخواست
    const startTime = performance.now();

    try {
      await fetch(`${PING_URL}?ping=${Date.now()}`, {
        method: "GET",
        mode: "no-cors",
        cache: "no-store",
        signal: controller.signal,
      });

      const endTime = performance.now();

      const pingTime = Math.round(endTime - startTime);

      if (pingTime > 0 && pingTime < 3000) {
        setPing(pingTime);
      } else {
        setPing(-1);
      }
    } catch (error) {
      // AbortError یعنی timeout شده
      if (error.name !== "AbortError") {
        console.error("Ping error:", error);
      }

      setPing(-1);
    } finally {
      clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    // ساعت
    const clockInterval = setInterval(() => {
      setClock(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
        })
      );
    }, 1000);

    // اولین Ping
    measurePing();

    // هر 5 ثانیه
    const pingInterval = setInterval(() => {
      measurePing();
    }, 5000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(pingInterval);
    };
  }, [measurePing]);

  return (
    <StatusWrapper>
      <Watch>{clock}</Watch>

      <Ping size={calculateFontSize(ping)}>
        {ping !== null && ping >= 0 ? `${ping} ms` : "Error"}
      </Ping>
    </StatusWrapper>
  );
};

export default Status;