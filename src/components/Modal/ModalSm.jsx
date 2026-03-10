import styled from "styled-components";
import Header from "../Header/Header";
import { useLanguage } from "../../services/reducers/LanguageContext";

const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};

  padding: 15px 20px;
  overflow: hidden;
  margin: 0 auto;
  width: 500px;
  border-radius: 10px;
  height: ${(props) => (props.isNotif ? "340px" : "260px")};

  @media (min-width: 1000px) {
    height: 550px;
    ${(props) =>
      props.isPersian ? "margin-right: 100px;" : "margin-left: 100px;"}
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.713);
  z-index: 9999;
`;
const ModalSm = ({ children, title }) => {
  const isPersian = useLanguage();
  return (
    <Container>
      <ModalContainer isPersian={isPersian}>
        <Header title={title} />
        {children}
      </ModalContainer>
    </Container>
  );
};

export default ModalSm;
