import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Input from "../../Components/Inputs/Input";
import Modal from "../../Components/Modal";
import Form from "../../Components/Form/index.jsx";
import useRequest from "../../Services/Hooks/useRequest";
import Submit from "../../Components/Buttons/Submit.jsx";
import styled from "styled-components";
import GmailIcon from "../../Assets/images/gmail.png";
import { ToastSuccess } from "../../Services/Utility";
import { useEffect } from "react";
import LoginSwitch from "../../Components/Buttons/LoginSwitch";
import CheckBox from "../../Components/Inputs/CheckBox";

const BodyEmail = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3%;
`;
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

export default function Signup() {
  const navigation = useNavigate();
  const [remember, setRemember] = useState(false);
  const [searchParams] = useSearchParams();
  const [emailVerification, setEmailVerification] = useState(false);
  const [token, setToken] = useState("");
  const { Request, HTTP_METHOD } = useRequest();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    referral: searchParams.get("referral"),
  });

  useEffect(() => {
    if (localStorage.getItem("IpAccess")) {
      return navigation("/metaverse/access-ip"); // Navigate to a different location
    }
  }, []);

  const onSubmitHandler = () => {
    Request("register", HTTP_METHOD.POST, formData)
      .then((res) => {
        if (res.status == 201) {
          setEmailVerification(true);
          setToken(res.data.data.token);
        }
      })
      .catch((error) => {
        if (error?.response?.status === 422) {
          setMessage(error?.response?.data?.message);
        }
      });
  };

  const resendEmailHandler = () => {
    Request(
      "email/verification-notification",
      HTTP_METHOD.GET,
      {},
      { Authorization: `Bearer ${token}` }
    ).then((res) => {
      ToastSuccess("ایمیل تایید مجدد ارسال شد ");
    });
  };
  return (
    <Modal type=" registry">
      {!emailVerification ? (
        <>
          <LoginSwitch />
          <Form onSubmit={onSubmitHandler}>
            <Input
              name="name"
              type="text"
              placeholder="نام کاربری"
              value={formData.name}
              dispatch={setFormData}
            />

            <Input
              name="email"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              value={formData.email}
              dispatch={setFormData}
            />

            <Input
              name="password"
              type="password"
              placeholder="رمز ورود"
              value={formData.password}
              dispatch={setFormData}
            />
            <Submit text="ثبت نام" type="secondary" />

            <CheckBox value={remember} onClickHandler={setRemember} />

            <Link to="/metaverse/reset-password" className="link text-1 ">
              فراموشی رمز عبور
            </Link>
            <p className="text-information mt-2 ">
              برای کسب اطلاعات بیشتر و پاسخ به سوالات واز <br />
              <a
                href="https://rgb.irpsc.com/overview"
                target={"_blank"}
                rel="noreferrer"
                className="link text-1 "
              >
                وبسایت{" "}
              </a>
              دیدن نمایید.
            </p>
          </Form>
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
