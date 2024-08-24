import Inputs from "./Inputs";
import Upload from "./Upload";
import styled from "styled-components";
import { useState } from "react";
import Alert from "../../../../Components/Alert/Alert";
import Title from "../../../../Components/Title";
import Button from "../../../../Components/Button";
import ErrorModal from "../ErrorModal";
import { verifyIranianNationalId } from "@persian-tools/persian-tools";

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
  const [errors, setErrors] = useState([]);

  const sendHandler = () => {
    let errorMessages = [];

    if (!inputValues.name) {
      errorMessages.push("نام وارد نشده است.");
    } else if (inputValues.name.length < 3) {
      errorMessages.push("نام وارد شده باید بیشتر از 3 کاراکتر داشته باشد.");
    } else if (inputValues.name.length > 32) {
      errorMessages.push("نام وارد شده باید کمتر از 32 کاراکتر داشته باشد.");
    }

    if (!inputValues.lastName) {
      errorMessages.push("نام خانوادگی وارد نشده است.");
    } else if (inputValues.lastName.length < 3) {
      errorMessages.push(
        "نام خانوادگی وارد شده باید بیشتر از 3 کاراکتر داشته باشد."
      );
    } else if (inputValues.lastName.length > 52) {
      errorMessages.push(
        "نام خانوادگی وارد شده باید کمتر از 52 کاراکتر داشته باشد."
      );
    }

    if (!inputValues.nationalCode) {
      errorMessages.push("کد ملی وارد نشده است.");
    } else if (!verifyIranianNationalId(inputValues.nationalCode)) {
      errorMessages.push("کد ملی صحیح نمی باشد.");
    }

    if (!inputValues.province) {
      errorMessages.push("استان وارد نشده است.");
    }

    if (!inputValues.birthDate) {
      errorMessages.push("تاریخ تولد وارد نشده است.");
    }

    if (!inputValues.gender) {
      errorMessages.push("جنسیت انتخاب نشده است.");
    }

    console.log(errorMessages);
    setErrors(errorMessages);

    if (errorMessages.length === 0) {
      setIdentityError(false);
      setSubmitted(true);
    } else {
      setIdentityError(true);
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
      {openErrorModal && (
        <ErrorModal setOpenErrorModal={setOpenErrorModal} errors={errors} />
      )}
    </Wrapper>
  );
};

export default IdentityInputs;
