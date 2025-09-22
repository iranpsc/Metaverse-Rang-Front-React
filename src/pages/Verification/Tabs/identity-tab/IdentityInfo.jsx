import { useEffect, useState } from "react";
import CardPhotos from "./CardPhotos";
import InfoInputs from "./InfoInputs";
import styled from "styled-components";
import Title from "../../../../Components/Title";
import Alert from "../../../../Components/Alert/Alert";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Wrapper = styled.div``;
const Container = styled.div`
  padding: 20px 15px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  height: 71%;
  @media (min-width: 1180px) {
    height: 80%;
  }
  @media (min-width: 1500px) {
    grid-template-columns: 2fr 3fr;
    height: auto;
    padding-right: 0;
  }
`;

const IdentityInfo = ({ data, inputValues, nationalCardImg, showPending }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (!showPending) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPending]);

  return (
    <Container>
      <Wrapper>
        {showAlert && (
          <Alert
            text={
              showPending
                ? getFieldTranslationByNames("1375")
                : getFieldTranslationByNames("885")
            }
            type={showPending ? "pending" : "success"}
          />
        )}
        <Title
          title={getFieldTranslationByNames("869")}
        />
        <InfoInputs data={data} inputValues={inputValues} />
        <CardPhotos nationalCardImg={nationalCardImg} />
      </Wrapper>
    </Container>
  );
};

export default IdentityInfo;
