import styled from "styled-components";
import FeatureCard from "../Component/FeatureCard";
// import SearchBox from "../../../../../Components/Inputs/SearchBox";
import { useEffect, useState } from "react";
import useRequest from "../../../../../services/Hooks/useRequest";
import FeatureType from "../../../../../services/Constants/FeatureType";
import FeaturesSearch from "../../../Components/FeaturesSearch";
import { useParams } from "react-router-dom";

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
  const { id } = useParams();
  useEffect(() => {
    Request(`players/${id}/assets`).then((response) => {
      setFeatures(response.data.data);
    });
  }, []);

  return (
    <>
      <FeaturesSearch data={features} setResult={setResult} />
      <Container>
        {result.map((feature) => (
          <FeatureCard
            key={feature.properties.id}
            Address={feature.properties.address}
            Area={feature.properties.area}
            IdMap={feature.properties.id}
            Irr={feature.properties.price_irr}
            Psc={feature.properties.price_psc}
            Type={FeatureType(feature.properties.rgb)}
            IdNavigate={feature.id}
          />
        ))}
      </Container>
    </>
  );
}
