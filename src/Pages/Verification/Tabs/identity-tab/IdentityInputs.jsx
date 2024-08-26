import Inputs from "./Inputs";
import Upload from "./Upload";
import styled from "styled-components";
import { useState } from "react";
import Alert from "../../../../Components/Alert/Alert";
import Title from "../../../../Components/Title";
import Button from "../../../../Components/Button";
import ErrorModal from "../ErrorModal";
import { verifyIranianNationalId } from "@persian-tools/persian-tools";
import ReactQuill from "react-quill";
import useRequest from "../../../../Services/Hooks/useRequest";
import { convertPersianNumbersToEnglish } from "../../../../Services/Utility";

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
  errors,
  setErrors,
}) => {
  const [identityError, setIdentityError] = useState({});
  const [videoError, setVideoError] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [nationImageURL, setNationImageURL] = useState(null);
  const [uploadResponse, setUploadResponse] = useState(null);
  const [textVerify, setTextVerify] = useState("");
  const { Request, HTTP_METHOD } = useRequest();

  const sendHandler = () => {
    let errorMessages = [];

    // Validation checks and storing error messages and fields
    if (!inputValues.fname) {
      errorMessages.push("نام وارد نشده است.");
    } else if (inputValues.fname.length < 3) {
      errorMessages.push("نام وارد شده باید بیشتر از 3 کاراکتر داشته باشد.");
    } else if (inputValues.fname.length > 32) {
      errorMessages.push("نام وارد شده باید کمتر از 32 کاراکتر داشته باشد.");
    }

    if (!inputValues.lname) {
      errorMessages.push("نام خانوادگی وارد نشده است.");
    } else if (inputValues.lname.length < 3) {
      errorMessages.push(
        "نام خانوادگی وارد شده باید بیشتر از 3 کاراکتر داشته باشد."
      );
    } else if (inputValues.lname.length > 52) {
      errorMessages.push(
        "نام خانوادگی وارد شده باید کمتر از 52 کاراکتر داشته باشد."
      );
    }

    if (!inputValues.melli_code) {
      errorMessages.push("کد ملی وارد نشده است.");
    } else if (!verifyIranianNationalId(inputValues.melli_code)) {
      errorMessages.push("کد ملی صحیح نمی باشد.");
    }

    if (!inputValues.province) {
      errorMessages.push("استان وارد نشده است.");
    }

    if (!inputValues.birthdate) {
      errorMessages.push("تاریخ تولد وارد نشده است.");
    }

    if (!inputValues.gender) {
      errorMessages.push("جنسیت انتخاب نشده است.");
    }

    if (!videoURL) {
      errorMessages.push("ویدیو ضبط نشده است.");

      setVideoError(true);
    } else {
      setVideoError(false);
    }
    if (!nationImageURL) {
      errorMessages.push("تصویر کارت ملی بارگذاری نشده است.");
    }

    setErrors(errorMessages);
    console.log(inputValues.birthDate);
    const requestData = new FormData();
    requestData.append("fname", inputValues.fname);
    requestData.append("lname", inputValues.lname);
    requestData.append("melli_code", inputValues.melli_code);
    requestData.append("province", inputValues.province);
    requestData.append(
      "birthdate",
      convertPersianNumbersToEnglish(inputValues.birthdate)
    );
    requestData.append("melli_card", nationImageURL);
    requestData.append("video[name]", JSON.parse(uploadResponse).name);
    requestData.append("video[path]", JSON.parse(uploadResponse).path);
    requestData.append("verify_text_id", textVerify.id);

    if (errorMessages.length === 0) {
      setIdentityError(false);
      Request("kyc", HTTP_METHOD.POST, requestData, {
        "Content-Type": "multipart/form-data",
      }).then((res) => {
        setSubmitted(true);
      });
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
        <Upload
          setVideoError={setVideoError}
          setVideoURLParent={setVideoURL}
          setNationImageURL={setNationImageURL}
          uploadResponse={uploadResponse}
          setUploadResponse={setUploadResponse}
          textVerify={textVerify}
          setTextVerify={setTextVerify}
          inputValues={inputValues}
        />
        <Button large label="ارسال و ثبت اطلاعات" onclick={sendHandler} />
      </Container>
      {openErrorModal && (
        <ErrorModal setOpenErrorModal={setOpenErrorModal} errors={errors} />
      )}
    </Wrapper>
  );
};

export default IdentityInputs;
