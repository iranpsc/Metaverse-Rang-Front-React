import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Submit from "../../../Components/Buttons/Submit";
import Form from "../../../Components/Form";
import Input from "../Components/Input";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import Error from "../../../Assets/images/warning.png";
import SelectProvince from "../Components/SelectProvince";
import { fixNumbers } from "../../../Services/Utility";
import { KycContext } from "../Context/KycProvider";
import ErrorMessage from "../../../Components/ErrorMessage";
import { verifyIranianNationalId } from "@persian-tools/persian-tools";
import ErrorVerification from "./ErrorVerification";

const Container = styled.div`
  width: 100%;
  height: 370px;
  overflow-y: scroll;
  display: flex;
  padding: 16px;
  flex-direction: row-reverse;
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 8px;
`;

const IconError = styled.img`
  width: 50px;
  cursor: pointer;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 430px !important;
  overflow-y: scroll;
`;

const ErrorContainer = styled.div`
  width: 95%;
  margin: auto;
  background-color: #df2e38;
  border-radius: 32px;
`;

const errorHandler = (errors, fieldName) => {
  try {
    return errors?.filter((error) => error?.name === fieldName)[0]?.message;
  } catch {}
};

export default function PersonalVerification({ setDefaultTab }) {
  const [kyc, setKyc] = useContext(KycContext);
  const [VerificationErrors, setVerificationErrors] = useState([]);
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    father_name: "",
    melli_code: "",
    province: "",
    city: "",
    postal_code: "",
    number: "",
    address: "",
    birthdate: "",
    site: "",
  });

  useEffect(() => {
    if (typeof kyc?.errors === "object") {
      setVerificationErrors(kyc?.errors);
    }
    setFormData({
      fname: kyc?.fname === undefined ? "" : kyc?.fname,
      lname: kyc?.lname === undefined ? "" : kyc?.lname,
      father_name: kyc?.father_name === undefined ? "" : kyc?.father_name,
      melli_code: kyc?.melli_code === undefined ? "" : kyc?.melli_code,
      province: kyc?.province === undefined ? "" : kyc?.province,
      city: kyc?.city === undefined ? "" : kyc?.city,
      postal_code: kyc?.postal_code === undefined ? "" : kyc?.postal_code,
      number: kyc?.number === undefined ? "" : kyc?.number,
      address: kyc?.address === undefined ? "" : kyc?.address,
      birthdate: kyc?.birthdate === undefined ? "" : kyc?.birthdate,
      site: kyc?.site === undefined ? "" : kyc?.site,
    });
  }, [kyc, VerificationErrors]);
  const onSubmit = () => {
    if (!formData?.fname) {
      return setErrors(["نام وارد نشده است."]);
    }
    if (formData?.fname?.length > 32) {
      return setErrors(["نام وارد شده باید کمتر از 32 کاراکتر داشته باشد."]);
    }
    if (formData?.fname?.length < 3) {
      return setErrors(["نام وارد شده باید بیشتر از 3 کاراکتر داشته باشد."]);
    }
    if (!formData?.lname) {
      return setErrors(["نام خانوادگی وارد نشده است."]);
    }
    if (formData?.lname?.length > 52) {
      return setErrors([
        "نام خانوادگی وارد شده باید کمتر از 52 کاراکتر داشته باشد.",
      ]);
    }
    if (formData?.lname?.length < 3) {
      return setErrors([
        "نام خانوادگی وارد شده باید بیشتر از 3 کاراکتر داشته باشد.",
      ]);
    }
    if (!formData?.father_name) {
      return setErrors(["نام پدر وارد نشده است."]);
    }
    if (formData?.father_name?.length > 32) {
      return setErrors([
        "نام پدر وارد شده باید کمتر از 32 کاراکتر داشته باشد.",
      ]);
    }
    if (formData?.father_name?.length < 3) {
      return setErrors([
        "نام پدر وارد شده باید بیشتر از 3 کاراکتر داشته باشد.",
      ]);
    }
    if (!verifyIranianNationalId(formData?.melli_code)) {
      return setErrors(["کد ملی صحیح نمی باشد."]);
    }
    if (formData?.province === "none" || formData?.province === "") {
      return setErrors(["استان وارد نشده است"]);
    }
    if (formData?.city?.length < 2) {
      return setErrors([
        "نام شهر وارد شده باید بیشتر از 2 کاراکتر داشته باشد.",
      ]);
    }
    if (formData?.address?.length > 200) {
      return setErrors(["آدرس باید کمتر از 200 کاراکتر داشته باشد."]);
    }
    if (formData?.address?.length < 10) {
      return setErrors(["آدرس باید بیشتر از 10 کاراکتر داشته باشد."]);
    }
    if (formData?.number?.length > 4) {
      return setErrors(["پلاک باید کمتر از 4 رقم باشد."]);
    }
    if (!formData?.number) {
      return setErrors(["پلاک وارد نشده است."]);
    }
    if (formData?.postal_code?.length !== 10) {
      return setErrors(["کد پستی وارد شده نا معتبر است."]);
    }
    if (!formData?.birthdate) {
      return setErrors(["تاریخ تولد وارد نشده است."]);
    }
    setErrors([]);
    setKyc({ ...kyc, ...formData });
    setDefaultTab(1);
  };

  return (
    <MainContainer>
      <ErrorContainer>
        <ErrorMessage
          maxList={1}
          errors={errors}
          style={{ padding: 8, color: "white" }}
        />
      </ErrorContainer>

      <Form onSubmit={onSubmit}>
        <Container>
          <InputContainer>
            <Input
              onChange={setFormData}
              name="fname"
              text=": نام"
              value={formData?.fname}
              error={errorHandler(VerificationErrors, "fname")}
              disabled={parseInt(kyc?.status) === 1}
            />

            <Input
              onChange={setFormData}
              numberOnly={true}
              name="melli_code"
              text=": کد ملی"
              value={formData?.melli_code}
              error={errorHandler(VerificationErrors, "melli_code")}
              disabled={parseInt(kyc?.status) === 1}
            />

            <Input
              onChange={setFormData}
              name="address"
              text=": خیابان"
              value={formData?.address}
              error={errorHandler(VerificationErrors, "address")}
              disabled={parseInt(kyc?.status) === 1}
            />

            <Input
              onChange={setFormData}
              ignoreEn={true}
              name="site"
              text=": وبسایت"
              value={formData?.site}
              error={errorHandler(VerificationErrors, "site")}
              disabled={parseInt(kyc?.status) === 1}
            />
          </InputContainer>

          <InputContainer>
            <Input
              onChange={setFormData}
              name="lname"
              text=": نام خانوادگی"
              value={formData?.lname}
              error={errorHandler(VerificationErrors, "lname")}
              disabled={parseInt(kyc?.status) === 1}
            />

            <SelectProvince
              onChange={setFormData}
              name="province"
              value={formData?.province}
              error={errorHandler(VerificationErrors, "province")}
              disabled={parseInt(kyc?.status) === 1}
            />

            <Input
              onChange={setFormData}
              numberOnly={true}
              name="number"
              text=": پلاک"
              value={formData?.number}
              error={errorHandler(VerificationErrors, "number")}
              disabled={parseInt(kyc?.status) === 1}
            />

            <DatePicker
              style={{ width: "100%" }}
              calendar={persian}
              locale={persian_fa}
              inputClass={`datePicker ${
                errorHandler(VerificationErrors, "birthdate") && "invalid-input"
              }`}
              placeholder="1402/01/01"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  birthdate: fixNumbers(e.format("YYYY/MM/DD")),
                })
              }
              disabled={parseInt(kyc?.status) === 1}
              value={formData.birthdate}
            />
          </InputContainer>

          <InputContainer>
            <Input
              onChange={setFormData}
              name="father_name"
              text=": نام پدر"
              value={formData?.father_name}
              disabled={parseInt(kyc?.status) === 1}
              error={errorHandler(VerificationErrors, "father_name")}
            />
            <Input
              onChange={setFormData}
              name="city"
              text=": شهر"
              value={formData?.city}
              error={errorHandler(VerificationErrors, "city")}
              disabled={parseInt(kyc?.status) === 1}
            />
            <Input
              onChange={setFormData}
              numberOnly={true}
              name="postal_code"
              text=": کد پستی"
              value={formData?.postal_code}
              error={errorHandler(VerificationErrors, "postal_code")}
              disabled={parseInt(kyc?.status) === 1}
            />

            <IconError
              src={Error}
              onClick={() => setShowModal((showModal) => !showModal)}
            />
            {showModal && (
              <ErrorVerification
                errors={VerificationErrors}
                setShowModal={setShowModal}
              />
            )}
          </InputContainer>
        </Container>
        <Submit
          type="primary"
          text="بعدی"
          options={{ style: { width: "95%" } }}
        />
      </Form>
    </MainContainer>
  );
}
