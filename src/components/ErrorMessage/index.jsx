import React, { useEffect, useRef } from "react";
import shortid from "shortid";
import styled from "styled-components";

const ErrorList = styled.ul`
  width: 90%;
  color: red;
  padding: 5px 0;
`;

export default function ErrorMessage({
  errors = [],
  maxList,
  style = {},
  onClear,
  containerRef,
}) {
  const errorRef = useRef(null);

  // بررسی دقیق
  const hasRealError =
    Array.isArray(errors) &&
    errors.length > 0 &&
    errors.some((e) => e && e.trim() !== "");

  useEffect(() => {
    if (hasRealError && errorRef.current && containerRef?.current) {
      const container = containerRef.current;
      const errorElement = errorRef.current;

      const offset = errorElement.offsetTop - container.offsetTop;

      container.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      if (onClear) {
        const timer = setTimeout(() => {
          onClear();
        }, 5000);

        return () => clearTimeout(timer);
      }
    }
  }, [hasRealError]);

  // اگر ارور واقعی نبود، هیچ‌چی رندر نکن
  if (!hasRealError) return null;

  return (
    <ErrorList ref={errorRef}>
      {errors.slice(0, maxList).map((error) => (
        <span style={{ ...style }} key={shortid.generate()}>
          {error}
        </span>
      ))}
    </ErrorList>
  );
}
