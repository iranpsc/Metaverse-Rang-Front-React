import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { memo } from "react";

const PrimaryButton = styled.button`
  --bs-bg-opacity: 1;
  background-color: var(--bs-orange) !important;
  border: none;
  border-radius: 8px;
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
  padding: 8px 24px 8px 24px;
`;

const SecondaryButton = styled.button`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 12px 12px 8px 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid rgba(24, 192, 143, 0.5);
  background: #d7fbf0;

  color: ${(props) => props.theme.text};
  text-align: center;
  font-family: AzarMehr-DS2;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

function Submit({ text, type, options }) {
  const [button, setButton] = useState();

  useLayoutEffect(() => {
    switch (type) {
      case "secondary":
        setButton(
          <SecondaryButton type="submit" {...options}>
            {text}
          </SecondaryButton>
        );
        break;

      case "primary":
        setButton(
          <PrimaryButton type="submit" {...options}>
            {text}
          </PrimaryButton>
        );
        break;

      default:
        return;
    }
  }, []);

  return button;
}

Submit.propTypes = {
  text: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  options: propTypes.object,
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.text === nextProps.text;
};

export default memo(Submit, areEqual);
