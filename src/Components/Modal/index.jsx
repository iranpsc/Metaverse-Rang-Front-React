import styled from "styled-components";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";

const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  height: 100%;
  padding: 15px 14px;
  max-width: 800px;
  width: 80%;
  z-index: 2000;
  position: absolute;
  right: 0;
  @media (min-width: 1023px) {
    height: 94%;
    max-width: 1330px;
    max-height: 782px;
    position: static; /* برای غیر فعال کردن position */
    right: auto;
    border-radius: 10px;
  }

  @media (min-width: 1024px) and (max-width: 1180px) {
    width: 85%;
  }

  @media (min-width: 1400px) {
    overflow: hidden;
  }

  @media (min-width: 1920px) {
    max-width: 70%;
    max-height: 820px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.713);
  z-index: 10;
`;
const Modal = ({ children, title }) => {
  console.log(useTranslation());
  return (
    <Container>
      <ModalContainer>
        <Header title={title} />
        {children}
      </ModalContainer>
    </Container>
  );
};

export default Modal;
