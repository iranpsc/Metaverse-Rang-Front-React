import { useEffect, useState } from "react";
import { Skeleton } from "../../../../components/Skeleton";
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
import styled from "styled-components";

const SkeletonContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// اسکلتون برای بخش SaveInfo (هدر + دکمه)
const SkeletonSaveInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #454545;
`;

// اسکلتون برای بخش About
const SkeletonAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// اسکلتون برای بخش EducationsAndJob
const SkeletonEducationsAndJob = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 8px;
`;

const SkeletonField = styled.div`
  flex: 1;
`;

const SkeletonEditor = styled.div`
  border: 1px solid #454545;
  border-radius: 8px;
  padding: 12px;
  margin-top: 8px;
`;

const AboutMeTab = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // اسکلتون لودینگ - شبیه به تصویر
  if (loading) {
    return (
      <SkeletonContainer>
        {/* بخش SaveInfo (عنوان و دکمه) */}
        <SkeletonSaveInfo>
          <div>
            <Skeleton width="120px" height="24px" radius="4px" style={{ marginBottom: "8px" }} />
            <Skeleton width="250px" height="14px" radius="4px" />
          </div>
          <Skeleton width="124px" height="50px" radius="8px" />
        </SkeletonSaveInfo>

        {/* بخش About (درباره من) */}
        <SkeletonAbout>
          <Skeleton width="100px" height="20px" radius="4px" />
          <Skeleton width="300px" height="14px" radius="4px" />
          <SkeletonEditor>
            <Skeleton width="100%" height="100px" radius="4px" />
            <SkeletonRow style={{ marginTop: "12px", justifyContent: "flex-end" }}>
              <Skeleton width="60px" height="30px" radius="4px" />
              <Skeleton width="60px" height="30px" radius="4px" />
              <Skeleton width="60px" height="30px" radius="4px" />
              <Skeleton width="60px" height="30px" radius="4px" />
              <Skeleton width="60px" height="30px" radius="4px" />
            </SkeletonRow>
          </SkeletonEditor>
        </SkeletonAbout>

        {/* بخش EducationsAndJob (شغل و تحصیلات) */}
        <SkeletonEducationsAndJob>
          <SkeletonRow>
            <SkeletonField>
              <Skeleton width="80px" height="16px" radius="4px" style={{ marginBottom: "8px" }} />
              <Skeleton width="100%" height="40px" radius="8px" />
            </SkeletonField>
            <SkeletonField>
              <Skeleton width="80px" height="16px" radius="4px" style={{ marginBottom: "8px" }} />
              <Skeleton width="100%" height="40px" radius="8px" />
            </SkeletonField>
          </SkeletonRow>
          <SkeletonRow>
            <SkeletonField>
              <Skeleton width="100px" height="16px" radius="4px" style={{ marginBottom: "8px" }} />
              <Skeleton width="100%" height="40px" radius="8px" />
            </SkeletonField>
            <SkeletonField>
              <Skeleton width="80px" height="16px" radius="4px" style={{ marginBottom: "8px" }} />
              <Skeleton width="100%" height="40px" radius="8px" />
            </SkeletonField>
          </SkeletonRow>
        </SkeletonEducationsAndJob>

        {/* Hobby, CountryCity, Memory, Opportunity, Prediction - فیلدهای ساده */}
      
      </SkeletonContainer>
    );
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