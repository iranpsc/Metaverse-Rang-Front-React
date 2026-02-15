import styled from "styled-components";
import { getFieldTranslationByNames } from "../services/Utility";
const RotateContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  z-index: 999999;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) and (orientation: portrait) {
    display: flex;
  }
`;

const RotateIcon = styled.div`
  width: 64px;
  height: 64px;
  animation: rotate 1.5s ease infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-90deg);
    }
  }

  &:before {
    content: "📱";
    font-size: 64px;
  }
`;

const RotateText = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  text-align: center;
`;

const RotateDevice = () => {
  return (
    <RotateContainer>
      <RotateIcon />
      <RotateText>لطفاً گوشی خود را به حالت افقی بچرخانید</RotateText>
    </RotateContainer>
  );
};

export default RotateDevice;
