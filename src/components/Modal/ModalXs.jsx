import styled from "styled-components";
import Header from "../Header/Header";
import { useEffect } from "react";
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.713);
  z-index: 1000000;
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
  useEffect(() => {
  document.body.style.overflow = "hidden";
  return () => (document.body.style.overflow = "auto");
}, []);

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
