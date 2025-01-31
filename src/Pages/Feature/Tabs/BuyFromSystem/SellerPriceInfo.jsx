import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import TextValueIcon from "../../../../Components/TextValueIcon";
import { FeatureContext } from "../../Context/FeatureProvider";
import Button from "../../../../Components/Button";
import useRequest from "../../../../Services/Hooks/useRequest";
import {
  FeatureColor,
  FeatureSvg,
} from "../../../../Services/Constants/FeatureType";
import {
  getFieldTranslationByNames,
  ToastError,
} from "../../../../Services/Utility";

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 20px;
  @media (min-width: 600px) {
    padding-left: 0;
    flex-direction: row;
  }
`;

const SellerPriceInfo = () => {
  const [feature] = useContext(FeatureContext);
  const Navigate = useNavigate();
  const { Request, HTTP_METHOD } = useRequest();

  const onSubmit = () => {
    Request(`features/buy/${feature.id}`, HTTP_METHOD.POST)
      .then((response) => {
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
    <>
      <InputsWrapper>
        <TextValueIcon
          title={getFieldTranslationByNames("521")}
          value={feature.properties.stability}
          valueIcon={FeatureColor(feature.properties.rgb)}
          very_long
        />
      </InputsWrapper>

      <Button
        label={getFieldTranslationByNames("353")}
        onclick={onSubmit}
      />
    </>
  );
};

export default SellerPriceInfo;
