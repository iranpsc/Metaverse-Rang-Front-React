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

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  direction: rtl;
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
  direction: rtl;
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
          return Navigate("/metaverse/confirmation");
        } else {
          ToastError(error.response.data.message);
        }
      });
  };
  return (
    <>
      <InputsWrapper>
        <Input
          disabled
          value={rial}
          onchange={(e) => setRial(e.target.value)}
          type="number"
          placeholder="قیمت فروش (ریال)"
          insideText={<Rial />}
        />
        <Input
          disabled
          value={psc}
          onchange={(e) => setPsc(e.target.value)}
          type="number"
          placeholder="قیمت فروش (PSC)"
          insideText={<Psc />}
        />
      </InputsWrapper>
      <ResultWrapper>
        <TitleValue title="قیمت نهایی" value={`${rial} IRR / ${psc} PSC`} />
        <TitleValue title="کارمزد" value="5%" />
      </ResultWrapper>
      <div dir="rtl">
        <Button label="خرید" onclick={onSubmit} />
      </div>
    </>
  );
};

export default SellerPriceInfo;
