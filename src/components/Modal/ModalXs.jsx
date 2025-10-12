import styled from "styled-components";
import Header from "../Header/Header";
const Container = styled.div`
 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.713);
  z-index: 1000000;
   ${(props) =>
    props.isSafari
      ? `
    position: absolute;
    height: 100vh;
     top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  `
      : `
    position: fixed;
    height: 100%;
  `}
`;
const Modal = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  width: 550px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  padding: 15px 20px;
`;


const isSafari = () => {
  const ua = navigator.userAgent;
  return (
    ua.includes("Safari") &&
    !ua.includes("Chrome") &&
    !ua.includes("CriOS") &&
    !ua.includes("FxiOS")
  );
};

const ModalXs = ({ children, title, handleExitClick,onClose  }) => {

    const safari = isSafari();

  return (
    <Container onClick={onClose} isSafari={safari}> {/* اجرای onClose هنگام کلیک روی پس‌زمینه */}
      <Modal>
        <Header title={title} handleExit={handleExitClick} />
        {children}
      </Modal>
    </Container>
  );
};

export default ModalXs;
