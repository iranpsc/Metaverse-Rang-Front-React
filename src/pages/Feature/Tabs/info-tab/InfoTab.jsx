import { useContext, useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (feature) {
      setLoading(false);
    }
  }, [feature]);

  return (
    <Container>
      <Div>
        <FirstRow feature={feature} />
        <SecondRow feature={feature} />
        <ThirdRow feature={feature} />
      </Div>
      <Album 
        feature={feature} 
        setFeature={setFeature} 
        isLoading={loading}
      />
    </Container>
  );
};

export default InfoTab;