import { ParticipantsContext } from "./ParticipationTab";
import styled from "styled-components";
import { useContext } from "react";

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
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  padding: 20px;
  width: 100%;
  max-width: 515px;
  max-height: 363px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
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
    font-size: 12px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  direction: rtl;
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: ${(props) => (props.red ? "#FF0000" : "#E9E9E9")};
  color: ${(props) => (props.red ? "#FFFFFF" : "#949494")} !important;
  border: none;
  padding: 0 14px;
  width: fit-content;
  height: 45px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: #191b21;
  font-family: inherit;
`;
const DeleteConfirmModal = ({ id, setDeleteParticipant }) => {
  const { setParticipantsList } = useContext(ParticipantsContext);
  const deleteHandler = () => {
    setParticipantsList((prev) => [...prev.filter((item) => item.id !== id)]);
    setDeleteParticipant(false);
  };
  return (
    <BackGround>
      <Modal>
        <div>
          <Title>حذف رضایت ثبت شده</Title>
          <Info>آیا می خواهید مقدار رضایت خود را از این ملک حذف کنید</Info>
        </div>
        <Buttons>
          <Button red onClick={deleteHandler}>
            بله، حذف رضایت{" "}
          </Button>
          <Button onClick={() => setDeleteParticipant(false)}>
            خیر، منصرف شدم
          </Button>
        </Buttons>
      </Modal>
    </BackGround>
  );
};

export default DeleteConfirmModal;
