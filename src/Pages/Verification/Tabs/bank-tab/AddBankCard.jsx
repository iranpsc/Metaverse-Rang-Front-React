import styled from "styled-components";
import { useEffect, useState } from "react";
import EditInput from "../../../Feature/Tabs/enter-tab/EditInput";
import useRequest from "../../../../Services/Hooks/useRequest";

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
  background-color: #000000;
  padding: 20px;
  width: 100%;
  max-width: 515px;
  max-height: 363px;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  text-align: right;
  color: #ffffff;
  @media (max-width: 1023px) {
    font-size: 18px;
  }
`;

const Inputs = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
`;
const Button = styled.button`
  border-radius: 10px;
  background-color: #ffc700;
  color: black;
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
const AddBankCard = ({ setOpenAddModal, setCards }) => {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    shabaNumber: "",
  });
  const [cards, setCard] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();
  useEffect(() => {
    Request("bank-accounts").then((response) => {
      setCard(response.data.data);
    });
  }, []);

  const addCard = () => {
    if (cardInfo.cardNumber !== "" && cardInfo.shabaNumber !== "") {
      setCards((prevCards) => [...prevCards, cardInfo]);
      setOpenAddModal(false);
    }
  };

  return (
    <BackGround>
      <Modal>
        <Title>افزودن کارت</Title>
        <Inputs>
          <EditInput
            title="شماره کارت"
            type="number"
            value={cardInfo.cardNumber}
            onchange={(e) => {
              const inputValue = e.target.value;
              if (inputValue.length < 17) {
                setCardInfo((prev) => ({
                  ...prev,
                  cardNumber: inputValue,
                }));
              }
            }}
          />
          <EditInput
            title="شماره شبا"
            type="number"
            value={cardInfo.shabaNumber}
            onchange={(e) => {
              const inputValue = e.target.value;
              if (inputValue.length < 25) {
                setCardInfo((prev) => ({
                  ...prev,
                  shabaNumber: inputValue,
                }));
              }
            }}
          />
        </Inputs>
        <Button onClick={addCard}>افزودن کارت</Button>
      </Modal>
    </BackGround>
  );
};

export default AddBankCard;
