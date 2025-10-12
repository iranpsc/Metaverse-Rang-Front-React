import styled from "styled-components";
import Header from "../Header/Header";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000000;
  background-color: rgba(0, 0, 0, 0.713);
  top: 0;
`;
const Modal = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  width: 550px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  padding: 15px 20px;
`;
const ModalXs = ({ children, title, handleExitClick,onClose  }) => {
  return (
    <Container onClick={onClose}> {/* اجرای onClose هنگام کلیک روی پس‌زمینه */}
      <Modal>
        <Header title={title} handleExit={handleExitClick} />
        {children}
      </Modal>
    </Container>
  );
};

export default ModalXs;
