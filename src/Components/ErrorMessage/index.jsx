import React from "react";
import shortid from "shortid";
import styled from "styled-components";

const ErrorList = styled.ul`
  text-align: right;

  width: 90%;
  color: red;
  & > li {
    margin-top: 16px;
  }
`;

export default function ErrorMessage({ errors, maxList, style = {} }) {
  return (
    errors[0] && (
      <ErrorList>
        {errors.slice(0, maxList).map((error) => (
          <li style={{ ...style }} key={shortid.generate()}>
            {error}
          </li>
        ))}
      </ErrorList>
    )
  );
}
