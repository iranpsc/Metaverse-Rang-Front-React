import Rial from "../../../../../Components/Rial";
import Psc from "../../../../../Components/Psc";
import Input from "../../../../../Components/Input";

import styled from "styled-components";
import { useContext, useState } from "react";
import Button from "../../../../../Components/Button";
import TitleValue from "../../../../../Components/TitleValue";
import { FeatureContext } from "../../../Context/FeatureProvider";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { FeatureSvg } from "../../../../../Services/Constants/FeatureType";
import {
  calculateFee,
  getFieldTranslationByNames,
  persianNumbers,
  ToastError,
} from "../../../../../Services/Utility";

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

const ResultWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 4fr 1fr;
  }
`;

const SellerPriceInfo = () => {
  const [feature] = useContext(FeatureContext);
  const [rial, setRial] = useState(feature?.properties?.price_irr);
  const [psc, setPsc] = useState(feature?.properties?.price_psc);
  const Navigate = useNavigate();

  const { Request, HTTP_METHOD } = useRequest();

  const onSubmit = () => {
    Request(`features/buy/${feature?.id}`, HTTP_METHOD.POST)
      .then((response) => {
        Navigate(FeatureSvg(feature?.properties?.rgb));
      })
      .catch((error) => {
        if (error.response.status === 410) {
          ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
          Navigate("/metaverse/confirmation");
        } else {
          ToastError(error.response.data.message);
        }
      });
  };
  return (
    <>
      <InputsWrapper>
        <Input
          value={rial}
          onchange={(e) => setRial(e.target.value)}
          type="number"
          placeholder={`${getFieldTranslationByNames(
            "property-information",
            "sales price"
          )} (${getFieldTranslationByNames("property-information", "rial")})`}
          insideText={<Rial />}
        />
        <Input
          value={psc}
          onchange={(e) => setPsc(e.target.value)}
          type="number"
          placeholder={`${getFieldTranslationByNames(
            "property-information",
            "sales price"
          )} (${getFieldTranslationByNames("property-information", "psc")})`}
          insideText={<Psc />}
        />
      </InputsWrapper>
      <ResultWrapper>
        <TitleValue
          title={getFieldTranslationByNames(
            "property-information",
            "the final price"
          )}
          value={`${calculateFee(rial, 5)} ${getFieldTranslationByNames(
            "property-information",
            "rial"
          )} / ${calculateFee(psc, 5)} ${getFieldTranslationByNames(
            "property-information",
            "psc"
          )}`}
        />
        <TitleValue
          title={getFieldTranslationByNames("property-information", "wage")}
          value="5%"
        />
      </ResultWrapper>
      <div>
        <Button
          label={getFieldTranslationByNames("property-information", "buy")}
          onclick={onSubmit}
        />
      </div>
    </>
  );
};

export default SellerPriceInfo;
