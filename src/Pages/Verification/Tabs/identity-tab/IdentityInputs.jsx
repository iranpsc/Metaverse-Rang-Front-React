import Inputs from "./Inputs";
import Upload from "./Upload";
import styled from "styled-components";
import { useState } from "react";
import Alert from "../../../../Components/Alert/Alert";
import Title from "../../../../Components/Title";
import Button from "../../../../Components/Button";
import ErrorModal from "../ErrorModal";

const Wrapper = styled.div`
  direction: ltr;
  overflow-y: auto;
  height: 84%;
  padding-right: 15px;
  @media (min-width: 1180px) {
    height: 80%;
  }
  @media (min-width: 1500px) {
    height: ${(props) => (props.identityError ? "85%" : "auto")};
  }
`;
const Container = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  direction: rtl;
  gap: 10px;
  @media (min-width: 1500px) {
    grid-template-columns: 2fr 3fr;
  }
`;
const IdentityInputs = ({
  data,
  inputValues,
  handleInputChange,
  setSubmitted,
  setOpenErrorModal,
  openErrorModal,
}) => {
  const [identityError, setIdentityError] = useState(false);

  const sendHandler = () => {
    if (Object.values(inputValues).some((value) => value === "")) {
      setIdentityError(true);
    } else {
      setIdentityError(false);
      setSubmitted(true);
    }
  };

  return (
    <Wrapper identityError={identityError}>
      <Container>
        {identityError && (
          <Alert
            onclick={() => setOpenErrorModal(true)}
            buttonText="مشاهده خطاها"
            text="احراز هویت شما تایید نشده است، لطفا برسی و موارد ناقص را با دقت وارد کنید"
            info="خطا در احراز هویت"
            type="error"
          />
        )}
        <Title title="اطلاعات احراز هویت" />
        <Inputs
          identityError={identityError}
          data={data}
          inputValues={inputValues}
          handleInputChange={handleInputChange}
        />
        <Upload />
        <Button large label="ارسال و ثبت اطلاعات" onclick={sendHandler} />
      </Container>
      {openErrorModal && <ErrorModal setOpenErrorModal={setOpenErrorModal} />}
    </Wrapper>
  );
};

export default IdentityInputs;
