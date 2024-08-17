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
  padding-bottom: 20px;
  gap: 30px;
  width: 100%;
  @media (max-width: 1024px) {
    height: 62vh !important;
    overflow: auto;
  }
  @media (min-width: 1025px) {
    height: auto !important;
  }
`;

const Text = styled.p`
  color: #ffffff;
  line-height: 1.5rem;
  direction: rtl;
  font-weight: 100;
`;

const SuggestPrice = () => {
  const [assign, setAssign] = useState(false);
  const [rial, setRial] = useState("");
  const [psc, setPsc] = useState("");
  return (
    <Wrapper>
      <Text>قیمت پیشنهادی شما </Text>
      {!assign && (
        <FillInputs
          rial={rial}
          psc={psc}
          setRial={setRial}
          setPsc={setPsc}
          setAssign={setAssign}
        />
      )}
      {assign && <ResultInfo rial={rial} psc={psc} setAssign={setAssign} />}
    </Wrapper>
  );
};

export default SuggestPrice;
