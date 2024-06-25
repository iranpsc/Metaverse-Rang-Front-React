import { animated } from "react-spring";
import styled from "styled-components";

export const Header = styled.div`
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.p`
  padding: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.TextTitle};
`;