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
  useEffect(() => {
    if (localStorage.getItem("IpAccess")) {
      return navigation("/metaverse/access-ip"); // Navigate to a different location
    }
  }, []);
  const [searchParams] = useSearchParams();
  const [emailVerification, setEmailVerification] = useState(false);
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    referral: searchParams.get("referral"),
  });

  const { Request, HTTP_METHOD } = useRequest();

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
    <Modal title="ثبت نام">
      {!emailVerification ? (
        <Form onSubmit={onSubmitHandler}>
          <Input
            name="name"
            type="text"
            className="mt-5"
            placeholder="نام کاربری میتوان نام شرکت و یا برند باشد"
            value={formData.name}
            dispatch={setFormData}
          />

          <Input
            name="email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            dispatch={setFormData}
          />

          <Input
            name="password"
            type="password"
            placeholder="********"
            value={formData.password}
            dispatch={setFormData}
          />
          <Submit text="ثبت نام" type="secondary" />

          <Link to="/metaverse/login" className="link text-2 mt-3 ">
            ثبت نام کرده ام' وارد شوید'
          </Link>

          <p className="text-information mt-4">
            با کلیک بر روی دکمه ورود به سامانه موافقت میکنید
          </p>

          <a
            href="https://rgb.irpsc.com/overview"
            className="link text-1 mt-2"
            target={"_blank"}
            rel="noreferrer"
          >
            شرایط قرارداد خدمات
          </a>

          <p className="text-information mt-4">
            سئوالی دارید یا میخواهید بیشتر بدانید؟
          </p>

          <a href="https://rgb.irpsc.com/" className="link text-1 mt-2 pb-2">
            .از وبسایت ما دیدن کنید
          </a>
        </Form>
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
