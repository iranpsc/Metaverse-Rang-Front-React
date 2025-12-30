import { useContext } from "react";
import { FeatureContext } from "../../Context/FeatureProvider";
import { Album, FirstRow, SecondRow, ThirdRow } from "../index";
import Container from "../../../../components/Common/Container";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
`;

const InfoTab = () => {
  const [feature, setFeature] = useContext(FeatureContext);
  return (
    <Container>
      <Div>
        <FirstRow feature={feature} />
        <SecondRow feature={feature} />
        <ThirdRow feature={feature} />
      </Div>
      <Album feature={feature} setFeature={setFeature} />
    </Container>
  );
};

export default InfoTab;
