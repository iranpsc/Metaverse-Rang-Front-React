import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Submit from "../../../../../Components/Buttons/Submit";
import Form from "../../../../../Components/Form";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { UserContext } from "../../../../../Services/Reducers/UserContext";
import {
  ToastSuccess,
  ToastError,
  TimeAgo,
  getFieldTranslationByNames,
} from "../../../../../Services/Utility";
import { FeatureContext } from "../../../Context/FeatureProvider";
import { Container, Text, Title } from "../../../Styles";

const Input = styled.input`
  width: 70px;
  text-align: center;
  padding: 0;
  margin-top: 16px;
  margin-bottom: 32px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default function PriceFloor() {
  const [user] = useContext(UserContext);
  const [feature, setFeature] = useContext(FeatureContext);

  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    minimum_price_percentage: feature?.properties?.minimum_price_percentage,
  });
  const { Request, HTTP_METHOD } = useRequest();

  const onSubmit = () => {
    if (TimeAgo(user?.birthdate) >= 18) {
      if (formData.minimum_price_percentage < 80) {
        return ToastError(
          "برای افراد بالای 18 سال باید درصد وارد شده بیشتر از 80 باشد."
        );
      }
    } else {
      if (formData.minimum_price_percentage < 110) {
        return ToastError(
          "برای افراد زیر 18 سال باید درصد وارد شده بیشتر از 110 باشد."
        );
      }
    }

    Request(
      `my-features/${user.id}/features/${feature?.id}`,
      HTTP_METHOD.POST,
      formData
    )
      .then(() => {
        setFeature((feature) => ({
          ...feature,
          properties: {
            ...feature.properties,
            minimum_price_percentage: formData.minimum_price_percentage,
          },
        }));
        ToastSuccess("حداقل قیمت پیشهادی شما با موفقیت ثبت شد.");
      })
      .catch((error) => {
        if (error.response.status === 410) {
          ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
          return Navigate("/metaverse/confirmation");
        } else {
          ToastError(error.response.data.message);
        }
      });
  };

  return (
    <Container>
      <Text>
        در این قسمت شما میتوانید حداقل قیمت پیشنهادی ملک خود را نسبت به قیمت
        اولیه متارنگ به صورت درصدی تعیین نمایید.
        <br />
        <br />
        در این صورت پیشنهاد های کمتر از این محدوده برای شما ارسال نخواهد شد.
      </Text>

      <Title>قیمت پیشنهادی</Title>

      <Form onSubmit={onSubmit}>
        <label form="price-floor">
          <Input
            className="me-1"
            id="price-floor"
            type="number"
            placeholder="80"
            name="minimum_price_percentage"
            value={formData.minimum_price_percentage}
            onChange={(e) =>
              setFormData((formData) => ({
                ...formData,
                [e.target.name]: e.target.value,
              }))
            }
          />
          %
        </label>
        <Submit
          type="primary"
          text={getFieldTranslationByNames(6747)}
        />
      </Form>
    </Container>
  );
}
