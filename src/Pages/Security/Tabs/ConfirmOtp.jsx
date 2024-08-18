import React from "react";
import { useState } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import Submit from "../../../Components/Buttons/Submit";
import Form from "../../../Components/Form";
import OtpInput from "../../../Components/Inputs/OtpInput";
import useRequest from "../../../Services/Hooks/useRequest";
import { setItem } from "../../../Services/Utility/LocalStorage";

const renderer = ({ hours, minutes, seconds, completed }) => {
  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
};
export default function ConfirmOtp({ paginate }) {
  const [otp, setOtp] = useState({
    otp_1: "",
    otp_2: "",
    otp_3: "",
    otp_4: "",
    otp_5: "",
    otp_6: "",
  });

  const [errors, setErrors] = useState(false);
  const [resend, setResend] = useState(false);
  const { Request, HTTP_METHOD } = useRequest();
  const navigate = useNavigate();

  const onConfirmHandler = () => {
    const code = Object.keys(otp)
      .map((item) => otp[item])
      .join("");

    if (code.length === 6) {
      setErrors(false);

      Request("account/security/verify", HTTP_METHOD.POST, { code })
        .then(() => {
          setItem(
            "account_security",
            Date.now() + paginate.options.data.time * 60 * 1000
          );
          navigate("/metaverse");
        })
        .catch(() => {
          setErrors(true);
        });
    } else {
      setErrors(true);
    }
  };

  const onResendCode = () => {
    Request("account/security", HTTP_METHOD.POST, {
      time: paginate.options.data.time,
    }).then(() => {
      setResend(false);
    });
  };
  return (
    <Form onSubmit={onConfirmHandler}>
      <div className="account-security-section">
        <OtpInput
          name="otp_1"
          maxLength={1}
          type="number"
          className={`d-number-arrows w-50-px account-security-code-input ${
            errors && "invalid-input"
          }`}
          dispatch={setOtp}
          value={otp.otp_1}
          nextSibling={true}
        />

        <OtpInput
          name="otp_2"
          maxLength={1}
          type="number"
          className={`d-number-arrows w-50-px account-security-code-input ${
            errors && "invalid-input"
          }`}
          dispatch={setOtp}
          value={otp.otp_2}
          nextSibling={true}
        />

        <OtpInput
          name="otp_3"
          maxLength={1}
          type="number"
          className={`d-number-arrows w-50-px account-security-code-input ${
            errors && "invalid-input"
          }`}
          dispatch={setOtp}
          value={otp.otp_3}
          nextSibling={true}
        />

        <OtpInput
          name="otp_4"
          maxLength={1}
          type="number"
          className={`d-number-arrows w-50-px account-security-code-input ${
            errors && "invalid-input"
          }`}
          dispatch={setOtp}
          value={otp.otp_4}
          nextSibling={true}
        />

        <OtpInput
          name="otp_5"
          maxLength={1}
          type="number"
          className={`d-number-arrows w-50-px account-security-code-input ${
            errors && "invalid-input"
          }`}
          dispatch={setOtp}
          value={otp.otp_5}
          nextSibling={true}
        />

        <OtpInput
          name="otp_6"
          maxLength={1}
          type="number"
          className={`d-number-arrows w-50-px account-security-code-input ${
            errors && "invalid-input"
          }`}
          dispatch={setOtp}
          value={otp.otp_6}
        />
      </div>
      {!resend ? (
        <p className="text-information w-75 mt-2 mb-5 text-center text-1 rtl">
          اگر کد تایید را دریافت نکرده اید میتوانید
          <Countdown
            date={Date.now() + 120000}
            onComplete={() => setResend(true)}
            renderer={renderer}
          />
          دقیقه دیگر مجددا کد تایید را ارسال کنید.
        </p>
      ) : (
        <p className="link cursor-pointer mb-5" onClick={() => onResendCode()}>
          ارسال مجدد
        </p>
      )}

      <Submit text="تایید" type="primary" options={{ className: "w-100" }} />
    </Form>
  );
}
