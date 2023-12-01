import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Submit from "../../../../../Components/Buttons/Submit";
import Form from "../../../../../Components/Form";
import { FeaturePrice } from "../../../../../Services/Constants/FeatureType";
import useRequest from "../../../../../Services/Hooks/useRequest";
import {
  calculateFee,
  ToastError,
  ToastSuccess,
} from "../../../../../Services/Utility";
import PriceInput from "../../../Components/PriceInput";
import Specification from "../../../Components/Specification";
import { FeatureContext } from "../../../Context/FeatureProvider";
import { Container, Text, Title } from "../../../Styles";
import {
  WalletContext,
  WalletContextTypes,
} from "../../../../../Services/Reducers/WalletContext";

const TextOffer = styled.textarea`
  border: 1px solid #c2c2c2;
  resize: none;
  height: 50px;
  width: 65%;
  text-align: right;
  margin-top: 8px;
  border-radius: 8px !important;
  font-size: 1rem !important;
  padding: 1px;
  color: #707070 !important;
  border: 1px solid #c2c2c2;
  font-family: "AzarMehr";
  direction: rtl;
  text-align: right;
`;

export default function PriceDetermination() {
  const [feature] = useContext(FeatureContext);
  const [walletState, dispatch] = useContext(WalletContext);
  const { Request, HTTP_METHOD } = useRequest();
  const Navigate = useNavigate();
  const totalArea = feature?.properties?.density * feature?.properties?.area;
  const totalIrr =
    totalArea *
    FeaturePrice(feature?.properties?.rgb) *
    (feature?.properties?.minimum_price_percentage / 100).toFixed(2);
  const [formData, setFormData] = useState({
    price_irr:
      (totalArea *
        FeaturePrice(feature?.properties?.rgb) *
        (feature?.properties?.minimum_price_percentage / 100).toFixed(2)) /
      2,
    price_psc:
      (totalArea *
        FeaturePrice(feature?.properties?.rgb) *
        (feature?.properties?.minimum_price_percentage / 100).toFixed(2)) /
      2 /
      900,
    note: "",
  });
  const [errors, setErrors] = useState({
    price_irr: "",
    price_psc: "",
  });

  const onSubmit = () => {
    if (formData.price_irr + formData.price_psc * 900 >= totalIrr) {
      Request(`buy-requests/store/${feature?.id}`, HTTP_METHOD.POST)
        .then(() => {
          dispatch({
            type: WalletContextTypes.SUBTRACT_WALLET,
            color: "psc",
            payload: formData.price_psc,
          });
          dispatch({
            type: WalletContextTypes.SUBTRACT_WALLET,
            color: "irr",
            payload: formData.price_irr,
          });
          ToastSuccess("پیشنهاد شما با موفقیت ارسال گردید.");
        })
        .catch((error) => {
          if (error.response.status === 410) {
            ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
            return Navigate("/metaverse/confirmation");
          } else {
            ToastError(error.response.data.message);
          }
        });
    } else {
      setErrors({
        ...errors,
        price_irr: `حداقل ارزش معامله ${feature?.properties?.minimum_price_percentage}% قیمت اولیه میباشد`,
      });
    }
  };

  return (
    <Container style={{ marginTop: 30 }}>
      <Text>
        شما در این قسمت میتوانید قیمت پیشنهادی خود را بری خرید این ملک ثبت کنید
      </Text>

      <Form onSubmit={onSubmit}>
        <Title>قیمت فروش (ریال)</Title>
        <PriceInput
          onChange={setFormData}
          text="ریال"
          value={formData.price_irr.toFixed(2)}
          name="price_irr"
          errors={errors}
        />

        <Title>قیمت فروش (PSC)</Title>
        <PriceInput
          onChange={setFormData}
          text="PSC"
          value={formData.price_psc.toFixed(2)}
          name="price_psc"
          errors={errors}
        />

        <Title>متن پشنهاد</Title>

        <TextOffer
          rows={10}
          cols={4}
          name="note"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.note}
        />

        <Container
          style={{
            flexDirection: "row",
            gap: "10px",
            width: "50%",
            marginTop: 20,
          }}
        >
          <Specification title={"کارمزد"} value={"5%"} />
          <Specification
            title={"مانده"}
            value={
              totalIrr -
              formData.price_irr.toFixed(2) -
              formData.price_psc.toFixed(2) * 900
            }
          />
          <Specification
            title={"قیمت نهایی"}
            value={`${calculateFee(
              formData.price_irr ? formData.price_irr.toFixed(2) : 0,
              5
            )} IRR / ${calculateFee(
              formData.price_irr ? formData.price_irr.toFixed(2) : 0,
              5
            )} PSC`}
          />
        </Container>

        <Submit
          text="ثبت قیمت"
          type="primary"
          options={{ style: { width: "20%", marginTop: 16 } }}
        />
      </Form>
    </Container>
  );
}
