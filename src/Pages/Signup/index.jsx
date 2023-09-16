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
import { ToastSuccess } from "../../Services/Utility";

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
          setVerificationInfo({
            emailVerification: true,
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

  return (
    <Modal type="modal-section-xs">
      {!verificationInfo.emailVerification ? (
        <>
          <LoginSwitch />
          <Form onSubmit={onSubmitHandler}>
            <Input
              name="name"
              type="text"
              placeholder="نام کاربری"
              value={formData.name}
              dispatch={setFormData}
              validation={formData.name.includes("hm_")}
              Error={"نام کاربری دارای محدودیت _hm میباشد."}
            />
            <Input
              name="email"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              value={formData.email}
              dispatch={setFormData}
              validation={!isEmailValid(formData.email)}
              Error={"ایمیل را درست وارد کنید"}
            />
            <Input
              name="password"
              type="password"
              placeholder="رمز ورود"
              value={formData.password}
              dispatch={setFormData}
              validation={!isPasswordValid(formData.password)}
              Error={
                "گذرواژه می‌بایست شامل اعداد، سیمبل و حروف کوچک و بزرگ انگلیسی باشد."
              }
            />
            <Submit text="ثبت نام" type="secondary" />
            <CheckBox value={remember} onClickHandler={setRemember} />
            <Link to="/metaverse/reset-password" className="link text-1">
              فراموشی رمز عبور
            </Link>
          </Form>
          <p
            className="text-information mt-2"
            style={{ color: `${theme.checkBoxLabel}` }}
          >
            برای کسب اطلاعات بیشتر و پاسخ به سوالات واز <br />
            <a
              href="https://rgb.irpsc.com/overview"
              target="_blank"
              rel="noreferrer"
              className="link text-1"
            >
              وبسایت
            </a>
            دیدن نمایید.
          </p>
          {isRecaptcha && !recaptchaValue ? renderRecaptcha() : null}
        </>
      ) : (
        <>
          <h2 className="mt-5">ایمیل خود را تایید کنید</h2>
          <span className="mt-2">ما یک ایمیل به </span>
          <span className="mt-2">{formData.email}</span>
          <span className="mt-4">برای شروع روی لینک داخل ایمیل کلیک کنید </span>
          <BoxEmailNavigate>
            <img src={GmailIcon} alt="gmail" style={{ width: "40px" }} />
            <a
              href="https://mail.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              باز کردن جیمیل
            </a>
          </BoxEmailNavigate>
          <span
            className="mt-3"
            onClick={resendEmailHandler}
            style={{ color: "#0a58ca" }}
          >
            ایمیل را دوباره ارسال کن
          </span>
          <p className="text-information mt-5">
            سئوالی دارید یا میخواهید بیشتر بدانید؟
          </p>
          <a href="https://rgb.irpsc.com/" className="link text-1 mt-2 pb-5">
            .از وبسایت ما دیدن کنید
          </a>
        </>
      )}
    </Modal>
  );
}

export default Signup;
