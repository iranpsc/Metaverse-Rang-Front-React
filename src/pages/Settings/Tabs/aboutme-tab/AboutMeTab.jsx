import About from "./About";
import CountryCity from "./CountryCity";
import EducationsAndJob from "./EducationsAndJob";
import { GlobalStateProvider } from "./aboutGlobalStateProvider";
import Hobby from "./Hobby";
import Memory from "./Memory";
import Opportunity from "./Opportunity";
import Prediction from "./Prediction";
import SaveInfo from "./SaveInfo";
import styled from "styled-components";
const Container = styled.div`
  padding: 20px 0;
  height: 100%;
  overflow-y: auto;
  padding-right: 15px;
  padding-left: 1%;
  font-size: 16px;

@media screen and (max-width: 1050px) {
font-size: 12px;

}
`;

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
