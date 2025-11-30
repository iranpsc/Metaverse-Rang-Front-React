import styled from "styled-components";
import Header from "../Header/Header";
import { useLanguage } from "../../services/reducers/LanguageContext";

const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  height: 100%;
  padding: 15px 14px;
  max-width: 800px;
  width: 81%;
  z-index: 12;
  position: absolute;
  ${(props) => (props.isPersian ? "right: 0;" : "left: 0;")}
  @media (min-width: 1023px) {
    height: 94%;
    max-width: 1330px;
    max-height: 782px;
    position: static;
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
`;const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.713);

 position: fixed;
    height: 100%;
 
`;

const Modal = ({ children, title }) => {
const isPersian=useLanguage();
 
  return (
    <Container  >
      <ModalContainer isPersian={isPersian}>
        <Header title={title} />
        {children}
      </ModalContainer>
    </Container>
  );
};

export default Modal;
