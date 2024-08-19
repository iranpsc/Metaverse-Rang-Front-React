import Button from "../../../Button";
import styled from "styled-components";

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
const ModalBody = styled.div`
  border-radius: 10px;
  background-color: #1a1a18;
  direction: rtl;
  overflow-y: auto;
  padding: 20px;
  width: 700px;
  max-height: 577px;
  p {
    color: #dedee9;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
  }
`;
const Close = styled.h4`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(59, 8, 8);
  color: #c30000;
  font-size: 20px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin-bottom: 20px;
  span {
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
`;

const Modal = ({ setModal }) => {
  return (
    <BackGround>
      <ModalBody>
        <Header>
          <span>شهروند گرامی</span>
          <Close onClick={() => setModal(false)}>X</Close>
        </Header>
        <p>
          جا به جایی ملک سلسله با ملک جدید پس از گذشت ۲۲ روز و ۱۲ ساعت و ۳۴
          دقیقه امکان پذیر است.
        </p>
        <p>
          در صورت تمایل به جابجایی سریعتر از زمان مقرر مبلغ ۱٪ سود ملک قبلی شما
          مسدود و به مدت یکماه قابلیت فروش ملک قبلی سلسله امکان پذیر نمیباشد.
        </p>
        <Buttons>
          <Button
            label="بله, قبول میکنم"
            color="#18C08F"
            onclick={() => setModal(false)}
            fit
            textColor="#D7FBF0"
          />
          <Button
            label="خیر, نمی پذیرم"
            color="#C30000"
            onclick={() => setModal(false)}
            fit
            textColor="#FFFFFF"
          />
        </Buttons>
      </ModalBody>
    </BackGround>
  );
};

export default Modal;
