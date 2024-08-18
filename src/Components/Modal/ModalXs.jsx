import styled from "styled-components";
import Header from "../Header/Header";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
`;
const Modal = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  width: 550px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  padding: 15px 20px;
`;
const ModalXs = ({ children, title }) => {
  return (
    <Container>
      <Modal>
        <Header title={title} />
        {children}
      </Modal>
    </Container>
  );
};

export default ModalXs;
