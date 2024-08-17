import FillInputs from "./FillInputs";

import styled from "styled-components";
import { useState } from "react";
import ResultInfo from "../../../Components/ResultInfo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: ltr;
  padding-right: 15px;
  padding-top: 20px;
  gap: 30px;
  width: 100%;
  @media (max-width: 1024px) {
    height: 60vh !important;
    overflow: auto;
  }
  @media (min-width: 1023px) {
    height: auto !important;
  }
`;

const Text = styled.p`
  color: #ffffff;
  line-height: 1.6rem;
  direction: rtl;
  font-weight: 100;
  font-size: 16px;
`;

const PriceDefine = () => {
  const [assign, setAssign] = useState(false);
  const [rial, setRial] = useState("");
  const [psc, setPsc] = useState("");
  return (
    <Wrapper>
      <Text>
        شما می توانید ملک خود را به دو صورت ریال و PSC قیمت گذاری نمایید{" "}
      </Text>
      {!assign && (
        <FillInputs
          rial={rial}
          setRial={setRial}
          psc={psc}
          setPsc={setPsc}
          setAssign={setAssign}
        />
      )}
      {assign && (
        <ResultInfo
          rial={rial}
          setRial={setRial}
          setPsc={setPsc}
          psc={psc}
          setAssign={setAssign}
        />
      )}
    </Wrapper>
  );
};

export default PriceDefine;
