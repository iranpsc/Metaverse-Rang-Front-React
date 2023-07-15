import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Submit from "../../../Components/Buttons/Submit";
import Input from "../Components/Input";
import Form from "../../../Components/Form";
import {
  getBankNameFromCardNumber,
  getShebaInfo,
  verifyCardNumber,
} from "@persian-tools/persian-tools";
import useRequest from "../../../Services/Hooks/useRequest";
import ErrorMessage from "../../../Components/ErrorMessage";
import { ToastError, ToastSuccess } from "../../../Services/Utility";

const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 50%;
  padding: 8px;
`;

const ErrorContainer = styled.div`
  width: 95%;
  background-color: #df2e38;
  border-radius: 32px;
  margin-top: 16px;
`;

const CardNumber = styled.div`
  display: flex;
  width: 470px;
  padding: 8px;
  margin-bottom: 24px;
  justify-content: space-between;
  border: 2px solid #fcfcfc;
`;
const ContainerCart = styled.div`
  display: block;
  overflow-y: auto;
  max-height: 190px;
`;

export default function BankVerification() {
  const [errors, setErrors] = useState([]);
  const [cards, setCards] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();

  const [formData, setFormData] = useState({
    card_num: "",
    shaba_num: "",
  });

  useEffect(() => {
    Request("bank-accounts").then((response) => {
      setCards(response.data.data);
    });
   
  }, []);

  const onSubmit = () => {
    const shebaInfo = getShebaInfo(`IR${formData.shaba_num}`);
    const cartValidate = verifyCardNumber(formData.card_num);
    const cartName = getBankNameFromCardNumber(formData.card_num);

    if (shebaInfo?.persianName) {
      if (cartName === shebaInfo.persianName) {
        if (cartValidate) {
          Request("bank-accounts", HTTP_METHOD.POST, {
            card_num: formData.card_num,
            shaba_num: `IR${formData.shaba_num}`,
            bank_name: shebaInfo.persianName,
          })
            .then(() => {
              ToastSuccess(
                "حساب بانکی شما با موفقيت ثبت شد. تاييد نهايی پس از بررسی های لازم صورت ميگيرد/ قابليت بارگذاری ٢٠ حساب بانکی توسط متقاضی صورت گيرد"
              );
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
    <Form onSubmit={onSubmit} options={{ style: { height: "100%" } }}>
      <ErrorContainer>
        <ErrorMessage
          maxList={1}
          errors={errors}
          style={{ padding: 8, color: "white", margin: 0 }}
        />
      </ErrorContainer>
      <Container>
        <InputContainer>
          <Input
            name="card_num"
            text=": شماره کارت"
            numberOnly={true}
            value={formData.card_num}
            onChange={setFormData}
          />

          <Input
            name="shaba_num"
            text=": شماره شبا"
            numberOnly={true}
            value={formData.shaba_num}
            onChange={setFormData}
          />
        </InputContainer>
        <ContainerCart>
          {cards.map((card) => (
            <CardNumber>
              <p>{card.card_num}</p>
              {card.status === 0 && <span>درحال برسی</span>}
              {card.status === 1 && <span>تایید شده</span>}
              {card.status === -1 && <span>رد شده</span>}
            </CardNumber>
          ))}
        </ContainerCart>
        <Submit
          type="primary"
          text="ذخیره"
          options={{ style: { width: 150 } }}
        />
      </Container>
    </Form>
  );
}
