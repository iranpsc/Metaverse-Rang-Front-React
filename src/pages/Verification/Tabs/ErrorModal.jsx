import ErrorItem from "./identity-tab/ErrorItem";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../services/Utility";
import { ExitIcon } from "../../../components/Icons/IconsHeader";
const Div = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding-right: 15px;
  height: 197px;
  overflow-y: auto;
`;
const BackGround = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.713);
`;
const Modal = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  padding: 20px;
  width: 100%;
  max-width: 475px;
  position: relative;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  @media (max-width: 1023px) {
    font-size: 18px;
  }
`;
const Info = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-weight: 400;
  text-align: justify;
  margin: 20px 0;
  font-size: 16px;
  @media (max-width: 1023px) {
    font-size: 14px;
  }
`;

const ErrorModal = ({ setOpenErrorModal, errors }) => {
  return (
    <BackGround>
      <Modal>
        <Header>
          <Title>{getFieldTranslationByNames("883")}</Title>
          <ExitIcon onClick={() => setOpenErrorModal(false)} />
        </Header>

        <Info>{getFieldTranslationByNames("881")}</Info>

        <Div>
          {errors &&
            errors.length &&
            errors.map((errorItem, index) => (
              <ErrorItem key={`error-${index}`} item={errorItem} />
            ))}
        </Div>
      </Modal>
    </BackGround>
  );
};

export default ErrorModal;
