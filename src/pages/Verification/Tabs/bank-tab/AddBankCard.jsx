import styled from "styled-components";
import { useEffect, useState } from "react";
import EditInput from "../../../Feature/Tabs/enter-tab/EditInput";
import useRequest from "../../../../services/Hooks/useRequest";
import {
  getBankNameFromCardNumber,
  getShebaInfo,
  verifyCardNumber,
} from "@persian-tools/persian-tools";
import {
  getFieldTranslationByNames,
  ToastError,
  ToastSuccess,
} from "../../../../services/Utility";
import { IoCloseCircleSharp, IoCloseSharp } from "react-icons/io5";
import { useLanguage } from "../../../../services/Reducers/LanguageContext";

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
  gap: 30px;
  flex-direction: column;
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

const Inputs = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.newColors.primaryText};
  border: none;
  padding: 0 14px;
  width: fit-content;
  height: 45px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  font-family: inherit;
`;

const ErrorMessage = styled.div`
  color: #df2e38;
  font-size: 14px;
  margin-top: 10px;
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  ${(props) => (props.isPersian ? "left" : "right")}: 10px;
  cursor: pointer;
  svg {
    color: red;
    font-size: 24px;
  }
`;
const AddBankCard = ({ setOpenAddModal, setCards }) => {
  const isPersian = useLanguage();
  const [cardInfo, setCardInfo] = useState({
    card_num: "",
    shaba_num: "",
  });
  const [errors, setErrors] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();

  const addCard = () => {
    setErrors([]);
    const shebaInfo = getShebaInfo(`IR${cardInfo.shaba_num}`);
    const cartValidate = verifyCardNumber(cardInfo.card_num);
    const cartName = getBankNameFromCardNumber(cardInfo.card_num);

    if (shebaInfo?.persianName) {
      if (cartName === shebaInfo.persianName) {
        if (cartValidate) {
          Request("bank-accounts", HTTP_METHOD.POST, {
            card_num: cardInfo.card_num,
            shaba_num: `IR${cardInfo.shaba_num}`,
            bank_name: shebaInfo.persianName,
          })
            .then(() => {
              ToastSuccess(
                "حساب بانکی شما با موفقيت ثبت شد. تاييد نهايی پس از بررسی های لازم صورت ميگيرد/ قابليت بارگذاری ٢٠ حساب بانکی توسط متقاضی صورت گيرد"
              );
              setOpenAddModal(false);
              // Refresh the cards list
              Request("bank-accounts").then((response) => {
                setCards(response.data.data);
              });
            })
            .catch((error) => {
              ToastError(error.response.data.message);
            });
        } else {
          setErrors(["شماره کارت صحیح نمی باشد لطفا آنرا برسی نمایید."]);
        }
      } else {
        setErrors(["شماره شبا و شماره کارت باید متعلق به یک کارت باشد."]);
      }
    } else {
      setErrors(["شماره شبا صحیح نمی باشد لطفا آنرا برسی نمایید."]);
    }
  };

  return (
    <BackGround>
      <Modal>
        <Title>
          {getFieldTranslationByNames("890")}
        </Title>
        <Close>
          <IoCloseCircleSharp onClick={() => setOpenAddModal(false)} />
        </Close>
        <Inputs>
          <EditInput
            title={getFieldTranslationByNames("636")}
            type="number"
            value={cardInfo.card_num}
            onchange={(e) => {
              const inputValue = e.target.value;
              if (inputValue.length <= 16) {
                setCardInfo((prev) => ({
                  ...prev,
                  card_num: inputValue,
                }));
              }
            }}
          />
          <EditInput
            title={getFieldTranslationByNames("889")}
            type="number"
            value={cardInfo.shaba_num}
            onchange={(e) => {
              const inputValue = e.target.value;
              if (inputValue.length <= 24) {
                setCardInfo((prev) => ({
                  ...prev,
                  shaba_num: inputValue,
                }));
              }
            }}
          />
        </Inputs>
        {errors.length > 0 && <ErrorMessage>{errors[0]}</ErrorMessage>}
        <Button onClick={addCard}>
          {" "}
          {getFieldTranslationByNames("890")}
        </Button>
      </Modal>
    </BackGround>
  );
};

export default AddBankCard;
