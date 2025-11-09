import styled from "styled-components";
import Title from "../Title";
import { getFieldTranslationByNames } from "../../services/Utility";
import { ExitIcon } from "../Icons/IconsHeader";
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.315);
  z-index: 999;
`;

const ModalContainer = styled.div`
  padding: 20px 0;
  width: 81%;
  overflow: hidden;
  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  padding: 20px;
  z-index: 9999;
  right: 0;

  @media (max-width: 685px) {
    width: 100%;
  }
  @media (min-width: 1023px) {
    height: 95%;
    max-width: 1335px;
    max-height: 790px;
    position: static;
    right: auto;
    border-radius: 10px;
  }

  @media (min-width: 1024px) and (max-width: 1180px) {
    width: 86%;
  }

  @media (min-width: 1400px) {
    overflow: hidden;
  }

  @media (min-width: 1920px) {
    max-width: 71%;
    max-height: 821px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalLg = ({ children, titleId, setShowModal }) => {
  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>
          <Title title={getFieldTranslationByNames(titleId)} />
          <ExitIcon onClick={() => setShowModal(false)}>X</ExitIcon>
        </ModalHeader>
        {children}
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ModalLg;
