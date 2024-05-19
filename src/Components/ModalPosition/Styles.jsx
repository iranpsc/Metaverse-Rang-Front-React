// StyledComponents.js

import { animated } from "react-spring";
import styled from "styled-components";

export const Header = styled.p`
  color: ${(props) => props.theme.headerModals};
  text-align: right;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  font-style: normal;
  font-weight: 600;
  line-height: 180%;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(animated.div)`
  height: 100vh;
  position: fixed;
  z-index: 1500;
  padding: 10px;
  background-color: ${(props) => props.theme.bgModal};
  ${(props) => props.position === "right" && "right: 0;"}
  top: 0;
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 1536px) {
    width: 25%;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  padding: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.TextTitle};
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    width: 60%;
  }
  @media (min-width: 1536px) {
    width: 67%;
  }
`;
