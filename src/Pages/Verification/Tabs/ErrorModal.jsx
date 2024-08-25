import ErrorItem from "./identity-tab/ErrorItem";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  direction: ltr;
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
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.713);
`;
const Modal = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  padding: 20px;
  width: 100%;
  max-width: 475px;
  direction: rtl;
  position: relative;
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
const Close = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  svg {
    color: red;
    font-size: 24px;
  }
`;

const ErrorModal = ({ setOpenErrorModal, errors }) => {
  return (
    <BackGround>
      <Modal>
        <Close>
          <IoCloseSharp onClick={() => setOpenErrorModal(false)} />
        </Close>
        <div>
          <Title>خطا های احراز هویت</Title>
          <Info>
            احراز هویت شما تایید نشده است، لطفا برسی و موارد ناقص را با دقت
            وارید کنید
          </Info>
        </div>
        <Div>
          {errors.map((errorItem) => (
            <ErrorItem key={errorItem} item={errorItem} />
          ))}
        </Div>
      </Modal>
    </BackGround>
  );
};

export default ErrorModal;
