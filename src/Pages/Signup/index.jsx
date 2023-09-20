import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import GmailIcon from "../../Assets/images/gmail.png";
import Input from "../../Components/Inputs/Input";
import Modal from "../../Components/Modal";
import Form from "../../Components/Form/index.jsx";
import useRequest from "../../Services/Hooks/useRequest";
import Submit from "../../Components/Buttons/Submit.jsx";
import CheckBox from "../../Components/Inputs/CheckBox";
import LoginSwitch from "./LoginSwitch";
import { useRecaptcha } from "../../Services/Hooks/useRecapcha";
import {
  ToastSuccess,
  getFieldTranslationByNames,
} from "../../Services/Utility";

const BoxEmailNavigate = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88%;
  background-color: #e9e9e9;
  border-radius: 5px;
  gap: 5px;
  margin-top: 1rem;
`;

function Signup() {
  const navigation = useNavigate();
  const theme = useTheme();
  const { recaptchaValue, renderRecaptcha } = useRecaptcha();
  const { Request, HTTP_METHOD } = useRequest();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [verificationInfo, setVerificationInfo] = useState({
    emailVerification: false,
    token: "",
  });
  const [remember, setRemember] = useState(false);
  const [isRecaptcha, setIsRecaptcha] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("IpAccess")) {
      navigation("/metaverse/access-ip"); // Navigate to a different location
    }
  }, []);

  const isPasswordValid = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]/;
    const persianRegex = /[آ-ی]/;
    return regex.test(password) && !persianRegex.test(password);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const onSubmitHandler = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !isEmailValid(formData.email) ||
      !isPasswordValid(formData.password) ||
      formData.name.includes("hm_")
    ) {
      return;
    }

    if (!recaptchaValue) {
      setIsRecaptcha(true);
      return;
    }
    Request("register", HTTP_METHOD.POST, formData)
      .then((res) => {
        if (res.status === 201) {
          navigation("/metaverse/verification-email");
          setVerificationInfo({
            token: res.data.data.token,
          });
        }
      })
      .catch((error) => {
        if (error?.response?.status === 422) {
        }
      });
  };

  const resendEmailHandler = () => {
    Request(
      "email/verification-notification",
      HTTP_METHOD.GET,
      {},
      { Authorization: `Bearer ${verificationInfo.token}` }
    ).then((res) => {
      ToastSuccess("ایمیل تایید مجدد ارسال شد");
    });
  };
  console.log(formData.password !== "" && !isPasswordValid(formData.password));
  return (
    <Modal type="modal-section-xs">
      <LoginSwitch />
      <Form onSubmit={onSubmitHandler}>
        <Input
          name="name"
          type="text"
          placeholder={getFieldTranslationByNames("register", "username")}
          value={formData.name}
          dispatch={setFormData}
          validation={formData.name !== "" && formData.name.includes("hm_")}
          Error={getFieldTranslationByNames(
            "register",
            "the user name is limited to hm-"
          )}
        />
        <Input
          name="email"
          type="email"
          placeholder={getFieldTranslationByNames(
            "register",
            "enter your email"
          )}
          value={formData.email}
          dispatch={setFormData}
          validation={formData.email !== "" && !isEmailValid(formData.email)}
          Error={getFieldTranslationByNames(
            "register",
            "your email is not valid"
          )}
        />
        <Input
          name="password"
          type="password"
          placeholder={getFieldTranslationByNames("register", "password")}
          value={formData.password}
          dispatch={setFormData}
          validation={
            formData.password !== "" && !isPasswordValid(formData.password)
          }
          Error={getFieldTranslationByNames(
            "register",
            "the password must contain"
          )}
        />
        <Submit text="ثبت نام" type="secondary" />
        <CheckBox
          value={remember}
          onClickHandler={setRemember}
          text={getFieldTranslationByNames("login", "remember me")}
        />
        <Link to="/metaverse/reset-password" className="link text-1">
          {getFieldTranslationByNames("login", "forget password")}
        </Link>
      </Form>
      <p
        className="text-information mt-1"
        style={{ color: `${theme.checkBoxLabel} ` }}
      >
        {getFieldTranslationByNames(
          "login",
          "If you click on the login button"
        )}
        <br />
        <a
          href="https://rgb.irpsc.com/overview"
          target={"_blank"}
          rel="noreferrer"
          className="link text-1 "
        >
          {getFieldTranslationByNames("login", "terms of service contract")}
        </a>{" "}
        {getFieldTranslationByNames("login", "you agree")}
      </p>
      {isRecaptcha && !recaptchaValue ? renderRecaptcha() : null}
    </Modal>
  );
}

export default Signup;
