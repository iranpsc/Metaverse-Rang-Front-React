import styled from "styled-components";
import FeatureCard from "../Component/FeatureCard";
import { useEffect, useState } from "react";
import useRequest from "../../../../../Services/Hooks/useRequest";
import FeatureType, { FeatureColor } from "../../../../../Services/Constants/FeatureType";
import FeaturesSearch from "../../../Components/FeaturesSearch";

const Container = styled.div`
  width: 90%;
  height: 100%;
  overflow-y: scroll;
  padding: 0 20px;
  margin-top: 4%;
`;


export default function Features() {
  const { Request } = useRequest();
  const [features, setFeatures] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    Request('my-features').then(response => {
      setFeatures(response.data.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FeaturesSearch data={features} setResult={setResult}/>
      <Container>
        {result.map(feature => (
          <FeatureCard
            Id={feature?.id}
            key={feature.properties.id}
            Address={feature.properties.address}
            Area={feature.properties.area}
            IdMap={feature.properties.id}
            Irr={feature.properties.price_irr}
            Psc={feature.properties.price_psc}
            Type={FeatureType(feature.properties.rgb)}
            Image={FeatureColor(feature.properties.rgb)}
          />
        ))}
      </Container>
    </>
  );
}
