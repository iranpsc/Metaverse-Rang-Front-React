import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../services/Utility";

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
const ConfirmCardDelete = ({ setOpenDeleteModal, setCards, deleteIndex }) => {
  const handleDelete = () => {
    setCards((prevCards) => {

      const updatedCards = [...prevCards];
      updatedCards.splice(deleteIndex, 1);
      return updatedCards;
    });
    setOpenDeleteModal(false);
  };
  return (
    <BackGround>
      <Modal>
        <div>
          <Title>
            {" "}
            {getFieldTranslationByNames("896")}
          </Title>
          <Info>
            {" "}
            {getFieldTranslationByNames("897")}{" "}
            {getFieldTranslationByNames("898")}
          </Info>
        </div>
        <Buttons>
          <Button red onClick={handleDelete}>
            {getFieldTranslationByNames("899")}
          </Button>
          <Button onClick={() => setOpenDeleteModal(false)}>
            {getFieldTranslationByNames("900")}
          </Button>
        </Buttons>
      </Modal>
    </BackGround>
  );
};

export default ConfirmCardDelete;
