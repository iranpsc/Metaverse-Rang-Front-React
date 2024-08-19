import { useEffect, useState } from "react";

import CardPhotos from "./CardPhotos";
import InfoInputs from "./InfoInputs";

import styled from "styled-components";
import Title from "../../../../Components/Title";
import Alert from "../../../../Components/Alert/Alert";

const Wrapper = styled.div`
  direction: rtl;
`;
const Container = styled.div`
  padding: 20px 15px 20px 0;
  display: flex;
  flex-direction: column;
  direction: ltr;
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
const IdentityInfo = ({ data, inputValues }) => {
  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }, []);
  return (
    <Container>
      <Wrapper>
        {showAlert && (
          <Alert text="احراز هویت شما با موفقیت انجام شده است" type="success" />
        )}
        <Title title="اطلاعات احراز هویت" />
        <InfoInputs data={data} inputValues={inputValues} />
        <CardPhotos />
      </Wrapper>
    </Container>
  );
};

export default IdentityInfo;
