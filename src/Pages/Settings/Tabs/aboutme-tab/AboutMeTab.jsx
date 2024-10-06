import About from "./About";
import CountryCity from "./CountryCity";
import EducationsAndJob from "./EducationsAndJob";
import { GlobalStateProvider } from "./GlobalStateProvider";
import Hobby from "./Hobby";
import Memory from "./Memory";
import Opportunity from "./Opportunity";
import Prediction from "./Prediction";
import SaveInfo from "./SaveInfo";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  height: 60vh;
  overflow-y: auto;
  padding-right: 15px;
  direction: ltr;
  @media (min-width: 720px) {
    height: 70vh;
  }
  @media (min-width: 740px) {
    height: 57vh;
  }
  @media (min-width: 840px) {
    height: 60vh;
  }
  @media (min-width: 880px) {
    height: 55vh;
  }
  @media (min-width: 890px) {
    height: 62vh;
  }
  @media (min-width: 930px) {
    height: 64vh;
  }
  @media (min-width: 1180px) {
    height: 70vh;
  }
  @media (min-width: 1280px) {
    height: 70vh;
  }
  @media (min-width: 1366px) {
    height: 61vh;
  }
  @media (min-width: 1920px) {
    height: 68vh;
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
