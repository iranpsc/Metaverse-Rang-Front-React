import Rial from "../../../../../Components/Rial";
import Psc from "../../../../../Components/Psc";
import Input from "../../../../../Components/Input";

import styled from "styled-components";
import { useContext, useState } from "react";
import Button from "../../../../../Components/Button";
import TitleValue from "../../../../../Components/TitleValue";
import { FeatureContext } from "../../../Context/FeatureProvider";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../../services/Hooks/useRequest";
import { FeatureSvg } from "../../../../../services/constants/FeatureType";
import {
  calculateFee,
  getFieldTranslationByNames,
  persianNumbers,
  ToastError,
} from "../../../../../services/Utility";

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
       
          ToastError(error.response.data.message);
        
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
            "521"
          )} (${getFieldTranslationByNames("48")})`}
          insideText={<Rial />}
          disabled
        />
        <Input
          value={psc}
          onchange={(e) => setPsc(e.target.value)}
          type="number"
          placeholder={`${getFieldTranslationByNames(
            "521"
          )} (${getFieldTranslationByNames("47")})`}
          insideText={<Psc />}
          disabled
        />
      </InputsWrapper>
      <ResultWrapper>
        <TitleValue
          title={getFieldTranslationByNames("522")}
          value={`${calculateFee(rial, 5)} ${getFieldTranslationByNames(
            "48"
          )} / ${calculateFee(psc, 5)} ${getFieldTranslationByNames("47")}`}
        />
        <TitleValue title={getFieldTranslationByNames("523")} value="5%" />
      </ResultWrapper>
      {Number(psc) !== 0 && Number(rial) !== 0 && (
        <div>
          <Button
            label={getFieldTranslationByNames("353")}
            onClick={onSubmit}
          />
        </div>
      )}
    </>
  );
};

export default SellerPriceInfo;
