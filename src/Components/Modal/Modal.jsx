import styled from "styled-components";
import Header from "../Header/Header";

const ModalContainer = styled.div`
  background-color: #000000;
  width: 80%;

  padding: 15px 20px;
  max-width: 800px;
  z-index: 2000;
  @media (min-width: 1023px) {
    border-radius: 10px;
    height: 94%;
    max-width: 1330px;
    max-height: 782px;
  }

  @media (min-width: 1024px) and (max-width: 1180px) {
    width: 85%;
  }

  @media (min-width: 1400px) {
    overflow: hidden;
  }

  @media (min-width: 1920px) {
    max-width: 70%;
    max-height: 782px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Modal = ({ children, title }) => {
  return (
    <Container>
      <ModalContainer>
        <Header />
        {children}
      </ModalContainer>
    </Container>
  );
};

export default Modal;
