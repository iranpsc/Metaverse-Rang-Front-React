import { useContext } from "react";
import { FeatureContext } from "../../Context/FeatureProvider";
import { Album, FirstRow, SecondRow, ThirdRow } from "../index";

import styled from "styled-components";

const RowsWrapper = styled.div`
  padding-top: 20px;
  overflow-y: auto;
  height: 65%;
  padding-right: 15px;
  padding-bottom: 20px !important;

  @media (min-width: 840px) {
    height: 65% !important;
  }
  @media (min-width: 890px) {
    height: 67% !important;
  }
  @media (min-width: 930px) {
    height: 69% !important;
  }
  @media (min-width: 1024px) {
    height: 100%;
  }
  @media (min-width: 1370px) {
    height: 80% !important;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoTab = () => {
  const [feature, setFeature] = useContext(FeatureContext);
  return (
    <RowsWrapper>
      <Div>
        <FirstRow feature={feature} />
        <SecondRow feature={feature} />
        <ThirdRow feature={feature} />
      </Div>
      <Album feature={feature} setFeature={setFeature} />
    </RowsWrapper>
  );
};

export default InfoTab;
