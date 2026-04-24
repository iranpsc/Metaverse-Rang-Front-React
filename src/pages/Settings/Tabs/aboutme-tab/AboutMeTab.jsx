import { useEffect, useState } from "react";
import SkeletonGrid from "../../../../components/Common/SkeletonGrid";
import About from "./About";
import CountryCity from "./CountryCity";
import EducationsAndJob from "./EducationsAndJob";
import { GlobalStateProvider } from "./aboutGlobalStateProvider";
import Hobby from "./Hobby";
import Memory from "./Memory";
import Opportunity from "./Opportunity";
import Prediction from "./Prediction";
import SaveInfo from "./SaveInfo";
import Container from "../../../../components/Common/Container";

const AboutMeTab = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // ⏱ زمان نمایش اسکلتون

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonGrid count={1} />;
  }

  return (
    <GlobalStateProvider>
      <Container>
        <SaveInfo />
        <About />
        <EducationsAndJob />
        <Hobby />
        <CountryCity />
        <Memory />
        <Opportunity />
        <Prediction />
      </Container>
    </GlobalStateProvider>
  );
};

export default AboutMeTab;
