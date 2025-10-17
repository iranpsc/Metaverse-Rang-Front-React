import { animated } from "react-spring";
import styled from "styled-components";

export const Header = styled.div`
  color: ${(props) => props.theme.colors.primary};

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
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  width: 490px;
  top: 0;
  bottom: 0;
  padding: 15px 20px;
  z-index: 10;

  /* موقعیت سمت چپ یا راست */
  left: ${(props) => (props.position === "left" ? "0" : "auto")};
  right: ${(props) => (props.position === "right" ? "0" : "auto")};

  /* تفکیک مرورگر Safari و Chrome */
  position: fixed;
    height: 100%;
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.p`
  padding: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;
