import React from "react";
import styled from "styled-components";


const TextContainer = styled.div`
  z-index: 1200;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  align-items: center;
  justify-content: center;
`;

const LottieTitle = styled.span`
  color: white;
  font-size: 2rem;
`

const LottieDescription = styled.span`
  color: white;
  font-size: 1.2rem;
`

export default function LottieMessage({ title }) {
  return (
    <TextContainer>
      <LottieTitle>{title}</LottieTitle>
      <LottieDescription>به جهان موازی خوش امدید</LottieDescription>
    </TextContainer>
  );
}
