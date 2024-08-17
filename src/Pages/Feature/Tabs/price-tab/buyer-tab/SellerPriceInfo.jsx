import Rial from "../../../../../Components/Rial";
import Psc from "../../../../../Components/Psc";
import Input from "../../../../../Components/Input";

import styled from "styled-components";
import { useState } from "react";
import Button from "../../../../../Components/Button";
import TitleValue from "../../../../../Components/TitleValue";

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
  const [rial, setRial] = useState(50);
  const [psc, setPsc] = useState(57);

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
        <TitleValue title="قیمت نهایی" value="50 IRR / 57 PSC" />
        <TitleValue title="کارمزد" value="5%" />
      </ResultWrapper>
      <div dir="rtl">
        <Button label="خرید" onclick={() => {}} />
      </div>
    </>
  );
};

export default SellerPriceInfo;
