import styled from "styled-components";
import Header from "../Header/Header";

const Container = styled.div`
 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.713);
  z-index: 1000;
   position: fixed;
    height: 100%;
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
    <Container onClick={onClose} > 
      <Modal>
        <Header title={title} handleExit={handleExitClick} />
        {children}
      </Modal>
    </Container>
  );
};

export default ModalXs;
