import React, { useContext, useState } from "react";
import styled from "styled-components";
import Submit from "../../../../../Components/Buttons/Submit";
import { Container, Text } from "../../../Styles";
import IconIrr from "../../../../../assets/images/coin-irr.png";
import IconPsc from "../../../../../assets/images/coin-psc.png";
import Specification from "../../../Components/Specification";
import { FeatureContext } from "../../../Context/FeatureProvider";
import { calculateFee, ToastError } from "../../../../../Services/Utility";
import Form from "../../../../../Components/Form";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { FeatureSvg } from "../../../../../Services/Constants/FeatureType";

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
  font-weight: 700;
  text-transform: uppercase;
`;

const IconPrice = styled.img`
  width: 35px;
`;

const TextValue = styled.p`
  font-size: 12px;
  color: #a7a5a5;
  padding-top: 7px;
  padding-left: 4px;
`;

export default function BuyUser() {
  const [feature] = useContext(FeatureContext);

  const Navigate = useNavigate();

  const [formData] = useState({
    price_irr: feature?.properties?.price_irr,
    price_psc: feature?.properties?.price_psc,
  });

  const { Request, HTTP_METHOD } = useRequest();

  const onSubmit = () => {
    Request(`features/buy/${feature?.id}`, HTTP_METHOD.POST)
      .then((response) => {
        Navigate(FeatureSvg(feature?.properties?.rgb));
      })
      .catch((error) => {
    
          ToastError(error.response.data.message);
        
      });
  };

  return (
    <Container style={{ gap: "50px" }}>
      <Text style={{ fontWeight: "700" }}>
        این VOD توسط فروشنده قیمت گذاری شده است شما میتوانید این ملک را به دو
        قیمت فروشنده صورت ریال و PSC خریداری نمایید
      </Text>

      <Container style={{ gap: "20px" }}>
        <ContainerPrice>
          <IconPrice src={IconIrr} /> &nbsp; {formData.price_irr}
          <TextValue>IRR</TextValue>
        </ContainerPrice>
        <ContainerPrice>
          <IconPrice src={IconPsc} /> &nbsp; {formData.price_psc}
          <TextValue>PSC</TextValue>
        </ContainerPrice>
        <Container style={{ flexDirection: "row", gap: "10px", width: "50%" }}>
          <Specification title={"کارمزد"} value={"5%"} />
          <Specification
            title={"قیمت نهایی"}
            value={`${calculateFee(formData.price_irr, 5)} IRR / ${calculateFee(
              formData.price_psc,
              5
            )} PSC`}
          />
        </Container>
      </Container>

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
