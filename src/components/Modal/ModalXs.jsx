import styled from "styled-components";
import Header from "../Header/Header";
import { useEffect } from "react";

const Container = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.713);
  z-index: 1000000;

  /* fallback برای مرورگرهایی که dvh رو ندارن */
  @supports not (height: 100dvh) {
    height: 100vh;
  }
`;

const Modal = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  width: 550px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  padding: 15px 20px;
`;

const ModalXs = ({ children, title, handleExitClick, onClose }) => {
  useEffect(() => {
    // جلوگیری از اسکرول و overscroll در Safari
    const preventScroll = (e) => e.preventDefault();
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
      document.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  const handleContainerClick = (e) => {
    // اطمینان از اینکه کلیک واقعی روی پس‌زمینه بوده، نه داخل مدال
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <Container onClick={handleContainerClick}>
      <Modal>
        <Header title={title} handleExit={handleExitClick} />
        {children}
      </Modal>
    </Container>
  );
};

export default ModalXs;
