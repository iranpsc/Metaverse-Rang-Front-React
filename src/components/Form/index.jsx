import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const HtmlForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  @media (min-width: 1024px) {
    gap: 10px;
  }
`;

export default function Form({ children, onSubmit, options = {} }) {
  return (
    <HtmlForm
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      {...options}
    >
      {children}
    </HtmlForm>
  );
}

Form.propTypes = {
  children: propTypes.node.isRequired,
  onSubmit: propTypes.func.isRequired,
};
