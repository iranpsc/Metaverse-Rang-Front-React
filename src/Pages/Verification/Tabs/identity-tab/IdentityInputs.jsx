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
import {
  convertPersianNumbersToEnglish,
  getFieldTranslationByNames,
  ToastError,
} from "../../../../Services/Utility";
import * as Sentry from "@sentry/react";

const Wrapper = styled.div`
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

  gap: 10px;
  @media (min-width: 1500px) {
    grid-template-columns: 2fr 3fr;
  }
`;
const IdentityInputs = ({
  data,
  kyc,
  inputValues,
  handleInputChange,
  setSubmitted,
  setOpenErrorModal,
  openErrorModal,
  errors,
  setErrors,
  setDetails,
}) => {
  const [identityError, setIdentityError] = useState({});
  const [videoError, setVideoError] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [nationImageURL, setNationImageURL] = useState(null);
  const [uploadResponse, setUploadResponse] = useState(null);
  const [isVideoUploaded, setIsVideoUploaded] = useState(false);
  const [textVerify, setTextVerify] = useState("");
  const { Request, HTTP_METHOD } = useRequest();
  const sendHandler = () => {
    let errorMessages = [];
    let newDetails = [...data]; // کپی از دیتیلز برای به‌روزرسانی ارور‌ها

    // Validation checks and storing error messages and fields
    if (!inputValues.fname) {
      errorMessages.push("نام وارد نشده است.");
      newDetails[0].error = true;
    } else if (inputValues.fname.length < 3) {
      errorMessages.push("نام وارد شده باید بیشتر از 3 کاراکتر داشته باشد.");
      newDetails[0].error = true;
    } else if (inputValues.fname.length > 32) {
      errorMessages.push("نام وارد شده باید کمتر از 32 کاراکتر داشته باشد.");
      newDetails[0].error = true;
    } else {
      newDetails[0].error = false;
    }

    if (!inputValues.lname) {
      errorMessages.push("نام خانوادگی وارد نشده است.");
      newDetails[1].error = true;
    } else if (inputValues.lname.length < 3) {
      errorMessages.push(
        "نام خانوادگی وارد شده باید بیشتر از 3 کاراکتر داشته باشد."
      );
      newDetails[1].error = true;
    } else if (inputValues.lname.length > 52) {
      errorMessages.push(
        "نام خانوادگی وارد شده باید کمتر از 52 کاراکتر داشته باشد."
      );
      newDetails[1].error = true;
    } else {
      newDetails[1].error = false;
    }

    if (!inputValues.melli_code) {
      errorMessages.push("کد ملی وارد نشده است.");
      newDetails[2].error = true;
    } else if (!verifyIranianNationalId(inputValues.melli_code)) {
      errorMessages.push("کد ملی صحیح نمی باشد.");
      newDetails[2].error = true;
    } else {
      newDetails[2].error = false;
    }

    if (!inputValues.province) {
      errorMessages.push("استان وارد نشده است.");
      newDetails[3].error = true;
    } else {
      newDetails[3].error = false;
    }

    if (!inputValues.birthdate) {
      errorMessages.push("تاریخ تولد وارد نشده است.");
      newDetails[4].error = true;
    } else {
      newDetails[4].error = false;
    }

    if (!inputValues.gender) {
      errorMessages.push("جنسیت انتخاب نشده است.");
      newDetails[5].error = true;
    } else {
      newDetails[5].error = false;
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
    setDetails(newDetails); // به‌روزرسانی دیتیلز با ارور‌ها

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
    requestData.append(
      "gender",
      inputValues.gender === "877" ? "male" : "female"
    );
    requestData.append("_method", "put");

    if (errorMessages.length === 0) {
      setIdentityError(false);
      Request(`kyc`, HTTP_METHOD.POST, requestData, {
        "Content-Type": "multipart/form-data",
      })
        .then((res) => {
          setSubmitted(true);
        })
        .catch((error) => {
          Sentry.captureException(error, {
            tags: {
              section: "identity-verification",
            },
          });
          ToastError(error.response.data.message);
        });
    } else {
      setIdentityError(true);
      Sentry.captureMessage("Identity verification form validation failed", {
        level: "warning",
        extra: {
          errors: errorMessages,
        },
      });
    }
  };
  return (
    <Wrapper identityError={identityError}>
      <Container>
        {errors.length > 0 && (
          <Alert
            onclick={() => setOpenErrorModal(true)}
            buttonText={getFieldTranslationByNames("882")}
            text={getFieldTranslationByNames("882")}
            info={getFieldTranslationByNames("880")}
            type="error"
          />
        )}
        <Title title={getFieldTranslationByNames("869")} />
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
          setIsVideoUploaded={setIsVideoUploaded}
        />
        <Button
          large
          label={getFieldTranslationByNames("877")}
          onclick={sendHandler}
          disabled={isVideoUploaded ? false : "pending"}
        />
      </Container>
      {openErrorModal && (
        <ErrorModal setOpenErrorModal={setOpenErrorModal} errors={errors} />
      )}
    </Wrapper>
  );
};

export default IdentityInputs;
