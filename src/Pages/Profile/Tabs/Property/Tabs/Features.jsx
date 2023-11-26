import styled from "styled-components";
import FeatureCard from "../Component/FeatureCard";
import { useEffect, useState } from "react";
import useRequest from "../../../../../Services/Hooks/useRequest";
import FeatureType, {
  FeatureColor,
} from "../../../../../Services/Constants/FeatureType";
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
  const [link, setLink] = useState("my-features?page=1");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchFeatures();
  }, []);

  async function fetchFeatures() {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const response = await Request(link);
    const newData = response?.data?.data || [];
    if (newData.length > 0) {
      setResult((prevResult) => [...prevResult, ...newData]);
    }
    const nextLink = response?.data?.links?.next;
    if (nextLink) {
      setLink(nextLink.replace("https://api.rgb.irpsc.com/api/", ""));
    } else {
      setLink(null);
    }

    setIsLoading(false);
  }

  function handleScroll(event) {
    const element = event.target;
    const THRESHOLD = 10;
    if (
      element.scrollHeight - element.scrollTop <=
        element.clientHeight + THRESHOLD &&
      link &&
      !isLoading
    ) {
      fetchFeatures();
    }
  }

  return (
    <>
      <FeaturesSearch data={features} setResult={setResult} />
      <Container onScroll={handleScroll}>
        {result.map((feature) => (
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
