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
