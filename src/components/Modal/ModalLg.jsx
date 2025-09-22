import styled from "styled-components";
import Title from "../Title";
import { getFieldTranslationByNames } from "../../services/Utility";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.713);
`;

const ModalContainer = styled.div`
  padding: 20px;
  width: 90%;
  height: 80%;
  position: relative;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  z-index: 9999;

  @media (min-width: 1366px) {
    width: 70%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 12px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #ff000021;
    color: #ff0000;
  }
`;

const ModalLg = ({ children, titleId, setShowModal }) => {
  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>
          <Title title={getFieldTranslationByNames(titleId)} />
          <div onClick={() => setShowModal(false)}>X</div>
        </ModalHeader>
        {children}
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ModalLg;
