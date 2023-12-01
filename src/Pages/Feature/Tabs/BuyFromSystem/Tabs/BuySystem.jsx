import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Submit from "../../../../../Components/Buttons/Submit";
import { Container, Text } from "../../../Styles";
import { FeatureSvg } from "../../../../../Services/Constants/FeatureType";
import Form from "../../../../../Components/Form";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { ToastError } from "../../../../../Services/Utility";
import {
  WalletContext,
  WalletContextTypes,
} from "../../../../../Services/Reducers/WalletContext";

const ContainerPrice = styled.div`
  width: 65%;
  background-color: #e9e9e9;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
`;

const IconPrice = styled.img`
  width: 35px;
`;

export default function BuySystem({ price, image, rgb, id, type }) {
  const Navigate = useNavigate();
  const { Request, HTTP_METHOD } = useRequest();
  const [walletState, dispatch] = useContext(WalletContext);
  const onSubmit = () => {
    Request(`features/buy/${id}`, HTTP_METHOD.POST)
      .then((response) => {
        dispatch({
          type: WalletContextTypes.SUBTRACT_WALLET,
          color:
            type == "m"
              ? "yellow"
              : type == "t"
              ? "red"
              : type == "a"
              ? "blue"
              : "",
          payload: price,
        });
        Navigate(FeatureSvg(rgb));
      })
      .catch((error) => {
        if (error.response.status === 410) {
          ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
          return Navigate("/metaverse/confirmation");
        }

        ToastError(error.response.data.message);
      });
  };

  return (
    <Container style={{ gap: "50px" }}>
      <Text style={{ fontWeight: "700" }}>
        این VOD توسط متارنگ قیمت گذاری شده است شما میتوانید این ملک را خریداری
        نمایید
      </Text>

      <ContainerPrice>
        <IconPrice src={image} /> &nbsp; {price}
      </ContainerPrice>
      <Form onSubmit={onSubmit}>
        <Submit
          type="primary"
          text="خرید"
          options={{ style: { width: 150 } }}
        />
      </Form>
    </Container>
  );
}
